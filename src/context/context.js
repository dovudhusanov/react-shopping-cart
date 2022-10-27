import React, {createContext, useEffect, useRef, useState} from "react";
import {json} from "react-router-dom";

const initialState = {
    productInCartNum: JSON.parse(localStorage.getItem("productNum")) || [],
    dataCart: JSON.parse(localStorage.getItem("cartData")) || [{title: "not found"}]
}

export const Context = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [productInCart, setProductInCart] = useState(initialState.productInCartNum)
    const [dataInCart, setDataInCart] = useState(initialState.dataCart)
    let products = useState(JSON.parse(localStorage.getItem("product")))
    const saveProduct = (product) => localStorage.setItem('product', JSON.stringify(product))
    const ref = useRef()
    const cartRef = (e) => {
        e.stopPropagation()
        ref.current.classList.toggle("active")
    }

    const removeRef = () => {
        ref.current.classList.remove("active")
    }

    const addToCart = (product) => {
        products = [...products, product]
        saveProduct(products)
        window.location.reload()
    }

    const value = {
        productInCart, setProductInCart, dataInCart, setDataInCart, cartRef, ref, removeRef, addToCart, products
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}