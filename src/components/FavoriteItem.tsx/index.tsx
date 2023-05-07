import React from "react";
import { Products } from "../../types/types";
import { AiFillDelete, AiFillPlusCircle } from "react-icons/ai";
import "./FavoriteItem.scss";
import MyButton from "../UI/button/MyButton";
import { useAppDispatch } from "../../hooks/cartHooks";
import { deleteToFavorite } from "../../store/favoriteSlice";
import { addToCart } from "../../store/cartSlice";
interface IFavoriteItemProps {
  obj: Products;
}
const FavoriteItem: React.FC<IFavoriteItemProps> = ({ obj }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="favoriteItem">
      <span className="title">{obj.name}</span>
      <img src={obj.images[0].image_path} alt="Product Img" />
      <div>
        <span className="price">Цена: {obj.price}</span>
        <span className="quantity">Количество: {obj.quantity}</span>
      </div>
      <span className="description">{obj.description}</span>
      <div className="actions">
        <MyButton onClick={() => dispatch(addToCart(obj))}>
          Добавить в корзину
        </MyButton>
        <AiFillDelete onClick={() => dispatch(deleteToFavorite(obj.id))} />
      </div>
    </li>
  );
};

export default FavoriteItem;
