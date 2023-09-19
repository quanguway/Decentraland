import styled from '@emotion/styled';
import Text from '../../../../components/Atom/Text';
import { List, ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { COLOR_TEXT } from '../../../../assets/colors';

const ColSocial = ({title, list}: { title: string, list: {label: string, link?: string}[] }) => {
  return (
    <ColSocialStyled>
      <List>
      <Text className='title' variant='h2'>{title}</Text>
        {list.map((o, index) => (
          <ListItem sx={{paddingLeft: 0}} key={index}>
            <NavLink className={'item'} to={o.link ?? '/'} >
              {o.label} 
            </NavLink>
          </ListItem>
        ))}
      </List>
    </ColSocialStyled>
  );
};

export default ColSocial;

const ColSocialStyled = styled.div`

  .title {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -.01em;
    line-height: 28px;
    margin-bottom: 1em;
    text-transform: uppercase;
  }

  .item {
    color: ${COLOR_TEXT};
    font-size: inherit;
    font-weight: 600;
    letter-spacing: -.01em;
    line-height: 28px;
    text-decoration: none;
  }
`;