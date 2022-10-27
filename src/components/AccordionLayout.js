import React from "react";
import KeyboardDoubleArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowLeftOutlined";
import MyLink from "./MyLink";

const AccordionLayout = ({
    title,
    date,
    time,
    attended,
    activeIndex,
    duration,
    agenda,
    summary_file,
    report,
    summary,
    organizer,
    index,
    setActiveIndex,
}) => {
    const handleSetIndex = (index) => {
        if (activeIndex === index) {
            setActiveIndex(-1);
        }
        activeIndex !== index && setActiveIndex(index);
    };

    return (
        <>
            <div
                onClick={() => handleSetIndex(index)}
                className='grid grid-cols-7 gap-2 items-center text-left w-full py-2 rounded-t bg-secondary-600 opacity-0.3'>
                <div className='flex items-center justify-center whitespace-nowrap overflow-hidden text-ellipsis'>
                    {activeIndex === index ? (
                        <div className='-rotate-90 whitespace-nowrap overflow-hidden text-ellipsis'>
                            <KeyboardDoubleArrowLeftOutlinedIcon
                                sx={{ color: "#EFC6C6", fontSize: "2.5rem" }}
                            />
                        </div>
                    ) : (
                        <div className='rotate-180 whitespace-nowrap overflow-hidden text-ellipsis'>
                            <KeyboardDoubleArrowLeftOutlinedIcon
                                sx={{ color: "#EFC6C6", fontSize: "2.5rem" }}
                            />
                        </div>
                    )}
                </div>

                <div className='text-white col-span-2 whitespace-nowrap overflow-hidden text-ellipsis'>
                    {title}
                </div>
                <div className='text-white whitespace-nowrap overflow-hidden text-ellipsis'>
                    {date}
                </div>
                <div className='text-white whitespace-nowrap overflow-hidden text-ellipsis'>
                    {time}
                </div>
                {attended === "true" ? (
                    <div className='text-good whitespace-nowrap overflow-hidden text-ellipsis'>
                        Attended
                    </div>
                ) : (
                    <div className='text-bad whitespace-nowrap overflow-hidden text-ellipsis'>
                        Missed
                    </div>
                )}
                <div className='text-white whitespace-nowrap overflow-hidden text-ellipsis'>
                    Discussion
                </div>
            </div>

            {activeIndex === index && (
                <div className='grid grid-cols-4 gap-6 rounded-b px-24 pb-4 bg-secondary-600'>
                    <div>
                        <p className='text-xl text-secondary-900'>Duration</p>
                        <p className='text-secondary-800'>{duration}</p>
                    </div>
                    <div>
                        <p className='text-xl text-secondary-900'>
                            Agenda Topic
                        </p>
                        <p>
                            <MyLink text={"Download File"} />
                        </p>
                    </div>
                    <div>
                        <p className='text-xl text-secondary-900'>Summary</p>
                        <p>
                            <MyLink text={"Download File"} />
                        </p>
                    </div>
                    <div>
                        <p className='text-xl text-secondary-900'>Report</p>
                        <p>
                            <MyLink text={"Download File"} />
                        </p>
                    </div>
                    <div className='col-span-3'>
                        <p className='text-secondary-800'>{summary}</p>
                    </div>
                    <div>
                        <p className='text-xl text-secondary-900'>Origanizer</p>
                        <p className='text-secondary-800'>{organizer}</p>
                    </div>
                </div>
                // <div className="shadow-3xl flex w-1/2 rounded-2xl  bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 opacity-1 p-4 mb-6 text-cyan-50">
                //   {children}
                // </div>
            )}
        </>
    );
};

export default AccordionLayout;
