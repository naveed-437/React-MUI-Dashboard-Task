import { Grid, Paper, Typography } from "@mui/material";

const TaskOne = () => {
    return ( 
        <Grid
        container
        px={3}  
        alignItems={"end"}
        width={"100vw"}
        justifyContent={"space-around"}
        height={"100vh"}
        rowSpacing={2}
      >
        <Grid
          item
          container
          sx={{
            height: "300",
            display: "flex",
            justifyContent: { xl: "center", lg: "center" },
            alignItems: {
              xl: "flex-start",
              lg: "center",
              md: "center",
              sm: "center",
              xm: "center",
            },
          }}
          md={12}
          xl={2}
          lg={12}
          sm={12}
          xs={12}
          direction={"column"}
          spacing={4}
        >
          <Grid item>
            <Typography
              variant="h1"
              color={"white"}
              // sx={{
              //   fontSize: {
              //     xl: "7rem",
              //     lg: "6rem",
              //     md: "5rem",
              //     sm: "4rem",
              //     xm: "3rem",
              //   },
              // }}
            >
              Latest News
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h4" color={"GrayText"}>
              Covering March & April 2015
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color={"white"} my={4}>
              Design form{" "}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xl={4} lg={4} md={6} sm={12} xs={12}>
          <Paper
            elevation={3}
            sx={{
              width: {
                xl: "570px",
                lg: "570px",
                md: "430px",
                sm: "630px",
                xs: "270px",
              },
            }}
          >
            <Grid item>
              <img
                src="./images/war.png"
                width={"100%"}
                height={370}
                style={{ objectFit: "cover", borderRadius: "3px" }}
              />
            </Grid>
            <Grid item container direction={"column"} spacing={3} p={2}>
              <Grid item>
                <Typography
                  variant="h6"
                  gutterBottom
                  color={"gray"}
                  fontWeight="bold"
                >
                  March 20 2015
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3">
                  CNN Acquire BEME
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" pb={6} >
                  CNN purcahsed Casey Neistas Beme app for $25 million
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item container xl={4} lg={4} md={6} sm={12} xs={12}>
          <Paper
            elevation={3}
            sx={{
              width: {
                xl: "570px",
                lg: "570px",
                md: "430px",
                sm: "630px",
                xs: "270px",
              },
            }}
          >
            <Grid item>
              <img
                src="./images/blur.png"
                width={"100%"}
                height={370}
                style={{ objectFit: "cover", borderRadius: "3px" }}
              />
            </Grid>
            <Grid item container direction={"column"} spacing={3} px={2} py={2}>
              <Grid item>
                <Typography
                  variant="h6"
                  gutterBottom
                  color={"gray"}
                  fontWeight="bold"
                >
                  March 20 2015
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h3" gutterBottom>
                  CNN Acquire BEME
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5" pb={6} gutterBottom>
                  CNN purcahsed Casey Neistas Beme app for $25 million
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
     );
}
 
export default TaskOne;