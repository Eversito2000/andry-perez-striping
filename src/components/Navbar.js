import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
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
  const Name = 'Andry Perez'

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{boxShadow:'none'}}>
          <Toolbar className='Navbar'>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
              {Name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexGrow: 1,
                marginX: 2,
              }}
            >
              <Link to="about-me" spy={true} smooth={true} duration={500}>
                <Typography variant="h5" component="div" sx={{ marginRight: 4 }}>
                  About Me
                </Typography>
              </Link>
              <Link to="past-jobs" spy={true} smooth={true} duration={500}>
                <Typography variant="h5" component="div" sx={{ marginRight: 4 }}>
                  Past Jobs
                </Typography>
              </Link>
              <Link to="landing-header" spy={true} smooth={true} duration={500}>
                <Typography variant="h5" component="div" sx={{ marginRight: 4 }}>
                  Contact Me
                </Typography>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Navbar;