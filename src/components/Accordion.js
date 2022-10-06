import React, { useState } from "react";
import AccordionLayout from "./AccordionLayout";
import allMeetings from "../data/allMeetings.json";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const allMeetingsAccordians = [];
  for (let e in allMeetings) {
    console.log(allMeetings[e]);
    allMeetingsAccordians.push(
      <AccordionLayout
        title={`${allMeetings[e].subject}
        ${allMeetings[e].date}
        ${allMeetings[e].time}`}
        activeIndex={activeIndex}
        index={allMeetings[e].id}
        setActiveIndex={setActiveIndex}
      >
        {allMeetings[e].summary}
      </AccordionLayout>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center">
      {allMeetingsAccordians}
    </div>
  );
};
export default Accordion;
