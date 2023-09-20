import styled from '@emotion/styled';
import { Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { TNavMenu } from '..';
import Text from '../../../Atom/Text';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import {
  usePopupState,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state/hooks';

export type TNavMenuProps = {
  data: TNavMenu
}


const NavItem = ({data}: TNavMenuProps) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });

  return (
    <NavItemStyled>
      <Text 
       {...bindHover(popupState)}
        className='title'>{data.title}
        </Text>
        {(data?.children?.length ?? 0) > 0 && <HoverPopover
          {...bindPopover(popupState)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
        <List 
        sx={{backgroundColor: 'gray', zIndex: 1200}}>
          {data?.children?.map((o, index) => (
          <div key={index}>
            <ListItemButton
              key={index}>

              <ListItemText
                primary="Single-line item"
              />
              
          </ListItemButton>
          {data?.children?.length !== index + 1 ? <Divider /> : <></>}
          </div>
          ) 
          )}
        </List>
      </HoverPopover>}
    </NavItemStyled>
  );
};

export default NavItem;

const NavItemStyled = styled.li`
  .nav-child {
    background-color: lightgray;
  }
`;