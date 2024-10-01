import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';

const inter = Noto_Sans_JP({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: "Takeshi Nojiri's Portfolio",
  description: 'my Portfolio'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
