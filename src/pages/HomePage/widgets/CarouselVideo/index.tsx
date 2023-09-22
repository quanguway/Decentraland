import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { COLOR_DIVIDER, COLOR_PRIMARY, COLOR_TEXT } from '../../../../assets/colors';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination, Scrollbar } from 'swiper';
import ButtonPrimary from '../../../../components/Atom/Button/ButtonPrimary';


import 'swiper/css';
import 'swiper/css/pagination';
import { Theme, useMediaQuery } from '@mui/material';
import { theme } from '../../../../hooks/useDetachScreen';
// import 'swiper/css/navigation';


const videos = [
  {
    title: 'Decentraland',
    subtitle: 'Make new friends, explore diverse events, and spark your creativity in a virtual world built and owned by its community.',
    button: [
      {
        label: 'Learn more',
      }
    ],
    src: 'https://cms-videos.decentraland.org/ea2ybdmmn1kv/610dKEPsI3gVbx7JwKhEp7/e87a83a7e58bc5723459911193cde508/Hero_Video_2_8.mp4'
  },
  {
    title: 'Decentraland',
    subtitle: 'Make new friends, explore diverse events, and spark your creativity in a virtual world built and owned by its community.',
    button: [
      {
        label: 'Learn more',
      }
    ],
    src: 'https://cms-videos.decentraland.org/ea2ybdmmn1kv/4onJ1IUZWR0ugw74Kx2v9b/b89ba75ba1fa28ce3e214df3f2a04ef6/SDK7_low.mp4'
  },
  {
    title: 'Decentraland',
    subtitle: 'Make new friends, explore diverse events, and spark your creativity in a virtual world built and owned by its community.',
    button: [
      {
        label: 'Learn more',
      }
    ],
    src: 'https://cms-videos.decentraland.org/ea2ybdmmn1kv/610dKEPsI3gVbx7JwKhEp7/e87a83a7e58bc5723459911193cde508/Hero_Video_2_8.mp4'
  }
];
const CarouselVideo = () => {


  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <CarouselStyled>
      <Swiper
        style={{ cursor: 'pointer'}}
        modules={[Navigation, Pagination, Scrollbar]}
        pagination={pagination}

        // navigation
        navigation={{
          nextEl: '.carousel-button-next',
          prevEl: '.carousel-button-prev',
          // disabledClass: 'carousel-button-disabled'
        }}
        slidesPerView={1}
        >
        
          {videos.map((o, index) => (
            <SwiperSlide key={index}>
              
              <ReactPlayer 
                width={'100%'} 
                height={'600px'} 
                className={'banner-player'} 
                url={o.src} 
                playsinline={true}
                muted={true}
                controls={false} 
                playing={true} 
                loop={true} />
                <SwiperContentStyled theme={theme}>
                  <h3 className='content-title'>{o.title}</h3> 
                  <p className='content-subtitle'>{o.subtitle}</p>
                  <ButtonPrimary label='Learn more'/>
                </SwiperContentStyled>
            </SwiperSlide>
          ))}
      </Swiper>
      { isTablet && <>
        <div className='carousel-button carousel-button-next'>
          <NextIcon/>
        </div>
        <div className='carousel-button carousel-button-prev'>
          <PrevIcon/>
        </div>
      </>
      }
    </CarouselStyled>
  );
};

export default CarouselVideo;

const CarouselStyled = styled.div`
  .banner-player {
    width: 100%;
    height: 100%;
    video {
      object-fit: fill;
    }
  }

  .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 4px;
    .swiper-pagination-bullet {
      background: #fff;
      border-radius: 1.5px;
      cursor: pointer;
      height: 3px;
      opacity: .5;
      width: 32px;
    }
    .swiper-pagination-bullet-active {
      background-color: ${COLOR_PRIMARY};
    }
  }

  .carousel-button {
    display: flex;
    position: absolute;
    top: calc(50% - 150px);
    z-index: 10;
    cursor: pointer;
    border: 1px solid ${COLOR_DIVIDER};
    border-radius: 100%;
    margin: 0 2px;
    padding: 26px;

    &:hover {
      border-color: white;
    }
  }

  .carousel-button-next {
    right: 5px;
  }

  .carousel-button-prev {
    left: 5px;
  }

  .carousel-button-disabled {
    opacity: 0.5;
  }

  /* .carousel-button-prev, .carousel-button-next {
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

const SwiperContentStyled = styled.div<{theme: Theme}>`
    height: 100%;
    left: 0;
    overflow: hidden;
    position: absolute;
    top: 0;
    width: fit-content;
    padding: 0px 100px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;


    ${props => props.theme.breakpoints.down('sm')} {
      justify-content: flex-end;
      padding: 10px 10px 40px;
      height: 90%;

      & > * {
        width: 100%;
        &> button {
          width: 100%;
        }
      }
    }


    .content-title {
      color: ${COLOR_TEXT};
      font-size: 100px;
      font-style: normal;
      font-weight: 700;
      letter-spacing: -.02em;
      line-height: 121px;
      text-shadow: 0 4px 10px rgba(0,0,0,.25);
      margin: 12px 0px;

      ${props => props.theme.breakpoints.down('sm')} {
        font-size: 56px;
        line-height: 68px;
      }

    }
    .content-subtitle {
      color: ${COLOR_TEXT};
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 32px;
      max-width: 28em;
      padding-bottom: 2em;
      text-shadow: 0 2px 4px rgba(0,0,0,.25);
      width: 100%;
    }
`;

export const NextIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.40645 10.0641L9.44261 8.97959L1.12212 0.325521L0.0859627 1.40998L7.36691 8.98283L0.144013 16.5424L1.18356 17.6237L5.32408 13.2901L8.40645 10.0641Z" fill="white"/>
    </svg>
  );
};

export const PrevIcon = () => {
  return (
    <svg width="18" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.14122 7.84984L0.0979259 8.92743L8.36109 17.6363L9.40439 16.5587L2.17361 8.9379L9.44626 1.42615L8.41387 0.338089L4.24483 4.6442L1.14122 7.84984Z" fill="white"/>
    </svg>
  );
};