import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";

const CartContext = createContext();
faker.seed(100);

const CartState = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productsArray = [...Array(50)].map((p) => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: "food" }),
  }));

  const [products] = useState(productsArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartState };
