import React from 'react'

const TableRowFourC = (props) => {
  return (
      <div className='grid grid-cols-12 w-full h-14 text-secondary-700 justify-center items-center pl-6 my-4 rounded-lg shadow-table'>
      <div>{props.id}</div>
      <div className="col-span-7">{props.subject}</div>
      <div className="col-span-2">{props.time}</div>
      <div className="col-span-2">{props.join}</div>
    </div>
  )
}

export default TableRowFourC
