import React, {useContext, useEffect, useState} from 'react';
import "./ProductCard.css"
import {Context} from "../../context/context";

function ProductCard({id, title, image, desc, price, data}) {

    const {productInCart, setDataInCart, dataInCart} = useContext(Context)
    const [num, setNum] = useState(productInCart)
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        localStorage.setItem("productNum", JSON.stringify(num));
    }, [num])

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(dataInCart))
    }, [num])


    function addToCart(data) {
        setNum(num + 1)
        console.log(data)
        setDataInCart(data)
    }

    return (
        <div className="product-card">
            <div className="product-card__items">
                <img src={image} alt={title} className="product-image"/>
                <div className="full-info__product">
                    <h1>{id} {title}</h1>
                    <p>{desc}</p>
                    <div className="full-info-price-btn price-text">
                        <span className="">Price: <h2 style={{color: "#000"}}>${price}</h2></span>
                        <button onClick={() => addToCart(data)} className="add-to-cart">Add to Cart <i
                            className="fa-regular fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;