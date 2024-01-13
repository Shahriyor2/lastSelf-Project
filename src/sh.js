// import React, { useState } from "react";

// const App = () => {
//   const [playerChoice, setPlayerChoice] = useState(null);
//   const [computerChoice, setComputerChoice] = useState(null);
//   const [result, setResult] = useState(null);

//   const handlePlayerChoice = (choice) => {
//     setPlayerChoice(choice);
//     const randomIndex = Math.floor(Math.random() * 3);
//     const computer = choices[randomIndex];
//     setComputerChoice(computer);
//     checkResult(choice, computer);
//   };

//   const checkResult = (player, computer) => {
//     if (player === computer) {
//       setResult("Ничья!");
//     } else if (
//       (player === "камень" && computer === "ножницы") ||
//       (player === "ножницы" && computer === "бумага") ||
//       (player === "бумага" && computer === "камень")
//     ) {
//       setResult("Вы победили!");
//     } else {
//       setResult("Компьютер победил!");
//     }
//   };

//   return (
//     <div>
//       <h1>Камень, Ножницы, Бумага</h1>
//       <p>Ваш выбор: {playerChoice}</p>
//       <p>Выбор компьютера: {computerChoice}</p>
//       <p>Результат: {result}</p>
//       <button onClick={() => handlePlayerChoice("камень")}>Камень</button>
//       <button onClick={() => handlePlayerChoice("ножницы")}>Ножницы</button>
//       <button onClick={() => handlePlayerChoice("бумага")}>Бумага</button>
//     </div>
//   );
// };

//   // const [onSearchIndex, setOnSearchIndex] = useState(0);


// сохранение в localStorage
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   items: [],
//   count: 0,
//   totalPrice: 0,
// };

// const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem("cartState");
//     if (serializedState === null) {
//       return initialState;
//     }
//     return JSON.parse(serializedState);
//   } catch (err) {
//     return initialState;
//   }
// };

// const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("cartState", serializedState);
//   } catch (err) {
//     // Handle errors here
//   }
// };

// const cartSlice = createSlice({
//   name: "cartSlice",
//   initialState: loadState(),
//   reducers: {
//     addItem(state, action) {
//       const findItem = state.items.find((obj) => obj.id === action.payload.id);
//       if (findItem) {
//         findItem.count++;
//       } else {
//         state.items.push({ ...action.payload, count: 1 });
//       }
//       state.totalPrice = state.items.reduce(
//         (sum, obj) => sum + obj.price * obj.count,
//         0
//       );
//       saveState(state);
//     },
//     minusItem(state, action) {
//       const findItem = state.items.find((obj) => obj.id === action.payload.id);

//       if (findItem && findItem.count > 0) {
//         findItem.count--;
//         state.totalPrice = state.totalPrice - findItem.price;

//         if (findItem.count === 0) {
//           state.items = state.items.filter(
//             (obj) => obj.id !== action.payload.id
//           );
//         }
//         saveState(state);
//       }
//     },
//     removeItemPizza(state, action) {
//       state.items = state.items.filter((obj) => obj.id !== action.payload.id);
//       saveState(state);
//     },
//   },
// });

// export const { addItem, minusItem, removeItemPizza } = cartSlice.actions;
// export default cartSlice.reducer;
