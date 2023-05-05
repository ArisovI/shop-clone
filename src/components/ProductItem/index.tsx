import React from "react";
import MyButton from "../UI/button/MyButton";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import "./ProductItem.scss";
import { Products } from "../../types/types";
import { Link } from "react-router-dom";

const ProductItem: React.FC<Products> = ({
  name,
  price,
  discount,
  images,
  id,
}) => {
  return (
    <li className="productItem">
      <img src={images[0].image_path} />
      <span className="price">{price} $</span>
      <span className="discont">
        {discount}% &gt; {price} $
      </span>
      <span className="title">{name}</span>
      <div className="actions">
        <MyButton>В корзину</MyButton>
        <Link to={`product/${id}`}>
          <AiOutlineInfoCircle />
        </Link>
        <AiOutlineHeart />
      </div>
    </li>
  );
};

export default ProductItem;
