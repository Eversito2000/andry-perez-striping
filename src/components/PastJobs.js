import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import ImageCarousel from './CarouselPastJobs';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik',
  }
});

const PastJobs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={4} >
        <Grid item xs={12} sm={6} align='left'>
          <ImageCarousel sx={{ maxWidth: '100%', height: 'auto' }} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" component="div" align='left'>
            My Work
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.56em",
              lineHeight: "1.5",
              color: "#4A4A4A",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            In my role as a Pavement Maintenance Specialist, my work becomes a canvas for my dedication and pride. Every crack sealed and each line meticulously striped reflects my commitment to excellence. I take immense pride in knowing that my efforts contribute to safer and more reliable roads for everyone who travels them.
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default PastJobs;
