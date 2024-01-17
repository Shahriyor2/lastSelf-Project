import { filterCartItems } from "./filterCartItems";
import { getTotalPrice } from "./getTotalPriceForLS";

export const getCartFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = getTotalPrice(items);
  const filter = filterCartItems(items);
  return {
    items,
    totalPrice,
    filter,
  };
};
