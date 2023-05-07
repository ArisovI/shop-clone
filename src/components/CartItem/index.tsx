import React from "react";
import { useAppDispatch } from "../../hooks/cartHooks";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import {
  addToCart,
  decrementToCart,
  deleteToCart,
} from "../../store/cartSlice";
import { Products } from "../../types/types";
import MyButton from "../UI/button/MyButton";
import "./CartItem.scss";
interface ICartItem {
  obj: Products;
}
const CartItem: React.FC<ICartItem> = ({ obj }) => {
  const dispatch = useAppDispatch();
  return (
    <li className="cartItem">
      <img src={obj.images[0].image_path} alt="jpg" />
      <span className="title">{obj.name}</span>
      <div className="payAction">
        <AiOutlinePlus onClick={() => dispatch(addToCart(obj))} />
        <span className="count">{obj.count}</span>
        <AiOutlineMinus onClick={() => dispatch(decrementToCart(obj.id))} />
      </div>
      <p className="price">{obj.price * obj.count}</p>
      <AiOutlineDelete onClick={() => dispatch(deleteToCart(obj.id))} />
    </li>
  );
};

export default CartItem;
