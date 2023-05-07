import React from "react";
import CartItem from "../../components/CartItem";
import Header from "../../components/Header";
import MyButton from "../../components/UI/button/MyButton";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/cartHooks";
import "./Cart.scss";

const Cart = () => {
  const carts = useAppSelector((state) => state.cart.carts);
  const totalCarts = carts.reduce((acc, total) => {
    return acc + total.count * total.price;
  }, 0);

  const totalCount = carts.reduce((acc, total) => {
    return acc + total.count;
  }, 0);
  const location = useLocation();
  return (
    <div className="cart">
      <Header />
      <ul className="bread">
        <li>
          <Link to="/">Главная</Link>
        </li>
        /
        <li>
          <Link to={location.pathname}>Cart</Link>
        </li>
      </ul>
      <div className="cartContent">
        <ul className="cartContentProducts">
          {carts.length > 0 ? (
            carts.map((obj) => <CartItem key={obj.id} obj={obj} />)
          ) : (
            <h1 className="emptyCart">Ваша корзина пустая</h1>
          )}
        </ul>
        <div className="cartContentTotal">
          <div className="price">
            <span>Цена: {totalCarts} $</span>
            <span>Количество: {totalCount}</span>
          </div>
          <MyButton>Купить</MyButton>
          <MyButton>Купить в 1 клик</MyButton>
          <span className="payment">
            <span>Рассрочка</span>
            <span>от {Math.round(11 / 12)}$ х 12 месяцев</span>
          </span>
          <div className="paymentInfo">
            Цена может зависит от срока рассрочки
          </div>
          <MyButton>Оформить рассрочку</MyButton>
        </div>
      </div>
    </div>
  );
};

export default Cart;
