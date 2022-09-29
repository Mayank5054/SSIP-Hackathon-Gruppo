import React from 'react'

const MyLink = ({text, goTo}) => {
  return (
    <>
        <a onClick={goTo} className='text-linkColor underline cursor-pointer'>{text}</a>
    </>
  )
}

export default MyLink
