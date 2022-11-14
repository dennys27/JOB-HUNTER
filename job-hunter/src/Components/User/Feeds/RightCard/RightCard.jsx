import { Container, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import CircleIcon from "@mui/icons-material/Circle";
import React from 'react'

const RightCard = () => {
  return (
    <div className="card">
          <Container sx={{ padding: 3 }} >
              <Typography variant="h6">
                   Latest
              </Typography>

     
     
        <List>
          
          <ListItem disablePadding>
           <Typography>latest</Typography> 
          </ListItem>
          <ListItem disablePadding>
           <Typography>latest</Typography>
          </ListItem>
        </List>
    

 </Container>
    </div>
  )
}

export default RightCard