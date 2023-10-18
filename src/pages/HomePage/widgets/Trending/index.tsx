import styled from '@emotion/styled';
import { Box } from '@mui/material';
import useDetachScreen from '../../../../hooks/useDetachScreen';
import { useTranslation } from 'react-i18next';
import TrendingCard from './TrendingCard';




const Trending = () => {
  const {t} = useTranslation('homepage');

  const isMobile = useDetachScreen('mobile');

  const trending = [
    {
      title: t('trending.title'),
      buttonLabel: t('trending.button_label'),
      image: 'https://images.ctfassets.net/ea2ybdmmn1kv/75Ft6lqEdVRHWffhN170ou/407855b37d940d0a1831ffadbd9c0859/listings-brand-874e8f8822d3489e03a44ef6c8eff4e1.webp',
      background: 'https://images.ctfassets.net/ea2ybdmmn1kv/3i5Hd6B6tAcUdC8fji0gzO/6019ed1b37355820cb014ae2ebe22ea9/listings-brand-background.webp'
    },
    {
      title: t('trending.title'),
      buttonLabel: t('trending.button_label'),
      image: 'https://images.ctfassets.net/ea2ybdmmn1kv/75Ft6lqEdVRHWffhN170ou/407855b37d940d0a1831ffadbd9c0859/listings-brand-874e8f8822d3489e03a44ef6c8eff4e1.webp',
      background: 'https://images.ctfassets.net/ea2ybdmmn1kv/3i5Hd6B6tAcUdC8fji0gzO/6019ed1b37355820cb014ae2ebe22ea9/listings-brand-background.webp'
    }
  ];



  return (
    <TrendingStyled         
       display={'flex'} gap={2} px={2} justifyContent={'center'} flexDirection={isMobile ? 'column' : 'row'}>
      {trending.map((o, index) => (
        <TrendingCard key={index} data={o} />
      ))}
    </TrendingStyled>
  );
};

export default Trending;



const TrendingStyled = styled(Box)`

`;