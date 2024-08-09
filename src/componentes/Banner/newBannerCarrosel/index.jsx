import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swipper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'
import '/gameSwiper.css'
import {EffectCoverflow, Navigation, Autoplay} from 'swiper/modules'

function BannerSwiper() {
    return (
        <Swiper
        effect={'coverflow'}
        grabcursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
            rotate: 35,
            stretch: 200,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        }}
    //        autoplay={{
   //             delay: 2500,
   //             disableOnInteraction: false,
    //    }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className='gameSwiper'
        >
<SwiperSlide key={game.id}>
    <div className='gameSlider'>
        <img src={game.img} alt="Game Image"/>
            <div>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <div></div>
            </div>
    </div>
        <h4>{game.title}</h4>
</SwiperSlide>

        </Swiper>
    )
}

export default BannerSwiper;