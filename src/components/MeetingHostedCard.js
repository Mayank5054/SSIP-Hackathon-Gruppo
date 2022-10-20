import React from "react";
import hostedMeetings from "../data/hostedMeetings.json";
import BTNLight from "../components/BTNLight";

const MeetingHostedCard = (props) => {
    return (
        <div className='bg-secondary-600 p-4 rounded-lg'>
            <div className='flex'>
                <img
                    className='h-14 w-14 rounded-full mr-4'
                    src={hostedMeetings["1"].img}
                    alt='profile'
                />
                <div className='w-full'>
                    <p className='text-xl text-secondary-700 w-4/5 overflow-hidden whitespace-nowrap text-ellipsis'>
                        {props.data.subject}
                    </p>
                    <div className='flex flex-wrap justify-between items-center'>
                        <span className='text-sm text-secondary-700'>
                            {props.data.time}
                        </span>
                        <span className='text-sm text-secondary-700'>
                            {props.data.date}
                        </span>
                        <span className='text-sm text-secondary-700'>
                            {props.data.join}
                        </span>
                    </div>
                </div>
            </div>
            <hr className='border-secondary-700 my-2' />
            <p className='text-sm text-secondary-700 w-4/5 overflow-hidden whitespace-nowrap text-ellipsis'>
                {Object.keys(props.data.attendees).length} people has attended
                the meet
            </p>
            <div className='flex my-1'>
                {Object.keys(props.data.attendees).map((key) => {
                    return (
                        <img
                            key={key}
                            style={{ right: `${key * 5}px` }}
                            className={`relative h-[25px] w-[25px] rounded-full`}
                            src={props.data.attendees[key]}
                            alt='attendees'
                        />
                    );
                })}
            </div>
            <div className='flex justify-center items-center mt-1'>
                <BTNLight text='Update Details' />
            </div>
        </div>
    );
};

export default MeetingHostedCard;
