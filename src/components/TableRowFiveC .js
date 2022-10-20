import React, { useContext } from "react";
import MyLink from "./MyLink";
import pathContext from "../context/path-context";

const TableRowFiveC = (props) => {
    const ctx = useContext(pathContext);

    const handleClick = (data) => {
        console.log(data, "fron handle click");
        ctx.navigateToMeetsDetail(data);
    };

    return (
        <div className='grid grid-cols-12 gap-1 w-full h-14 text-secondary-700 justify-center items-center pl-6 mb-4 rounded-lg shadow-table'>
            <div>{props.id + "."}</div>
            <div className='col-span-5 overflow-hidden text-ellipsis'>
                <span
                    className='cursor-pointer underline whitespace-nowrap'
                    onClick={() => handleClick(props.id)}>
                    {props.subject}
                </span>
            </div>
            <div className='col-span-2'>{props.date}</div>
            <div className='col-span-2'>{props.time}</div>
            {props.join === "Join Here" ? (
                <div className='col-span-2 overflow-hidden text-ellipsis'>
                    <a
                        href='https://meet.google.com/'
                        target='_blank'
                        rel='noreferrer'>
                        <MyLink text={props.join} />
                    </a>
                </div>
            ) : (
                <div className='col-span-2 whitespace-nowrap overflow-hidden text-ellipsis'>
                    {props.join}
                </div>
            )}
        </div>
    );
};

export default TableRowFiveC;
