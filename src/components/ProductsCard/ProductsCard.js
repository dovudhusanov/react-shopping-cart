import React from 'react';
import "./ProductsCard.css"

function ProductsCard({img, title, price}) {
    return (
        <div className="products-card">
            <img src={img} alt={title}/>
            <h2>{title}</h2>
            <div className="price">
                <div className="price-text">
                    <span>Price</span>
                    <h3>{price}</h3>
                </div>
                <button className="btn__to-cart">
                    <i className="fa-regular fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    );
}

export default ProductsCard;