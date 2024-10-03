'use client';
import { usePathname } from 'next/navigation';
import { cache } from 'react';
import { FoodCard } from '../_components/FoodCard';

export type FoodJSON = {
  [key: string]: {
    path: string;
    name: string;
    price: number;
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

export default cache(async function Page() {
  // URLを取得
  // 頭のスラッシュを削除
  const foodPath = usePathname();
  const json = await getData();
  const food: FoodJSON[string] = json[foodPath.replace('/', '')];
  console.log(food);
  return <FoodCard {...food} />;
});
