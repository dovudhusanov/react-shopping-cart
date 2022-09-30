import React from 'react';
import "./ProductsCard.css"
import {Link} from "react-router-dom";

function ProductsCard({img, title, price, product}) {
    return (
        <div className="products-card">
            <Link to={`/product/${product.id}`}>
                <img src={img} alt={title}/>
            </Link>
            <h2 className="products-card__title">{title}</h2>
            <div className="price">
                <div className="price-text">
                    <span>Price :</span>
                    <h3>${price}</h3>
                </div>
                <button className="btn__to-cart">
                    <i className="fa-regular fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductsCard;