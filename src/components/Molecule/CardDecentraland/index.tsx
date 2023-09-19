import styled from '@emotion/styled';
import MotionScale from '../../Atom/Motion/MotionScale';
import { motion, useAnimation } from 'framer-motion';
import CardStat from './CardStat';
import CardDetail from './CardDetail';
import CardMotionScaleBg from '../../Atom/Motion/CardMotionScaleBg';

const CardDecentraland = () => {

  const animate = useAnimation();

  return (
    <CardDecentralandStyled className='card-place' style={{
      
    }}>
      <CardMotionScaleBg bgUrl='https://peer.decentraland.org/content/contents/bafybeif7b6dxt6p4i6iwpjfaq7dy4ihjqrqlhsrx6swym6rl6l55kswzg4'>
        <CardStat count={85}/>
        <CardDetail />
      </CardMotionScaleBg>
    </CardDecentralandStyled>
  );
};

export default CardDecentraland;

const CardDecentralandStyled = styled.div`
  position: relative;
  cursor: pointer;
  padding-top: 60%;
  width: 100%;
`;
