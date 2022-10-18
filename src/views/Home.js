import React, { useState } from "react";
import Heading from "../components/Heading.js";
import MyLink from "../components/MyLink.js";
import Nav from "../components/Nav";
import Table from "../components/Table.js";
import importantToday from "../data/importantToday.json";

const Home = (props) => {
    const [showNumberOfData, setShowNumberOfData] = useState(4);
    const [showViewMore, setShowViewMore] = useState(true);

    const updateShowNumberOfData = () => {
        setShowNumberOfData((prevNumber) => prevNumber + 4);
    };
    const updateShowViewMore = (show) => {
        setShowViewMore(show);
    };
    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />{" "}
            <section className='w-9/10 mx-auto relative mt-28 mb-10'>
                <Heading text='Important for today' />
                <Table
                    showNumberOfData={showNumberOfData}
                    updateShowViewMore={updateShowViewMore}
                    data={importantToday}
                    numberOfColumns={4}
                />
                {showViewMore && (
                    <p
                        className='relative text-right pr-6'
                        onClick={updateShowNumberOfData}>
                        <MyLink className='l-0' text={"View More"} />
                    </p>
                )}
            </section>
        </>
    );
};

export default Home;
