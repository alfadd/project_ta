import { useContext } from "react";
import { AddToCartContext } from "../context/add-to-cart-context";

export function useAddToCart() {
  return useContext(AddToCartContext);
}
