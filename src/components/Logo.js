import React, { useContext } from "react";
import pathContext from "../context/path-context";

const Logo = () => {
    const ctx = useContext(pathContext);
    return (
        <span
            onClick={ctx.navigateToHome}
            className='font-gruppo px-10 text-white text-5xl hover:cursor-pointer'>
            Gruppo
        </span>
    );
};

export default Logo;
