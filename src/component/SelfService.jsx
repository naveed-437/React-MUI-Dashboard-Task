import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { maxWidth } from "@mui/system";
import { useState } from "react";
import styled from "styled-components";
import AddressDetails from "./AddressDetails";
import CandidateDetails from "./CandidateDetails";
import EducationDetails from "./EducationDetails";
import EduExp from "./EduExp";
import ExperienceDetails from "./ExperienceDetails";
import ProfessionalDetails from "./ProfessionalDetails";

export const StyledSpan = styled.span`
  color: red;
`;

const SelfService = () => {
  const [index, setIndex] = useState(0);

  return (
    <Box p={3}>
      <Paper
        sx={{
          maxWidth: "100%",
          p: 3,
          minHeight: "754px",
          position: "relative",
        }}
      >
        {index === 0 && <CandidateDetails />}
        {index === 1 && <AddressDetails />}
        {index === 2 && <ProfessionalDetails />}
        {index === 3 && <EduExp />}
        <Stack
          justifyContent={"center"}
          direction={"row"}
          position={"absolute"}
          bottom={20}
          left={750}
        >
          <Button
            variant="contained"
            sx={{ mr: 1 }}
            disabled={index == 0 ? true : false}
            onClick={() => setIndex((prev) => prev - 1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disabled={index == 3 ? true : false}
            onClick={() => setIndex((prev) => prev + 1)}
          >
            Next
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SelfService;
