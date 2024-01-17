export const getTotalPrice = (items) => {
  return items.reduce((sum, obj) => sum + obj.price * obj.count, 0);
};
