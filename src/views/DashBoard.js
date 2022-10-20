import React, { useState, useEffect, useContext } from "react";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import HostedMeetings from "../components/HostedMeetings";
import history from "../data/history.json";
import monthData from "../data/month.json";
import pathContext from "../context/path-context";

const DashBoard = () => {
    const ctx = useContext(pathContext);
    const [heights, setHeights] = useState([
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ]);
    const [maxAttended, setMaxAttended] = useState(0);
    const currentMonth = new Date().getMonth();
    useEffect(() => {
        let meetingAttended = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Object.keys(history).forEach((key) => {
            const month = history[key].date.slice(3, 5);
            meetingAttended[parseInt(month) - 1]++;

            setHeights((prev) => {
                prev[parseInt(month)]++;
                return prev;
            });
        });

        const meetingAttendedFinal = meetingAttended.filter((ele, indx) => {
            console.log(ele, indx);
            setMaxAttended((prev) => {
                return prev < ele ? ele : prev;
            });
            return (
                indx <= parseInt(currentMonth) &&
                indx > parseInt(currentMonth) - 5
            );
        });
        setHeights(meetingAttendedFinal);
    }, []);

    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <section className='w-9/10 mx-auto relative mt-28'>
                <Heading text='Dash Board' />

                <div className='mt-4'>
                    <div className='fixed'>
                        <h1 className='text-3xl text-secondary-700'>
                            Attendence Chart
                        </h1>
                        <div className='grid grid-cols-5 items-end gap-3 h-64 mt-4'>
                            <div
                                className='flex justify-center items-center bg-secondary-700 font-bold text-primary-900 w-12'
                                style={{
                                    height: `${
                                        (100 * heights[0]) / maxAttended
                                    }%`,
                                }}>
                                {heights[0]}
                            </div>
                            <div
                                className='flex justify-center items-center bg-secondary-700 font-bold text-primary-900 w-12'
                                style={{
                                    height: `${
                                        (100 * heights[1]) / maxAttended
                                    }%`,
                                }}>
                                {heights[1]}
                            </div>
                            <div
                                className='flex justify-center items-center bg-secondary-700 font-bold text-primary-900 w-12'
                                style={{
                                    height: `${
                                        (100 * heights[2]) / maxAttended
                                    }%`,
                                }}>
                                {heights[2]}
                            </div>
                            <div
                                className='flex justify-center items-center bg-secondary-700 font-bold text-primary-900 w-12'
                                style={{
                                    height: `${
                                        (100 * heights[3]) / maxAttended
                                    }%`,
                                }}>
                                {heights[3]}
                            </div>
                            <div
                                className='flex justify-center items-center bg-secondary-700 font-bold text-primary-900 w-12'
                                style={{
                                    height: `${
                                        (100 * heights[4]) / maxAttended
                                    }%`,
                                }}>
                                {heights[4]}
                            </div>
                        </div>
                        <div className='self-end grid grid-cols-5 gap-3'>
                            <p className='text-secondary-700 w-12 overflow-hidden text-ellipsis text-center'>
                                {monthData[currentMonth - 4]}
                            </p>
                            <p className='text-secondary-700 w-12 overflow-hidden text-ellipsis text-center'>
                                {monthData[currentMonth - 3]}
                            </p>
                            <p className='text-secondary-700 w-12 overflow-hidden text-ellipsis text-center'>
                                {monthData[currentMonth - 2]}
                            </p>
                            <p className='text-secondary-700 w-12 overflow-hidden text-ellipsis text-center'>
                                {monthData[currentMonth - 1]}
                            </p>
                            <p className='text-secondary-700 w-12 overflow-hidden text-ellipsis text-center'>
                                {monthData[currentMonth]}
                            </p>
                        </div>
                        <p className='text-center mt-4'>
                            <button
                                className='py-1 px-3 border-linkColor border-4 text-primary-900 text-lg rounded-xl bg-linkColor hover:bg-primary-900 hover:text-linkColor font-bold'
                                onClick={() => ctx.navigateToHistory()}>
                                View Full Text
                            </button>
                        </p>
                    </div>
                    <div className='ml-[40%] w-3/5'>
                        <h1 className='text-3xl text-secondary-700'>
                            Meetings Hosted By You
                        </h1>
                        <div className='h-[425px] overflow-y-scroll pr-2 mt-4'>
                            <HostedMeetings />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DashBoard;
