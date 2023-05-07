import React from "react";
import MyButton from "../UI/button/MyButton";
import { AiOutlineHeart, AiOutlineInfoCircle } from "react-icons/ai";
import "./ProductItem.scss";
import { Products } from "../../types/types";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/cartHooks";
import { addToCart } from "../../store/cartSlice";
import { addToFavorite } from "../../store/favoriteSlice";
interface IProductItemProps {
  obj: Products;
}
const ProductItem: React.FC<IProductItemProps> = ({ obj }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="productItem">
      <img src={obj.images[0].image_path} />
      <span className="price">{obj.price} $</span>
      <span className="discont">
        {obj.discount}% &gt; {obj.price} $
      </span>
      <span className="title">{obj.name}</span>
      <div className="actions">
        <MyButton onClick={() => dispatch(addToCart(obj))}>В корзину</MyButton>
        <Link to={`product/${obj.id}`}>
          <AiOutlineInfoCircle />
        </Link>
        <AiOutlineHeart onClick={() => dispatch(addToFavorite(obj))} />
      </div>
    </li>
  );
};

export default ProductItem;
