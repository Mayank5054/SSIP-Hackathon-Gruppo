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
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    };

    if (!open) return null;

    return (
        <>
            <div style={OVERLAY_STYLES}>
                <div style={Popup_STYLES} className='flex flex-col items-end'>
                    <CloseOutlinedIcon onClick={onClose} />
                    <input
                        name='searchPeople'
                        autoComplete='true'
                        className={`w-full rounded p-4 text-primary-900 border my-3 outline-primary-900 border-primary-900`}
                        type='text'
                        value={searchValue}
                        placeholder='Search people by name or department name'
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                    {/* <Scrollbars style={{ width: '100%', height: 500 }}>  */}
                    <div className='w-full h-[500px] overflow-y-scroll pr-2'>
                        {toggleSelectArr
                            .filter((people) => {
                                return (
                                    people.name
                                        .toLowerCase()
                                        .indexOf(
                                            searchValue.toLocaleLowerCase()
                                        ) !== -1 ||
                                    people.department
                                        .toLowerCase()
                                        .indexOf(
                                            searchValue.toLocaleLowerCase()
                                        ) !== -1
                                );
                            })
                            .map(({ id, img, name, role, isSelecte }) => (
                                <People
                                    key={id}
                                    id={id}
                                    imgUrl={img}
                                    name={name}
                                    role={role}
                                    handleToggle={onToggle}
                                    isSelected={isSelecte}
                                />
                            ))}
                    </div>
                    {/* </Scrollbars> */}
                </div>
            </div>
        </>
    );
};

export default PeoplePopup;
