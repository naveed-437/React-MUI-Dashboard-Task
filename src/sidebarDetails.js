import AppsIcon from "@mui/icons-material/Apps";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import GroupIcon from '@mui/icons-material/Group';

export  const sideBarDetails = [
    {
        id : 1, 
        title : "dashboard" , 
        icon : <AppsIcon />, 
        path : "/"
    },
    {
        id : 2, 
        title : "home" , 
        icon : <HomeIcon />,
        path : "/home"
    },{
        id : 3, 
        title : "self-Service" , 
        icon : <PersonIcon />,
        path : "/selfservice"
    },{
        id : 4, 
        title : "User Details" , 
        icon : <GroupIcon />,
        path : "/userdetails"
    },
    {
        id : 5, 
        title : "time Tracker" , 
        icon : <ScheduleIcon /> ,
        path  : "/schedule"
    },{
        id : 6, 
        title : "attendance" , 
        icon : <EventAvailableIcon />,
        path : "/attemdance"
    },{
        id : 7, 
        title : "menu" , 
        icon : <LinearScaleIcon /> , 
        path : "/menu"
    },
    
]

export const subdrawerDetails = [
    {
       id : 1 ,
       title : "Feeds",
       path : "/feeds"
    }, {
        id : 2 , 
        title : "Images",
        path  : "/images"
    }
]