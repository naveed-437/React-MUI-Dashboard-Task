import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import ExperienceDetailsForms from "./ExperienceDetailsForms";

const ExperienceDetails = () => {
    const [formValue1,SetFormValue1] = useState(1);

    const [formArray1 , setFormArray] = useState([{id : 1 , formData : <ExperienceDetailsForms /> }]);

    const addExperienceForms = () => {

        for (let index = 0; index < formValue1; index++) {
            setFormArray( [...formArray1 ,{id : formValue1 , formData : <ExperienceDetailsForms />}])
        }
    }

    return ( 
        <Box mt={4} >
            <Stack direction={"row"} justifyContent={"space-between"} >
                <Typography variant="h5"  >Experience</Typography>
                <Button variant="contained" sx={{fontWeight : "bold" , fontSize:"1rem" }} onClick={()=>{SetFormValue1(prev => prev+1);addExperienceForms()}} >+</Button>
                </Stack>
                <TableContainer sx={{p:3}} >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow sx={{bgcolor : "info.light"}} >
            <TableCell align="center" sx={{fontWeight : "bold"}} >Occupation</TableCell>
            <TableCell align="center" sx={{fontWeight : "bold"}} >Company</TableCell>
            <TableCell align="center" sx={{fontWeight : "bold"}} >Summary</TableCell>
            <TableCell align="center" sx={{fontWeight : "bold"}} >Duration</TableCell>
            <TableCell align="left" sx={{fontWeight : "bold"}} >Curerently Work Here</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  >
            { formArray1.map( data => (data.formData ))}
            </TableBody>
            </Table>
            </TableContainer>
        </Box>
    )
}
 
export default ExperienceDetails;