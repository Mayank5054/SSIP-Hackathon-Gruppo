import React from "react"
import Nav from "../components/Nav"
import Login from "../components/Login"

const LoginPage = (props) => {
    return (
        <>
            <Nav showBg={false} isLoggedIn={false}/> 
            <Login/>
        </>
    )
}

export default LoginPage;