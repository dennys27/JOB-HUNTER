import { Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import CircleIcon from "@mui/icons-material/Circle";
import React from 'react'

const RightCard = () => {
  return (
    <div className="card">
      <Container sx={{ padding: 3 }}>
        <Typography sx={{ fontSize: 15 }} component="h6" variant="h6">
          Jobhunter News
        </Typography>

        <List>
          <ListItem disablePadding>
            <Typography sx={{ fontSize: 13 }}>UpGrad to hire 1,400</Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography sx={{ fontSize: 13 }}>Weak rupee fuelling reveneu rise</Typography>
          </ListItem>
        </List>
      </Container>
    </div>
  );
}

export default RightCard