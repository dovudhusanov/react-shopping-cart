import React, {useContext, useEffect, useState} from 'react';
import "./ProductCard.css"
import {Context} from "../../context/context";

function ProductCard({id, title, image, desc, price, datas}) {
    const {productInCart, addToCart, setDataInCart, dataInCart} = useContext(Context)

    const addProductToBusket = (data) => {
        addToCart(data)
    }

    console.log(datas)

    return (
        <div className="product-card">
            <div className="product-card__items">
                <img src={image} alt={title} className="product-image"/>
                <div className="full-info__product">
                    <h1>{id} {title}</h1>
                    <p>{desc}</p>
                    <div className="full-info-price-btn price-text">
                        <span className="">Price: <h2 style={{color: "#000"}}>${price}</h2></span>
                        <button onClick={() => addProductToBusket(datas)} className="add-to-cart">Add to Cart <i
                            className="fa-regular fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;