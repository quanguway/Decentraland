import styled from '@emotion/styled';
import CardStat from './CardStat';
import CardDetail from './CardDetail';
import CardMotionScaleBg from '../../Atom/Motion/CardMotionScaleBg';
import { PlacesType } from '../../../pages/HomePage/widgets/InDecentraland/SwiperDescentraland/Places';

const CardDecentraland = ({...props}: PlacesType) => {

  const {background, userCount} = props;
  return (
    <CardDecentralandStyled className='card-place' style={{
      
    }}>
      <CardMotionScaleBg bgUrl={background}>
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
