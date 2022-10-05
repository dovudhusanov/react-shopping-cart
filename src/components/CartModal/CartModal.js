import React, {useContext, useEffect} from 'react';
import "./CartModal.css"
import {Context} from "../../context/context";

function CartModal(props) {

    const {dataInCart, cartRef, ref, removeRef,products} = useContext(Context)
    document.addEventListener("click", removeRef)

    return (
        <div className="cart-modal-bg" ref={ref}>
            <div className="cart-modal" onClick={event => event.stopPropagation()}>
                <i className="fa-solid fa-xmark closeCart" onClick={cartRef}></i>
                {products.map((data, index) => (
                    <div key={data.id} className="cart-product">
                        <img src={data.image} alt={data.title}/>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className="price-btn">
                            <span>${data.price}</span>
                            <button className="delete-product-btn">delete</button>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    );
}

export default CartModal;