import React, {  useReducer } from "react";
import CartReducer from "./CartReducer";
import CartContext from './CartContext';


const ContextProvider = ({children}) => {

    const [cart, dispatch] = useReducer(CartReducer, [])
    return(
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export default ContextProvider;