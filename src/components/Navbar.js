import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Navbar = () => {
  const Name = 'Andry Perez'
  const emailAddress = 'aaastripingda@gmail.com'
  const phoneNumber = '(305)-905-6654'

  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar className='Navbar'>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }} >
            {Name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexGrow: 1
            }}
          >
            <Typography variant="h6" component="div">
              {phoneNumber}
            </Typography>
            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              {emailAddress}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;