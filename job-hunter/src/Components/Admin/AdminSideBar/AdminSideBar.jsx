import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import StoreIcon from "@mui/icons-material/Store";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AppsIcon from "@mui/icons-material/Apps";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const AdminSideBar = () => {
  return (
    <Box flex={1} p={0} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box
        position="fixed"
        sx={{
          backgroundColor: "#F4F5F5",
          width: 250,
          height: "100%",
          color: "black",
          backgroundColor: "white",
        }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <AppsIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText onClick={() => {}} primary="Users" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ReceiptLongIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText onClick={() => {}} primary="Requests" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <InsertDriveFileIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText onClick={() => {}} primary="Jobs" />
            </ListItemButton>
          </ListItem>

  

          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <Diversity2Icon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Reported posts" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <SettingsSuggestIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary="Reported users" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default AdminSideBar;
