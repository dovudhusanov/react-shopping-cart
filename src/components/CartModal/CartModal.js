import React, {useContext} from 'react';
import "./CartModal.css"
import {Context} from "../../context/context";

function CartModal(props) {

    const {dataInCart, cartRef, ref, removeRef} = useContext(Context)
    console.log(dataInCart)
    document.addEventListener("click", removeRef)

    const data = () => {
        const {id, title, image, description, price} = dataInCart
        return (
            <div key={id} className="cart-product">
                <img src={image} alt={title}/>
                <h1>{title}</h1>
                <p>{description}</p>
                <div className="price-btn">
                    <span>${price}</span>
                    <button className="delete-product-btn">delete</button>
                </div>
            </div>
        )
    };

    return (
        <div className="cart-modal-bg" ref={ref}>
            <div className="cart-modal" onClick={event => event.stopPropagation()}>
                <i className="fa-solid fa-xmark closeCart" onClick={cartRef}></i>
                {data()}
        </div>
        </div>
    );
}

export default CartModal;