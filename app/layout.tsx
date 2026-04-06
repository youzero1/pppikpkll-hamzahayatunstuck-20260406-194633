import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Horizon — Build the Future',
  description: 'A modern SaaS landing page built with Next.js 14.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
