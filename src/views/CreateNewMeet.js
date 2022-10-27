import React, { useState } from "react";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import People from "../components/People";
import PeopleData from "../data/peopleData.json";
import DatePickerBox from "../components/DatePickerBox";
import TimePickerBox from "../components/TimePickerBox";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import PeoplePopup from "./../components/PeoplePopup";
// import MultiSelectDropdown from "../components/MultiSelectDropdown";
function CreateNewMeet() {
    //in DB extract date as time.toLocaleDateString() (because while selecting date it will select current time by default)
    //in DB extract time as time.toLocaleTimeString() (because while selecting time it will select current date by default)
    const [formData, setFormData] = useState({
        title: "",
        venue: "",
        date: new Date(),
        time: new Date(),
    });
    const [mode, setMode] = useState("offline");

    //handleChange function for formData
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    //handle change function for date and time
    function setDateFun(e) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            date: e,
        }));
    }
    function setTimeFun(e) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            time: e,
        }));
    }

    // const [dept, setDept] = useState([]);

    //handle change function for dept
    // const handleDeptFunc = (event) => {
    //     const {
    //         target: { value },
    //     } = event;
    //     setDept(
    //         // On autofill we get a stringified value.
    //         typeof value === "string" ? value.split(",") : value
    //     );
    // };

    //isOpen for popup menu state
    const [isOpen, setIsOpen] = useState(false);

    // const [PeopleDataByDept, setPeopleDataByDept] = useState(
    //     filterPeopleData()
    // );
    //function to filter people (select people by selected department name)
    // function filterPeopleData() {
    //     return PeopleData.filter((people) => dept.includes(people.department));
    // }

    //for selecte or unselecte people
    const [toggleSelect, setToggleSelect] = useState(newToggleSelectData());
    //addind isSelecte for every object of people filtered by department name
    function newToggleSelectData() {
        const data = [];

        PeopleData.map((people) => {
            data.push({
                ...people,
                isSelecte: false,
            });
            return null;
        });
        return data;
    }

    //handle change function for toggleSelect
    function handleToggle(id) {
        setToggleSelect(
            toggleSelect.map((data) => {
                return data.id === id
                    ? { ...data, isSelecte: !data.isSelecte }
                    : data;
            })
        );

        console.log("Toggle button clicked");
    }

    //when dept arr change
    // useEffect(() => {
    //     setPeopleDataByDept(filterPeopleData());
    // }, [dept]);

    //when PeopleDataByDept arr change
    // useEffect(() => {
    //     setToggleSelect(newToggleSelectData());
    // }, [PeopleDataByDept]);

    //handle submit function (final submit function)
    //integrate Backend in this function
    const [selectedPeople, setSelectedPeople] = useState([]);
    const handleSubmit = async (e) => {
        console.log(formData);
        e.preventDefault();
        setSelectedPeople(
            toggleSelect.filter((person) => {
                return person.isSelecte;
            })
        );
        setFormData({
            title: "",
            venue: "",
            date: new Date(),
            time: new Date(),
        });
        // setDept([]);
        console.log(selectedPeople);
    };

    function onChangeMode(event) {
        setMode(event.target.value);
        console.log(event.target.value);
    }

    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            {/* <div className="bg-[url('./../public/images/style02.png')] bg-no-repeat bg-right bg-fixed w-full h-screen"> */}
            <section className='w-9/10 mx-auto relative mt-28'>
                <Heading text='Create A New Meet' />
                <form
                    className='grid grid-cols-12 gap-4 mt-5'
                    onSubmit={handleSubmit}>
                    <div className='col-start-2 col-span-5 flex flex-col'>
                        <InputBox
                            className='my-2'
                            type='text'
                            name='title'
                            value={formData.title}
                            placeHolder='Meet Title'
                            handleChange={handleChange}
                            required={true}
                        />

                        <DatePickerBox
                            name='date'
                            value={formData.date}
                            handleChange={setDateFun}
                        />
                        <TimePickerBox
                            name='time'
                            value={formData.time}
                            handleChange={setTimeFun}
                        />

                        <InputBox
                            className='my-2'
                            type='text'
                            name='venue'
                            value={formData.venue}
                            placeHolder='Venue'
                            handleChange={handleChange}
                        />
                        <div onChange={onChangeMode}>
                            <span>
                                <label
                                    htmlFor='online'
                                    className='text-secondary-800'>
                                    <input
                                        className='m-2'
                                        value='online'
                                        type='radio'
                                        name='mode'
                                        checked={mode === "online"}
                                    />
                                    Online
                                </label>
                            </span>
                            <span>
                                <label
                                    htmlFor='offline'
                                    className='text-secondary-800'>
                                    <input
                                        className='m-2'
                                        value='offline'
                                        type='radio'
                                        name='mode'
                                        checked={mode === "offline"}
                                    />
                                    Offline
                                </label>
                            </span>
                        </div>

                        {/* <MultiSelectDropdown
                                text='Add Department'
                                handleChange={handleDeptFunc}
                                value={dept}
                                options={["ABc", "XYZ"]}
                            /> */}
                    </div>

                    <div className='col-start-8 col-span-4 bg-primary-900/50 shadow-mine p-4 rounded'>
                        <div
                            className='text-primary-200 text-2xl items-center mb-3 cursor-pointer'
                            onClick={() => setIsOpen(true)}>
                            <LibraryAddOutlinedIcon />
                            Click to invite people
                        </div>

                        <PeoplePopup
                            open={isOpen}
                            onClose={() => setIsOpen(false)}
                            onToggle={handleToggle}
                            toggleSelectArr={toggleSelect}
                        />

                        {/* <Scrollbars style={{ width: "100%", height: 300 }}> */}

                        <div className='w-full h-[300px] overflow-y-scroll pr-2'>
                            {toggleSelect.map(
                                ({ id, img, name, role, isSelecte }) =>
                                    isSelecte && (
                                        <People
                                            key={id}
                                            id={id}
                                            imgUrl={img}
                                            name={name}
                                            role={role}
                                        />
                                    )
                            )}
                        </div>
                        {/* </Scrollbars> */}
                    </div>
                    <button className='col-start-5 col-span-5 text-primary-900 bg-linkColor z-40 rounded-md mt-6 p-1 w-full text-4xl font-medium border-4 hover:bg-primary-900 border-linkColor hover:text-linkColor shadow-mine'>
                        Schedule A New Meet
                    </button>
                </form>
            </section>
            {/* </div> */}
        </>
    );
}

export default CreateNewMeet;
