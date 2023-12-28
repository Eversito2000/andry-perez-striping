import React from 'react';
import { Box, Typography, Paper, Grid, Link } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: 'Rubik',
    },
});
theme = responsiveFontSizes(theme);
const LandingHeader = () => {
    const emailAddress = 'aaastriping30@gmail.com'
    const phoneNumber = '(305)-905-6654'
    const altNumber = '(786)-838-1657'
    const bgImage = require('../img/bgImage.jpg'); // import the image using require

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                height: '50vh', // change this from '100vh' to '50vh'
                backgroundImage: `url(${bgImage})`, // use the imported image
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '2rem',
                color: 'white',
            }}>
                <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                    <Grid item xs={12} sm={6} md={6} lg={5} xl={4}>
                        <Paper sx={{
                            backdropFilter: 'blur(2px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '10px',
                            padding: '5px',
                            height: 'auto'
                        }}>
                            <Typography variant="h4" sx={{ margin: '1rem', color: 'black', fontFamily: 'Rubik' }}>Pavement Maintenance Specialist</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={5} xl={2}>
                        <Box
                            sx={{
                                backdropFilter: 'blur(8px)', // Adjust blur intensity
                                backgroundColor: 'rgba(255, 255, 255, 0.85)', // Adjust background opacity and color
                                borderRadius: '12px', // Rounded corners
                                padding: '20px', // Padding around content
                                color: 'rgba(0, 0, 0, 0.85)', // Text color
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for depth
                                textAlign: 'center'
                            }}
                        >
                            <Typography variant="h5" fontWeight={700} mb={2}>
                                Contact Me
                            </Typography>
                            <Typography variant="h6" mb={1}>
                                <Link href={`mailto:${emailAddress}`} underline="none" color="inherit">
                                    Email: {emailAddress}
                                </Link>
                            </Typography>
                            <Typography variant="h6" mb={1}>
                                <Link href={`tel:${phoneNumber}`} underline="none" color="inherit">
                                    Home Phone: {phoneNumber}
                                </Link>
                            </Typography>
                            <Typography variant="h6">
                                <Link href={`tel:${altNumber}`} underline="none" color="inherit">
                                    Alt Phone: {altNumber}
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default LandingHeader;