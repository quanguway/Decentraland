import styled from '@emotion/styled';
import Text from '../../../../components/Atom/Text';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import { NextIcon, PrevIcon } from '../CarouselVideo';
import CardWhatNews from './CardWhatNews';

import 'swiper/css';
import 'swiper/css/pagination';
import { COLOR_DIVIDER } from '../../../../assets/colors';
import { useState } from 'react';
import useDetachScreen, { theme } from '../../../../hooks/useDetachScreen';
import ButtonOutline from '../../../../components/Atom/Button/ButtonOutline';
import MotionTopUp from '../../../../components/Atom/Motion/MotionTopUp';
import { Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';

const WhatNew = () => {

  const {t} = useTranslation('homepage');

  const [swiper, setSwiper] = useState<any>();

  const whatNews = [
    {
      title: 'Community Projects',
      time: 'SEP 13, 2023',
      subTitle: 'Angzaar Outpost: A Marketplace Within Decentraland’s Genesis City',
      bgUrl: 'https://images.ctfassets.net/ea2ybdmmn1kv/4v9tvq5MaZR5KkBOyo3zSV/02bb581401259f43e2812d9c0635d968/angzaar.jpg' 
    },
    {
      title: 'Community Projects',
      time: 'SEP 13, 2023',
      subTitle: 'Angzaar Outpost: A Marketplace Within Decentraland’s Genesis City',
      bgUrl: 'https://images.ctfassets.net/ea2ybdmmn1kv/4v9tvq5MaZR5KkBOyo3zSV/02bb581401259f43e2812d9c0635d968/angzaar.jpg' 
    },
    {
      title: 'Community Projects',
      time: 'SEP 13, 2023',
      subTitle: 'Angzaar Outpost: A Marketplace Within Decentraland’s Genesis City',
      bgUrl: 'https://images.ctfassets.net/ea2ybdmmn1kv/4v9tvq5MaZR5KkBOyo3zSV/02bb581401259f43e2812d9c0635d968/angzaar.jpg' 
    },
    {
      title: 'Community Projects',
      time: 'SEP 13, 2023',
      subTitle: 'Angzaar Outpost: A Marketplace Within Decentraland’s Genesis City',
      bgUrl: 'https://images.ctfassets.net/ea2ybdmmn1kv/4v9tvq5MaZR5KkBOyo3zSV/02bb581401259f43e2812d9c0635d968/angzaar.jpg' 
    },
  ];

  const isTablet = useDetachScreen('tablet');

  return (
    <WhatNewStyled theme={theme}>
      <Text mb={4} fontWeight={600}  variant='h3'>{t('what_new.title')}</Text>
      <Swiper
        className='what-news'
        itemRef='what-news'
        modules={[Navigation]}
        onSlideChange={(value) => {setSwiper(value.activeIndex);}}
        navigation={{
          nextEl: '.control .news-button-next',
          prevEl: '.control .news-button-prev',
          disabledClass: 'swiper-button-disabled'
        }}
        slidesPerView={1}
        spaceBetween={30}

        breakpoints={{
          730: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1100: {
            slidesPerView: 4,
            spaceBetween: 30

          }
        }}
      >
        {whatNews.map((o, index) => (
          <SwiperSlide key={index}>
            <CardWhatNews {...o} />
          </SwiperSlide>
        ))}
    </Swiper>
    {isTablet && <div className='control' style={{margin: '24px 0px'}} >
      <div className='swiper-progressbar'>
        <span className='swiper-progressbar-fill' style={{transform: `translateX(${swiper*100}%)`}}>
        </span>
      </div>
      <div className='swiper-button news-button-prev'>
        <PrevIcon/>
      </div>
      <div className='swiper-button news-button-next'>
        <NextIcon/>
      </div>
    </div>}
      <MotionTopUp >
        <ButtonOutline label={t('what_new.button_label')} />
      </MotionTopUp>
    </WhatNewStyled>
  );
};

export default WhatNew;

const WhatNewStyled = styled.div<{theme: Theme}>`

  padding: 0px 100px;
  ${props => props.theme.breakpoints.down('lg')} {
    padding: 0px 20px;
  }

  .swiper-button {
    display: flex;
    z-index: 20;
    cursor: pointer;
    border: 1px solid ${COLOR_DIVIDER};
    border-radius: 100%;
    width: 18px;
    height: 18px;
    padding: 24px;
    &:hover {
      border-color: white;
    }
  }

  .control {
    display: flex;
    align-items: center;
    gap: 5px;
  }
    

  .swiper-progressbar {
    background: hsla(263,7%,63%,.22);
    border-radius: 11.7147px;
    display: inline-block;
    flex: 1;
    height: 2px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .swiper-progressbar-fill {

    width: 50%;
    background-color: #fff;
    height: 100%;
    position: absolute;
    transition: transform .2s ease-out;

    ${props => props.theme.breakpoints.down('sm')} {
      width: 25%;
      
    }
  }

  .news-button-next {
    right: 5px;
  }

  .news-button-prev {
    left: 5px;
  }

`;