import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import { sideBarDetails } from "../sidebarDetails";
import SubDrawer from "./SubDrawer";

const StyledDrawer = styled.div`
  display: "flex";
  transition: "all 5s ease";
`;

const SideBarDrawer = ({setSideBarWidth}) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const hanldeDrawer = (title, path) => {
    if (title == "home"  ) {
      setOpen((prev) => !prev);
    }
    else if ( title == "Images" || title == "Feeds"){
      setOpen(true);
    } 
    else { 
        setOpen(false);
        setSideBarWidth(94)
    }
    navigate(path);
  };

  useEffect( () => {
    setTimeout(() => {
      if(open)  setSideBarWidth(370);
      else  setSideBarWidth(94);
    }, 200);
  },[open])

  return (
    <StyledDrawer>
      <Drawer variant="permanent" open={true}>
        <List
          sx={{
            bgcolor: "#210148",
            width: "94px",
            height: "100%",
            marginTop: "65px",
          }}
        >
          {sideBarDetails.map((data) => (
            <ListItem key={data.id} disablePadding sx={{ my: "5px" }}>
              <ListItemButton
                onClick={() => hanldeDrawer(data.title, data.path)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  px: "20",
                }}
              >
                <ListItemIcon
                  sx={{
                    justifyContent: "center",
                    color:
                      location.pathname === data.path ? "white" : "GrayText",
                  }}
                >
                  {data.icon}
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color:
                      location.pathname === data.path ? "white" : "GrayText",

                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                  primaryTypographyProps={{ fontSize: "14px" }}
                >
                  {data.title}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <SubDrawer setSideBarWidth={setSideBarWidth} open={open} setOpen = {setOpen} hanldeDrawer={hanldeDrawer} />
    </StyledDrawer>
  );
};

export default SideBarDrawer;
