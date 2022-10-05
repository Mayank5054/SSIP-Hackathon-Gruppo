


function DropDownMenu(props){
    return(
        <select
            className={props.className}
            value={props.value}
            required
            onChange={props.handleChange}>
            <option>{props.text}</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    );
}

export default DropDownMenu;