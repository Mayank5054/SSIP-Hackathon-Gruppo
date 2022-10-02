import React from "react";

const MyLink = ({ text, goTo }) => {
    return (
        <>
            <span
                onClick={goTo}
                className='text-linkColor underline cursor-pointer'>
                {text}
            </span>
        </>
    );
};

export default MyLink;
