import React from 'react'
import MyLink from './MyLink'

const TableRowFourC = (props) => {
  return (
    <div className='grid grid-cols-12 w-full h-14 text-secondary-700 justify-center items-center pl-6 my-4 rounded-lg shadow-table'>
      <div>{props.id + '.'}</div>
      <div className="col-span-7"><span className='cursor-pointer underline'>{props.subject}</span></div>
      <div className="col-span-2">{props.time}</div>
      {(props.join === "Join Here") ?
        <div className="col-span-2"><a href="https://meet.google.com/" target="_blank" rel="noreferrer"><MyLink text={props.join}/></a></div> :
        <div className="col-span-2">{props.join}</div>}
    </div>
  )
}

export default TableRowFourC