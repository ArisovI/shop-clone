import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import MyButton from "../../components/UI/button/MyButton";
import { useAppDispatch, useAppSelector } from "../../hooks/cartHooks";
import "./Product.scss";
import { addToCart } from "../../store/cartSlice";
const Product = () => {
  const products = useAppSelector((state) => state.product.products);
  const { id } = useParams<string>();
  const location = useLocation();
  const dispatch = useAppDispatch();
  if (id !== undefined) {
    const productIndex = products.find((item) => item.id === parseInt(id));
    if (!productIndex) {
      return <div>none</div>;
    } else {
      return (
        <>
          <Header />
          <div className="product">
            <ul className="bread">
              <li>
                <Link to="/">Главная</Link>
              </li>
              /
              <li>
                <Link to={location.pathname}>{productIndex.name}</Link>
              </li>
            </ul>
            <div className="productContent">
              <div className="productContentImages">
                <img
                  src={productIndex.images[0].image_path}
                  alt="Product images"
                />
              </div>
              <div className="productContentInfo">
                <h3>{productIndex.name}</h3>
                <span className="price">
                  Цена товара: {productIndex.price} $
                </span>
                <p className="description">
                  Информация товара: {productIndex.description}
                </p>
                <span className="quantity">
                  Количество товаров на складе: {productIndex.quantity}
                </span>
                <span className="discont">
                  {` Скидка на товар ${productIndex.discount} % >
                  ${productIndex.price} $`}
                </span>
              </div>
              <div className="productContentActions">
                <span className="price">{productIndex.price} $</span>
                <MyButton onClick={() => dispatch(addToCart(productIndex))}>
                  Добавить в корзину
                </MyButton>
                <MyButton>Купить в 1 клик</MyButton>
                <span className="payment">
                  <span>Рассрочка</span>
                  <span>
                    от {Math.round(productIndex.price / 12)}$ х 12 месяцев
                  </span>
                </span>
                <div className="paymentInfo">
                  Цена может зависит от срока рассрочки
                </div>
                <MyButton>Оформить рассрочку</MyButton>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return <></>;
};

export default Product;
