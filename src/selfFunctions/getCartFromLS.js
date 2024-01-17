import { getTotalPrice } from "./getTotalPriceForLS";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
