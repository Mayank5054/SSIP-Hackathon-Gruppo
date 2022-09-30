import React from 'react'
import TableRowFourC from './TableRowFourC'
import TableRowFiveC from './TableRowFiveC '

const Table = (props) => {
  let tableData = props.data.slice(0, props.showNumberOfData).map((data) => {
    if(props.numberOfColumns === 4)
      return <TableRowFourC key={data.id} id={data.id} subject={data.subject} time={data.time} join={data.join} />
    else
      return <TableRowFiveC key={data.id} id={data.id} subject={data.subject} date={data.date} time={data.time} join={data.join} />
  })
  if (props.data.length <= tableData.length) {
    props.updateShowViewMore(false);
  }
  return (
    <div className='mt-8'>
      {tableData}
    </div>
  )
}

export default Table
