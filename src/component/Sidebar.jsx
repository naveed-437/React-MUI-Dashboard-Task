import { Box, Tab, Tabs } from "@mui/material";
import { sideBarDetails } from "../sidebarDetails";
import { useState } from "react";


const SideBar = () => {


  const [value ,setValue] = useState(0);

  const handleChange = (event , newValue) =>{
    setValue(newValue);
  }

  return (
    <Box bgcolor={"primary.main"} marginTop={9} width={100}  height={"100vh"}>
      <Tabs  textColor="inherit" value={value} onChange={handleChange}  orientation="vertical" aria-label="icon label tabs example">
        {sideBarDetails.map((data) => (
          <Tab key={data.id}  icon={data.icon} sx={{color : "white" ,fontSize  : ".85rem" , textTransform : "capitalize" ,my:.7 }} label={data.title} />
        ))}
      </Tabs>
    </Box>
  );
};

export default SideBar;
