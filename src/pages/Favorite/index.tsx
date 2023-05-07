import React from "react";
import FavoriteItem from "../../components/FavoriteItem.tsx";
import Header from "../../components/Header";
import { useAppSelector } from "../../hooks/cartHooks";
import './Favorite.scss'
const Favorite = () => {
  const favorites = useAppSelector((state) => state.favorite.favorites);
  return (
    <div>
      <Header />
      <div className="breads">КРОШКИ</div>
      <ul className="favorites">
        {favorites.length > 0 ? (
          favorites.map((obj) => <FavoriteItem key={obj.id} obj={obj} />)
        ) : (
          <h1>Пусто</h1>
        )}
      </ul>
    </div>
  );
};

export default Favorite;
