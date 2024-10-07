'use client';
import React from 'react';
import { FoodJSON } from '../[food]/page';
import Image from 'next/image';
import config from '../../next.config.mjs';

const BASE_PATH = config.basePath ? config.basePath : '';

// foodを引数にとる
export const FoodCard: React.FC<FoodJSON[string]> = ({
  path,
  name,
  price,
  description
}) => {
  return (
    <div className="p-4 rounded-sm max-w-lg mx-auto">
      <h2 className="text-sm">{name}</h2>
      <p className="text-sm mt-2">{price}</p>

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
