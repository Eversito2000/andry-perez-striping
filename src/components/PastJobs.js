import * as React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ImageCarousel from './CarouselPastJobs';
import { Typography } from '@mui/material';

const PastJobs = () => {
    
    return (
        <div>
            <div>
                <Typography variant="h4" component="div" >
                    Previous jobs
                    </Typography>
                <ImageCarousel />   
            </div>
        </div>
    );
};

export default PastJobs;