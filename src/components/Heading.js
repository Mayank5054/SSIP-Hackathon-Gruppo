import React from "react";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
const Heading = (props) => {
    return (
        <div className='flex '>
            <KeyboardDoubleArrowLeftOutlinedIcon
                sx={{ color: "#EFC6C6", fontSize: "2.5rem" }}
            />
            <h1 className='text-3xl text-secondary-800'>{props.text}</h1>
        </div>
    );
};

export default Heading;
