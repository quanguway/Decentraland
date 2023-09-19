import styled from '@emotion/styled';
import CardMotionScaleBg from '../../../../../components/Atom/Motion/CardMotionScaleBg';
import Text from '../../../../../components/Atom/Text';
import { Box, TypographyProps } from '@mui/material';

type CardWhatNewsProps = {
  bgUrl: string;
  title: string;
  subTitle: string;
  time: string;
}

const CardWhatNews = ({bgUrl, title, time, subTitle}: CardWhatNewsProps) => {

  const textStyles: TypographyProps = {
    fontWeight: 600,
    textOverflow: 'ellipsis',
    textTransform: 'uppercase',
  };

  return (
    <CardWhatNewsStyled>
      <CardMotionScaleBg display={'flex'} flexDirection={'column'} bgUrl={bgUrl}>
      </CardMotionScaleBg>
      <Box padding={'24px 0px'}>
        <Text mb={1} fontSize={'13px'} lineHeight={'120%'} {...textStyles}>{title} <span style={{color: '#a09ba8'}}>{time}</span></Text>
        <Text fontSize={'18px'} {...textStyles}>{subTitle}</Text>
      </Box>

    </CardWhatNewsStyled>
  );
};

export default CardWhatNews;

const CardWhatNewsStyled = styled.div`

`;