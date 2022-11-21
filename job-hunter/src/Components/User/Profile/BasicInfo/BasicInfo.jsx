import { Box, Collapse, Grid, Modal, Typography } from '@mui/material';
import './BasicInfo.css'
const BasicInfo = () => {
    return (
      <Box
        sx={{
          width: "100%",
          height: "250px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <Grid container>
          <Grid item xs={4} md={4} lg={6}>
            <Box sx={{ padding: 2 }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "700" }}
                variant="h6"
              >
                Basic Information :
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Age
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                      26 Years
                    </Typography>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Location
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                      Bangaluru,karnataka
                    </Typography>
                  </div>
                </div>

                <div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Years of experiance
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                      6 Years
                    </Typography>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography
                      fontSize={14}
                      component="h6"
                      variant="h6"
                      style={{ color: "gray" }}
                    >
                      Availability
                    </Typography>
                    <Typography fontSize={13} component="h6" variant="h6">
                      Full Time
                    </Typography>
                  </div>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4} md={3} lg={6}>
            <Box sx={{ padding: 2 }}>
              <Typography
                sx={{ fontSize: "18px", fontWeight: "700" }}
                variant="h6"
              >
                About :
              </Typography>
              <div
                className="about"
                style={{
                  width: "100%",
                  maxHeight: "165px",
                  overflow: "scroll",
                }}
              >
                <Typography>
                  Lorem Ipsum ha sido el texto de relleno estándar de las
                  industrias desde el año 1500, cuando un impresor (N. del T.
                  persona que se dedica a la imprenta) desconocido usó una
                  galería de textos y los mezcló de tal manera que logró hacer
                  un libro de textos especimen. No sólo sobrevivió 500 años,
                  sino que tambien ingresó como texto de relleno en documentos
                  electrónicos, quedando esencialmente igual al original.
                  ingresó como texto de relleno en documentos electrónicos,
                  quedando esencialmente igual al original. ingresó como texto
                  de relleno en documentos electrónicos, quedando esencialmente
                  igual al original. ingresó como texto de relleno en documentos
                  electrónicos, quedando esencialmente igual al original.
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
}

export default BasicInfo