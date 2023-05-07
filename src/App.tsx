import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./hooks/cartHooks";
import Home from "./pages/Home";
import { getProducts } from "./store/productSlice";
import Product from "./pages/Product";
import "./App.css";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
