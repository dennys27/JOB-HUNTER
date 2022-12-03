import { Avatar, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from "@mui/material/Paper";
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminRequest } from "../../../Constants/Constants";

const ReportedTable = () => {

    const navigate = useNavigate()
  const [reported, setReported] = useState([])
  const [refresh, setRefresh] = useState("")
  
    useEffect(() => {
      AdminRequest({
        method: "GET",
        url: "/reportedusers",
      }).then((data) => {
        console.log(data);
        setReported(data.data);
      });
    }, [refresh]);
  

    const handleDelete = (reportedId) => {
      
       AdminRequest({
         method: "GET",
         url: "/deleteProfile",
         data: {
           reportedId:reportedId
         }
       }).then((data) => {
         setRefresh(Math.random()*Math.random())
       })
    }

  return (
    <Box sx={{ padding: "20px 40px 20px 60px" }}>
      <TableContainer sx={{ maxWidth: 900 }} component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>No.of times reported</TableCell>
              <TableCell></TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reported?.map((data) => (
              <TableRow
                key={data.reportedId.name}
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
                      data.reportedId?.profile[
                        data.reportedId.profile.length - 1
                      ]
                    }`}
                  />
                  <Typography sx={{ marginLeft: "15px" }}>
                    {data.reportedId.name}
                  </Typography>
                </TableCell>
                <TableCell component="th" scope="row">
                  {data.reasons.length}
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    onClick={() =>
                      navigate("/adminview", {
                        state: {
                          id: data.reportedId._id,
                        },
                      })
                    }
                  >
                    View profile
                  </Button>
                
                </TableCell>
                <TableCell component="th" scope="row">
                  <Button
                    onClick={() =>
                     handleDelete(data.reportedId._id)
                    }
                  >
                    Delete
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