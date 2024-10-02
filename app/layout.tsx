import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const noto = Noto_Sans_JP({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: "birthday's course menu",
  description: 'course menu'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>{children}</body>
    </html>
  );
}
