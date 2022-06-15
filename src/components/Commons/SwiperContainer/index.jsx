import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './style.scss';

// import required modules
import { Navigation, Pagination } from 'swiper';

export function SwiperDefault({ children }) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {children}
      </Swiper>
    </>
  );
}

export function SwiperProduct({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        className="mySwiper"
        navigation={true} 
        pagination={false}
        modules={[Navigation, Pagination]} 
      >
        {children}
      </Swiper>
    </>
  );
}

export function SwiperAuto({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </>
  );
}
