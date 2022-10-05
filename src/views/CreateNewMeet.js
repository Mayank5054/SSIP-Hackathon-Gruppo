import React, {useState} from "react";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import DropDownMenu from "../components/DropDownMenu";
import People from "../components/People";
import PeopleData from "../data/peopleData.json"
import DatePickerBox from "../components/DatePickerBox";
import TimePickerBox from "../components/TimePickerBox";
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';


function CreateNewMeet() {

    const [title, setTitle] = useState('');
    const [venue, setVenue] = useState('');
    const [department, setDepartment] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date().toLocaleString());
    function setTitleFun(e) {
        setTitle(e.target.value);
    }


    function setVenueFun(e){
        setVenue(e.target.value);
    }

    function setDepartmentFun(e){
        setDepartment(e.target.value);
    }

    function setDateFun(e){
        setDate(e);
    }

    function setTimeFun(e){
        setTime(e);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setTitle("");
        setVenue("");
        setTime(new Date().toLocaleString());
        setDate(new Date());
        setDepartment("");
    };
    
    return (
        <>
            <Nav showBg={false} isLoggedIn={true}/>
            <div className="bg-[url('./../public/images/style02.png')] bg-no-repeat bg-right bg-fixed w-full h-screen">
            <section className="w-9/10 mx-auto relative mt-40 mb-10">
                <Heading text="Create A New Meet"/>
                    <form className="grid grid-cols-12 gap-4 mt-5" onSubmit={handleSubmit}>
                        <div className="col-start-2 col-span-5 flex flex-col">
                        <InputBox className="my-2" type="text" value={title} placeHolder="Meet Title" handleChange={setTitleFun}/>
                        
                        <DatePickerBox value={date} handleChange={setDateFun} />
                        <TimePickerBox value={time} handleChange={setTimeFun} />

                        <InputBox className="my-2" type="text" value={venue} placeHolder="Venue" handleChange={setVenueFun}/>
                        <DropDownMenu className="my-2 w-full rounded p-4 text-primary-900 font-medium outline-primary-900" value={department} text="Add Department" handleChange={setDepartmentFun} />
                        </div>
                        <div className="col-start-8 col-span-4 bg-primary-900/50 shadow-mine p-4 rounded">
                            <a href="#" className="text-primary-200 text-2xl items-center"><LibraryAddOutlinedIcon /> Click to invite people</a>
                            {Object.keys(PeopleData).map((id) => <People imgUrl={PeopleData[id].img} name={PeopleData[id].name} role={PeopleData[id].role}/>)}
                            
                        </div>
                        <button className="col-start-5 col-span-5 bg-linkColor z-40 rounded-md mt-6 p-1 w-full text-4xl font-medium border-4 hover:bg-primary-900 border-linkColor hover:text-linkColor shadow-mine">Schedule A New Meet</button> 
                    </form>
            </section>
            </div>
            
        </>
    )
}

export default CreateNewMeet;


















