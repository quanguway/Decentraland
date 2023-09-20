import styled from '@emotion/styled';
import ButtonPrimary from '../../Atom/Button/ButtonPrimary';
import Text from '../../Atom/Text';
import { PlacesType } from '../../../pages/HomePage/widgets/InDecentraland/SwiperDescentraland/Places';

const CardDetail = ({...props}: PlacesType) => {

  const { by, title } = props;

  return (
    <CardDetailStyled>
      <div className='content'>
        <Text noWrap textOverflow={'ellipsis'} fontWeight={600} variant='h6'>{title}</Text>
        <Text noWrap textOverflow={'ellipsis'} className=''>By <span>{by}</span></Text>
      </div>
      <ButtonPrimary className='button' size='small' label='Jump in' sx={{
        padding: '14px 20px',
        fontSize:' 13px',
        // lineHeight: '18px',
        // minWidth: '128px',
        // left: '148px',
        // position: 'absolute',
      }}/>
    </CardDetailStyled>
  );
};

export default CardDetail;

const CardDetailStyled = styled.div`
    position: absolute;
    bottom: 10px;
    z-index: 4;
    left: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .content {
      width: 60%;
    }
    .content span {
      font-weight: 600;
    }

    button {
      right: 20px;
      position: relative;
    }
`;