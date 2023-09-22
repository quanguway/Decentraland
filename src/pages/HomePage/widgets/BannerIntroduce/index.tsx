import styled from '@emotion/styled';
import MotionScrollVisible from '../../../../components/Atom/Motion/MotionScrollVisible';
import { Theme } from '@mui/material';
import { theme } from '../../../../hooks/useDetachScreen';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const BannerIntroduce = () => {

  const {t} = useTranslation('homepage');

  const introduceText = t('banner_introduce');
  const groupText = introduceText.split(' ');

  return (
    <BannerIntroduceStyled theme={theme}>
      <div className='content'>
        {groupText.map((s, index) => (
          <MotionScrollVisible key={index} transition={{delay: index/30, duration: 0.5}}>
            {s}
          </MotionScrollVisible>
        ))}
      </div>
      <img className='background' alt="about" src="https://images.ctfassets.net/ea2ybdmmn1kv/3ZWmepXxoHB6obGymUZA1V/c373c008f8a7883b6d3a46096bed7d1d/about-background-9b042b07b1fec70f004ed94da87bd309.webp"></img>
    </BannerIntroduceStyled>
  );
};

export default BannerIntroduce;

const BannerIntroduceStyled = styled(motion.div)<{theme: Theme}>`
  position: relative;
  overflow: hidden;
  .background {
    height: 784px;
    ${props => props.theme.breakpoints.up('xl')} {
      width: 100%; 
    }
    /* object-fit: contain; */
  }
  .content {
    /* padding: 0px 40px; */
    transform: translate(10%, 80%);
    position: absolute;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    gap: 8px;
    font-size: clamp(2.75rem,5.2vw + .475rem,4.375rem);
    /* font-weight: 700; */
    width: 80%;

    ${props => props.theme.breakpoints.down('xs')} {
      transform: translate(10%, 30%);
    }

    ${props => props.theme.breakpoints.up('xl')} {
      font-size: clamp(4.75rem,5.2vw,5.375rem);;
    }
  }
`;