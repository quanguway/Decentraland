import styled from '@emotion/styled';
import { Divider, List, ListItem, ListItemButton, ListItemText, Popover, Tooltip, Typography, makeStyles } from '@mui/material';
import { MouseEvent, useState } from 'react';
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

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openedPopover, setOpenedPopover] = useState(false);
  // const [selectedIndex, setSelectedIndex] = useState(1);

  const handlePopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  // const handlePopoverOpen = () => {
  //   setOpenedPopover(true);
  // };

  // const handlePopoverClose = () => {
  //   setOpenedPopover(false);
  // };

  // setTimeout(handlePopoverClose, 1000);    

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