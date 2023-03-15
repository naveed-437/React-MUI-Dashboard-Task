import { Paper } from "@mui/material";
import styled from "styled-components";

const Images = () => {

    return ( 
        <Paper sx={{ position :"relative" ,height : "100vh" ,paddingTop : 40 , paddingLeft : 40 }} elevation={3} >
            <img src="./images/groot2.jpg"  width={200} height={250} style={{objectFit : "cover" ,borderRadius : 30 , position : "absolute" , left : 455 , top  : 110 , zIndex : 1 , boxShadow  :"10px 2px 30px 1px black" }} alt="groot" />
            <img src="./images/groot1.jpg"  width={200} height={250} style={{objectFit : "cover" ,borderRadius : 30 , boxShadow  :"10px 2px 30px 1px black",position : "absolute" , left : 610 , top  : 260 , zIndex : 2 , }} alt="groot" />
            <img src="./images/groot4.jpg"  width={200} height={250} style={{objectFit : "cover" ,borderRadius : 30 , boxShadow  :"10px 2px 30px 1px  black" ,position : "absolute" , left : 760 , top  : 110 , zIndex : 1  }} alt="groot" />
            <img src="./images/groot3.jpg"  width={200} height={250} style={{objectFit : "cover" ,borderRadius : 30 , boxShadow  :"10px 2px 30px 1px black" ,position : "absolute" , left : 760 , top  : 435, zIndex : 1  }} alt="groot" />
            <img src="./images/groot.jpg"   width={200} height={250} style={{objectFit : "cover" ,borderRadius : 30 , boxShadow  :"10px 2px 30px 1px black" ,position : "absolute" , left : 455 , top  : 435 , zIndex : 1 }} alt="groot" />
        </Paper>
     );
    
}
 
export default Images;