import * as React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

const jobs = [
    { title: 'Thermoplastic', image: '../img/thermoplastic.png' },
    { title: 'Striping', image: '../img/unnamed.jpg' },
    { title: 'Seal Coating', image: '/path/to/image3.jpg' },
    { title: 'Sign Painting', image: '/path/to/image4.jpg' },
    { title: 'Pressure Washing', image: '/path/to/image5.jpg' },
    { title: 'Asphalt', image: '/path/to/image6.jpg' },
  ];

export default function ApplicableJobs() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {jobs.map((job, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={job.image}
                alt={job.title}
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