import React, {useEffect} from "react";
import './App.css';
import {getProductsAction} from "./api/Products";

function App() {

    useEffect(() => {
        const allProducts = async() => {
            const data = await getProductsAction()

            console.log(data.data)

        }

        allProducts()
    },[])

    return (
        <>

        </>
    );
}

export default App;
