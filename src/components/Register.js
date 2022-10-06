import React, { useState, useEffect, useContext } from "react";
import MyLink from "./MyLink";
import pathContext from "../context/path-context";
import axios from "axios";
import DropDownMenu from "./DropDownMenu";
import InputBox from "./InputBox";

const Register = (props) => {
    const ctx = useContext(pathContext);
    const [formData, setFormData] = useState({
        role: "",
        userName: "",
        email: "",
        pwd: "",
        cPwd: "",
    })

    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    

    // to empty the error msg when user changes user name or password
    useEffect(() => {
        setErrMsg("");
    }, [formData.email, formData.emailpwd]);



    function handleChange(event){
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }))

    const handleSubmit = async (e) => {
        e.preventDefault();

        //backend integration here
        //according to statuscode of backend res error msg will change
        //currently it will show success for any value of email and passward
        //check if both password is same or not in back-end
       
        axios.post("http://localhost/php_practise/signup.php",{
              name:formData.user,
              email:formData.email,
              password:formData.pwd,
              confirm_password:formData.cPwd
        }).then(
            (e)=>{
                // e.data returns  keywords described below
                // USER_ALREADY_EXISTS == user email and password already exists
                //USER_ACCOUNT_CREATED= new user account created
                //EXTERNAL_DATABASE_ERROR = database connection not establised
                //PASSWORD_NOT_SAME = password and confirm password are different
                //REGISTER_CREDENTIALS_INVALID = email and password are not correct (validation falied);
                console.log("data posted succesfully refgister.js");console.log(e);}
        );
        
        setFormData({
            role: "",
            userName: "",
            email: "",
            pwd: "",
            cPwd: "",
        });
        setSuccess(true); //need to set true only when registration is done successfully
    };

    return (
        <div className="bg-[url('./../public/images/style01.png')] bg-fixed w-full flex justify-center bg-no-repeat bg-center h-screen">
            {success ? (
                <section className='flex justify-center flex-col'>
                    <h1 className='text-white text-3xl font-medium'>
                        Logged in!
                    </h1>
                    <br />
                    <MyLink text='Go to Home' goTo={ctx.navigateToHome} />
                </section>
            ) : (
                <section className='inset-x-0 top-0 container w-1/2 flex justify-center items-center flex-col'>
                    <p
                        className={errMsg ? "errmsg" : "offscreen"}
                        aria-live='assertive'>
                        {errMsg}
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col gap-5 text-primary-900 font-medium items-center w-1/2 '>
                        <DropDownMenu name="role" className="w-full rounded p-4 text-primary-900 font-medium outline-primary-900 shadow-mine" value={formData.role} text="Choose Your Role" handleChange={handleChange}/>
                        <InputBox type="text" name="userName" placeHolder="User Name" value={formData.userName} required={true} autoComplete="off" handleChange={handleChange} className="shadow-mine"/>
                        <InputBox type="email" name="email" placeHolder="E-Mail" value={formData.email} required={true} autoComplete="off" handleChange={handleChange} className="shadow-mine"/>
                        <InputBox type="password" name="pwd" placeHolder="Password" value={formData.pwd} required={true} autoComplete="off" handleChange={handleChange} className="shadow-mine"/>
                        <InputBox type="password" name="cPwd" placeHolder="Confrim Password" value={formData.cPwd} required autoComplete="off" handleChange={handleChange} className="shadow-mine"/>
                        <button className='bg-linkColor z-40 rounded-md mt-2 p-1 w-full text-4xl font-medium border-4 hover:bg-primary-900 border-linkColor hover:text-linkColor shadow-mine'>
                            REGISTER
                        </button>
                    </form>

                    <div className='relative bottom-6 rounded-lg pt-10 pb-4 bg-primary-900 shadow-mine w-2/3 text-center text-white'>
                        <p>
                            ALREADY HAVE AN ACCOUNT?
                            <br />
                            <MyLink text='Sing In' goTo={ctx.navigateToLogin} />
                        </p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Register;
