import React from "react"
import Nav from "../components/Nav"
import Register from "../components/Register"

const RegisterPage = (props) => {
    return (
        <>
            <Nav showBg={false} isLoggedIn={false}/> 
            <Register goToLogin={props.goToLogin} goToHome={props.goToHome}/>
        </>
    )
} 

export default RegisterPage;