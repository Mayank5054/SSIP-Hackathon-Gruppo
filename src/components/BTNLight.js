import React from "react";

const BTNLight = (props) => {
    return (
        <button className='py-1 px-3 border-linkColor border-2 hover:text-primary-900 rounded-lg hover:bg-linkColor bg-primary-900 text-linkColor font-bold'>
            {props.text}
        </button>
    );
};

export default BTNLight;
