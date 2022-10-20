import React from "react";
import TableRowFourC from "./TableRowFourC";
import TableRowFiveC from "./TableRowFiveC ";

const Table = (props) => {
    let tableData = Object.keys(props.data).map((id) => {
        if (props.numberOfColumns === 4)
            return (
                <TableRowFourC
                    key={props.data[id].id}
                    id={props.data[id].id}
                    subject={props.data[id].subject}
                    time={props.data[id].time}
                    join={props.data[id].join}
                    data={props.data}
                />
            );
        else
            return (
                <TableRowFiveC
                    key={props.data[id].id}
                    id={props.data[id].id}
                    subject={props.data[id].subject}
                    date={props.data[id].date}
                    time={props.data[id].time}
                    join={props.data[id].join}
                    data={props.data}
                />
            );
    });
    return (
        <div className='max-h-[450px] max-w-[900px] mx-auto pr-2 mt-4 overflow-y-scroll'>
            {tableData}
        </div>
    );
};

export default Table;
