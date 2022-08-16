import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);
    const addToCart = payload => {
        const index = state.cart.findIndex(p => p.id == payload.id);
        payload.total = payload.price;
        if(index >= 0){
            state.cart[index].total += payload.price;
            return;
        }
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    }

    const removeToCart = payload => {
        const remains = state.cart.filter( item => item.id != payload.id);
        setState({
             ...state,
            cart: remains
        });
    }

    return {
        state,
        addToCart,
        removeToCart
    }
}

export default useInitialState;