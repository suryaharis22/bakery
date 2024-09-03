import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { animate } from 'motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    const imageSlide = [
        {
            src: "images/slider-1.jpg",
            title1: "Cake for Later Cake1",
            title2: "as a way of Life",
            url: "/"
        },
        {
            src: "images/slider-2.jpg",
            title1: "Cake for Later Cake2",
            title2: "as a way of Life",
            url: "/"
        },
        {
            src: "images/slider-3.jpg",
            title1: "Cake for Later Cake3",
            title2: "as a way of Life",
            url: "/"
        },
        {
            src: "images/slider-1.jpg",
            title1: "Cake for Later Cake4",
            title2: "as a way of Life",
            url: "/"
        }
    ];

    const handleSlideChange = (swiper) => {
        const activeSlide = swiper.slides[swiper.activeIndex];
        const title = activeSlide.querySelector('.carousel-caption > h3');
        const subTitle = activeSlide.querySelector('.carousel-caption > p');
        const btnCaption = activeSlide.querySelector('.carousel-caption > button');

        if (title) {
            animate(title, { opacity: [0, 1], transform: ['translate(200px, -200px)', 'translate(0, 0)'] }, { duration: 0.8 });
        }
        if (subTitle) {
            animate(subTitle, { opacity: [0, 1], transform: ['translate(-200px, 200px)', 'translate(0, 0)'] }, { duration: 0.6 });
        }
        if (btnCaption) {
            animate(btnCaption, { opacity: [0, 1], transform: ['translate(0, 300px)', 'translate(0, 0)'] }, { duration: 0.8 });
        }
    };

    return (
        <div className="photo-slider container-fluid no-padding">
            <div className="header-carousel">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(swiper) => handleSlideChange(swiper)}
                    onSlideChange={(swiper) => handleSlideChange(swiper)}
                >
                    {imageSlide.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Link href={slide.url}>
                                <img src={slide.src} alt={slide.title1} title={`${slide.title1} ${slide.title2}`} />
                                <div className="carousel-caption">
                                    <h3 >{slide.title1}</h3>
                                    <p >{slide.title2}</p>
                                    <button >Shop Now</button>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Carousel;
