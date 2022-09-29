import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function PageNotFound(props) {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/404");
    }, [window.location.pathname]);

    return (
        <h1 style={{textAlign: "center", color: "red"}}>404 Page Not Found</h1>
    );
}

export default PageNotFound;