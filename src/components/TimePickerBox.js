import {Stack, TextField} from "@mui/material";
import {TimePicker} from "@mui/x-date-pickers/TimePicker";



function TimePickerBox(props){
    return (
        <Stack spacing={4} sx={{width: '100%', backgroundColor: "white", margin: "12px 0", borderRadius: "4px"}}>
           <TimePicker value={props.value} onChange={props.handleChange} renderInput={(params) => <TextField {...params} />} />
        </Stack>
    )
}

export default TimePickerBox;