import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://namitjain.dev'),
  title: 'Namit Jain — Computer Engineering Student',
  description:
    'Aspiring Software Engineer & Cybersecurity Enthusiast. Computer Engineering student at Thapar Institute of Engineering & Technology.',
  openGraph: {
    title: 'Namit Jain — Portfolio',
    description: 'Aspiring Software Engineer & Cybersecurity Enthusiast',
    images: [{ url: '/images/WhatsApp_Image_2026-07-20_at_17.15.24.jpeg' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
