import {
  Alert,
  Box,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { addUserDb, deleteUser, getUsers } from "../userService";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "30px",
  pt: 2,
  px: 4,
  pb: 3,
};

const UserDetails = () => {
  const [filterId, setFilterId] = useState(0);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState(0);
  const [addUser, setAddUser] = useState(false);

  const [alert, setAlert] = useState({
    info: false,
    data: "",
  });
  const [formData, setFormdata] = useState({
    id: "",
    name: "",
    userName: "",
    place: "",
    age: "",
    gender: "",
  });

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleDelete = () => {
    deleteUser(userId)
      .then(getUsers)
      .then((data) => {
        setUsers(data);
      });
      setAlert({info : true , data : "deleted"})
  };

  const handleClose = (id) => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.id = users[users.length - 1].id + 1;
    addUserDb(formData)
      .then(getUsers)
      .then((data) => {
        setUsers(data);
      });
    setFormdata({
      id: "",
      name: "",
      userName: "",
      place: "",
      age: "",
      gender: "",
    });
    setAddUser(false);
    setAlert({info : true , data : "added"});
  };

  const handleChange = (e) => {
   
    let value = e.target.value;
    let name = e.target.name;
    setFormdata((prevstate) => {
      let data = Object.assign({}, prevstate);
      data[name] = value;
      return data;
    });
  };

  return (
    <Box p={3}>
      <Paper
        sx={{
          maxWidth: "100%",
          p: 3,
          minHeight: "754px",
        }}
      >
        <Box>
          <Typography variant="h5" mx={2} mt={2 }>User Details</Typography>

          <Stack mx={3} direction={"row"}  justifyContent={"flex-end"}>
            <TextField
              sx={{ mr:2, width: "130px" }}
              onChange={(e) =>
                setFilterId(e.target.value == "" ? 0 : e.target.value)
              }
              variant="standard"
              placeholder="filter here"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <FilterAltIcon
                      fontSize="large"
                      sx={{
                        color: "primary.main",
                        padding: "5px",
                        borderRadius: 30,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" onClick={() => setAddUser(true)}>
              Add User
            </Button>
          </Stack>
          <Collapse  in={alert.info} >
          <Alert sx={{mx:3 , mt:2}} icon={false} action={
            <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setAlert({info : false  ,data : ""});
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
          } severity={alert.data == 'added' ? 'success' : 'error'}>
           User{"  "}{alert.data}{"  "}Successfully
          </Alert>
        </Collapse>
          <TableContainer
            component={Paper}
            sx={{ mx: 2, mt: 3, width: "1690px" }}
          >
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead sx={{ bgcolor: "info.main" }}>
                <TableRow sx={{ py: 1 }}>
                  <TableCell
                    align="left"
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      py: 3,
                      pl: 4,
                    }}
                  >
                    Id
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold", py: 3 }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold", py: 3 }}
                  >
                    User Name
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold", py: 3 }}
                  >
                    Age
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold", py: 3 }}
                  >
                    Gender
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold", py: 3 }}
                  >
                    Place
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontSize: "1.1rem", fontWeight: "bold", py: 3 }}
                  >
                    Delete
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.filter( data => {
                    if(filterId === 0 ) return data ;
                    else if(Object.values(data).join(" ").toLocaleLowerCase().includes(filterId))  return data 
                  }).map((data) => (
                  <TableRow
                    key={data.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      sx={{ pl: 4, fontSize: "1.1rem" }}
                      scope="row"
                    >
                      {data.id}
                    </TableCell>
                    <TableCell
                      sx={{ py: 2, fontSize: "1.1rem" }}
                      align="center"
                    >
                      {data.name}
                    </TableCell>
                    <TableCell
                      sx={{ py: 2, fontSize: "1.1rem" }}
                      align="center"
                    >
                      {data.userName}
                    </TableCell>
                    <TableCell
                      sx={{ py: 2, fontSize: "1.1rem" }}
                      align="center"
                    >
                      {data.age}
                    </TableCell>
                    <TableCell
                      sx={{ py: 2, fontSize: "1.1rem" }}
                      align="center"
                    >
                      {data.gender}
                    </TableCell>
                    <TableCell
                      sx={{ py: 2, fontSize: "1.1rem" }}
                      align="center"
                    >
                      {data.place}
                    </TableCell>
                    <TableCell
                      sx={{ py: 2, fontSize: "1.1rem" }}
                      align="center"
                    >
                      {" "}
                      <IconButton
                        onClick={() => {
                          setUserId(data.id);
                          setOpen(true);
                        }}
                      >
                        <DeleteForeverIcon sx={{ color: "primary.main" }} />
                      </IconButton>{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        
      </Paper>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Delete User"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Are you want to delete the user Id : {userId}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button
            onClick={() => {
              handleClose();
              handleDelete();
            }}
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <Modal
        open={addUser}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <h2 id="parent-modal-title" my={5}>
              Add User
            </h2>

            <IconButton
              onClick={() => {
                setFormdata({
                  id: "",
                  name: "",
                  userName: "",
                  place: "",
                  age: "",
                  gender: "",
                });
                setAddUser(false);
              }}
            >
              <ClearIcon color="primary.main" />
            </IconButton>
          </Stack>

          <Stack component={"form"} direction={"column"} mt={2} spacing={4}>
            <TextField
              onChange={handleChange}
              variant="outlined"
              name="name"
              label="Name"
              required
              value={formData.name}
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              label="User Name"
              name="userName"
              required
              value={formData.userName}
            />
            <TextField
              onChange={handleChange}
              variant="outlined"
              label="Age"
              name="age"
              required
              value={formData.age}
            />
            
            <TextField
              onChange={handleChange}
              variant="outlined"
              label="Place"
              name="place"
              value={formData.place}
              required
            />
            <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="gender"
        onChange={handleChange}
      >
        <FormControlLabel value="Female"  control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
        
      </RadioGroup>
            <Button onClick={handleSubmit} sx={{fontWeight : "bold" ,py:1 }} variant="contained">
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
};

export default UserDetails;
