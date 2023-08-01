import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default Banner => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      // navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><a href=""><img className='position-relative' src="./img/bannerimg/R5-mainbanner.jpg" alt="banner-1" /></a></SwiperSlide>
      <SwiperSlide><a href=""><img className='position-relative' src="./img/bannerimg/gall-air-banner.gif" alt="banner-2" /></a></SwiperSlide>
      <SwiperSlide><a href=""><img className='position-relative' src="./img/bannerimg/HERO-banner.jpg" alt="banner-3" /></a></SwiperSlide>
      <SwiperSlide><a href=""><img className='position-relative'   src="./img/bannerimg/life-good-banner.jpg" alt="banner-4" /></a></SwiperSlide>
      
    </Swiper>
  );
};