import { createContext } from "react";

// Product context
export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
});
