import React from "react";
import { useSelector } from "react-redux";
import { Cart } from "../components/cart/Cart";
import { CartEmpty } from "../components/CartEmpty";

const CartOrEmpty = () => {
  const { items } = useSelector((state) => state.cartSlice);
  return <div>{items.length > 0 ? <Cart /> : <CartEmpty />}</div>;
};

export default CartOrEmpty;
