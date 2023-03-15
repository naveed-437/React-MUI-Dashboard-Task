import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import EduDetailForms from "./EduDetailForm";

const EducationDetails = () => {

    const [formValue,SetFormValue] = useState(1);

    const [formArray , setFormArray] = useState([{id : 1 , formData : <EduDetailForms /> }]);

    const addEduCationForms = () => {

        for (let index = 0; index < formValue; index++) {
            setFormArray( [...formArray ,{id : formValue , formData : <EduDetailForms />}])
        }
    }

    return ( 
        <>
            <Stack direction={"row"} justifyContent={"space-between"} >
                <Typography variant="h5"  >Education</Typography>
                <Button variant="contained" sx={{fontWeight : "bold" , fontSize:"1rem" }} onClick={()=>{SetFormValue(prev => prev+1);addEduCationForms()}} >+</Button>
                </Stack>
                <TableContainer sx={{p:3}} >
      <Table sx={{ maxWidth: '100%' }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor : "info.light"}} >
            <TableCell align="center" sx={{fontWeight : "bold"}} >School Name</TableCell>
            <TableCell align="center" sx={{fontWeight : "bold"}} >Degree/Diploma</TableCell>
            <TableCell align="center" sx={{fontWeight : "bold"}}>Fields of Study</TableCell>
            <TableCell align="center" sx={{fontWeight : "bold"}} >Date Of Completion</TableCell>
            <TableCell align="center" sx={{fontWeight : "bold"}} >Additional Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            { formArray.map( data => (data.formData ))}
            </TableBody>
            </Table>
            </TableContainer>
            </>

     );
}
 
export default EducationDetails;