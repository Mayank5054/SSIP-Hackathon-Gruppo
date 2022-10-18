import React from "react";
import MeetingHostedCard from "../components/MeetingHostedCard";
import hostedMeetings from "../data/hostedMeetings.json";

const HostedMeetings = (props) => {
    let meetings = Object.keys(hostedMeetings)
        .slice(0, props.showNumberOfData)
        .map((id) => {
            return <MeetingHostedCard key={id} data={hostedMeetings[id]} />;
        });

    // console.log(Object.keys(hostedMeetings).length, meetings.length);
    if (Object.keys(hostedMeetings).length <= meetings.length) {
        console.log("inside if");
        props.updateShowViewMore(false);
    }
    return <div className='grid grid-cols-2 gap-2 mt-4'>{meetings}</div>;
};

export default HostedMeetings;
