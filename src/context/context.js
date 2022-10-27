import React, {createContext, useEffect, useRef, useState} from "react";

const initialState = {
    productInCartNum: JSON.parse(localStorage.getItem("productNum")) || [],
    dataCart: JSON.parse(localStorage.getItem("product")) || []
}

export const Context = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [productInCart, setProductInCart] = useState(initialState.productInCartNum)
    const [dataInCart, setDataInCart] = useState([initialState.dataCart])
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