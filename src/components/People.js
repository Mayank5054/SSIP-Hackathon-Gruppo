import React from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

function People(props) {
    const SELECTED_STYLES = {
        backgroundColor: props.isSelected ? "#FFC700" : "#EFC6C6",
    };
    return (
        <div
            onClick={() => props.handleToggle(props.id)}
            className='flex text-primary-900 p-4 mb-3 bg-primary-200 rounded w-full'
            style={SELECTED_STYLES}>
            <img
                className='w-12 rounded-full mr-5'
                src={props.imgUrl}
                alt='userImage'
            />
            <div>
                <h3 className='text-xl'>{props.name}</h3>
                <p className='text-small'>{props.role}</p>
            </div>
            <div>{props.isSelected && <DoneOutlinedIcon />}</div>
        </div>
    );
}

export default People;
