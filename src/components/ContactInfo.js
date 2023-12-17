import React from 'react';
import { Typography, Box } from '@mui/material';

const ContactInfo = () => {
    const emailAddress = 'aaastripingda@gmail.com'
    const phoneNumber = '(305)-905-6654'
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Contact Me
            </Typography>
            <Typography variant="body1">
                Email: {emailAddress}
            </Typography>
            <Typography variant="body1">
                Phone: {phoneNumber}
            </Typography>
        </Box>
    );
};

export default ContactInfo;