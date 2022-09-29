import React from 'react'
import Heading from '../components/Heading.js'
import MyLink from '../components/MyLink.js'
import Nav from '../components/Nav'
import Table from '../components/Table.js'

const Home = () => {
  return (
    <>
      <Nav showBg={true} isLoggedIn={true}/>
      <section className='w-9/10 mx-auto relative my-40'>
        <Heading text="Important for today" />
        <Table />
        <p className='relative text-right pr-6'><MyLink className="l-0" text={"View More"} /></p>

      </section>
    </>
  )
}

export default Home
