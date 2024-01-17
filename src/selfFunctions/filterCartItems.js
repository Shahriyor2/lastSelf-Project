export const filterCartItems = (items, action) => {
  return items.filter((obj) => obj.id !== action);
};
