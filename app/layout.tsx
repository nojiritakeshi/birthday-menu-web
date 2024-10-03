import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import Image from 'next/image';
import config from '../next.config.mjs';
import './globals.css';

const noto = Noto_Sans_JP({ subsets: ['cyrillic'] });
const BASE_PATH = config.basePath ? config.basePath : '';
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
      <body className={`${noto.className}`}>
        <main className="h-screen w-hull p-6">
          <div
            className="justify-center items-center h-5/6 w-72"
            style={{ margin: '0 auto' }}
          >
            <div className=" border-main transform rotate-3 bg-main">
              <div className="p-10 border border-main transform -rotate-3 relative bg-main">
                {children}
              </div>
            </div>
          </div>
        </main>

        <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
          <Image
            alt="background"
            src={`${BASE_PATH}/black.jpg`}
            layout={`fill`}
            objectFit={`cover`}
          />
        </div>
      </body>
    </html>
  );
}
