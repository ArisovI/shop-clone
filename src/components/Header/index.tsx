import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import "./Header.scss";
import { useAppSelector } from "../../hooks/cartHooks";

const Header: React.FC = () => {
  const category: string[] = [
    "Электроника",
    "Бытовая техника",
    "Телефоны и аксессуары",
    "Samsung",
    "Apple",
    "Телевизор",
    "Пылесос",
    "Ноутбуки",
    "Xiaomi",
  ];
  const headerLeftInfo: string[] = ["Ташкент", "Доставка", "Магазины"];
  const headerRightInfo: string[] = [
    "О нас",
    "Сотрудничество",
    "Корпоративная торговля",
    "+998905949914",
  ];

  const totalCountCart = useAppSelector((state) => state.cart.carts.length);
  const totalCountFavorites = useAppSelector(
    (state) => state.favorite.favorites.length
  );

  const products = useAppSelector((state) => state.product.products);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="header">
      {
        <div className="headerTop">
          <ul>
            {headerLeftInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <ul>
            {headerRightInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      }
      <div className="headerBottom">
        <div className="headerBottomContent">
          <Link to="/">MLogo</Link>
          <MyButton>
            <AiOutlineMenu /> <span>Каталог</span>
          </MyButton>
          <div className="search">
            <AiOutlineSearch />
            <MyInput
              type="text"
              placeholder="Искать товары"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {searchValue.length > 0 ? (
              <AiOutlineCloseCircle
                className="closeInputValue"
                onClick={() => setSearchValue("")}
              />
            ) : (
              ""
            )}
            <ul className="searchProducts">
              {searchValue.length > 1
                ? products
                    .filter((obj) => {
                      if (
                        obj.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase())
                      ) {
                        return true;
                      } else return false;
                    })
                    .map((obj) => (
                      <li key={obj.id}>
                        <Link to={`/product/${obj.id}`}>
                          <span>{obj.name}</span>
                          <span>{obj.price} $</span>
                        </Link>
                      </li>
                    ))
                : ""}
            </ul>
          </div>
          <ul>
            <li>
              <Link to="/cart">
                <AiOutlineShopping />
              </Link>
              <span>{totalCountCart}</span>
            </li>
            <li>
              <Link to="/favorite">
                <AiOutlineHeart />
              </Link>
              <span>{totalCountFavorites}</span>
            </li>
            <div className="user">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3781/3781973.png"
                alt="2"
              />
              <span>Арисов Илхамбек</span>
            </div>
          </ul>
        </div>
        <ul>
          {category.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
