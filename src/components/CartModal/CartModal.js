import React, {useContext, useEffect, useState} from 'react';
import "./CartModal.css"
import {Context} from "../../context/context";

function CartModal(props) {

    const {dataInCart, cartRef, ref, removeRef} = useContext(Context)
    document.addEventListener("click", removeRef)
    console.log(dataInCart)
    const [data, setData] = useState(dataInCart)
    function removeProduct(id) {
        setData(data.id !== id, localStorage.removeItem("product", id))
    }

    return (
        <div className="cart-modal-bg" ref={ref}>
            <div className="cart-modal" onClick={event => event.stopPropagation()}>
                <i className="fa-solid fa-xmark closeCart" onClick={cartRef}></i>
                {Object.keys(data).length === 0 ? (
                    <h1>not found</h1>
                ) : (
                    <>
                        {data.map((data, index) => (
                            <div key={index} className="cart-product">
                                <img src={data.image} alt={data.title}/>
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                                <div className="price-btn">
                                    <span>${data.price}</span>
                                    <button className="delete-product-btn" onClick={() => removeProduct(dataInCart.id)}>delete</button>
                                </div>
                            </div>
                        ))}
                    </>
                )}
        </div>
        </div>
    );
}

export default CartModal;