import React, { useEffect } from "react";
import { CartAsComponent } from "../CartAsComponent";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { clearItems } from "../../redux/reducers/cartSlice";
import { useState } from "react";
import "../../scss/app.scss";

Modal.setAppElement("#root");

export const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPaymentSuccessfull, setIsPaymentSuccessfull] = useState(false);
  const [prevSuccess, setPrevSuccsess] = useState(false);
  const [isNumber, setIsNumber] = useState("");
  const [isFirstName, setIsFirstName] = useState("");
  const [isLastName, setIsLastName] = useState("");
  const [isEmail, setIsEmail] = useState("");

  const onClickRemoveAllItems = () => {
    setIsModalOpen(true);
  };

  const handleConfirmClear = () => {
    dispatch(clearItems());
    setIsModalOpen(false);
  };

  const handleCancelClear = () => {
    setIsModalOpen(false);
  };

  // отправка
  const handlePayment = () => {
    setIsPaymentSuccessfull(false);
    setPrevSuccsess(true);
  };

  const toClose = () => {
    setIsPaymentSuccessfull(false);
  };

  const closeModal = () => {
    setIsPaymentSuccessfull(false);
    dispatch(clearItems());
  };

  // изменение после отправки
  const handleSent = () => {
    setIsPaymentSuccessfull(true);
    setPrevSuccsess(false);
    setTimeout(() => {
      dispatch(clearItems());
      setIsPaymentSuccessfull(false);
    }, 10000);
  };

  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart">
          <div className="cart__top">
            <h2 className="content__title">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Корзина
            </h2>
            <div
              onClick={() => onClickRemoveAllItems()}
              className="cart__clear"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 5H4.16667H17.5"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33337 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6666 9.16667V14.1667"
                  stroke="#B6B6B6"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Очистить корзину</span>
            </div>

            {/* модальное окно */}
            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
              style={{
                overlay: {
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  transition: "background-color 0.15s ease-in-out",
                },
                content: {
                  border: "none",
                  borderRadius: "8px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  maxWidth: "470px",
                  margin: "auto",
                  padding: "20px",
                  background: "#fff",
                  height: "260px",
                },
              }}
            >
              <div className="modal-content">
                <p className="modal-text" style={{ fontSize: "20px" }}>
                  Вы действительно желаете очистить корзину?
                </p>
                <span
                  role="img"
                  aria-label="sad-emoji"
                  style={{ fontSize: "90px", lineHeight: "80px" }}
                >
                  😢
                </span>
                <br />
                <div style={{ marginTop: "30px" }}>
                  <button
                    className="modal-button confirm"
                    onClick={handleConfirmClear}
                  >
                    Да
                  </button>
                  <button
                    className="modal-button cancel"
                    onClick={handleCancelClear}
                  >
                    Отмена
                  </button>
                </div>
              </div>
            </Modal>
          </div>
          <div className="content__cart-items">
            {items.map((item) => {
              return <CartAsComponent key={item.id} {...item} />;
            })}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-details">
              <span>
                Всего пицц:
                <b style={{ marginLeft: "7px" }}>
                  {items.reduce((sum, item) => sum + item.count, 0)} шт.
                </b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="cart__bottom-buttons">
              <button className="button button--outline button--add go-back-btn">
                <Link to="/">
                  <svg
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
              </button>
              <button onClick={handlePayment} className="button pay-btn">
                <span>Оплатить сейчас</span>
              </button>
              {prevSuccess && (
                <Modal
                  isOpen={prevSuccess}
                  style={{
                    overlay: {
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      transition: "background-color 0.15s ease-in-out",
                    },
                    content: {
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      maxWidth: "470px",
                      margin: "auto",
                      padding: "20px",
                      background: "#fff",
                      height: "355px",
                    },
                  }}
                >
                  <div className="modal-content">
                    <span>Заполните анкету </span>
                    <div
                      style={{
                        marginTop: "30px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <input
                        type="text"
                        name="phone"
                        placeholder="Телефон"
                        value={isNumber}
                        onChange={(e) => setIsNumber(e.target.value)}
                      />
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Имя"
                        value={isFirstName}
                        onChange={(e) => setIsFirstName(e.target.value)}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Фамилия"
                        value={isLastName}
                        onChange={(e) => setIsLastName(e.target.value)}
                      />
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={isEmail}
                        onChange={(e) => setIsEmail(e.target.value)}
                      />

                      <button
                        onClick={handleSent}
                        disabled={
                          !isNumber || !isFirstName || !isLastName || !isEmail
                        }
                        className="modal-button confirm"
                        // onClick={handleSubmit}
                      >
                        <span className="confirm__span"> Отправить</span>
                      </button>
                    </div>
                  </div>
                </Modal>
              )}
              {isPaymentSuccessfull && (
                <Modal
                  isOpen={toClose}
                  // onRequestClose={() => setTimeout(closeModal, 10000)}
                  style={{
                    overlay: {
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                    content: {
                      border: "none",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      maxWidth: "300px",
                      margin: "auto",
                      padding: "20px",
                      background: "#fff",
                      textAlign: "center",
                      height: "345px",
                    },
                  }}
                >
                  <div>
                    <span
                      role="img"
                      aria-label="happy-emoji"
                      style={{ fontSize: "60px", color: "#4CAF50" }}
                    >
                      ✔️
                    </span>
                    <p
                      style={{
                        fontSize: "22px",
                        marginTop: "10px",
                        fontWeight: "700",
                      }}
                    >
                      Ваш заказ принят!
                    </p>
                    <br />
                    <span>С Вами скоро свяжется оператор ;) </span>
                    <button
                      style={{ marginTop: "15px" }}
                      className="modal-button confirm"
                      onClick={closeModal}
                    >
                      Закрыть
                    </button>
                  </div>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
