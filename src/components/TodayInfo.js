import React from "react";

const TodayInfo = () => {
    return (
        <div className='flex'>
            <div className='text-secondary-700 px-6'>
                <p className='text-2xl mb-3'>Today's Schedule</p>
                <div className='pb-4'>
                    <p className='underline cursor-pointer'>
                        Commisinor meet at 12:00 PM
                    </p>
                    <p className='underline cursor-pointer'>
                        Muncipal Commisionar meet at 4:00 PM
                    </p>
                </div>
            </div>
            <div className='text-secondary-700 px-6'>
                <p className='text-2xl mb-3'>Weather Expectations</p>
                <div className='pb-4'>
                    <p>Light Rain</p>
                    <p>Rain possible at 11:30 AM</p>
                </div>
            </div>
        </div>
    );
};

export default TodayInfo;
