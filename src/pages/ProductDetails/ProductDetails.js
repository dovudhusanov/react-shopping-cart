import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {axiosInstance} from "../../api/api";
import {getProductAction} from "../../api/Product";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductDetails(props) {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const {productId} = useParams()

    const getProduct =  async () => {
        setLoading(true)
        await axiosInstance(getProductAction(productId).then(res => {
            setProducts(res.data)
        })
            .catch(err => console.error("Error", err.message))
        )
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (productId && productId !== "")

        getProduct()

    }, [])

    const productDetail = () => {
        const {id, title, price, description, image} = products
        return (
            <ProductCard
                data={products}
                key={id}
                id={id}
                title={title}
                price={price}
                desc={description}
                image={image}
            />
        )
    }

    return (
        <div className="product-info-container">
            {loading ? (
                <h1 style={{color: "green", textAlign: "center", marginTop: 200}}>Loading...</h1>
            ) : (
                <>
                    <Link to={`/`}><span className="back"><i className="fa-solid fa-left"></i> Back</span></Link>
                    {productDetail()}
                </>
            )}
        </div>
    );
}

export default ProductDetails;