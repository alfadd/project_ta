import { createContext, useContext, useReducer } from "react";

const TotalQtyContext = createContext(null);

const TotalQtyDispatchContext = createContext(null);

const TotalQtyReducer = (state, action) => {
    switch (action.type) {
    case "UPDATE": {
        return {
            totalQty: action.payload.totalQty,
        };
    }
    default: {
        throw Error("Unknown action:" + action.type);
    }
    }
};

export function TotalQtyProvider({ children }) {
    const [totalQty, dispatch] = useReducer(TotalQtyReducer, { totalQty: 0 });
    return (
        <TotalQtyContext.Provider value={totalQty}>
            <TotalQtyDispatchContext.Provider value={dispatch}>
                {children}
            </TotalQtyDispatchContext.Provider>
        </TotalQtyContext.Provider>
    );
}

export function useTotalQty() {
    return useContext(TotalQtyContext);
}

export function useTotalQtyDispatch() {
    return useContext(TotalQtyDispatchContext);
}