import { useContext } from "react";
import { AddToCartContext } from "../context/add-to-card-provider";

export function useAddToCart() {
  return useContext(AddToCartContext);
}
