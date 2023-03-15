import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useLocation } from "react-router";
import { subdrawerDetails } from "../sidebarDetails";

const SubDrawer = ({open , setOpen , hanldeDrawer ,setSideBarWidth}) => {

    const location = useLocation();

    return ( 
        <Drawer
        anchor={"left"}
        open={open}
        onClose={() => setOpen(false)}
        hideBackdrop
        sx={{ position: "relative" }}
      >
        <List
          sx={{
            width: "280px",
            bgcolor: "#2d055e",
            height: "100vh",
            position: "fixed",
            left: 90,
            marginTop: '65px',
          }}
        >
          {subdrawerDetails.map((text) => (
            <ListItem key={text.id} disablePadding>
              <ListItemButton
              sx={{
                bgcolor :  location.pathname === text.path ?  "#210148" : "#2d055e"
              }}
                onClick={() =>  { hanldeDrawer(text.title, text.path) }}
              >
                <ListItemText
                  sx={{ color: location.pathname === text.path ? "white" : "GrayText" }}
                  primary={text.title}
                  primaryTypographyProps={{ fontSize: "19px" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
     );
}
 
export default SubDrawer;