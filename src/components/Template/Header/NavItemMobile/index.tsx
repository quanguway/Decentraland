import styled from '@emotion/styled';
import Text from '../../../Atom/Text';
import { TNavMenuProps } from '../NavItem';
import MotionClickRotate from '../../../Atom/Motion/MotionClickRotate';
import { ArrowIcon } from '..';
import { Box, Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import { COLOR_TEXT } from '../../../../assets/colors';

const NavItemMobile = ({data}: TNavMenuProps) => {

  const [mobileExpand, setMobileExpand] = useState<boolean>(false);


  return (
    <NavItemStyled>
      <Box display={'flex'} alignItems={'center'}>
        <Text
          className='title'>{data.title}</Text>
          <MotionClickRotate onClick={() => setMobileExpand( ! mobileExpand)} isActive={mobileExpand}>
            <ArrowIcon />
          </MotionClickRotate>
      </Box>
        <Collapse in={mobileExpand}>
          <List
            sx={{ zIndex: 1200}}>
              {data?.children?.map((o, index) => (
              <div key={index}>
                <ListItemButton
                  key={index}>

                  <ListItemText
                    sx={{listStyle: 'none', color: COLOR_TEXT}}
                    primary={o.label}
                  />
                  
              </ListItemButton>
              </div>
              ) 
              )}
          </List>
          </Collapse>
      </NavItemStyled>
  );
};

export default NavItemMobile;

const NavItemStyled = styled.li`
`;