'use client';

import { motion } from 'framer-motion';
import AccordionGallery from './AccordionGallery';

const items = [
  { image: 'https://picsum.photos/id/1015/900/1200', label: 'Canyon' },
  { image: 'https://picsum.photos/id/1018/900/1200', label: 'Ridgeline' },
  { image: 'https://picsum.photos/id/1039/900/1200', label: 'Falls' },
  { image: 'https://picsum.photos/id/1043/900/1200', label: 'Harbour' },
  { image: 'https://picsum.photos/id/1044/900/1200', label: 'Skyline' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-white dark:bg-[#121212] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <p className="text-sm font-medium text-[#0071E3] mb-2">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-white">
            Moments &amp; Milestones
          </h2>
        </motion.div>

        <AccordionGallery
          items={items}
          defaultIndex={2}
          expandRatio={0.52}
          trigger="hover"
          accentColor="#0071E3"
          overlayColor="#060010"
          textColor="#ffffff"
          grayscale
          showLabels
          duration={0.6}
          ease="power3.out"
          parallax={0.5}
          tilt={8}
          stagger={0.06}
          height={460}
          gap={10}
          radius={16}
          orientation="horizontal"
        />
      </div>
    </section>
  );
}
