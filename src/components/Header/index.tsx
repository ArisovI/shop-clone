import React from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShopping,
  AiOutlineHeart,
} from "react-icons/ai";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";
import "./Header.scss";
const Header = () => {
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
          <a href="#">MLogo</a>

          <MyButton>
            <AiOutlineMenu /> <span>Каталог</span>
          </MyButton>
          <div className="search">
            <AiOutlineSearch />
            <MyInput type="text" placeholder="Искать товары" />
            <MyButton>Поиск</MyButton>
          </div>
          <ul>
            <li>
              <AiOutlineShopping />
              <span>0</span>
            </li>
            <li>
              <AiOutlineHeart />
              <span>0</span>
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
