import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="" /></SwiperSlide>
      </Swiper>
  
    </div>
  );
}
