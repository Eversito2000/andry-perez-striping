import React from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);
const LandingHeader = () => {
    const emailAddress = 'aaastripingda@gmail.com'
    const phoneNumber = '(305)-905-6654'
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
                    <Grid item xs={12} sm={3}>
                        <Paper sx={{
                            backdropFilter: 'blur(1px)', // add blur effect
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', // semi-transparent white background
                            borderRadius: '10px', // rounded edges
                            padding: '5px', // add some padding
                            height: 'auto' // set height to auto to maintain aspect ratio
                        }}>
                            <Typography variant="h4" sx={{ margin: '1rem', color: 'black', fontFamily: 'Rubik' }}>Pavement Maintenance Specialist</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={3} />
                    <Grid item xs={12} sm={3}>
                        <Box sx={{
                            backdropFilter: 'blur(1px)', // add blur effect
                            backgroundColor: 'rgba(255, 255, 255, 0.5)', // semi-transparent white background
                            borderRadius: '10px', // rounded edges
                            padding: '10px',
                            color: 'black',
                            marginRight: '15px', // add some padding
                            height: 'auto',
                            width: '100%' // set height to auto to maintain aspect ratio
                        }}>
                            <Typography variant="h6" gutterBottom>
                                Contact Me <br></br>For a Free Quote Today!
                            </Typography>
                            <Typography variant="body1">
                                Email: {emailAddress}
                            </Typography>
                            <Typography variant="body1">
                                Phone: {phoneNumber}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};

export default LandingHeader;