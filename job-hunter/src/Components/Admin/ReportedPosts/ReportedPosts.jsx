import { Avatar, Box, Button, Card, CardContent, CardHeader, CardMedia, Collapse, Divider, Grid, IconButton, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminRequest } from "../../../Constants/Constants";
import Modal from '@mui/material/Modal';
import PostActions from "../../User/Feeds/Post/PostActions/PostActions";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
    width: 500,
   minHeight:300,
   maxHeight:600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  border: "none",
  outline: "none",
  borderRadius: "5px",
    overflow: "scroll",
  scrollbarWidth: "none"
};

const ReportedPosts = () => {
 const [refresh, setRefresh] = useState("");
 const [rep, setRep] = useState([]);
 const [profile, setProfile] = useState([]);
 const [postData, setPostData] = useState({});
 const [open, setOpen] = useState(false);
 const navigate = useNavigate();
    

useEffect(() => {
      AdminRequest({
       method: "GET",
        url: "/reportedposts",
     }).then((data) => {
     //  console.log(data.data,"gggg")
         setRep(data.data);
    })}, [refresh]);
    
    
          
//get specific post    

    
const handleOpen = (data, autherId) => {
  console.log(autherId,"hhhhhhhhhh")
  setProfile(autherId);
  setPostData(data);
  setOpen(true);
} 
    
    const handleClose = () => setOpen(false);
    

        



    const handleDelete = (reportedId) => {
          
          AdminRequest({
            method: "POST",
            url: "/deletepost",
            data: {
              postId: reportedId,
            },
          }).then((data) => {
            setRefresh(Math.random() * Math.random());
          });
        
        
        };




  return (
    <Box sx={{ padding: "20px 40px 20px 60px" }}>
      <TableContainer sx={{ maxWidth: 900 }} component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Auther</TableCell>
              <TableCell>No.of times reported</TableCell>
              <TableCell>post</TableCell>
              <TableCell></TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rep?.map((data) => (
              <TableRow
                key={data?.autherId.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  component="th"
                  scope="row"
                >
                  <Avatar
                    id="basic-button"
                    aria-haspopup="true"
                    sx={{
                      mt: 0.5,
                      width: "40px",
                      height: "40px",
                      border: "2px solid #01A9C1",
                    }}
                    alt="Remy Sharp"
                    src={`http://localhost:5000/static/images/${
                      data?.autherId?.profile[
                        data?.autherId?.profile?.length - 1
                      ]
                    }`}
                  />
                  <Typography sx={{ marginLeft: "15px" }}>
                    {data?.autherId.name}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  {data?.reasons.length}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    onClick={() =>
                      handleOpen(data?.reportedPostId, data?.autherId)
                    }
                  >
                    View Post
                  </Button>
                </TableCell>
                <TableCell component="th" scope="row"></TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    onClick={() => handleDelete(data?.reportedPostId._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card
            sx={{
              width: "100%",
              minHeight: "200px",
              maxHeight: "auto",
              marginTop: 3,
              bgcolor: "#ffffff",
            }}
          >
            {profile?.profile ? (
              <CardHeader
                avatar={
                  <Avatar
                    src={`http://localhost:5000/static/images/${
                      profile?.profile[profile?.profile.length - 1]
                    }`}
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    onClick={() =>
                      navigate("/viewprofile", {
                        state: {
                          id: profile?.userId,
                        },
                      })
                    }
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon sx={{ float: "right" }} />
                  </IconButton>
                }
                title={postData?.name}
                subheader={postData?.date}
              />
            ) : (
              <CardHeader
                avatar={
                  <Avatar
                    src="https://www.boxymo.ie/news/img/ferrari.jpg"
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                  />
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon sx={{ float: "right" }} />
                  </IconButton>
                }
                title={postData?.name}
                subheader={postData?.date}
              />
            )}

            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {postData?.description}
              </Typography>
            </CardContent>
            {postData?.image ? (
              <CardMedia
                component="img"
                height="400"
                image={`http://localhost:5000/static/images/${postData.image}`}
                alt="post image"
              />
            ) : (
              ""
            )}
            {postData?.video ? (
              <CardMedia
                component="video"
                height="400"
                image={`http://localhost:5000/static/images/${postData?.video}`}
                alt="video"
                controls
              />
            ) : (
              ""
            )}
            <Divider />
            <PostActions post={postData} />
          </Card>
        </Box>
      </Modal>
    </Box>
  );
}

export default ReportedPosts