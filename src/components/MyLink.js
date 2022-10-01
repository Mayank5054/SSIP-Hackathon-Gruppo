import React from 'react'

const MyLink = ({goTo,text}) => {
  return (
    <>
        <p onClick={goTo} className='text-linkColor underline cursor-pointer'>{text}</p>
    </>
  )
}

export default MyLink
