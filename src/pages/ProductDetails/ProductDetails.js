import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {axiosInstance} from "../../api/api";
import {getProductAction} from "../../api/Product";

function ProductDetails(props) {

    const [products, setProducts] = useState([])
    const {productId} = useParams()

    const getProduct =  async () => {
        await axiosInstance(getProductAction(productId).then(res => {
            setProducts(res.data)
        })
            .catch(err => console.error("Error", err.message))
        )
    }

    useEffect(() => {
        if (productId && productId !== "")

        getProduct()

    }, [])

    const productDetail = () => {
        const {id, title, price, description, image} = products
        return (
            <div key={id}>
                <h2>{id}</h2>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
                <span>{description}</span>
                <span>{price}</span>
            </div>
        )
    }

    return (
        <>
            {Object.keys(products).length === 0 ? (
                <h1 style={{color: "green", textAlign: "center", marginTop: 200}}>Loading...</h1>
            ) : (
                <>
                    {productDetail()}
                </>
            )}
        </>
    );
}

export default ProductDetails;