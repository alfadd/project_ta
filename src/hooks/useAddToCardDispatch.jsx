import { useContext } from "react";
import { AddToCartDispacthContext } from "../context/add-to-cart-context";

export function useAddToCartDispatch() {
  return useContext(AddToCartDispacthContext);
}
