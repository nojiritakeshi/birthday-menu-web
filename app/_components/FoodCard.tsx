'use client';
import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { Klee_One } from 'next/font/google';
import { FoodJSON } from '../food/page';
import config from '../../next.config.mjs';

const BASE_PATH = config.basePath ? config.basePath : '';

const kleeOne = Klee_One({ weight: '400', subsets: ['latin'] });

// foodを引数にとる
export const FoodCard: React.FC<FoodJSON[string]> = ({
  path,
  name,
  subName,
  genre,
  description
}) => {
  return (
    <div className={`rounded-sm max-w-lg mx-auto ${kleeOne.className}`}>
      {/* 戻るボタン */}
      <NextLink href="/" className="font-semibold block pt-2 pb-2">
        &lt; 戻る
      </NextLink>
      <div className="mt-2 mb-2">
        <span className="bg-black text-white text-sm p-1 rounded-md">
          {genre}
        </span>
      </div>
      {/* サブタイトルみたいな文言 ~を添えてみたいな */}
      <p className="text-sm">{subName}</p>
      {/* タイトル */}
      <h2 className="text-2xl font-bold">{name}</h2>
      {/* メイン画像 */}
      <div className="mt-4 relative w-full h-48">
        <Image
          src={`${BASE_PATH}/${path}.jpg`} // ここに /public フォルダ内の画像ファイル名を記載
          alt="courseの画像"
          layout="fill"
          objectFit="cover"
          className="rounded-sm"
        />
      </div>

      {/* 説明文 */}
      <p className="text-sm mt-4">{description}</p>
    </div>
  );
};
