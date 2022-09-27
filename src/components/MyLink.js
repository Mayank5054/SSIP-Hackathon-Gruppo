import React from 'react'

const MyLink = ({text}) => {
  return (
    <>
        <a href="http://localhost:3000/" className='text-linkColor underline'>{text}</a>
    </>
  )
}

export default MyLink
