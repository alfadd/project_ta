import { createContext, useContext, useEffect, useReducer } from "react";
import {
  AddToCartContext,
  AddToCartDispacthContext,
} from "./add-to-cart-context";

const AddToFavContext = createContext();

const AddToFavDispacthContext = createContext();

const AddToFavReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAV": {
      const itemInFav = state.fav.find(
        (item) => item.id === action.payload.fav.id,
      );
      if (itemInFav) {
        return state;
      }

      return {
        ...state,
        fav: [...state.fav, { ...action.payload.fav }],
      };
    }

    case "REMOVE_FROM_FAV": {
      return {
        ...state,
        fav: state.fav.filter((item) => item.id !== action.payload.id),
      };
    }
    default: {
      throw Error("Unknow Action Type" + action.type);
    }
  }
};

export function AddToFavProvider({ children }) {
  const [addtoCart, dispatch] = useReducer(AddToFavReducer, {
    fav: JSON.parse(localStorage.getItem("fav_item")) || [],
  });

  useEffect(() => {
    localStorage.setItem("fav_item", JSON.stringify(addtoCart.fav));
  }, [addtoCart.fav]);

  return (
    <AddToFavContext.Provider value={addtoCart}>
      <AddToFavDispacthContext.Provider value={dispatch}>
        {children}
      </AddToFavDispacthContext.Provider>
    </AddToFavContext.Provider>
  );
}

export function useAddToFav() {
  return useContext(AddToFavContext);
}

export function useAddToFavDispatch() {
  return useContext(AddToFavDispacthContext);
}
