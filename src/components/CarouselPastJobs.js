import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img2 from '../img/carouselImages/unnamed.jpg';

const ImageCarousel = () => {
    const images = [img2];

    return (
        <div style={{}}>
            <Carousel autoPlay infiniteLoop>
                {images.map((src, index) => (
                    <div key={index}>
                        <img src={src} alt={`carousel-${index}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;