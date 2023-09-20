import styled from '@emotion/styled';
import Text from '../../../../../components/Atom/Text';
import { Box, TypographyProps } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';

type CardWhatNewsProps = {
  bgUrl: string;
  title: string;
  subTitle: string;
  time: string;
}

const CardWhatNews = ({bgUrl, title, time, subTitle}: CardWhatNewsProps) => {

  const animate = useAnimation();


  const textStyles: TypographyProps = {
    fontWeight: 600,
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
  };

  return (
    <CardWhatNewsStyled 
        onMouseEnter={() => animate.start('visible')}
        onMouseLeave={() => animate.start('hidden')} >
      <CardMotionScaleBgStyled 
        >
          <BackgroundCardStyled src={bgUrl} variants= {{
            hidden: {scale: 1},
            visible: { scale: 1.1 }
          }} 
          animate={animate}
          initial={'hidden'}
          transition={{duration: 0.1}} />
        {/* <BackgroundCardStyled
          bgUrl={bgUrl}
          variants= {{
            hidden: {scale: 1},
            visible: { scale: 1.1 }
          }} 
          animate={animate}
          initial={'hidden'}
          transition={{duration: 0.1}} /> */}
      </CardMotionScaleBgStyled>
      <Box padding={'24px 0px'}>
        <Text mb={1} fontSize={'13px'} lineHeight={'120%'} {...textStyles}>{title} <span style={{color: '#a09ba8'}}>{time}</span></Text>
        <Text fontSize={'18px'} {...textStyles}>{subTitle}</Text>
      </Box>

    </CardWhatNewsStyled>
  );
};

export default CardWhatNews;

const CardWhatNewsStyled = styled.div`
    background-color: transparent;
    border-radius: unset;
    cursor: pointer;
    flex: 1;
    justify-content: flex-start;
    padding: 0;
`;

const CardMotionScaleBgStyled = styled(Box)`
  position: absolute;
  display: flex;
  border-radius: 12px;
  cursor: pointer;

  overflow: hidden;
  padding-top: 56%;
  position: relative;
`;

const BackgroundCardStyled = styled(motion.img)`
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    transition: transform .2s;
    width: 100%;
`;