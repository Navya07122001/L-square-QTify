import React, { useEffect, useState } from 'react';
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from "./CarouselRight.module.css";

function CarouselSectionRight() {
    let swiper =useSwiper();
    const[isEnd, setIsEnd]=useState(swiper.isEnd);
  
    useEffect(()=>{
      swiper.on("slideChange", () => {
        // to set the state when ever we change the slide, to control conditional rendering of Right arrow button
        setIsEnd(swiper.isEnd)
    })
    },[swiper]);
    return (
        <div className={styles.rightNavigation}>
             {!isEnd && (
                <button
                onClick={()=>swiper.slideNext()}
                >
                    <img src={rightButton} alt="Right Button" />
                </button>
            )}
            
        </div>
    );
}

export default CarouselSectionRight;