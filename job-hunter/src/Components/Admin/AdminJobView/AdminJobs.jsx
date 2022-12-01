import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdminRequest } from "../../../Constants/Constants";
import AdminJob from "./AdminJob/AdminJob";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    AdminRequest({
      method: "GET",
      url: "/getAdminJobs",
    }).then((data) => {
        console.log(data.data)
      setJobs(data.data);
    });
  }, []);
    
    

  return (
    <Box sx={{ backgroundColor: "#D9D9D9", bottom: 0 }}>
      <Container sx={{ paddingBottom: 20 }}>
        <Box
          sx={{ width: "100%" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid
            sx={{ paddingTop: "40px",paddingLeft:"70px" }}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
           

            <Grid item xs={2} sm={4} md={10}>
              <Box sx={{ marginTop: 2 }}>
                <Grid
                  container
                  spacing={{ xs: 2, sm: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {jobs?.map((job, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                    <AdminJob job={job}/>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AdminJobs;
