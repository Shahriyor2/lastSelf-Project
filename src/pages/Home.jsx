import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "../components/pizzaBlock/Skeleton";
import axios from "axios";
import { Categories } from "../components/Categories";
import { PizzaBlock } from "../components/pizzaBlock/PizzaBlock";
import { Pagination } from "../components/pagination";
import { setIsLoading } from "../redux/reducers/filterSlice";
import { Sort } from "../components/Sort";

export const Home = () => {
  const [items, setItems] = useState([]);

  const { categoryId, sort, loading, countPage, searchValue } = useSelector(
    (state) => state.filterSlice
  );

  const dispatch = useDispatch();

  const fetchPizzas = async () => {
    dispatch(setIsLoading(true));
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sort.sortProperty.replace("-", "");
    const sortOrder = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `search=${searchValue}` : "";

    try {
      const res = await axios.get(
        `https://6509820cf6553137159b94c2.mockapi.io/items?page=${countPage}&limit=4&${category}&sortBy=${sortBy}&order=${sortOrder}&${search}`
      );
      setItems(res.data);
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log("error", error);
      dispatch(setIsLoading(false)); 
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, [categoryId, sort.sortProperty, countPage, searchValue]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {loading
            ? [...new Array(10)].map((_, i) => {
                return <Skeleton key={i} />;
              })
            : items
                .filter((object) =>
                  object.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((object, i) => {
                  return <PizzaBlock key={i} {...object} />;
                })}
        </div>
        <Pagination />
      </div>
    </div>
  );
};
