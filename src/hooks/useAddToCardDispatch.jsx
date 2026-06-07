import { useContext } from "react";
import { AddToCartDispacthContext } from "../context/add-to-card-context";

export function useAddToCartDispatch() {
  return useContext(AddToCartDispacthContext);
}