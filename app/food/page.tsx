'use client';
import { Suspense } from 'react';
import { FoodCard } from '../_components/FoodCard';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const foodPath = searchParams.get('genre') || '';
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FoodCard path={foodPath} />
      </Suspense>
    </>
  );
}
