import React from "react";

import Heading from "../components/Heading.js";
import Nav from "../components/Nav";
import Accordion from "../components/Accordion.js";

const HistoryPage = (props) => {
    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />
            <section className='w-9/10 mx-auto relative mt-40'>
                <Heading text={"History"} />
                <div className='h-[450px] max-w-[950px] overflow-y-scroll mt-2 mx-auto'>
                    <Accordion />
                </div>
            </section>
        </>
    );
};
export default HistoryPage;
