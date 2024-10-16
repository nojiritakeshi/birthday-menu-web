import { Suspense } from 'react';
import { FoodCard } from '../_components/FoodCard';

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <FoodCard />
      </Suspense>
    </>
  );
}
