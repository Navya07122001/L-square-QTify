import React, { useState, useEffect, useRef } from 'react';
import styles from "./CarouselSection.module.css";
import leftButton from '../../assets/leftbutton.svg';
import rightButton from '../../assets/rightbutton.svg';
import CardStyle from '../CardStyle/CardStyle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

function CarouselSection({ name, albums }) {
    const sanitizedId = name.split(" ").join("");
    const swiperRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;

            const handleSlideChange = () => {
                setIsBeginning(swiperInstance.isBeginning);
                setIsEnd(swiperInstance.isEnd);
            };

            swiperInstance.on('slideChange', handleSlideChange);

            // Cleanup function
            return () => {
                swiperInstance.off('slideChange', handleSlideChange);
            };
        }
    }, [albums]);

    useEffect(() => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.slideTo(0, 1);
        }
    }, [albums]);

    return (
        <div className={styles.carouselContainer}>
            {!isBeginning && (
                <button
                    className={`${styles.leftbtn} ${styles.sliderbtn}`}
                    id={`${sanitizedId}-left`}
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                >
                    <img src={leftButton} alt="Left Button" />
                </button>
            )}
            <Swiper
                ref={swiperRef}
                initialSlide={0}
                style={{ padding: "0px 20px" }}
                slidesPerView={"auto"}
                centeredSlides={false}
              
                spaceBetween={65}
                
                allowTouchMove
                navigation={{
                    nextEl: `#${sanitizedId}-right`,
                    prevEl: `#${sanitizedId}-left`,
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                {albums.map((eachalbum, index) => (
                    <SwiperSlide key={index} virtualIndex={index} style={{ width: '139px' }}>
                        <CardStyle eachalbum={eachalbum} title={name}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            {!isEnd && (
                <button
                    className={`${styles.rightbtn} ${styles.sliderbtn}`}
                    id={`${sanitizedId}-right`}
                    onClick={() => swiperRef.current.swiper.slideNext()}
                >
                    <img src={rightButton} alt="Right Button" />
                </button>
            )}
        </div>
    );
}

export default CarouselSection;
