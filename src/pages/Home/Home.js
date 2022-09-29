import React, {useEffect, useState} from 'react';
import "./Home.css";
import {axiosInstance} from "../../api/api";
import {getProductsAction} from "../../api/Products";
import {Link} from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

function Home(props) {

    const [products, setProducts] = useState([])

    const allProducts = async () => {
        await axiosInstance(getProductsAction().then(res => {
            setProducts(res.data)
            console.log(res.data)
        }));
    }

    useEffect(() => {
        allProducts()
    }, [])

    return (
        <>
            <div className="home-products-card">
                {Object.keys(products).length === 0 ? (
                    <h1 style={{color: "blue", textAlign: "center", marginTop: "-10px"}}>Loading...</h1>
                ) : (
                    <>
                        {products.map((product, index) => (
                            <div className="home-products">
                                    <ProductsCard
                                        key={product.id}
                                        img={product.image}
                                        title={product.title}
                                        price={product.price}
                                        product={product}
                                    />
                            </div>
                        ))}
                    </>
                )}
            </div>
        </>
    );
}

export default Home;