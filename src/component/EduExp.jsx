import { Box, Button, Stack } from "@mui/material";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";

const EduExp = () => {
    return ( 
        <Box sx={{transition : 'all 2s ease'}}>
            <EducationDetails />
            <ExperienceDetails />
            <Stack top={110} left={735} position={"relative"} direction={"row"} >
                <Button variant="contained" sx={{width : '130px'}} >Submit</Button>
            </Stack>
        </Box>
     );
}
 
export default EduExp;