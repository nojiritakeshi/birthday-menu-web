import Image from 'next/image';
import { IM_Fell_French_Canon_SC } from 'next/font/google';
import config from '../next.config.mjs';

const inter = IM_Fell_French_Canon_SC({ weight: '400', subsets: ['latin'] });

const BASE_PATH = config.basePath ? config.basePath : '';
export default function Home() {
  return (
    <main className=" h-screen w-hull p-6">
      <div
        className="justify-center items-center h-5/6 w-72"
        style={{ margin: '0 auto' }}
      >
        <div className=" border-main transform rotate-3 bg-main">
          <div className="p-10 border border-main transform -rotate-3 relative bg-main">
            {/* タイトル */}
            <h1 className="text-center text-3xl font-serif font-bold mb-8">
              Menu
            </h1>

            {/* Appetizer */}
            <div className="mb-6">
              <h2 className="text-center text-lg font-serif font-semibold">
                Appetizer
              </h2>
              <p className="text-center text-sm mt-2">
                旬の魚の特製カルパッチョ
              </p>
            </div>

            {/* Soup */}
            <div className="mb-6">
              <h2 className="text-center text-lg font-serif font-semibold">
                Soup
              </h2>
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
                牛フィレ肉とフォアグラのポアレ　ロッシーニ風
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
              <h2 className="text-center text-lg font-serif font-semibold">
                Drinks
              </h2>
              <p className={`text-center text-sm mt-2 ${inter.className}`}>
                Nojiri origin コーヒー
              </p>
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-0 z-0 flex justify-center items-center max-w-lg">
        <div className="w-2/3 h-5/6 border-2 border-gray-300 transform rotate-2"></div>
        <div className="w-2/3 h-5/6 border-2 border-gray-300 transform -rotate-1 absolute"></div>
      </div> */}
      </div>
      <div className={`fixed top-0 left-0 w-full h-screen z-[-1]`}>
        <Image
          alt="background"
          src={`${BASE_PATH}/black.jpg`}
          layout={`fill`}
          objectFit={`cover`}
        />
      </div>
    </main>
  );
}
