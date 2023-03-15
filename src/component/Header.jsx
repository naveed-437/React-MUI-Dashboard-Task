import Subscription from "./Subscription";
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box, InputAdornment, TextField } from "@mui/material";


// const StyledLogo = styled.div`
//   display: flex;
//   align-items: center;
// `;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  border: '1px solid grey',
  marginRight: theme.spacing(0),
  marginLeft: '100px',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  color: 'grey',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 15, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  color: 'grey',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  return (
    <AppBar
    
    position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "white" }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      >
        <Box display={'flex'} alignItems={'center'}>
          <img src="./images/logo.png" alt="pathicon" width={"35px"} />
          <Typography color={"black"} variant="h6" mx={1}>
            BAssure
          </Typography>
        </Box>

        <TextField
          id="standard-start-adornment"
          sx={{ width: "450px", marginLeft: "270px" }}
          placeholder="Search Employee"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon
                  fontSize="large"
                  sx={{
                    bgcolor: "gray",
                    color: "white",
                    padding: "5px",
                    borderRadius: 30,
                  }}
                />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        {/* <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search> */}

        <Subscription />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
