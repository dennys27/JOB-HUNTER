import React, { useEffect, useState } from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from '@mui/system';
import { AdminRequest } from '../../../Constants/Constants';
import { Avatar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';








const VerificationTable = () => {

 const navigate = useNavigate()
 const[accounts,setAccounts]=useState([])
 const[refresh,setRefresh]=useState("")
    useEffect(() => {

        AdminRequest({
          method: "GET",
          url: "/verifications",
        }).then((data) => {
          console.log(data);
          setAccounts(data.data);
        });
    }, [refresh])
  
  const handleVerify = (userId) => {

    AdminRequest({
      method: "POST",
      url: "/approve",
      data: {
        userId:userId
      }
    }).then((data) => {
      if (data.data.verification === "true") {
       setRefresh(Math.random()*Math.random())
     }
    })

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
              {accounts.map((data) => (
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
                      onClick={() => handleVerify(data.user._id)}
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

export default VerificationTable