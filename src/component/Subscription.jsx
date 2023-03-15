import { Stack, Typography } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
const Subscription = () => {
    return ( 
        <Stack direction={"row"} alignItems="center" spacing={3} >
            <Typography color={"secondary"} variant="h6"> Subscription </Typography>
            <SettingsIcon sx={{color:"#585757"}} fontSize="medium" />
            <ManageAccountsIcon sx={{color:"#585757"}} fontSize="medium" />
            <AddCircleOutlineIcon sx={{color:"#585757"}} fontSize="medium" />
            <HelpCenterOutlinedIcon  sx={{color:"#585757"}} fontSize="medium" />
            <NotificationsNoneIcon sx={{color:"#585757"}} fontSize="medium" />
            <AccountCircleIcon sx={{color:"#585757"}} fontSize="large" />
        </Stack>
     );
}
 
export default Subscription;