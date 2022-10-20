import React from "react";
import MeetingHostedCard from "../components/MeetingHostedCard";
import hostedMeetings from "../data/hostedMeetings.json";

const HostedMeetings = (props) => {
    let meetings = Object.keys(hostedMeetings).map((id) => {
        return <MeetingHostedCard key={id} data={hostedMeetings[id]} />;
    });

    return <div className='grid grid-cols-2 gap-2'>{meetings}</div>;
};

export default HostedMeetings;
