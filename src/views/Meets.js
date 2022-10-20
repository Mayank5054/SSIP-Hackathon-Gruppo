import React from "react";
import Heading from "../components/Heading.js";
import Nav from "../components/Nav";
import Table from "../components/Table.js";

import importantMeetings from "../data/importantMeetings.json";
import allMeetings from "../data/allMeetings.json";

const Meets = (props) => {
    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <section className='w-9/10 mx-auto relative mt-28 mb-10'>
                {/* Important Meetings */}
                <Heading text='Important for today' />
                <Table data={importantMeetings} numberOfColumns={5} />

                {/* All Meetings */}
                <div className='h-6'></div>
                <Heading text='All Meetings' />
                <Table data={allMeetings} numberOfColumns={5} />
            </section>
        </>
    );
};

export default Meets;
