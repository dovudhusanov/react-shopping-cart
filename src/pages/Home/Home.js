import React, {useEffect, useState} from 'react';
import "./Home.css";
import {axiosInstance} from "../../api/api";
import {getProductsAction} from "../../api/Products";
import {Link} from "react-router-dom";
import ProductsCard from "../../components/ProductsCard/ProductsCard";

function Home(props) {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const allProducts = async () => {
        setLoading(true)
        await axiosInstance(getProductsAction().then(res => {
            setProducts(res.data)
            console.log(res.data)
        }))
            .catch((e) => console.error("Error" ,e.message))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        allProducts()
    }, [])

    return (
        <>
            <div className="home-products-card product-container">
                {loading ? (
                    <h1 style={{color: "blue", textAlign: "center", marginTop: "-10px"}}>Loading...</h1>
                ) : (
                    <>
                        {products.map((product, index) => (
                            <div className="home-products" key={product.id}>
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