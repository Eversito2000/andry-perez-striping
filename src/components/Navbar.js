import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Link } from 'react-scroll';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Rubik',
  },
});

const Navbar = () => {
  const Name = 'Andry Perez';

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ boxShadow: 'none' }}>
        <Toolbar className="Navbar">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={12}>
              <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} xs={12} >
                {Name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  flexGrow: 1,
                }}
                xs={12}
              >
                <Link to="about-me" spy={true} smooth={true} duration={500}>
                  <Typography variant="h5" component="div" sx={{ marginX: 4 }}>
                    About Me
                  </Typography>
                </Link>
                <Link to="past-jobs" spy={true} smooth={true} duration={500}>
                  <Typography variant="h5" component="div" sx={{ marginX: 4 }}>
                    Past Jobs
                  </Typography>
                </Link>
                <Link to="landing-header" spy={true} smooth={true} duration={500}>
                  <Typography variant="h5" component="div" sx={{ marginX: 4 }}>
                    Contact Me
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
