import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { StyledSpan } from "./SelfService";

const CandidateDetails = () => {
    return ( 
        <Box>
          <Typography variant="h5">Candidate Details</Typography>
          <Grid container  columnSpacing={25} rowSpacing={6} p={4}>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}

              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Email Id <StyledSpan >*</StyledSpan>
                </Typography>
                <TextField
                  type={"email"}
                  variant="standard"
                  fullWidth
                  placeholder="xyz@abc.com"
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  First name <StyledSpan>*</StyledSpan>
                </Typography>
                <TextField
                  type={"text"}
                  variant="standard"
                  fullWidth
                  placeholder="enter the first name here"
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Phone <StyledSpan>*</StyledSpan>
                </Typography>
                <TextField
                  type={"text"}
                  variant="standard"
                  fullWidth
                  placeholder="enter the phone number here"
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Last name <StyledSpan>*</StyledSpan>
                </Typography>
                <TextField
                  type={"text"}
                  variant="standard"
                  fullWidth
                  placeholder="enter the last name here"
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={145 }  color={"GrayText"}>
                  Aadhar Card Number <StyledSpan>*</StyledSpan>
                </Typography>
                <TextField
                  type={"text"}
                  variant="standard"
                  fullWidth
                  placeholder="enter the aadhar card no here"
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Office Email
                </Typography>
                <TextField
                  type={"email"}
                  variant="standard"
                  fullWidth
                  placeholder="enter the office email  here"
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Pan Card Number
                </Typography>
                <TextField
                  type={"text"}
                  variant="standard"
                  fullWidth
                  placeholder="enter the pan card no here"
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Gender
                </Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="others"
                      control={<Radio />}
                      label="others"
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item lg={6} sm={12}>
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={1}
                spacing={{sm:1 ,lg : 10 , md : 5 }}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Photo Upload
                </Typography>
                <TextField
                  type={"file"}
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box> 
     );
}
 
export default CandidateDetails;