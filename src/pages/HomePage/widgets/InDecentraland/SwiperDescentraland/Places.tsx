import styled from '@emotion/styled';
import CardDecentraland from '../../../../../components/Molecule/CardDecentraland';
import { COLOR_DIVIDER, COLOR_PRIMARY, COLOR_TEXT } from '../../../../../assets/colors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NextIcon, PrevIcon } from '../../CarouselVideo';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const SwiperDescentralandPlaces = () => {

  const places = [
    {
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'
    },
    {
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'
    },{
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'
    },{
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'
    },{
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'
    },{
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'
    },{
      title: 'ICE Poker - The Stronghold',
      by: 'Decentral Games',
      userCount: 71,
      background: 'https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'
    },
  ];

  const pagination = {
    clickable: true,
    dynamicBullets: true,
    // renderBullet: function (index: number, className: string) {
    //   return `<span class="${className}"></span>`;
    // },
  };

  return (
    <CarouselStyled>
    <Swiper
      className='acccaa'
      itemRef='haha'
      modules={[Navigation, Pagination]}
      pagination={pagination}
      loop={true}
      
      navigation={{
        nextEl: '.des-button-next',
        prevEl: '.des-button-prev',
        // disabledClass: 'swiper-button-disabled'
      }}
      slidesPerView={1.5}
      spaceBetween={40}
      centeredSlides={true}
      >
      
        {places.map((o, index) => (
          <SwiperSlide key={index}>
            <div className='slide-group'>
              <CardDecentraland/>
              <CardDecentraland/>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
    <div className='swiper-button des-button-next'>
      <NextIcon/>
    </div>
    <div className='swiper-button des-button-prev'>
      <PrevIcon/>
    </div>
  </CarouselStyled>
  );
};

export default SwiperDescentralandPlaces;

const CarouselStyled = styled.div`
  position: relative;
  .swiper-pagination {
    display: flex;
    justify-content: center;
    /* gap: 4px; */
    width: fit-content;
    .swiper-pagination-bullet {
      background: #fff;
      border-radius: 1.5px;
      cursor: pointer;
      height: 3px;
      opacity: .5;

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
    top: calc(50% - 12px);
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

  .des-button-next {
    right: 5px;
  }

  .des-button-prev {
    left: 5px;
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