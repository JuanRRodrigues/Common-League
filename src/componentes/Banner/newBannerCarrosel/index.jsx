import React, { useState} from 'react'
import games from '../../../fotos.json';
import styled from "styled-components";
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation'
import {EffectCoverflow, Navigation, Autoplay} from 'swiper/modules'
import './gameSwiper.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ImagensContainer = styled.div`
  
`

const Imagen = styled.img`
  width: 200px;
  height: 100px;
`

function BannerSwiper({ game = [games] }){
    const [active, setActive] = useState(false);
    const [fotosDaGaleria, setFotosDaGaleria] = useState(games);
    const [fotosSelecionada, setFotosSelecionadas] = useState(null);
    const handleToggleVideo = () => {
        setActive(!active);
    }
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
{games.map(game => (
<SwiperSlide key={game.id}>
    <div className='gameSlider'>
        <Imagen src={game.path} alt="Game Image"/>
           <ImagensContainer>
           <h2>{game.titulo}</h2>
           <p>{game.titulo}</p>
           <div className='buttons'>
                <a href="#" className='orderBtn'>
                    Order Now
                </a>
                <a href="#" className='planBtn' onClick={handleToggleVideo}>
                        <span className='pause'>
                            <i className='bi bi-pause-fill'></i>
                        </span>
                            <span className='paly'>
                                <i className='bi bi-pause-fill'></i>
                            </span>
                        </a>
                    </div>
           </ImagensContainer>
       
    </div>
</SwiperSlide>
))} 
        </Swiper>
    )




           

}

export default BannerSwiper;