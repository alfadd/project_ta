import { useReducer } from "react";
import {
  AddToCartContext,
  AddToCartDispacthContext,
} from "./add-to-card-context";

const AddToCartReducer = (state, action) => {
  const itemInCart = state.cart.find(
    (item) => item.id === action.payload.cart.id,
  );

  switch (action.type) {
    case "ADD_TO_CART": {
      if (!itemInCart) {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload.cart }],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.cart.id
              ? { ...item, qty: item.qty + 1 }
              : item,
          ),
        };
      }
    }
    default: {
      throw Error("Unknow Action Type" + action.type);
    }
  }
};

export function AddToCartProvider({ children }) {
  const [addtoCart, dispatch] = useReducer(AddToCartReducer, {
    cart: JSON.parse(localStorage.getItem("cart")) || [],
  });

  return (
    <AddToCartContext.Provider value={addtoCart}>
      <AddToCartDispacthContext.Provider value={dispatch}>
        {children}
      </AddToCartDispacthContext.Provider>
    </AddToCartContext.Provider>
  );
}
