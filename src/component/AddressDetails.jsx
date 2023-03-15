import { Box, Checkbox, FormControl, FormControlLabel, Grid, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";

const AddressDetails = () => {
    return ( 
        <Box sx={{transition : 'all 2s ease'}} >
        <Typography variant="h5">Address Details</Typography>
        <Grid container p={4}>
          <Grid item lg={5}>
          <Stack borderBottom={1} borderColor={"info.main"} direction={"row"} spacing ={7} >
          <Typography variant="h6" color={"GrayText"}  width={240} >Presesnt Address</Typography>
          <Stack rowGap={3} width ={'100%'} >
            <TextField sx={{borderBottom : 1 , borderColor : "info.main" , pb:1  ,width : "100%" }} variant="standard" placeholder="Address Line 1" InputProps={{ disableUnderline: true }}/>
            <TextField sx={{borderBottom : 1 , borderColor : "info.main" , pb:1 }} variant="standard" placeholder="Address Line 2" InputProps={{ disableUnderline: true }}/>
            <Stack direction={"row"} sx={{borderBottom : 1 , borderColor : "info.main" , pb:1 }} >
              <TextField variant="standard" placeholder="City" InputProps={{ disableUnderline: true }} />
              <Box sx={{ minWidth: 190 , mr:2 }}>
              <FormControl variant="standard"  fullWidth >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                >
                  <MenuItem value={10}>Select State </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            </Stack>
            <Stack direction={"row"} sx={{ pb:1 }} >
              <Box sx={{ minWidth: 190 , mr:2 }}>
              <FormControl variant="standard"  fullWidth >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                >
                  <MenuItem value={10}>INDIA </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField variant="standard" placeholder="Postal code" InputProps={{ disableUnderline: true }} />
            </Stack>
          </Stack>
          
        </Stack>
        <Stack direction={"row"} spacing ={5} mt={3} >
          <Typography variant="h6" color={"GrayText"} width={260} >Permanent Address</Typography>
          <Stack rowGap={3} width ={'100%'} >
          <FormControlLabel control={<Checkbox  />} label="same as present address" />
            <TextField sx={{borderBottom : 1 , borderColor : "info.main" , pb:1  ,width : "100%" }} variant="standard" placeholder="Address Line 1" InputProps={{ disableUnderline: true }}/>
            <TextField sx={{borderBottom : 1 , borderColor : "info.main" , pb:1 }} variant="standard" placeholder="Address Line 2" InputProps={{ disableUnderline: true }}/>
            <Stack direction={"row"} sx={{borderBottom : 1 , borderColor : "info.main" , pb:1 }} >
              <TextField variant="standard" placeholder="City" InputProps={{ disableUnderline: true }} />
              <Box sx={{ minWidth: 190 , mr:2 }}>
              <FormControl variant="standard"  fullWidth >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                >
                  <MenuItem value={10}>Select State </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </Stack>
            <Stack direction={"row"} sx={{borderBottom : 1 , borderColor : "info.main" , pb:1 }} >
              <Box sx={{ minWidth: 190 , mr:2 }}>
              <FormControl variant="standard"  fullWidth >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  disableUnderline
                >
                  <MenuItem value={10}>INDIA </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField variant="standard" placeholder="Postal code" InputProps={{ disableUnderline: true }} />
            </Stack>
          </Stack>
          
        </Stack>
          </Grid>
        </Grid>
        
        </Box>
     );
}
 
export default AddressDetails;