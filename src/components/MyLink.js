import React from "react";

const MyLink = ({ text, goTo, className }) => {
    return (
        <>
            <span
                onClick={goTo}
                className={`text-linkColor underline cursor-pointer ${className}`}>
                {text}
            </span>
        </>
    );
};

export default MyLink;
