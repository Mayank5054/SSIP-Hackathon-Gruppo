import React, { useRef, useState, useEffect } from "react"
import axios from 'axios';
import MyLink from "./MyLink";


const Login = (props) => {
    const userRef = useRef();

    //errRef to show different error messages 
    const errRef = useRef();

    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);


    // to empty the error msg when user changes user name or password
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    const HandleSubmit = async (e) => {
        e.preventDefault();
        //backend integration here
        //according to statuscode of backend res error msg will change
        //currently it will show success for any value of email and passward 
        
            // handle01.php is run on localhost for our development after we post it on somewhere which can execute php
            // react js compiler doesnt execute php that's the matter .
            // so put handle01.php on c://xampp/htdocs
            // php-practise is my local folder you can add your link .
            axios.post("http://localhost/php_practise/handle01.php",{
                email:email,
                password:pwd
            }).then(
                (ed)=>{console.log("data posted succesfully");setSuccess(true);console.log(ed.data);}
                // access key word in ed.data 
                // if validation incorrect e.data returns string "LOGIN_CREDENTIALS_INVALID"
                // if authentication incorrect e.data = "USER_NOT_EXISTS"
                // if authentication approved e.data = "UNIQUE_ID"(Ex : #59522dhjgwgbcjheb)
            )
        setEmail('');
        setPwd('');
        
    }

    return (
        <div className="bg-[url('./../public/style01.png')] bg-fixed w-full flex justify-center bg-no-repeat bg-center h-screen">
            {success ? (
                <section className="flex justify-center flex-col">
                    <h1 className="text-white text-3xl font-medium">Logged in!</h1>
                    <br />
                    <MyLink text="Go to Home" goTo={props.goToHome}/>
                </section>
            ) : (
                <section className="inset-x-0 top-0 container w-1/2 flex justify-center items-center flex-col">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={HandleSubmit} className="flex flex-col gap-5 text-primary-900 font-medium items-center w-1/2 ">

                        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded p-3 text-primary-900 font-medium outline-primary-900 shadow-mine">
                            <option className="">Choose role</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

                        <input
                            type="email"
                            id="email"
                            placeholder="E-Mail"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required 
                            className="w-full rounded p-3 text-primary-900 font-medium outline-primary-900 shadow-mine"
                        />


                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="w-full rounded p-3 text-primary-900 font-medium outline-primary-900 shadow-mine"
                        />
                        <button className="bg-linkColor z-40 rounded-md mt-6 p-1 w-full text-4xl font-medium border-4 hover:bg-primary-900 border-linkColor hover:text-linkColor shadow-mine">LOGIN</button>
                    </form>

                    <div className="relative bottom-6 rounded-lg pt-10 pb-4 bg-primary-900 shadow-mine w-2/3 text-center text-white">
                        <p>
                            DON'T HAVE AN ACCOUNT?<br />
                            <MyLink text="Sing Up" goTo={props.goToRegister} />
                        </p>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Login