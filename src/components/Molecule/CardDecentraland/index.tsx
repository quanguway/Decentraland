import styled from '@emotion/styled';
import CardStat from './CardStat';
import CardDetail from './CardDetail';
import CardMotionScaleBg from '../../Atom/Motion/CardMotionScaleBg';
import { PlacesType } from '../../../pages/HomePage/widgets/InDecentraland/SwiperDescentraland/Places';
import ButtonPrimary from '../../Atom/Button/ButtonPrimary';
import { Box } from '@mui/material';

const CardDecentraland = ({isEvent = false, ...props}: PlacesType & {isEvent?: boolean}) => {

  const {background, userCount} = props;
  return (
    <CardDecentralandStyled className='card-place' style={{
      
    }}>
      <CardMotionScaleBg bgUrl={background}>
        {isEvent && <Box position={'absolute'} right={'100px'} top={'25px'}>
          <ButtonPrimary label='try now' sx={{
                padding: '10px 12px',
                fontSize: '12px'
          }}/>
        </Box>}

        <CardStat count={userCount}/>
        <CardDetail {...props} />
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
