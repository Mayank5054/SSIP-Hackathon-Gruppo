import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import history from "../data/history.json";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const historyAccordians = [];
    for (let e in history) {
        console.log(history[e]);
        historyAccordians.push(
            <AccordionLayout
                title={history[e].subject}
                date={history[e].date}
                time={history[e].time}
                attended={history[e].attended}
                activeIndex={activeIndex}
                index={history[e].id}
                duration={history[e].duration}
                agenda={history[e].agenda}
                summary_file={history[e].summary_file}
                report={history[e].report}
                summary={history[e].summary}
                organizer={history[e].organizer}
                setActiveIndex={setActiveIndex}
            />
        );
    }
    return (
        <div className='flex flex-col justify-center items-center pr-2'>
            {historyAccordians}
        </div>
    );
};
export default Accordion;
