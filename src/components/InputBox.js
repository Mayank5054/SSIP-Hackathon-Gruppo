import React from "react"

function InputBox(props) {
    return(
        <input className={`w-full rounded p-4 text-primary-900 font-medium outline-primary-900 ${props.className}`} type={props.type} value={props.value} placeholder={props.placeHolder} onChange={props.handleChange}></input>
    )
}


export default InputBox;


















