import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { useAnimation, motion } from 'framer-motion';
import Text from '../../../../components/Atom/Text';
import MotionTopUp from '../../../../components/Atom/Motion/MotionTopUp';
import ButtonOutline from '../../../../components/Atom/Button/ButtonOutline';
import useDetachScreen from '../../../../hooks/useDetachScreen';

const TrendingCard = ({data}: {data: any}) => {
  const animate = useAnimation();
  const isMobile = useDetachScreen('mobile');
  const isTablet = useDetachScreen('tablet');

  return (
    <TrendingCardStyled 
          onMouseEnter={() => animate.start('visible')}
          onMouseLeave={() => animate.start('hidden')} background={data.background} className={'trending-card'}>

          <motion.img variants= {{
            hidden: {scale: 1},
            visible: { scale: 1.1 }
          }} 
          animate={animate}
          initial={'hidden'}
          transition={{duration: 0.1}} src={data.image}></motion.img>
          <Box>
            <Text py={2} fontSize={isTablet ? '24px' : '36px'} fontWeight={700}>
              {data.title}
            </Text>
            <MotionTopUp fullWidth={isMobile}>
              <ButtonOutline fullWidth={isMobile} label={data.buttonLabel}/>
            </MotionTopUp>
          </Box>

        </TrendingCardStyled>
  );
};

export default TrendingCard;

const TrendingCardStyled = styled(Box)<{background: string}>`
    background-image: url(${props => props.background});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    overflow: hidden;
    padding: 40px;
    position: relative;

    img {
      max-width: 50%;
      min-height: 0;
      -o-object-fit: contain;
      object-fit: contain;
    }
`;