
import React from "react";
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
const Heading = ({ text }) => {
    return (
        <div className="flex ">
            <KeyboardDoubleArrowLeftOutlinedIcon sx={{color: "#EFC6C6", fontSize: "2.5rem"}} />
            <h1 className='text-3xl text-secondary-800'>{text}</h1>
        </div>
    );
};

export default Heading;
