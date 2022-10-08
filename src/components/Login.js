import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import MyLink from "./MyLink";
import DropDownMenu from "./DropDownMenu";
import pathContext from "../context/path-context";
import InputBox from "./InputBox";

const Login = (props) => {
    localStorage.setItem("check_obj", "false");
    const ctx = useContext(pathContext);
    // const [geninfo,setGeninfo] = useState({IS_LOGGED_IN:'false',email:'',password:''});

    //instead of different useState combined the form data into one single object
    const [formData, setFormData] = useState({
        email: "",
        pwd: "",
        role: "",
    });
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // to empty the error msg when user changes user name or password
    useEffect(() => {
        setErrMsg("");
    }, [formData.email, formData.pwd]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        //backend integration here
        //according to statuscode of backend res error msg will change
        //currently it will show success for any value of email and passward

        // handle01.php is run on localhost for our development after we post it on somewhere which can execute php
        // react js compiler doesnt execute php that's the matter .
        // so put handle01.php on c://xampp/htdocs
        // php-practise is my local folder you can add your link .
        axios
            .post("http://localhost/php_practise/handle01.php", {
                email: formData.email,
                password: formData.pwd,
            })
            .then(
                (ed) => {
                    console.log("data posted succesfully");
                    setSuccess(true);
                    console.log(ed.data);
                }
                // access key word in ed.data
                // if validation incorrect e.data returns string "LOGIN_CREDENTIALS_INVALID"
                // if authentication incorrect e.data = "USER_NOT_EXISTS"
                // if authentication approved e.data = "UNIQUE_ID"(Ex : #59522dhjgwgbcjheb)
            );

        setFormData({
            email: "",
            pwd: "",
            role: "",
        });
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
                    <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
                    <form
                        onSubmit={HandleSubmit}
                        className='flex flex-col gap-5 text-primary-900 font-medium items-center w-1/2 '>
                        <DropDownMenu
                            className='w-full rounded p-4 text-primary-900 font-medium outline-primary-900 shadow-mine'
                            name='role'
                            value={formData.role}
                            text='Choose Your Role'
                            handleChange={handleChange}
                        />

                        <InputBox
                            type='email'
                            name='email'
                            value={formData.email}
                            handleChange={handleChange}
                            required={true}
                            autoComplete='off'
                            placeHolder='E-Mail'
                            className='shadow-mine'
                        />
                        <InputBox
                            type='password'
                            name='pwd'
                            value={formData.pwd}
                            handleChange={handleChange}
                            required={true}
                            autoComplete='off'
                            placeHolder='Password'
                            className='shadow-mine'
                        />

                        <button className='bg-linkColor z-40 rounded-md mt-2 p-1 w-full text-4xl font-medium border-4 hover:bg-primary-900 border-linkColor hover:text-linkColor shadow-mine'>
                            LOGIN
                        </button>
                    </form>

                    <div className='relative bottom-6 rounded-lg pt-10 pb-4 bg-primary-900 shadow-mine w-2/3 text-center text-white'>
                        <p>
                            DON'T HAVE AN ACCOUNT?
                            <br />
                            <MyLink
                                text='Sing Up'
                                goTo={ctx.navigateToRegister}
                            />
                        </p>
                    </div>
                </section>
            )}
        </div>
    );
};

export default Login;
