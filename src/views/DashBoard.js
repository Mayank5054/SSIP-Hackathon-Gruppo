import React, { useState } from "react";
import Nav from "../components/Nav";
import Heading from "../components/Heading";
import MyLink from "../components/MyLink";
import HostedMeetings from "../components/HostedMeetings";

const DashBoard = () => {
    const [showNumberOfData, setShowNumberOfData] = useState(4);
    const [showViewMore, setShowViewMore] = useState(true);

    const updateShowNumberOfData = () => {
        setShowNumberOfData((prevNumber) => prevNumber + 2);
    };
    const updateShowViewMore = (show) => {
        setShowViewMore(show);
    };

    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <section className='w-9/10 mx-auto relative mt-28 mb-10'>
                <Heading text='Dash Board' />

                <div className='flex justify-between mt-4'>
                    <div>
                        <h1 className='text-3xl text-secondary-700'>
                            Attendence Chart
                        </h1>
                    </div>
                    <div className='w-3/5'>
                        <h1 className='text-3xl text-secondary-700'>
                            Meetings Hosted By You
                        </h1>
                        <div>
                            <HostedMeetings
                                showNumberOfData={showNumberOfData}
                                updateShowViewMore={updateShowViewMore}
                            />
                        </div>
                        {showViewMore && (
                            <p className='relative text-center pr-6 mt-1'>
                                <span
                                    onClick={updateShowNumberOfData}
                                    className={`text-linkColor underline cursor-pointer`}>
                                    View More
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default DashBoard;
