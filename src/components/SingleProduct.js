import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleRemoveFromCart = (prod) => {
    const updatedCart = cart.filter((item) => item.id !== prod.id);
    setCart(updatedCart);
  };

  const handleAddToCart = (prod) => {
    const updatedCart = [...cart, prod];
    setCart(updatedCart);
  };

  return (
    <div className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        {prod.price && <span>₹ {prod.price.substring(0, 3)}</span>}
      </div>

      {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => handleRemoveFromCart(prod)}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => handleAddToCart(prod)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
