import React from "react";
import Heading from "../components/Heading.js";
import Nav from "../components/Nav";
import Table from "../components/Table.js";
import importantToday from "../data/importantToday.json";

const Home = (props) => {
    return (
        <>
            <Nav showBg={true} isLoggedIn={true} />{" "}
            <section className='w-9/10 mx-auto relative mt-28 mb-10'>
                <Heading text='Important for today' />
                <Table data={importantToday} numberOfColumns={4} />
            </section>
        </>
    );
};

export default Home;
