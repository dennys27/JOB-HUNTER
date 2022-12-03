import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import AdminJobs from '../AdminJobView/AdminJobs';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import AdminPostJob from '../AdminPostJob/AdminPostJob';
import AdminSideBar from '../AdminSideBar/AdminSideBar'
import ReportedTable from '../Reported users/ReportedTable';
import ReportedPosts from '../ReportedPosts/ReportedPosts';
import VerificationTable from '../verificationTable/VerificationTable';

const AdminHome = () => {

  const [choosen, setChoosen] = useState("jobs")


   const mySwitchFunction = (menu) => {
     switch (menu) {
       case "jobs":
         return [<AdminJobs />];
       case "postjob":
         return [<AdminPostJob />];
       case "verification":
         return [<VerificationTable />];
       case "reported":
         return [<ReportedTable />];
       case "reportedposts":
         return [<ReportedPosts />];
     }
   };

  return (
    <div>
      <AdminNavbar />
      <Grid sx={{ paddingTop: "50px" }} container spacing={2}>
        <Grid item xs={2}>
          <AdminSideBar setChoosen={setChoosen} />
        </Grid>
        <Grid item xs={10}>
          <Box
            sx={{ width: "100%", height: "700px", backgroundColor: "#D9D9D9" }}
          >
            {mySwitchFunction(choosen)}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminHome