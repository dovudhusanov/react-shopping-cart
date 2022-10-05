import React, {createContext, useRef, useState} from "react";

const initialState = {
    productInCartNum: JSON.parse(localStorage.getItem("productNum")) || 0,
    dataCart: JSON.parse(localStorage.getItem("cartData")) || ["not found"]
}

export const Context = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [productInCart, setProductInCart] = useState(initialState.productInCartNum)
    const [dataInCart, setDataInCart] = useState(initialState.dataCart)

    const ref = useRef()
    const cartRef = (e) => {
        e.stopPropagation()
        ref.current.classList.toggle("active")
    }

    const removeRef = () => {
        ref.current.classList.remove("active")
    }

    const value = {
        productInCart, setProductInCart, dataInCart, setDataInCart, cartRef, ref, removeRef
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}