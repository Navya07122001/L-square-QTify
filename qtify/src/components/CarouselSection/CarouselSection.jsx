import React, { useState, useEffect } from 'react';
import styles from "./CarouselSection.module.css";
import leftButton from '../../assets/leftbutton.svg'
import rightButton from '../../assets/rightbutton.svg';
import CardStyle from '../CardStyle/CardStyle';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';

function CarouselSection({ name, albums }) {
    const [swiperRef, setSwiperRef] = useState(null);
    const sanitizedId = name.split(" ").join("");

    useEffect(() => {
        if (swiperRef) {
            const handleReachBeginning = () => setIsBeginning(true);
            const handleFromBeginning = () => setIsBeginning(false);
            const handleReachEnd = () => setIsEnd(true);
            const handleFromEnd = () => setIsEnd(false);

            swiperRef.on('reachBeginning', handleReachBeginning);
            swiperRef.on('fromEdge', handleFromBeginning);
            swiperRef.on('reachEnd', handleReachEnd);
            swiperRef.on('fromEdge', handleFromEnd);

            return () => {
                swiperRef.off('reachBeginning', handleReachBeginning);
                swiperRef.off('fromEdge', handleFromBeginning);
                swiperRef.off('reachEnd', handleReachEnd);
                swiperRef.off('fromEdge', handleFromEnd);
            };
        }
    }, [swiperRef]);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className={styles.carouselContainer}>
            {!isBeginning && (
                <button
                    className={`${styles.leftbtn} ${styles.sliderbtn}`}
                    id={`${sanitizedId}-left`}
                    onClick={() => swiperRef.slidePrev()}
                >
                    <img src={leftButton} alt="Left Button" />
                </button>
            )}
            <Swiper
                initialSlide={0}
                style={{padding:"0px 20px"}}
                onSwiper={setSwiperRef}
                slidesPerView={"auto"}
                centeredSlides={false}

                spaceBetween={40}
                breakpoints={{
                    769: {
                        slidesPerView: 8,
                        slidesPerGroup: 8,
                    },
                }}
               allowTouchMove
                navigation={{
                    nextEl: `#${sanitizedId}-right`,
                    prevEl: `#${sanitizedId}-left`,
                }}
                
                modules={[Navigation]}
                className="mySwiper"
                
            >
                {albums.map((eachalbum, index) => (
                    <SwiperSlide key={index} virtualIndex={index} style={{width:'139px'}}>
                        <CardStyle eachalbum={eachalbum} />
                    </SwiperSlide>
                ))}
            </Swiper>
            {!isEnd && (
                <button
                    className={`${styles.rightbtn} ${styles.sliderbtn}`}
                    id={`${sanitizedId}-right`}
                    onClick={() => swiperRef.slideNext()}
                >
                    <img src={rightButton} alt="Right Button" />
                </button>
            )}

        </div>
    );
}

export default CarouselSection;
