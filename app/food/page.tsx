'use client';
import { FoodCard } from '../_components/FoodCard';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const foodPath = searchParams.get('genre') || '';
  return (
    <>
      <FoodCard path={foodPath} />
    </>
  );
}
