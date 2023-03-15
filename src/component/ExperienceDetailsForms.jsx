import { TableCell, TableRow, TextField } from "@mui/material";


const ExperienceDetailsForms = () => {
    return (
        <TableRow >
            <TableCell align="center" >
                <TextField placeholder="enter the school name here" variant="standard" InputProps={{disableUnderline : true}}  />
            </TableCell>
            <TableCell align="center" >
                <TextField placeholder="enter the Degree/Diploma here" variant="standard" InputProps={{disableUnderline : true}}  />
            </TableCell>
            <TableCell align="center" >
                <TextField placeholder="enter the Field of Study here" variant="standard" InputProps={{disableUnderline : true}}  />
            </TableCell>
            <TableCell align="center" >
                <TextField placeholder="enter the Date of completion here" variant="standard" InputProps={{disableUnderline : true}}  />
            </TableCell>
            <TableCell align="center" >
                <TextField multiline placeholder="enter the Additional notes here" variant="standard" InputProps={{disableUnderline : true}}  />
            </TableCell>
        </TableRow>
      );
}
 
export default ExperienceDetailsForms;