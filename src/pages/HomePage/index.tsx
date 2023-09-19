import styled from '@emotion/styled';
import Header from '../../components/Template/Header';
import CarouselVideo from './widgets/CarouselVideo';
import InDecentraland from './widgets/InDecentraland';
import BannerIntroduce from './widgets/BannerIntroduce';
import Missions from './widgets/Missions';
import WhatNew from './widgets/WhatNew';
import AskedQuestion from './widgets/AskedQuestion';
import Footer from './widgets/Footer';
import MotionScrollVisible from '../../components/Atom/Motion/MotionScrollVisible';

const HomePage = () => {
  return (
    <HomePageStyled>
      <Header/>
      <CarouselVideo />
      <MotionScrollVisible>
        <InDecentraland />
      </MotionScrollVisible>
      <MotionScrollVisible>
        <WhatNew />
      </MotionScrollVisible>
      <BannerIntroduce />
      <Missions />
      <AskedQuestion />
      <Footer />
    </HomePageStyled>
  );
};

export default HomePage;

const HomePageStyled = styled.div`
  background-color: #18141a;
`;