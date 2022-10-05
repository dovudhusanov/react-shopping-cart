import React, {useContext, useEffect, useRef, useState} from 'react';
import "./NavBar.css"
import Logo from "../../Images/logo.png";
import {useParams} from "react-router-dom";
import {Context} from "../../context/context";

function NavBar(props) {

    const [search, setSearch] = useState({
        searchV: ""
    })

    const handleChange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    }
    const {productInCart} = useContext(Context)

    const {cartRef} = useContext(Context)

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav">
                    <a href={`/`}><img src={Logo} alt="logo" className="logo"/></a>
                    <div className="search-input">
                        <input
                            type="search"
                            placeholder="Search..."
                            name="searchV"
                            value={search.searchV}
                            onChange={handleChange}
                            className="search"
                        />
                        <i className="fa-light fa-magnifying-glass search-icon"></i>
                    </div>
                    <button className="btn" onClick={cartRef}>
                        Your Cart <i className="fa-regular fa-cart-shopping"></i>
                        <span className="productInCart">{productInCart}</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;