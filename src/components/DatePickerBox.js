import {Stack, TextField} from "@mui/material";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

function DatePickerBox(props){
    return(
        <Stack spacing={4} sx={{width: '100%', backgroundColor: "white", margin: "12px 0", borderRadius: "4px"}}>
        <DatePicker inputFormat="dd/MM/yyyy" renderInput={(params) => <TextField {...params} />} placeholder="Select Date" value={props.value} onChange={props.handleChange} />
        </Stack>
    )
}


export default DatePickerBox;





