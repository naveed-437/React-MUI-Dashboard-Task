import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ProfessionalDetails = () => {
  return (
    <Box sx={{transition : 'all 2s ease'}}>
      <Typography variant="h5">Professional Details</Typography>
    
      <Grid container p={3} pr={20} columnSpacing={20}>
        <Grid item container spacing={5} lg={6} display={"flex"} direction="column">
          <Grid item>
            <Stack
              borderBottom={1}
              direction={"row"}
              spacing={20}
              pb={1}
              borderColor={"info.main"}
            >
              <Typography variant="h6" color={"GrayText"}>
                Experience
              </Typography>
              <TextField
                type={"text"}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              />
            </Stack>
          </Grid>
          <Grid item >
          <Stack
            borderBottom={1}
            spacing={15}
            direction={"row"}
            pb={1}
            borderColor={"info.main"}
          >
            <Typography variant="h6" color={"GrayText"}>
              Source of Hire
            </Typography>

            <Box sx={{ minWidth: 80, mr: 2 }}>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                >
                  <MenuItem value={10}>Select </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
          </Grid>
          <Grid item>
          <Stack borderBottom={1} pb={1} borderColor={"info.main"}>
            <Typography variant="h6" color={"GrayText"}>
              SkillSet
            </Typography>
            <TextField
              rows={3}
              multiline
              type={"text"}
              variant="standard"
              InputProps={{ disableUnderline: true }}
            />
          </Stack>
          </Grid>
          <Grid item>
            <Stack
              borderBottom={1}
              direction={"row"}
              spacing={20}
              pb={1}
              borderColor={"info.main"}
            >
              <Typography variant="h6" color={"GrayText"}>
                Highest Qualification
              </Typography>
              <TextField
                type={"text"}
                variant="standard"
                InputProps={{ disableUnderline: true }}
              />
            </Stack>
          </Grid>
          <Grid item>
            <Stack
              borderBottom={1}
              direction={"row"}
              spacing={20}
              pb={1}
              borderColor={"info.main"}
            >
              <Typography variant="h6" color={"GrayText"}>
                Additional Information
              </Typography>
              <TextField
                type={"text"}
                variant="standard"
                InputProps={{ disableUnderline: true }}
                multiline={true}
                rows={3}
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid item container spacing={5} lg={6} display={"flex"} direction="column">
            <Grid item>
            <Stack
            borderBottom={1}
            spacing={15}
            direction={"row"}
            pb={1}
            borderColor={"info.main"}
          >
            <Typography variant="h6" color={"GrayText"}>
              Location
            </Typography>

            <Box sx={{ minWidth: 80, mr: 2 }}>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                >
                  <MenuItem value={10}>Select </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
            </Grid>
            <Grid item >
          <Stack
            borderBottom={1}
            direction={"row"}
            spacing={20}
            pb={1}
            borderColor={"info.main"}
          >
            <Typography variant="h6" color={"GrayText"}>
              Title
            </Typography>
            <TextField
              type={"text"}
              variant="standard"
              placeholder="enter the title here"
              InputProps={{ disableUnderline: true }}
            />
          </Stack>
        </Grid>
        <Grid item >
          <Stack
            borderBottom={1}
            direction={"row"}
            spacing={9}
            pb={1}
            borderColor={"info.main"}
          >
            <Typography variant="h6" color={"GrayText"}>
              Current Salary
            </Typography>
            <TextField
              type={"text"}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder="enter the salary here"
            />
          </Stack>
        </Grid>
        <Grid item >
          <Stack
            borderBottom={1}
            spacing={12}
            direction={"row"}
            pb={1}
            borderColor={"info.main"}
          >
            <Typography variant="h6" color={"GrayText"}>
              Department
            </Typography>

            <Box sx={{ minWidth: 80, mr: 2 }}>
              <FormControl variant="standard" fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                >
                  <MenuItem value={10}>Select </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </Grid>
        <Grid item >
              <Stack
                borderBottom={1}
                borderColor={"info.main"}
                direction={"row"}
                py={3}
                spacing={7}
              >
                <Typography variant="h6" minWidth={140} color={"GrayText"}>
                  Offer Letter
                </Typography>
                <TextField
                  type={"file"}
                  variant="standard"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                />
              </Stack>
            </Grid>
            <Grid item >
          <Stack
            borderBottom={1}
            direction={"row"}
            spacing={9}
            pb={1}
            borderColor={"info.main"}
          >
            <Typography variant="h6" color={"GrayText"}>
              Tentative Joining Date
            </Typography>
            <TextField
              type={"text"}
              variant="standard"
              InputProps={{ disableUnderline: true }}
              placeholder="enter the salary here"
            />
          </Stack>
        </Grid>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default ProfessionalDetails;
