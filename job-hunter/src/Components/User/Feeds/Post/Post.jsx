import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Divider } from "@mui/material";
import PostActions from "./PostActions/PostActions";



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
 
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({ post }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  

  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "200px",
        maxHeight: "600px",
        marginTop: 3,
        bgcolor: "#F4F5F5",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.name}
        subheader={post.date}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.description}
        </Typography>
      </CardContent>
      {post.image ? (
        <CardMedia
          component="img"
          height="400"
          image={`http://localhost:5000/static/images/${post.image}`}
          alt="post image"
        />
      ) : (
        ""
      )}
      {post.video ? (
        <CardMedia
          component="video"
          height="400"
          image={`http://localhost:5000/static/images/${post.video}`}
          alt="video"
          controls
        />
      ) : (
        ""
      )}
      <Divider/>
      <PostActions post={post} />
    </Card>
  );
}
