import React, {useRef, useState, useEffect} from "react"


const Login = () => {
    const userRef = useRef();

    //errRef to show different error messages 
    const errRef = useRef();

    const [role, setRole] = useState('');
    const [user, setUser] = useState(''); //user is used for email
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    useEffect(() => {
        userRef.current.focus();
    }, []);


    // to empty the error msg when user changes user name or password
    useEffect(() => {
        setErrMsg('');
    }, [user,pwd]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('');
        setPwd('');
        setSuccess(true);
    }

    return (
        <div className="bg-[url('./../public/style01.png')] w-full h-full flex justify-center bg-no-repeat bg-center">
            {success ? (
                <section>
                    <h1>Logged in!</h1>
                    <br />
                    <p>
                    {/* Router Link of Home page*/}
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className="inset-x-0 top-0 container w-1/2 flex justify-center items-center flex-col">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center w-1/2">

                        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full rounded p-3">
                            <option className="">Choose role</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        {/* <label htmlFor="username">E-Mail:</label> */}
                        <input
                            type="email"
                            id="username"
                            placeholder="E-Mail"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            className="w-full rounded p-3"
                        />

                        {/* <label htmlFor="password">Password:</label> */}
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            className="w-full rounded p-3"
                        />
                        <button className="bg-amber-400 z-40 rounded mt-8 p-2 w-full text-4xl font-medium">LOGIN</button>
                    </form>
            
                    <div className="absolute bottom-40 rounded-lg pt-10 pb-4 bg-stone-800 w-1/3 text-center text-white">
                            <p>
                                DON'T HAVE AN ACCOUNT?<br />
                                <span className="underline text-rose-200">
                                    {/* Router link of register page */}
                                    <a href="#">Sign Up</a>
                                </span>
                            </p>
                    </div>
                    
                    
                </section>
            )}
        </div>
    )
}

export default Login


















