import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ImageCarousel = () => {
    const images = [
        {
            original: require('../img/carouselImages/3.jpeg'),
            thumbnail: require('../img/carouselImages/3.jpeg'),
        },
        {
            original: require('../img/carouselImages/4.jpeg'),
            thumbnail: require('../img/carouselImages/4.jpeg'),
        },
        {
            original: require('../img/carouselImages/5.jpeg'),
            thumbnail: require('../img/carouselImages/5.jpeg'),
        },
        {
            original: require('../img/carouselImages/6.jpeg'),
            thumbnail: require('../img/carouselImages/6.jpeg'),
        },
        {
            original: require('../img/carouselImages/7.jpeg'),
            thumbnail: require('../img/carouselImages/7.jpeg'),
        },
        {
            original: require('../img/carouselImages/8.jpeg'),
            thumbnail: require('../img/carouselImages/8.jpeg'),
        },
        {
            original: require('../img/carouselImages/9.jpeg'),
            thumbnail: require('../img/carouselImages/9.jpeg'),
        },
        {
            original: require('../img/carouselImages/10.jpeg'),
            thumbnail: require('../img/carouselImages/10.jpeg'),
        },
        {
            original: require('../img/carouselImages/11.jpeg'),
            thumbnail: require('../img/carouselImages/11.jpeg'),
        },
        {
            original: require('../img/carouselImages/12.jpeg'),
            thumbnail: require('../img/carouselImages/12.jpeg'),
        },
        {
            original: require('../img/carouselImages/13.jpeg'),
            thumbnail: require('../img/carouselImages/13.jpeg'),
        },
        {
            original: require('../img/carouselImages/14.jpeg'),
            thumbnail: require('../img/carouselImages/14.jpeg'),
        },
        {
            original: require('../img/carouselImages/15.jpeg'),
            thumbnail: require('../img/carouselImages/15.jpeg'),
        },
        {
            original: require('../img/carouselImages/16.jpeg'),
            thumbnail: require('../img/carouselImages/16.jpeg'),
        },
        {
            original: require('../img/carouselImages/18.jpeg'),
            thumbnail: require('../img/carouselImages/18.jpeg'),
        },
        {
            original: require('../img/carouselImages/19.jpeg'),
            thumbnail: require('../img/carouselImages/19.jpeg'),
        },
        {
            original: require('../img/carouselImages/20.jpeg'),
            thumbnail: require('../img/carouselImages/20.jpeg'),
        },
    ];

    return (
        <div>
            <ImageGallery
                items={images}
                showFullscreenButton={false}
                showPlayButton={false}
                showIndex
            />
        </div>
    );
};

export default ImageCarousel;