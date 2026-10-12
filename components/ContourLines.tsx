// @ts-nocheck
/* eslint-disable */
'use client';

import { useEffect, useRef } from 'react';

type ContourLinesProps = {
  color?: string;
  opacity?: number;
  levels?: number;
  cell?: number;
  scale?: number;
  speed?: number;
  pointer?: boolean;
  className?: string;
};

function hash(ix, iy) {
  let h = Math.imul(ix, 374761393) ^ Math.imul(iy, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

function noise2(x, y) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  const a = hash(ix, iy);
  const b = hash(ix + 1, iy);
  const c = hash(ix, iy + 1);
  const d = hash(ix + 1, iy + 1);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

// edge ids: 0 top, 1 right, 2 bottom, 3 left
const SEGMENTS = [
  [],
  [[3, 2]],
  [[2, 1]],
  [[3, 1]],
  [[0, 1]],
  [[3, 0], [2, 1]],
  [[0, 2]],
  [[3, 0]],
  [[3, 0]],
  [[0, 2]],
  [[3, 2], [0, 1]],
  [[0, 1]],
  [[3, 1]],
  [[2, 1]],
  [[3, 2]],
  []
];

export default function ContourLines({
  color = '#1D1D1F',
  opacity = 0.16,
  levels = 11,
  cell = 18,
  scale = 0.0016,
  speed = 1,
  pointer = true,
  className = ''
}: ContourLinesProps) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const propsRef = useRef({});

  propsRef.current = { color, opacity, levels, cell, scale, speed, pointer };

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;
    if (!root || !canvas || !ctx) return undefined;

    const reduce = window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

    let w = 1;
    let h = 1;
    let dpr = 1;
    let raf = 0;
    let alive = true;
    let visible = true;
    let lastDraw = 0;
    let values = new Float32Array(1);
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999 };
    const start = performance.now();

    const resize = () => {
      w = Math.max(1, root.clientWidth);
      h = Math.max(1, root.clientHeight);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
    };

    const onMove = e => {
      const rect = root.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      if (mouse.x < -9000) {
        mouse.x = mouse.tx;
        mouse.y = mouse.ty;
      }
    };

    const render = now => {
      const p = propsRef.current;
      const t = reduce ? 0 : ((now - start) / 1000) * p.speed;
      const step = w < 640 ? p.cell * 1.5 : p.cell;
      const cols = Math.ceil(w / step) + 1;
      const rows = Math.ceil(h / step) + 1;
      if (values.length < cols * rows) values = new Float32Array(cols * rows);

      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;
      const sigma2 = 2 * 170 * 170;
      const usePointer = p.pointer && mouse.x > -9000;

      const dx1 = t * 14;
      const dy1 = t * 9;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = i * step;
          const y = j * step;
          let n =
            noise2(x * p.scale + dx1 * p.scale, y * p.scale + dy1 * p.scale) * 0.65 +
            noise2(x * p.scale * 2.1 - dx1 * p.scale * 0.7 + 31, y * p.scale * 2.1 + dy1 * p.scale * 0.5 + 17) * 0.35;
          if (usePointer) {
            const ddx = x - mouse.x;
            const ddy = y - mouse.y;
            n += 0.3 * Math.exp(-(ddx * ddx + ddy * ddy) / sigma2);
          }
          values[j * cols + i] = n;
        }
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = p.color;
      ctx.globalAlpha = p.opacity;

      const path = new Path2D();
      for (let k = 0; k < p.levels; k++) {
        const lv = 0.18 + (k / Math.max(1, p.levels - 1)) * 0.64;
        for (let j = 0; j < rows - 1; j++) {
          for (let i = 0; i < cols - 1; i++) {
            const tl = values[j * cols + i];
            const tr = values[j * cols + i + 1];
            const br = values[(j + 1) * cols + i + 1];
            const bl = values[(j + 1) * cols + i];
            const idx = (tl > lv ? 8 : 0) | (tr > lv ? 4 : 0) | (br > lv ? 2 : 0) | (bl > lv ? 1 : 0);
            if (idx === 0 || idx === 15) continue;
            const x0 = i * step;
            const y0 = j * step;
            const segs = SEGMENTS[idx];
            for (let s = 0; s < segs.length; s++) {
              const pts = [];
              for (let q = 0; q < 2; q++) {
                const e = segs[s][q];
                let px;
                let py;
                if (e === 0) {
                  px = x0 + ((lv - tl) / (tr - tl)) * step;
                  py = y0;
                } else if (e === 1) {
                  px = x0 + step;
                  py = y0 + ((lv - tr) / (br - tr)) * step;
                } else if (e === 2) {
                  px = x0 + ((lv - bl) / (br - bl)) * step;
                  py = y0 + step;
                } else {
                  px = x0;
                  py = y0 + ((lv - tl) / (bl - tl)) * step;
                }
                pts.push(px, py);
              }
              path.moveTo(pts[0], pts[1]);
              path.lineTo(pts[2], pts[3]);
            }
          }
        }
      }
      ctx.stroke(path);
      ctx.globalAlpha = 1;
    };

    const loop = now => {
      raf = 0;
      if (!alive) return;
      if (now - lastDraw > 33) {
        lastDraw = now;
        render(now);
      }
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };

    const wake = () => {
      if (!raf && alive) raf = requestAnimationFrame(loop);
    };

    resize();
    wake();

    window.addEventListener('pointermove', onMove, { passive: true });
    const resizeObserver = new ResizeObserver(() => {
      resize();
      wake();
    });
    resizeObserver.observe(root);
    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) wake();
    });
    intersection.observe(root);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      resizeObserver.disconnect();
      intersection.disconnect();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={'absolute inset-0 pointer-events-none ' + className}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
