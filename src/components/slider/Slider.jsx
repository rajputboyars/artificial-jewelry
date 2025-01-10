"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider({children}) {
    
  return (
    <>
    <div className='main-swiper-body w-full'>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            Array.isArray(children) ?
            children.map((slide,index)=>{
                return(
                        <SwiperSlide key={index} className='!w-full'>{slide.slide}</SwiperSlide>
                )
            })
            :
        <div className='text-5xl text-red-500'>There is no slide</div>
        }
      </Swiper>
    </div>

    </>
  );
}
