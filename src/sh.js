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


// [
//     {
//       "id": 0,
//       "title": "Пепперони Фреш с перцем",
//       "category": 0,
//       "rating": 4,
//       "images": {
//         "26": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
//         "30": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584_30.png",
//         "40": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584_40.png"
//       },
//       "types": [0, 1],
//       "sizes": [26, 30, 40],
//       "price": 803
//     },
//     // Остальные объекты с похожей структурой
//   ]
  

// [
//     {
//       "id": 0,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
//       "title": "Пепперони Фреш с перцем",
//       "types": [
//         0,
//         1
//       ],
//       "sizes": [
//         26,
//         30,
//         40
//       ],
//       "price": 803,
//       "category": 0,
//       "rating": 4
//     },
//     {
//       "id": 1,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
//       "title": "Сырная",
//       "types": [
//         0
//       ],
//       "sizes": [
//         26,
//         40
//       ],
//       "price": 245,
//       "category": 1,
//       "rating": 6
//     },
//     {
//       "id": 2,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
//       "title": "Цыпленок барбекю",
//       "types": [
//         0
//       ],
//       "sizes": [
//         26,
//         40
//       ],
//       "price": 295,
//       "category": 1,
//       "rating": 4
//     },
//     {
//       "id": 3,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
//       "title": "Кисло-сладкий цыпленок",
//       "types": [
//         1
//       ],
//       "sizes": [
//         26,
//         30,
//         40
//       ],
//       "price": 275,
//       "category": 2,
//       "rating": 2
//     },
//     {
//       "id": 4,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
//       "title": "Чизбургер-пицца",
//       "types": [
//         0,
//         1
//       ],
//       "sizes": [
//         26,
//         30,
//         40
//       ],
//       "price": 415,
//       "category": 3,
//       "rating": 8
//     },
//     {
//       "id": 5,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
//       "title": "Крэйзи пепперони",
//       "types": [
//         0
//       ],
//       "sizes": [
//         30,
//         40
//       ],
//       "price": 580,
//       "category": 2,
//       "rating": 2
//     },
//     {
//       "id": 6,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
//       "title": "Пепперони",
//       "types": [
//         0,
//         1
//       ],
//       "sizes": [
//         26,
//         30,
//         40
//       ],
//       "price": 675,
//       "category": 1,
//       "rating": 9
//     },
//     {
//       "id": 7,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg",
//       "title": "Маргарита",
//       "types": [
//         0,
//         1
//       ],
//       "sizes": [
//         26,
//         30,
//         40
//       ],
//       "price": 450,
//       "category": 4,
//       "rating": 10
//     },
//     {
//       "id": 8,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/ec29465e-606b-4a04-a03e-da3940d37e0e.jpg",
//       "title": "Четыре сезона",
//       "types": [
//         0,
//         1
//       ],
//       "sizes": [
//         26,
//         30,
//         40
//       ],
//       "price": 395,
//       "category": 5,
//       "rating": 10
//     },
//     {
//       "id": 9,
//       "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/30367198-f3bd-44ed-9314-6f717960da07.jpg",
//       "title": "Овощи и грибы 🌱",
//       "types": [
//         0,
//         1
//       ],
//       "sizes": [
//         26,
//         30,
//         40
//       ],
//       "price": 285,
//       "category": 5,
//       "rating": 7
//     }
//   ]