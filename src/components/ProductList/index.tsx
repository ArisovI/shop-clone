import { useAppSelector } from "../../hooks/cartHooks";
import ProductItem from "../ProductItem";
import "./ProductList.scss";
const ProductList = () => {
  const products = useAppSelector((state) => state.product.products);
  return (
    <div className="productList">
      <h2>Все продукты</h2>
      <div className="productListContent">
        <ul>
          {products.length > 0 ? (
            products.map((obj: any) => <ProductItem key={obj.id} obj={obj} />)
          ) : (
            <h1 className="failProducts">Товары еще не добавлены...</h1>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
