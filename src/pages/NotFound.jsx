import React from "react";

export const NotFound = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Произошла ошибка <icon>😕</icon>
          </h2>
          <p>К сожалению не удалось получить пиццы. <br /> Попробуйте повторить попытку позже.</p>
        </div>
      </div>
    </div>
  );
};
