import React from "react";
import { Link } from "react-router-dom";
import cartImg from "../assets/img/empty-cart.png";

export const CartEmpty = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Корзина пустая <icon>😕</icon>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartImg} alt="Empty cart" />
          <Link to="/" className="button button--black">
            <svg
              style={{ marginRight: "10px" }}
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 13L1 6.93015L6.86175 1"
                stroke="#D3D3D3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>Вернуться назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
