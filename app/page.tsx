import NextLink from 'next/link';
import { IM_Fell_French_Canon_SC } from 'next/font/google';

const inter = IM_Fell_French_Canon_SC({ weight: '400', subsets: ['latin'] });
export default function Home() {
  return (
    <div className={inter.className}>
      {/* タイトル */}
      <h1 className="text-center text-3xl font-serif font-bold mb-8">Menu</h1>

      {/* Appetizer */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          Appetizer
        </h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/food?genre=carpaccio">
            サーモンのカルパッチョ
          </NextLink>
        </p>
        <p className="text-center text-sm mt-5">
          <NextLink href="/food?genre=harumaki">
            海老と彩り野菜のフレッシュロール
          </NextLink>
        </p>
      </div>

      {/* Soup */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">Soup</h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/food?genre=soup">
            玉ねぎとベーコンのコンソメスープ
          </NextLink>
        </p>
      </div>

      {/* Sushi */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          poisson
        </h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/food?genre=poisson">
            日替わり 彩り寿司セレクション
          </NextLink>
        </p>
      </div>

      {/* MainDish */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          MainDish
        </h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/food?genre=mainDish">高級和牛のステーキ</NextLink>
        </p>
      </div>

      {/* Desserts */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">
          Desserts
        </h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/food?genre=desserts">特製ティラミス</NextLink>
        </p>
      </div>

      {/* Drinks */}
      <div className="mb-6">
        <h2 className="text-center text-lg font-serif font-semibold">Drinks</h2>
        <p className="text-center text-sm mt-2">
          <NextLink href="/food?genre=drinks">Nojiri origin コーヒー</NextLink>
        </p>
      </div>
    </div>
  );
}
