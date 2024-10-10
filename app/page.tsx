import NextLink from 'next/link';
import { IM_Fell_French_Canon_SC } from 'next/font/google';

const inter = IM_Fell_French_Canon_SC({ weight: '400', subsets: ['latin'] });
export default function Home() {
  return (
    <>
      {/* タイトル */}
      <h1 className="text-center text-3xl font-serif font-bold mb-8">Menu</h1>

      {/* Appetizer */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          Appetizer
        </h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/carpaccio">サーモンのカルパッチョ</NextLink>
        </p>
        <p className="text-center text-sm mt-2">
          <NextLink href="/harumaki">海老と彩り野菜のフレッシュロール</NextLink>
        </p>
      </div>

      {/* Soup */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">Soup</h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/soup">玉ねぎとベーコンのコンソメスープ</NextLink>
        </p>
      </div>

      {/* MainDish */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          MainDish
        </h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/mainDish">ポークソテークリームソース添え</NextLink>
        </p>
      </div>

      {/* Desserts */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          Desserts
        </h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/desserts">特製ティラミス</NextLink>
        </p>
      </div>

      {/* Drinks */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">Drinks</h2>
        <p className={`text-center text-sm mt-2 ${inter.className}`}>
          <NextLink href="/drinks">Nojiri origin コーヒー</NextLink>
        </p>
      </div>
    </>
  );
}
