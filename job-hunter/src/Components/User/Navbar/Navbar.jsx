import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box";
import "./Navbar.css"
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { Avatar, Button, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { logout } from "../../../features/Auth/AuthSlice";


import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineBell,
  AiOutlineSnippets,
  AiOutlineForm
} from "react-icons/ai";
import { useEffect } from 'react';
import { userRequest } from '../../../Constants/Constants';




const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  marginBottom:15,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));




const Navbar = () => {

  const [user,setUser]=useState({})
 
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user"))?._id
    if (data) {
      userRequest({
        method: "POST",
        url: "/user/getuser",
        data: {
          _id: data,
        },
      }).then((data) => {
        
        setUser(data.data.data)
      })
    }
    
  },[])

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOptionClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (route) => {
    navigate(`/${route}`)
  }

  const handleLogout = async() => {
    await dispatch(logout());
   navigate("/login")
   
  }

  let url = window.location.href.endsWith("/");

  return (
    <>
      <AppBar
        className="navbar"
        sx={{
          height: "53px",
          backgroundColor: "#ffffff",
        }}
      >
        <Box maxWidth="xl" sx={{ width: "100%" }}>
          <Toolbar
            sx={{ display: "flex", justifyContent: "space-around" }}
            disableGutters
          >
            <Box sx={{ display: "flex", flexDirection: "flex-start" }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 5,
                  mb: 1.5,
                  display: { xs: "flex", md: "flex", lg: "flex" },
                  fontFamily: ["Poppins", "sans-serif"],
                  fontSize: "17px",
                  fontWeight: 800,
                  color: "#01A9C1",
                  textDecoration: "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                JOBHUNTER
              </Typography>

              <Search sx={{ display: { xs: "none", sm: "flex" } }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            {token && url === false ? (
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  postion: "right",
                  mr: 3,
                  mb: 1.5,
                  color: "black",
                  fontWeight: "200",
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr={3}
                  mt={0.5}
                  className="hover"
                  onClick={() => handleNavigate("Home")}
                >
                  <AiOutlineHome size={23} />
                  <Typography
                    sx={{
                      display: "block",
                      top: 0,
                      fontSize: 14,
                    }}
                  >
                    Home
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr={2}
                  mt={0.5}
                  className="hover"
                >
                  <AiOutlineMessage size={23} />
                  <Typography
                    sx={{
                      display: "block",
                      top: 0,
                      fontSize: 14,
                    }}
                  >
                    Messages
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr={3}
                  mt={0.5}
                  className="hover"
                >
                  <AiOutlineBell size={23} />
                  <Typography
                    sx={{
                      display: "block",
                      top: 0,
                      fontSize: 14,
                    }}
                  >
                    Notifications
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr={3}
                  mt={0.5}
                  className="hover"
                  onClick={() => handleNavigate("Jobs")}
                >
                  <AiOutlineSnippets size={23} />

                  <Typography
                    sx={{
                      display: "block",
                      top: 0,
                      fontSize: 14,
                    }}
                  >
                    Jobs
                  </Typography>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  mr={3}
                  mt={0.5}
                  className="hover"
                >
                  <AiOutlineForm size={23} />
                  <Typography
                    sx={{
                      display: "block",
                      top: 0,
                      fontSize: 14,
                    }}
                  >
                    Post a job
                  </Typography>
                </Box>

                <Box>
                  {user.profile ? (
                    <Avatar
                      onClick={(event) => handleOptionClick(event)}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      sx={{
                        mt: 0.5,
                        width: "40px",
                        height: "40px",
                      }}
                      alt="Remy Sharp"
                      src={`http://localhost:5000/static/images/${
                  user?.profile[user.profile.length - 1]
                }`}
                    />
                  ) : (
                    <Avatar
                      onClick={(event) => handleOptionClick(event)}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      sx={{
                        mt: 0.5,
                        width: "40px",
                        height: "40px",
                      }}
                      alt="Remy Sharp"
                      src="https://www.boxymo.ie/news/img/ferrari.jpg"
                    />
                  )}
                </Box>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => handleNavigate("profile")}>
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Box
                      onClick={() => {
                        handleLogout();
                      }}
                    >
                      Logout
                    </Box>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box>
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    postion: "right",
                    mr: 3,
                    mb: 1.5,
                    color: "black",
                    fontWeight: "200",
                  }}
                >
                  <Box
                    sx={{ visibility: "hidden" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mr={3}
                    mt={0.5}
                    className="hover"
                  >
                    <AiOutlineHome size={23} />
                    <Typography
                      sx={{
                        display: "block",
                        top: 0,
                        fontSize: 14,
                      }}
                    >
                      Home
                    </Typography>
                  </Box>

                  <Box
                    sx={{ visibility: "hidden" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mr={2}
                    mt={0.5}
                    className="hover"
                  >
                    <AiOutlineMessage size={23} />
                    <Typography
                      sx={{
                        display: "block",
                        top: 0,
                        fontSize: 14,
                      }}
                    >
                      Messages
                    </Typography>
                  </Box>

                  <Box
                    sx={{ visibility: "hidden" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mr={3}
                    mt={0.5}
                    className="hover"
                  >
                    <AiOutlineBell size={23} />
                    <Typography
                      sx={{
                        display: "block",
                        top: 0,
                        fontSize: 14,
                      }}
                    >
                      Notifications
                    </Typography>
                  </Box>

                  <Box
                    sx={{ visibility: "hidden" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mr={3}
                    mt={0.5}
                    className="hover"
                  >
                    <AiOutlineSnippets size={23} />
                    <Typography
                      sx={{
                        display: "block",
                        top: 0,
                        fontSize: 14,
                      }}
                    >
                      Jobs
                    </Typography>
                  </Box>

                  <Box
                    sx={{ visibility: "hidden" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    mr={3}
                    mt={0.5}
                    className="hover"
                  >
                    <AiOutlineForm size={23} />
                    <Typography
                      sx={{
                        display: "block",
                        top: 0,
                        fontSize: 14,
                      }}
                    >
                      Post a job
                    </Typography>
                  </Box>

                  <div>
                    <Box sx={{ visibility: "hidden" }}>
                      <Avatar
                        sx={{
                          mt: 0.5,
                          width: "40px",
                          height: "40px",
                        }}
                        alt="Remy Sharp"
                        src="https://www.boxymo.ie/news/img/ferrari.jpg"
                      />
                    </Box>
                  </div>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/login"
                  >
                    <Button
                      sx={{
                        backgroundColor: "#01A9C1",
                        width: "100px",
                        height: "39px",
                        borderRadius: 6,
                        marginTop: 0.5,
                      }}
                      variant="contained"
                      display={"flex"}
                      justifyContent={"center"}
                      textAlignCenter={"center"}
                    >
                      login
                    </Button>
                  </Link>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}

export default Navbar