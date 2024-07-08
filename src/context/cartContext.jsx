import React, { act, createContext, useReducer } from "react";

export const cartContext = createContext({});


const initialState = []

export const totalPrice = (cart) => {
    return cart.reduce((total, product) => total + product.qty * product.price, 0)
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const existing = state.findIndex(item => item.id === action.payload.id)

        if(existing !== -1){
            const update = [...state]
            update[existing].qty += action.payload.qty
            return [ ...update ];
        }
        else{
            return [
                ...state, action.payload
            ]
        }
    }
    if(action.type === 'INCREASE'){
        return state.map(item => {
            if (item.id === action.payload.id) {
                return {
                    ...item,
                    qty: item.qty + 1 // Increment quantity by 1
                };
            }
            return item;
        });
    }
    if(action.type === 'DECREASE'){
        return state.map(item => {
            if (item.id === action.payload.id) {
                const newQty = item.qty - 1;
                if (newQty > 0) {
                    return {
                        ...item,
                        qty: newQty
                    };
                } else {
                    return null;
                }
            }
            return item;
        }).filter(Boolean);
    }

    return state
}

const CartProvider = ({ children }) => {
   const [cart, dispatch] = useReducer(cartReducer, initialState)

    const addItemToCart = (item) => {
        dispatch({type: 'ADD', payload: item})
        console.log(cart);
    };
    
    return <cartContext.Provider value={{addItemToCart, dispatch,cart}}>{children}</cartContext.Provider>;
};

export default CartProvider;