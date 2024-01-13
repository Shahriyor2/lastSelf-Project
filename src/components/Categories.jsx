import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../redux/reducers/filterSlice";

export const Categories = () => {
  const liArr = ['Все',"мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
  // const [activeIndex, setActiveIndex] = useState(0);
  const categoryId = useSelector((state) => state.filterSlice.categoryId);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="categories">
        <ul>
          {liArr.map((item, i) => {
            return (
              <li
                onClick={() => dispatch(setCategoryId(i))}
                className={categoryId === i ? "active" : ""}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
