import React, { useState } from "react";
import People from "./People";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Popup_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "500px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "1%",
    zIndex: 1000,
};

const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
};

const PeoplePopup = ({ open, onClose, onToggle, toggleSelectArr }) => {
    if (!open) return null;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div style={OVERLAY_STYLES}>
                <div style={Popup_STYLES} className='flex flex-col items-end'>
                    <CloseOutlinedIcon onClick={onClose} />
                    {toggleSelectArr.length === 0 && <p className="text-bad">*Select department</p>}
                    {/* <Scrollbars style={{ width: '100%', height: 500 }}>  */}
                    <input className="my-3 p-3 w-full border-solid border-2 border-secondary-600 rounded" type="text" placeholder="Search..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
                    <div className='w-full h-[500px] overflow-y-scroll pr-2'>
                        {toggleSelectArr.filter(val => {
                            if(searchTerm === "")
                            return val;
                            else if(val.name.toLowerCase().includes(searchTerm.toLowerCase()))
                            return val;
                        }).map(
                            ({ id, img, name, role, isSelecte }) => (
                                <People
                                    key={id}
                                    id={id}
                                    imgUrl={img}
                                    name={name}
                                    role={role}
                                    handleToggle={onToggle}
                                    isSelected={isSelecte}
                                />
                            )
                        )}
                    </div>
                    {/* </Scrollbars> */}
                </div>
            </div>
        </>
    );
};

export default PeoplePopup;
