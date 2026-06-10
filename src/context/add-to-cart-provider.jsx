import { useEffect, useReducer } from "react";
import {
  AddToCartContext,
  AddToCartDispacthContext,
} from "./add-to-cart-context";

const AddToCartReducer = (state, action) => {
  const itemInCart = state.cart.find(
    (item) =>
      item.id === action.payload.cart.id &&
      item.size === action.payload.cart.size &&
      item.color === action.payload.cart.color,
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
            item.id === action.payload.cart.id &&
            item.size === action.payload.cart.size &&
            item.color === action.payload.cart.color
              ? {
                  ...item,
                  qty: item.qty + action.payload.cart.qty,
                  size: item.size,
                  color: item.color,
                }
              : item,
          ),
        };
      }
    }
    
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          const isSameItem =
            item.id === action.payload.cart.id &&
            item.size === action.payload.cart.size &&
            item.color === action.payload.cart.color;

            console.log(isSameItem)
          return !isSameItem;
        }),
      };
    }
    case "REMOVE_ALL_FROM_CART": {
      return {
        ...state,
        cart: [],
      };
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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(addtoCart.cart));
  }, [addtoCart.cart]);

  return (
    <AddToCartContext.Provider value={addtoCart}>
      <AddToCartDispacthContext.Provider value={dispatch}>
        {children}
      </AddToCartDispacthContext.Provider>
    </AddToCartContext.Provider>
  );
}
