


function DropDownMenu(props){
    return(
        <select
            className={props.className}
            value={props.value}
            required
            onChange={props.handleChange}
            name={props.name}>
            <option>{props.text}</option>
            <option>ABc</option>
            <option>XYZ</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>
    );
}

export default DropDownMenu;