import React, { useRef, useState, useEffect } from "react"
import MyLink from "./MyLink";


const Register = (props) => {
    const userRef = useRef();

    //errRef to show different error messages 
    const errRef = useRef();

    const [role, setRole] = useState('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [cPwd, setCPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);


    // to empty the error msg when user changes user name or password
    useEffect(() => {
        setErrMsg('');
    }, [email, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        //backend integration here
        //according to statuscode of backend res error msg will change
        //currently it will show success for any value of email and passward 
        //check if both password is same or not in back-end
        setUser('');
        setEmail('');
        setPwd('');
        setCPwd('');
        setSuccess(true);
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
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-primary-900 font-medium items-center w-1/2 ">

                        <select value={role} required onChange={(e) => setRole(e.target.value)} className="w-full rounded p-3 text-primary-900 font-medium outline-primary-900 shadow-mine">
                            <option className="">Choose role</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

                        <input
                            type="text"
                            id="userName"
                            placeholder="User Name"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required 
                            className="w-full rounded p-3 text-primary-900 font-medium outline-primary-900 shadow-mine"
                        />

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

                        <input
                            type="password"
                            id="confrimPassword"
                            placeholder="Confrim Password"
                            onChange={(e) => setCPwd(e.target.value)}
                            value={cPwd}
                            required
                            className="w-full rounded p-3 text-primary-900 font-medium outline-primary-900 shadow-mine"
                        />

                        <button className="bg-linkColor z-40 rounded-md mt-6 p-1 w-full text-4xl font-medium border-4 hover:bg-primary-900 border-linkColor hover:text-linkColor shadow-mine">REGISTER</button>
                    </form>

                    <div className="relative bottom-6 rounded-lg pt-10 pb-4 bg-primary-900 shadow-mine w-2/3 text-center text-white">
                        <p>
                            ALREADY HAVE AN ACCOUNT?<br />
                            <MyLink text="Sing In" goTo={props.goToLogin}/>
                        </p>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Register;