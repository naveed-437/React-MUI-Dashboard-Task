import "./App.css";
import Header from "./component/Header";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import SideBarDrawer from "./component/SideBarDrawer";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Welcome from "./component/Welcome";
import SelfService from "./component/SelfService";
import Feeds from "./component/Feeds";
import Images from "./component/images";
import { useState } from "react";
import Footer from "./component/Footer";
import styled from "styled-components";
import Home from "./component/Home";
import UserDetails from "./component/UserDetails";

const theme = createTheme({
  palette :{
    primary : {
      main : "#210148",
      light  :"#1565c0"
    },
    secondary  :{
      main : "#585757",
    },
    info : {
      main : "#e3e5e6",
      light : "#f7f7f7"
    }
  }
});

const StyledMainComponent =  styled.div`
height : '100vh';
width : calc(100% - '92px');

`

function App() {
  const [sideBarWidth , setSideBarWidth] = useState(92);


  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <Header />
      <SideBarDrawer setSideBarWidth={setSideBarWidth} />
      <Box
        sx={{
          width: `calc(100vw - ${sideBarWidth}px)`,
          marginTop: "73px",
          bgcolor: "info.main",
          minHeight: "calc(100vh - 73px)",
          marginLeft : `${sideBarWidth}px`,
          transition:'all .6s ease',
        }}
      >
        <Routes>
          <Route exact path={"/"} element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path={"/selfservice"} element={<SelfService />} />
          <Route path={"/feeds"} element={<Feeds />} />
          <Route path={"/images"} element={<Images />} />
          <Route path={"/userdetails"} element={<UserDetails />} />
        </Routes>
      </Box>
      {/* <Footer /> */}
      </ThemeProvider>
    </div>
    </Router>
  );
}

export default App;
