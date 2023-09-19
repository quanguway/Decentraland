import styled from '@emotion/styled';
import ButtonPrimary from '../../Atom/Button/ButtonPrimary';
import Text from '../../Atom/Text';

const CardDetail = () => {
  return (
    <CardDetailStyled>
      <div className='content'>
        <Text noWrap textOverflow={'ellipsis'} fontWeight={600} variant='h6'>ICE Poker - The Stronghold</Text>
        <Text noWrap textOverflow={'ellipsis'} className=''>By <span>Decentral Games</span></Text>
      </div>
      <ButtonPrimary className='button' style={{position: 'absolute'}} size='small' label='Jump in' sx={{
        padding: '8px 4px',
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
      bottom: 10px;
    }
`;