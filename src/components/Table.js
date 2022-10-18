import React from "react";
import TableRowFourC from "./TableRowFourC";
import TableRowFiveC from "./TableRowFiveC ";

const Table = (props) => {
    let tableData = Object.keys(props.data)
        .slice(0, props.showNumberOfData)
        .map((id) => {
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
    if (Object.keys(props.data).length <= tableData.length) {
        props.updateShowViewMore(false);
    }
    return <div className='mt-8'>{tableData}</div>;
};

export default Table;
