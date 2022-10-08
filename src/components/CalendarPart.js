import React, { useState } from "react";
import Calendar from "react-calendar";
import TodayInfo from "./TodayInfo";

import month from "../data/month.json";

const CalendarPart = () => {
    const [value, setValue] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(value.getMonth());

    const handleActiveStartDateChange = () => {
        const label = document
            .querySelector(".react-calendar__navigation__label")
            .textContent.slice(0, -5);

        setCurrentMonth(month[label]);
    };
    return (
        <>
            <div className='flex justify-evenly items-center'>
                <div className='text-center w-2/5'>
                    <h1 className='text-3xl text-secondary-800'>
                        {month[(parseInt(currentMonth) - 1 + 12) % 12]}
                    </h1>
                    <p className='text-linkColor'>7 meetings attended</p>
                </div>
                <div className='w-1/5'>
                    <Calendar
                        onChange={setValue}
                        value={value}
                        onActiveStartDateChange={handleActiveStartDateChange}
                    />
                </div>
                <div className='text-center w-2/5'>
                    <h1 className='text-3xl text-secondary-800'>
                        {month[(parseInt(currentMonth) + 1) % 12]}
                    </h1>

                    <p className='text-linkColor'>
                        14 meets in {month[(parseInt(currentMonth) + 1) % 12]}
                    </p>
                </div>
            </div>
            <div className='w-1/2 rounded-2xl shadow-mine m-auto my-6'>
                <p className='text-right text-2xl text-secondary-800 py-3 px-6'>
                    {value.getDate() +
                        " " +
                        month[value.getMonth()] +
                        " " +
                        value.getFullYear()}
                </p>
                <TodayInfo />
            </div>
        </>
    );
};

export default CalendarPart;
