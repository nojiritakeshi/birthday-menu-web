'use client';
import React, { cache } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Klee_One } from 'next/font/google';
import config from '../../next.config.mjs';
import { useSearchParams } from 'next/navigation';

const BASE_PATH = config.basePath ? config.basePath : '';

const kleeOne = Klee_One({ weight: '400', subsets: ['latin'] });

export type FoodJSON = {
  [key: string]: {
    path: string;
    name: string;
    subName: string;
    genre: string;
    description: string;
  };
};

const getData = async (): Promise<FoodJSON> => {
  const data = await fetch('/food.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }).then(function (response) {
    return response.json() as Promise<FoodJSON>;
  });
  return data;
};

// foodを引数にとる
export const FoodCard: React.FC = cache(async () => {
  // URLを取得
  // 頭のスラッシュを削除
  const searchParams = useSearchParams();
  const foodPath = searchParams.get('genre') || '';
  const json = await getData();
  const food: FoodJSON[string] = json[foodPath];
  return (
    <div className={`rounded-sm max-w-lg mx-auto ${kleeOne.className}`}>
      {/* 戻るボタン */}
      <NextLink href="/" className="font-semibold block pt-2 pb-2">
        &lt; 戻る
      </NextLink>
      <div className="mt-2 mb-2">
        <span className="bg-black text-white text-sm p-1 rounded-md">
          {food.genre}
        </span>
      </div>
      {/* サブタイトルみたいな文言 ~を添えてみたいな */}
      <p className="text-sm">{food.subName}</p>
      {/* タイトル */}
      <h2 className="text-2xl font-bold">{food.name}</h2>
      {/* メイン画像 */}
      <div className="mt-4 relative w-full h-48">
        <Image
          src={`${BASE_PATH}/${food.path}.jpg`} // ここに /public フォルダ内の画像ファイル名を記載
          alt="courseの画像"
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>

      {/* 説明文 */}
      <p className="text-sm mt-4">{food.description}</p>
    </div>
  );
});
