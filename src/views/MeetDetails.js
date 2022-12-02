import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../components/Heading.js";
import Nav from "../components/Nav";
import allMeetings from "../data/allMeetings.json";

const MeetDetails = () => {
    const id = useParams().meetid.slice(1);
    console.log(id, typeof id, "from details");
    console.log(allMeetings[id]);
    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <section className='w-9/10 mx-auto relative mt-28 mb-10'>
                <Heading text={allMeetings[id].subject} />
                <div className='grid grid-cols-3 gap-5 w-3/4 my-2'>
                    <div>
                        <h1 className='text-2xl text-secondary-700'>Date</h1>
                        <p className='text-secondary-700'>
                            {allMeetings[id].date}
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-secondary-700'>Time</h1>
                        <p className='text-secondary-700'>
                            {allMeetings[id].time}
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-secondary-700'>Venue</h1>
                        <p className='text-secondary-700'>
                            {allMeetings[id].venue}
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-secondary-700'>
                            Organizer
                        </h1>
                        <p className='text-secondary-700'>
                            {allMeetings[id].organizer}
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl text-secondary-700'>Mode </h1>
                        <p className='text-secondary-700'>
                            {allMeetings[id].join}
                        </p>
                    </div>
                </div>

                <h1 className='text-3xl text-secondary-800 mt-8'>
                    {" "}
                    Subject Of Discussion
                </h1>
                <p className='text-secondary-700 w-3/4'>
                    {allMeetings[id].summary}
                </p>

                <h1 className='text-3xl text-secondary-800 mt-8'>Documents</h1>
                <div className='flex item-center column my-2'>
                    <img
                        src='https://img.icons8.com/ios-glyphs/24/C88F8F/pdf.png'
                        alt='PDF'
                    />
                    <p className='text-secondary-700 pl-2'>Summary.pdf</p>
                </div>
                <div className='flex item-center column my-2'>
                    <img
                        src='https://img.icons8.com/ios-glyphs/24/C88F8F/ms-word.png'
                        alt='PDF'
                    />
                    <p className='text-secondary-700 pl-2'>Agenda .word</p>
                </div>
                <div className='flex item-center column my-2'>
                    <img
                        src='https://img.icons8.com/ios-glyphs/24/C88F8F/ms-excel.png'
                        alt='PDF'
                    />
                    <p className='text-secondary-700 pl-2'>Invitations.xls</p>
                </div>
            </section>
        </>
    );
};
export default MeetDetails;
