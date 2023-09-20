import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { Box, BoxProps } from '@mui/material';

type CardMotionScaleBgProps = BoxProps & {
  children?: React.ReactNode,
  bgUrl: string
}

const CardMotionScaleBg = ({children, bgUrl, ...props}: CardMotionScaleBgProps) => {
  const animate = useAnimation();

  return (
    <CardMotionScaleBgStyled 
      onMouseEnter={() => animate.start('visible')}
      onMouseLeave={() => animate.start('hidden')}
      {...props}
    >
      <BackgroundCardStyled
        bgUrl={bgUrl}
        variants= {{
          hidden: {scale: 1},
          visible: { scale: 1.1 }
        }} 
        animate={animate}
        initial={'hidden'}
        transition={{duration: 0.1}}
        />
      {children}
    </CardMotionScaleBgStyled>
  );
};

export default CardMotionScaleBg;

const CardMotionScaleBgStyled = styled(Box)`
  position: absolute;
  display: flex;
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  border-radius: 12px;
  cursor: pointer;

  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const BackgroundCardStyled = styled(motion.div)<{bgUrl: string}>`
    width: 100%;
    height: 100%;
    background-color: black;
    background-position: center center;
    position: relative;
    background-size: cover;
    background-image: url(${props => props.bgUrl});
`;