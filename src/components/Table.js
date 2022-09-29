import React from 'react'
import TableRowFourC from './TableRowFourC'
import importantToday from '../data/importantToday'

const Table = (props) => {
  console.log("from table",props.showNumberOfData)
  const tableData = importantToday.slice(0,props.showNumberOfData).map((data)=>{
    return <TableRowFourC key={data.id} id={data.id} subject={data.subject} time={data.time} join={data.join} />
  })
  if (importantToday.length <= tableData.length) {
    props.updateShowViewMore(false);
  }
  console.log(tableData)
  return (
    <div className='mt-8'>
      {tableData}
    </div>
  )
}

export default Table
