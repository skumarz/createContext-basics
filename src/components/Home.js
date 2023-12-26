import SingleProduct from "./SingleProduct";
import {CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

const Home = () => {
  const { products } = useContext(CartContext);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>Products Page</span>
      <div className="productContainer">
        {products.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;