import * as React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const jobs = [
  { title: "Thermoplastic", image: require("../img/thermoplastic.png") },
  { title: "Striping", image: require("../img/parking-lot-sealcoating.png") },
  { title: "Seal Coating", image: require("../img/sealcoat_watermark.png") },
  { title: "Sign Painting", image: require("../img/street-sign.png") },
  { title: "Pressure Washing", image: require("../img/pressure-washing.png") },
  { title: "Asphalt", image: require("../img/asphalt.webp") },
];

export default function ApplicableJobs() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent="center">
        {" "}
        {/* Change this to "center" */}
        {jobs.map((job, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                src={job.image}
                alt={job.title}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {job.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
