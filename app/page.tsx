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
      </div>

      {/* Soup */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">Soup</h2>
        <p className="text-center text-sm mt-2">
          人参の冷製クリームスープ トリュフ風味
        </p>
      </div>

      {/* MainDish */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          MainDish
        </h2>
        <p className="text-center text-sm mt-2">
          オマール海老と真鯛のロースト 白ワインソース
        </p>
        <p className="text-center text-sm">
          牛フィレ肉とフォアグラのポアレ ロッシーニ風
        </p>
      </div>

      {/* Desserts */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          Desserts
        </h2>
        <p className="text-center text-sm mt-2">
          ホワイトチョコムース フランボワーズソース添え
        </p>
      </div>

      {/* Drinks */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">Drinks</h2>
        <p className={`text-center text-sm mt-2 ${inter.className}`}>
          Nojiri origin コーヒー
        </p>
      </div>
    </>
  );
}
