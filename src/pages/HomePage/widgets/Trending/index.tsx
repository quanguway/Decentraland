import styled from '@emotion/styled';
import { Box } from '@mui/material';
import Text from '../../../../components/Atom/Text';
import MotionTopUp from '../../../../components/Atom/Motion/MotionTopUp';
import ButtonOutline from '../../../../components/Atom/Button/ButtonOutline';
import useDetachScreen from '../../../../hooks/useDetachScreen';
import { useTranslation } from 'react-i18next';




const Trending = () => {
  const {t} = useTranslation('homepage');

  const isMobile = useDetachScreen('mobile');
  const isTablet = useDetachScreen('tablet');

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
    <TrendingStyled display={'flex'} gap={2} px={2} justifyContent={'center'} flexDirection={isMobile ? 'column' : 'row'}>
      {trending.map((o, index) => (
        <TrendingCard background={o.background} className={'trending-card'} key={index}>
          <img src={o.image}></img>
          <Box>
            <Text py={2} fontSize={isTablet ? '24px' : '36px'} fontWeight={700}>
              {o.title}
            </Text>
            <MotionTopUp fullWidth={isMobile}>
              <ButtonOutline fullWidth={isMobile} label={o.buttonLabel}/>
            </MotionTopUp>
          </Box>

        </TrendingCard>
      ))}
    </TrendingStyled>
  );
};

export default Trending;

const TrendingCard = styled(Box)<{background: string}>`
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

const TrendingStyled = styled(Box)`

`;