import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Laguna Maasai Partnership', description: 'A student-led partnership within Laguna Beach High School Model United Nations.', icons: { icon: [{ url: '/favicon.png', type: 'image/png', sizes: '64x64' }] }, robots: { index: false, follow: false } };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
