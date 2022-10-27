import React, {createContext, useEffect, useRef, useState} from "react";
import {json} from "react-router-dom";

const initialState = {
    productInCartNum: JSON.parse(localStorage.getItem("productNum")) || [],
    dataCart: JSON.parse(localStorage.getItem("product")) || []
}

export const Context = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [productInCart, setProductInCart] = useState(initialState.productInCartNum)
    const [dataInCart, setDataInCart] = useState([initialState.dataCart])
    const saveProduct = (product) => setDataInCart([...dataInCart, dataInCart.push(localStorage.setItem('product', JSON.stringify(product)))])
    const ref = useRef()
    const cartRef = (e) => {
        e.stopPropagation()
        ref.current.classList.toggle("active")
    }

    const removeRef = () => {
        ref.current.classList.remove("active")
    }

    const addToCart = (product) => {
<<<<<<< HEAD
        products = [...products, product]
        saveProduct(products)
        window.location.reload()
=======
        saveProduct(product)
>>>>>>> 39b4aa562c5a0bdb17d7d24d36ff5f9455be315a
    }

    const value = {
        productInCart, setProductInCart, dataInCart, setDataInCart, cartRef, ref, removeRef, addToCart
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}