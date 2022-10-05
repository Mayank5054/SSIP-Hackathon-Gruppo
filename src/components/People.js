import React from "react";

function People(props){
    return(
        <div className="flex text-primary-900 p-4 my-3 bg-primary-200 rounded w-full">
            <img className="w-12 rounded-full mr-5" src={props.imgUrl} />
            <div>
                <h3 className="text-xl">{props.name}</h3>
                <p className="text-small">{props.role}</p>
            </div>
        </div>
    )
}

export default People;









