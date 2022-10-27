import React, {useEffect} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import Register from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import {ContextProvider} from "./context/context";
import CartModal from "./components/CartModal/CartModal";
import Diplom from "./Diplom";

function App() {

    return (
        <>
            <ContextProvider>
                {/*<NavBar/>*/}
                {/*<CartModal />*/}
                <Router>
                    <Routes>
                        {/*<Route path="/" element={<Home/>}/>*/}
                        {/*<Route path="/all-products" element={<AllProducts/>}/>*/}
                        {/*<Route path="/product/:productId" element={<ProductDetails/>}/>*/}
                        {/*<Route path="/log_in" element={<LogIn/>}/>*/}
                        <Route path="/*" element={<Diplom/>}/>
                        <Route path="/api/info/diploma?param=9b9935f7-dd95-42ad-9306-d3dcdc5b074b" element={<Diplom />} />
                    </Routes>
                </Router>
            </ContextProvider>
        </>
    );
}

export default App;
