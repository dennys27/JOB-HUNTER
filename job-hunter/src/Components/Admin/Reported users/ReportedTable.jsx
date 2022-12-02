import { Avatar, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from "@mui/material/Paper";
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ReportedTable = () => {

    const navigate = useNavigate()
    const[reported,setReported] = useState([])

    const handleDelete = () => {
        
    }

  return (
    <Box sx={{ padding: "20px 40px 20px 60px" }}>
      <TableContainer sx={{ maxWidth: 900 }} component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reported?.map((data) => (
              <TableRow
                key={data.user.name}
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
                      data.user?.profile[data.user.profile.length - 1]
                    }`}
                  />
                  <Typography sx={{ marginLeft: "15px" }}>
                    {data.user.name}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.user.headline}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    onClick={() =>
                      navigate("/adminview", {
                        state: {
                          id: data.user._id,
                        },
                      })
                    }
                  >
                    View profile
                  </Button>
                  <Button
                    // onClick={() => handleVerify(data.user._id)}
                    sx={{ paddingLeft: "30px" }}
                  >
                    Approve
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ReportedTable