import React, {useState} from 'react';
import "./NavBar.css"
import Logo from "../../Images/logo.png";
import {Link} from "react-router-dom";

function NavBar(props) {

    const [search, setSearch] = useState({
        searchV: ""
    })

    const handleChange = (e) => {
        setSearch({...search, [e.target.name]: e.target.value})
    }

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav">
                    <a href="/"><img src={Logo} alt="logo" className="logo"/></a>
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
                    <button className="btn">
                        Your Cart <i className="fa-regular fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;