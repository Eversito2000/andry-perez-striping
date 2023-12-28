import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik',
  }
});

const jobs = [
  { title: "Thermoplastic", image: require("../img/thermoplastic.png") },
  { title: "Road Striping", image: require("../img/road.png") },
  { title: "Seal Coating", image: require("../img/sealcoat_watermark.png") },
  { title: "Sign Painting", image: require("../img/street-sign.png") },
  { title: "Pressure Washing", image: require("../img/power-washing.png") },
  { title: "Asphalt", image: require("../img/road-roller.png") },
];
export default function ApplicableJobs() {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5} justifyContent="center">
        {jobs.map((job, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={4} xl={2}>
            <Card sx={{  backgroundColor:'transparent', boxShadow:'none' }}>
              <CardMedia
                component="img"
                height="100"
                src={job.image}
                alt={job.title}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography  variant="h5" component="div">
                  {job.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </ThemeProvider>
  );
}