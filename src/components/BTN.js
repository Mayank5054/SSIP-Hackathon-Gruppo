import React from "react";

const BTN = (props) => {
    return (
        <button className='py-1 px-3 border-linkColor border-4 text-primary-900 text-lg rounded-xl bg-linkColor hover:bg-primary-900 hover:text-linkColor font-bold'>
            {props.text}
        </button>
    );
};

export default BTN;
