import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const CarouselWithThumbnails = ({ slides }) => {
    // const slides = [
    //     { image: '/images/slide1.jpg', alt: 'Slide 1', caption: 'Caption 1' },
    //     { image: '/images/slide2.jpg', alt: 'Slide 2', caption: 'Caption 2' },
    //     { image: '/images/slide3.jpg', alt: 'Slide 3', caption: 'Caption 3' },
    //     { image: '/images/slide4.jpg', alt: 'Slide 4', caption: 'Caption 4' },
    // ];

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        console.log('Slides:', slides);
        console.log('Thumbs Swiper:', thumbsSwiper);
    }, [thumbsSwiper]);

    return (
        <main>
            <Swiper
                modules={[Navigation, Thumbs]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} // Pastikan thumbsSwiper tidak null atau destroyed
                loop
            >
                {slides.length > 0 ? (
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={slide.alt} />
                            {/* <p>{slide.caption}</p> */}
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>No slides available</SwiperSlide>
                )}
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                loop
                style={{ marginTop: '10px' }}
            >
                {slides.length > 0 ? (
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} alt={slide.alt} style={{ cursor: 'pointer' }} />
                        </SwiperSlide>
                    ))
                ) : (
                    <SwiperSlide>No thumbnails available</SwiperSlide>
                )}
            </Swiper>
        </main>
    );
};

export default CarouselWithThumbnails;
