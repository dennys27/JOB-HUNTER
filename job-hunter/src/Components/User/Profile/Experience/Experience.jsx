import React from 'react'
import { Box, Container, Grid, Typography } from "@mui/material";
import './Experience.css'
const Experience = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "400px",
        backgroundColor: "white",
        borderRadius: "5px",
        marginTop: "20px",
        paddingTop: "10px",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "space-around",marginBottom:"10px" }}>
        <Typography className="exp">Experiance</Typography>
        <Typography className="exp">Certifications</Typography>
        <Typography className="exp">Education</Typography>
      </Container>
      <Container>
        <Box>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <img
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEU7V53///84VZwqTJjBx9tRaKUhRpbx8va5wNctTpkzUpt+jLj8/P03VJwnSZdDXqHj5/DJ0OJZb6ra3uurtdKTn8RddK1GYKLr7vWapslccKlUaqdNZaVwgrOyu9bU2eeKmMCCkb1ne7Cirs5zhLYAOZAVQJM9hR2BAAAEL0lEQVR4nO3d63KjOBCGYdGK7UgR4oydjHPOzP1f4sZxvLtVM0NkE6lb1Pf+TFVcPAU2BwlQxTHXDGOlllI1Do37lKmjr1feEnEv2LdFZL3q3X/CutXL0Z0i3dYnYWdK7sWJkjXdUVib5a3AY2Tqg9C1lntJomVb9y7sNfdyREz3hXJqqdvoIaqcajz3UkTNN2pY7rfwkB3UuOSNVKlyVNWyhbScQ1GEEEIIIYQQQgghFDWi8hTRYfxvOWOAVFrjjdru2/burn3vx2q/31aK3v/stTHG2jLfITOy2m/vh4fHerc5DeUexnHdZrPb1XX3ePXQ3z7dvLSZXgq1Xt9c1/+T/TXnbvK7Yk+anpsA3GfZCUvdPoSsvFyF5MczVl9+QjLV1Zm+vISkb8/2ZSU0q+4CYEZCf7O5BJiNkPwlW2hOQnN9ITATIenzf0PzEq4vXoOZCP3r5cAshOZ5BjAHYbk66zg0PyHpi3b0GQkvOlTLSUjVPKB84frcs6XchOXLTKB4oX5cuLAc5wKlC2ccj+YhnP1DKl5oZu4L5QvX8w5n5AtpOx8oW/gdG6lsoZ97PCNeWF52dS0f4flHbO73RAvtEE7r+qdxb/369wQDlQ69/rS7XXljy/xGt0NP7l9ttvd/7oI20JdsbzyjfdAVqLd8b46kuxBgznd/2rcA4EbyT+VX2acA4WvGqzDsqDTT6TLHTP81cLfmXso5hQwZXuW8kQZdo7k13Es5pxDhc84/pUHCl1wP1z4KEeZ9m3mI8Mfi1+Fq8esQQtlBCKH8IIRQfhBCKD8IIZQfhBDKD0IIRUR/mFnwbz8DrupXUx9wiHl8mIzbTBQwBDz17x91vEQyXxtm9rh44TXv4FQCIfPgVAIh85yvBMKWd2AjgZDVl0K4Y57rFl/YMY+Cxxc2zDMZ4gu554TFFz4xz2SIL7xfvPCOeZw/unCzZT5/jC7c2aULmc8OEwiZz50SCF+5J/ZFF3LvDuML77knhcUWuj33xcboQvZXjcUW1uyzwGML+V9UFVv4wL2ziC7kn+ceW/jGvTuMLuQfmYot9EsXbth3FrGF7OdO0YXclxIP2avrieqvEZP/L+KWIT3Rr4Bx/K2f+AAJwMkWMVNhMgghlB+EEMoPQgjlByGE8oMQQvlBCKH8IIRQfhBCKD8IIZQfhBDKD0II5QchhPKDEEL5QQih/CCEUH4QQig/CCGUH4QQyg9CCOUHIYTygxBC+UEIofwghFB+EEIov4TC6ls+5exSCalSTC9sTSUsRzXwPEIjldAOiumxZ6mEvlFOsWymiYRUOcX0VOxEQt0XqnAtxzcxjdC27l1Y1BwPkUwiJFMXB2HRmfTPOk0htKYrjsKibnXq1RhfSLr9eNrWh7BwvfI26dsi4gqJrFf98YVL6vPTXDOMKQ/g4gqrcWhOL5T6B1A+TfrSdQDIAAAAAElFTkSuQmCC"
                alt=""
              />
            </div>
            <div>
              <Typography>Facebook</Typography>
              <h6>Bangaluru</h6>
              <p>time period</p>
            </div>
            <div>
              <p>view projects</p>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
}

export default Experience