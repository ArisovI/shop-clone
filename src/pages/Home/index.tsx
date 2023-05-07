import React from "react";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { useAppDispatch, useAppSelector } from "../../hooks/cartHooks";
import "./Home.scss";
const Home = () => {
  const carts = useAppSelector((state) => state.cart.carts);

  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default Home;
