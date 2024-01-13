import React from "react";
import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Header } from "./components/Header";
import CartOrEmpty from "./pages/CartOrEmpty";

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartOrEmpty />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
