import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';


const theme = createTheme({
    typography: {
        fontFamily: 'Rubik',
    },
});
const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ boxShadow: 'none' }}>
                    <Toolbar className='Navbar'>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexGrow: 1
                            }}
                        >
                            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                                Copyright @2024  Created by Evers Perez
                            </Typography>
                            {/* <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                                <Link href="https://www.linkedin.com/in/evers-perez-34516b145/" underline="none" sx={{ color: 'black' }}>
                                    <LinkedInIcon />
                                </Link>
                            </Typography> */}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};

export default Footer;