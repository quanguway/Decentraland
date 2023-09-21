import styled from '@emotion/styled';
import CardDecentraland from '../../../../../components/Molecule/CardDecentraland';
import { COLOR_DIVIDER, COLOR_PRIMARY } from '../../../../../assets/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextIcon, PrevIcon } from '../../CarouselVideo';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import useDetachScreen, { theme } from '../../../../../hooks/useDetachScreen';
import MotionTopUp from '../../../../../components/Atom/Motion/MotionTopUp';
import ButtonOutline from '../../../../../components/Atom/Button/ButtonOutline';
import { Theme } from '@mui/material';

export type EventsType = {
  title: string;
  by: string;
  userCount: number;
  background: string;
}
const SwiperDescentralandEvents = () => {


  const Events: EventsType[] = [
    {
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: '	https://events-assets-099ac00.decentraland.org/poster/3fb205bd6502ec4a.png'
    },
    {
      title: 'Meta GamiMall ',
      by: 'Meta Live Studio',
      userCount: 32,
      background: '	https://events-assets-099ac00.decentraland.org/poster/3fb205bd6502ec4a.png'
    },{
      title: 'WonderMine Crafting Game',
      by: 'WonderZone',
      userCount: 2,
      background: 'https://events-assets-099ac00.decentraland.org/poster/3fb205bd64f23c6b.png"'
    },{
      title: 'GolfCraft minigolf',
      by: 'OhMyVerse',
      userCount: 12,
      background: 'https://peer.decentraland.org/content/contents/bafkreiavp4qhn2kzyfto524pcb3otefprzqy5mjl6e347jhacxhzmnjqwe'
    },{
      title: 'Genesis Plaza',
      by: 'Decentraland Foundation',
      userCount: 71,
      background: 'https://events-assets-099ac00.decentraland.org/poster/3fb205bd64f23c6b.png"'
    },{
      title: 'Butterfly Prawn Farming Game',
      by: 'ButterflyPrawn',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafkreiacfw2ukumqaim77k2co7j2yjog522d35ptxyfw32xqvuobw7etdi'
    }
  ];

  const pagination = {
    clickable: true,
    dynamicBullets: true,
    // renderBullet: function (index: number, className: string) {
    //   return `<span class="${className}"></span>`;
    // },
  };

  const isMobile = useDetachScreen('mobile');
  const isTablet = useDetachScreen('tablet');

  // const renderGroup = () => {
  //   cosnt

  // }

  console.log(isMobile);
  

  return (
    <CarouselStyled theme={theme}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={pagination}
        loop={true}
        
        navigation={{
          nextEl: '.des-button-next',
          prevEl: '.des-button-prev',
          // disabledClass: 'swiper-button-disabled'
        }}
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={true}

        breakpoints= {{
          1000: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
        }}
        >
        
          {Events.map((o, index, arr) => {
            if(!isMobile ? index % 2 === 0 : 
              index % 1 === 0) {

            return <SwiperSlide key={index}>
              <div className='slide-group'>
                <CardDecentraland isEvent {...arr[index]}/>
                {!isMobile && <CardDecentraland isEvent {...arr[index+1]}/>}
              </div>
            </SwiperSlide>;
            } else {
              return;
            }

          })}
      </Swiper>
      {!isMobile && <>
        <div className='swiper-button des-button-next'>
          <NextIcon/>
        </div>
        <div className='swiper-button des-button-prev'>
          <PrevIcon/>
        </div>
      </>}
      {isTablet && <MotionTopUp >
        <ButtonOutline style={{marginTop: '32px'}} label='See All Events'/>
        </MotionTopUp>}
  </CarouselStyled>
  );
};

export default SwiperDescentralandEvents;

const CarouselStyled = styled.div<{theme: Theme}>`
  overflow: hidden;
  .swiper {
    ${props => props.theme.breakpoints.up('lg')} {
      left: -14%;
      width: 128%;
      height: 450px;
    }
  }
  position: relative;
  .swiper-pagination {
    display: flex;
    justify-content: center;
    width: fit-content;
    .swiper-pagination-bullet {
      background: #fff;
      border-radius: 1.5px;
      cursor: pointer;
      height: 3px;
      opacity: .5;
      width: 20px;

      /* left: 50%; */
      /* transform: translateX(-50%); */
      /* width: 120px!important; */
    }
    /* .swiper-pagination-bullet-active {
      background-color: ${COLOR_PRIMARY};
      width: 120px;

    } */
  }

  .slide-group {
    display: grid;
    gap: 1em;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    width: 100%;
  }

  .swiper-button {
    display: flex;
    position: absolute;
    top: calc(50% - 120px);
    z-index: 20;
    cursor: pointer;
    border: 1px solid ${COLOR_DIVIDER};
    border-radius: 100%;
    margin: 0 2px;
    padding: 26px;

    &:hover {
      border-color: white;
    }
  }

  .swiper-slide {
    /* margin-right: 135px !important; */
  }

  .des-button-next {
    right: 50px;
  }

  .des-button-prev {
    left: 50px;
  }

  .swiper-button-disabled {
    opacity: 0.5;
  }

  /* .swiper-button-prev, .swiper-button-next {
    background-image: url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgOCAxNCc+PGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz48cGF0aCBkPSdNMC01aDh2MjRIMHonLz48cGF0aCBmaWxsPScjRkZGJyBkPSdtMCA3IDYuMzc5IDYuMjI4YS45NjYuOTY2IDAgMCAwIDEuMzQzIDAgLjkxMi45MTIgMCAwIDAgMC0xLjMxTDIuNjg2IDdsNS4wMzYtNC45MTdhLjkxMi45MTIgMCAwIDAgMC0xLjMxMS45NjYuOTY2IDAgMCAwLTEuMzQzIDBMMCA3eicvPjwvZz48L3N2Zz4=');
    background-position-x: 10px;
    background-position-y: 9px;
    background-repeat: no-repeat;
    background-size: 7px;
    border: 1px solid var(--divider);
    border-radius: 100%;
    cursor: pointer;
    filter: var(--brightness);
    height: 32px;
    margin: 0 2px;
    padding: 8px;
    width: 32px;
  } */
  
`;