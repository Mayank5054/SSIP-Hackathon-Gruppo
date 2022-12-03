import React from "react";

function InputBox(props) {
    return (
        <input
            name={props.name}
            required={props.required}
            autoComplete={props.autoComplete}
            className={`w-full rounded p-2 text-primary-900 font-medium outline-primary-900 ${props.className}`}
            type={props.type}
            value={props.value}
            placeholder={props.placeHolder}
            onChange={props.handleChange}></input>
    );
}

export default InputBox;
