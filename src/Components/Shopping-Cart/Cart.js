import React from 'react';
import { useSelector } from 'react-redux';
import AllCarts from './AllCarts';

export default function Cart() {
  const productArray = useSelector(state => state.ShoppingCartSlices.dummyArray);

  return (
    <div>
      {productArray.map((item) => (
        <AllCarts product={item} key={item.id}  />
      ))}
    </div>
  );
}
