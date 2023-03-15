import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "styled-components";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import PhotoCameraBackOutlinedIcon from "@mui/icons-material/PhotoCameraBackOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import FormatQuoteOutlinedIcon from "@mui/icons-material/FormatQuoteOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { useState } from "react";

const StyledDiv = styled.div`
  margin-left: 90px;
  padding-top: 70px;
`;

const Feeds = () => {

    const [value , setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
      };
  return (
    <StyledDiv>
      <Paper sx={{ width: "950px"}} elevation={3}  >
        <Stack
          bgcolor={"white"}
          pb={9}
          px={3}
          pt={2}
          direction={"row"}
          display={"flex"}
          alignItems="flex-start"
          justifyContent={"center"}
        >
          <AccountCircleIcon
            sx={{ color: "info.main", fontSize: "55px", mr: 1 }}
          />
          <TextField
            type={"text"}
            variant="standard"
            fullWidth
            sx={{pt:1}}
            placeholder="Type @ to mention someone..."
            InputProps={{ multiline: true, disableUnderline: true }}
          />
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          bgcolor={"info.light"}
          p={2}
          borderBottom={1}
          borderColor={"info.main"}
        >
          <FormatBoldIcon  />
          <FormatItalicIcon />
          <FormatUnderlinedIcon />
          <FormatSizeIcon />
          <Divider orientation={"vertical"} />
          <FormatAlignLeftIcon />
          <FormatAlignCenterIcon />
          <FormatAlignRightIcon />
          <Divider orientation={"vertical"} />
          <PhotoCameraBackOutlinedIcon />
          <LinkOutlinedIcon />
          <FormatQuoteOutlinedIcon />
          <Divider orientation={"vertical"} />
          <LocalPrintshopOutlinedIcon />
          <Divider orientation={"vertical"} />
          <SentimentSatisfiedOutlinedIcon />
        </Stack>
        <Stack
          direction={"row"}
          bgcolor={"info.light"}
          p={2}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems ={"center"}
        >
          <AttachFileOutlinedIcon />
          <Stack direction={"row"} alignItems="center">
            <Box sx={{ minWidth: 190 , mr:2 }}>
              <FormControl fullWidth >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={10}
                  sx={{height  :40 }}
                >
                  <MenuItem value={10}>User </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" sx={{bgcolor:"#1565c0" , height  : 40 }} size={"small"} > Post </Button>
          </Stack>
        </Stack>
      </Paper>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' , width : "950px" }} mt={2} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  >
          <Tab label="All" sx={{textTransform : "capitalize" , fontSize : '18px'}} />
          <Tab label="Status" sx={{textTransform : "capitalize" ,fontSize : '18px' }}  />
          <Tab label="Approvals"sx={{textTransform : "capitalize" , fontSize : '18px'}} />
          <Tab label="Cases" sx={{textTransform : "capitalize" , fontSize : '18px' }} />
          <Tab label="Feedback" sx={{textTransform : "capitalize" ,fontSize : '18px' }} />
          <Tab label="Jobs" sx={{textTransform : "capitalize" ,fontSize : '18px' }} />
        </Tabs>
      </Box>
    </StyledDiv>
  );
};

export default Feeds;
