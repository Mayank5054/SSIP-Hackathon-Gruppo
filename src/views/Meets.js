import React, { useState } from 'react'
import Heading from '../components/Heading.js'
import MyLink from '../components/MyLink.js'
import Nav from '../components/Nav'
import Table from '../components/Table.js'

import importantMeetings from '../data/importantMeetings.json'
import allMeetings from '../data/allMeetings.json'


const Meets = (props) => {
  // State Variables for Important Meetings
  const [showNumberOfDataImportant,setShowNumberOfDataImportant] = useState(4);
  const [showViewMoreImportant,setShowViewMoreImportant] = useState(true);
  const updateShowNumberOfDataImportant = () => {
    setShowNumberOfDataImportant((prevNumber)=>prevNumber+4)
  }
  
  // State Variables for All Meetings
  const [showNumberOfDataAll,setShowNumberOfDataAll] = useState(4);
  const [showViewMoreAll,setShowViewMoreAll] = useState(true);
  const updateShowNumberOfDataAll = () => {
    setShowNumberOfDataAll((prevNumber)=>prevNumber+4)
  }
  return (
    <>
      <Nav showBg={true} isLoggedIn={true}/>
      <section className='w-9/10 mx-auto relative mt-40 mb-10'>
        {/* Important Meetings */}
        <Heading text="Important for today" />
        <Table showNumberOfData={showNumberOfDataImportant} updateShowViewMore={setShowViewMoreImportant} data={importantMeetings} numberOfColumns={5}/>
        {showViewMoreImportant && <p className='relative text-right pr-6' onClick={updateShowNumberOfDataImportant}><MyLink text={"View More"} /></p>}
        
        {/* All Meetings */}
        <Heading text="All Meetings" />
        <Table showNumberOfData={showNumberOfDataAll} updateShowViewMore={setShowViewMoreAll} data={allMeetings} numberOfColumns={5}/>
        {showViewMoreAll && <p className='relative text-right pr-6' onClick={updateShowNumberOfDataAll}><MyLink text={"View More"} /></p>}
      </section>
    </>
  ) 
}

export default Meets
