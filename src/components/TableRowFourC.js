import React, { useContext } from "react";
import MyLink from "./MyLink";
import pathContext from "../context/path-context";

const TableRowFourC = (props) => {
    const ctx = useContext(pathContext);

    const handleClick = (data) => {
        console.log(data, "fron handle click");
        ctx.navigateToMeetsDetail(data);
    };
    return (
        <div className='grid grid-cols-12 w-full h-14 text-secondary-700 justify-center items-center pl-6 my-4 rounded-lg shadow-table'>
            <div>{props.id + "."}</div>
            <div className='col-span-7'>
                <span
                    className='cursor-pointer underline'
                    onClick={() => handleClick(props.id)}>
                    {props.subject}
                </span>
            </div>
            <div className='col-span-2'>{props.time}</div>
            {props.join === "Join Here" ? (
                <div className='col-span-2'>
                    <a
                        href='https://meet.google.com/'
                        target='_blank'
                        rel='noreferrer'>
                        <MyLink text={props.join} />
                    </a>
                </div>
            ) : (
                <div className='col-span-2'>{props.join}</div>
            )}
        </div>
    );
};

export default TableRowFourC;
