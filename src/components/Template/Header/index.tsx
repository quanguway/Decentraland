
import styled from '@emotion/styled';
import NavItem from './NavItem';
import Text from '../../Atom/Text';
import ButtonPrimary from '../../Atom/Button/ButtonPrimary';
import { useEffect, useRef, useState } from 'react';
import {  motion, useAnimation } from 'framer-motion';
import { Box, Collapse, useMediaQuery, useScrollTrigger } from '@mui/material';
import MotionClickRotate from '../../Atom/Motion/MotionClickRotate';
import NavItemMobile from './NavItemMobile';
import { theme } from '../../../hooks/useDetachScreen';
import { useTranslation } from 'react-i18next';

type TNavMenuChild = {
  label: string;
}

export type TNavMenu = {
  title: string;
  children?: TNavMenuChild[];
}



const Header = () => {

    const {t} = useTranslation('homepage');
  
    const headers: TNavMenu[]= [
      {
        title: t('header.nav.marketplace'),
        children: [
          {
            label: 'Overview'
          },
          {
            label: 'Overview'
          },
          {
            label: 'Overview'
          }
        ]
      },
      {
        title: t('header.nav.builder'),
        children: [
          {
            label: 'Overview'
          },
          {
            label: 'Overview'
          },
          {
            label: 'Overview'
          }
        ]
      },{
        title: t('header.nav.docs'),
        children: [
          {
            label: 'Overview'
          },
          {
            label: 'Overview'
          },
          {
            label: 'Overview'
          }
        ]
      },
      {
        title: t('header.nav.places')
      },
      {
        title: t('header.nav.events')
      },
      {
        title: t('header.nav.dao')
      },
      {
        title: t('header.nav.blog')
      }
    ];
    const headerRef = useRef<any>();
    const mainControls = useAnimation();

    const isTablet = useMediaQuery(theme.breakpoints.up('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));    

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window
    });

    useEffect(() => {
      mainControls.start(trigger ? 'fill' : 'transparent');
    }, [trigger]);

    const [mobileExpand, setMobileExpand] = useState<boolean>(false);

    if(isMobile)
      return (
        <HeaderStyledMobile 
          ref={headerRef} 
          variants={{
          transparent: {backgroundColor : 'transparent'},
          fill: {backgroundColor: '#000'}
        }}
        initial={'transparent'}
        animate={mainControls} transition={{duration: 0.3}}>
          <Box padding={!isMobile ? '30px 20px 0px' : '0px'} width={'100%'} sx={{backgroundColor: mobileExpand ? '#000' : 'transparent !important'}}>

            <Box display={'flex'} gap={2} alignItems={'center'}>
              <a className="navbar-logo" href="https://decentraland.org"><i className="dcl logo"></i></a>
              <MotionClickRotate onClick={() => setMobileExpand( ! mobileExpand)} isActive={mobileExpand}>
                <ArrowIcon />
              </MotionClickRotate>
            </Box>
            <Collapse in={mobileExpand}>
              <ul className='nav-menu'>
                  {headers.map((o, index) => (
                    <NavItemMobile key={index} data={o}/>
                  ))}
                </ul>
            </Collapse>
          </Box>
        </HeaderStyledMobile>
      );
    
  return (
    <>
      <HeaderStyled 
        ref={headerRef} 
        variants={{
        transparent: {backgroundColor: 'transparent'},
        fill: {backgroundColor: '#000'}
      }}
        initial={'transparent'}
        animate={mainControls} transition={{duration: 0.3}}>
        <ul className='nav-menu'>
        <a className="navbar-logo" href="https://decentraland.org"><i className="dcl logo"></i></a>
          {headers.map((o, index) => (
            <NavItem key={index} data={o}/>
          ))}
        </ul>
        { isTablet ? <ul className='nav-tool'>
          <Text 
            className='title'>{t('header.tool.button_label_primary')}
          </Text>
          <ButtonPrimary sx={{padding: '4px 12px'}} label={t('header.tool.button_label_outline')}/>
        </ul> : 
            <DiscordStyled>              
              <img width="46" height="46" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjM1IDIwIDE3NSAyMDAiPgo8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA0LjQgMTAzLjljLTUuNyAwLTEwLjIgNS0xMC4yIDExLjFzNC42IDExLjEgMTAuMiAxMS4xYzUuNyAwIDEwLjItNSAxMC4yLTExLjEuMS02LjEtNC41LTExLjEtMTAuMi0xMS4xek0xNDAuOSAxMDMuOWMtNS43IDAtMTAuMiA1LTEwLjIgMTEuMXM0LjYgMTEuMSAxMC4yIDExLjFjNS43IDAgMTAuMi01IDEwLjItMTEuMXMtNC41LTExLjEtMTAuMi0xMS4xeiIvPgo8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTg5LjUgMjBoLTEzNEM0NC4yIDIwIDM1IDI5LjIgMzUgNDAuNnYxMzUuMmMwIDExLjQgOS4yIDIwLjYgMjAuNSAyMC42aDExMy40bC01LjMtMTguNSAxMi44IDExLjkgMTIuMSAxMS4yIDIxLjUgMTlWNDAuNmMwLTExLjQtOS4yLTIwLjYtMjAuNS0yMC42em0tMzguNiAxMzAuNnMtMy42LTQuMy02LjYtOC4xYzEzLjEtMy43IDE4LjEtMTEuOSAxOC4xLTExLjktNC4xIDIuNy04IDQuNi0xMS41IDUuOS01IDIuMS05LjggMy41LTE0LjUgNC4zLTkuNiAxLjgtMTguNCAxLjMtMjUuOS0uMS01LjctMS4xLTEwLjYtMi43LTE0LjctNC4zLTIuMy0uOS00LjgtMi03LjMtMy40LS4zLS4yLS42LS4zLS45LS41LS4yLS4xLS4zLS4yLS40LS4zLTEuOC0xLTIuOC0xLjctMi44LTEuN3M0LjggOCAxNy41IDExLjhjLTMgMy44LTYuNyA4LjMtNi43IDguMy0yMi4xLS43LTMwLjUtMTUuMi0zMC41LTE1LjIgMC0zMi4yIDE0LjQtNTguMyAxNC40LTU4LjMgMTQuNC0xMC44IDI4LjEtMTAuNSAyOC4xLTEwLjVsMSAxLjJjLTE4IDUuMi0yNi4zIDEzLjEtMjYuMyAxMy4xczIuMi0xLjIgNS45LTIuOWMxMC43LTQuNyAxOS4yLTYgMjIuNy02LjMuNi0uMSAxLjEtLjIgMS43LS4yIDYuMS0uOCAxMy0xIDIwLjItLjIgOS41IDEuMSAxOS43IDMuOSAzMC4xIDkuNiAwIDAtNy45LTcuNS0yNC45LTEyLjdsMS40LTEuNnMxMy43LS4zIDI4LjEgMTAuNWMwIDAgMTQuNCAyNi4xIDE0LjQgNTguMyAwIDAtOC41IDE0LjUtMzAuNiAxNS4yeiIvPgo8L3N2Zz4=" />
            </DiscordStyled>
        }
      </HeaderStyled>
    </>
  );
};

export default Header;

const HeaderStyledMobile = styled(motion.nav)`
    /* padding: 30px 20px 0px; */
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 13000;
    .nav-menu {
      list-style: none;
      text-transform: uppercase;
    }



   .dcl.logo {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cdefs%3E%3ClinearGradient id='prefix__a' x1='85.355%25' x2='14.645%25' y1='14.645%25' y2='85.355%25'%3E%3Cstop offset='0%25' stop-color='%23FF2D55'/%3E%3Cstop offset='100%25' stop-color='%23FFBC5B'/%3E%3C/linearGradient%3E%3ClinearGradient id='prefix__b' x1='49.966%25' x2='49.966%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A524B3'/%3E%3Cstop offset='100%25' stop-color='%23FF2D55'/%3E%3C/linearGradient%3E%3ClinearGradient id='prefix__c' x1='49.966%25' x2='49.966%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A524B3'/%3E%3Cstop offset='100%25' stop-color='%23FF2D55'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='18' cy='18' r='18' fill='url(%23prefix__a)'/%3E%3Cg transform='translate(1.44 11.7)'%3E%3Cpolygon fill='url(%23prefix__b)' points='11.313 0 11.313 13.5 22.563 13.5'/%3E%3Cpolygon fill='%23FFF' points='.063 13.5 11.313 13.5 11.313 0'/%3E%3C/g%3E%3Cpath fill='%23FF2D55' d='M7.2 32.4A17.925 17.925 0 0 0 18 36c4.05 0 7.794-1.341 10.8-3.6H7.2Z'/%3E%3Cpath fill='%23FC9965' d='M3.6 28.8a18.435 18.435 0 0 0 3.6 3.6h21.6a18.435 18.435 0 0 0 3.6-3.6H3.6Z'/%3E%3Cpath fill='%23FFBC5B' d='M24.147 25.2H1.503A17.923 17.923 0 0 0 3.6 28.8h20.556v-3.6h-.009Z'/%3E%3Cg transform='translate(15.84 18.9)'%3E%3Cpolygon fill='url(%23prefix__c)' points='8.307 0 8.307 9.9 16.56 9.9'/%3E%3Cpolygon fill='%23FFF' points='.063 9.9 8.307 9.9 8.307 0'/%3E%3C/g%3E%3Ccircle cx='24.147' cy='11.7' r='4.5' fill='%23FFC95B'/%3E%3Ccircle cx='12.753' cy='6.75' r='2.25' fill='%23FFC95B'/%3E%3C/g%3E%3C/svg%3E");
    background-size: contain;
    border-radius: 100%;
    display: inline-block;
    height: 36px;
    width: 36px;
  }

`;

const DiscordStyled = styled.a`
  display: flex;
  align-items: center;
`;

const HeaderStyled = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  padding: 30px 50px 0px;
  @media screen and (max-width: 1045px)  {
    padding: 30px 20px 0px;
  }
  left: 0px;
  right: 0px;

  background: transparent;
  position: fixed;
  top: 0;
  z-index: 100;

  .title {
    text-transform: uppercase;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      font-weight: 600;
    }
  }

  .nav-menu {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 16px;
    padding-inline-start: 0px;
  }

  .nav-tool {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 16px;
  }

  .dcl.logo {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'%3E%3Cdefs%3E%3ClinearGradient id='prefix__a' x1='85.355%25' x2='14.645%25' y1='14.645%25' y2='85.355%25'%3E%3Cstop offset='0%25' stop-color='%23FF2D55'/%3E%3Cstop offset='100%25' stop-color='%23FFBC5B'/%3E%3C/linearGradient%3E%3ClinearGradient id='prefix__b' x1='49.966%25' x2='49.966%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A524B3'/%3E%3Cstop offset='100%25' stop-color='%23FF2D55'/%3E%3C/linearGradient%3E%3ClinearGradient id='prefix__c' x1='49.966%25' x2='49.966%25' y1='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23A524B3'/%3E%3Cstop offset='100%25' stop-color='%23FF2D55'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Ccircle cx='18' cy='18' r='18' fill='url(%23prefix__a)'/%3E%3Cg transform='translate(1.44 11.7)'%3E%3Cpolygon fill='url(%23prefix__b)' points='11.313 0 11.313 13.5 22.563 13.5'/%3E%3Cpolygon fill='%23FFF' points='.063 13.5 11.313 13.5 11.313 0'/%3E%3C/g%3E%3Cpath fill='%23FF2D55' d='M7.2 32.4A17.925 17.925 0 0 0 18 36c4.05 0 7.794-1.341 10.8-3.6H7.2Z'/%3E%3Cpath fill='%23FC9965' d='M3.6 28.8a18.435 18.435 0 0 0 3.6 3.6h21.6a18.435 18.435 0 0 0 3.6-3.6H3.6Z'/%3E%3Cpath fill='%23FFBC5B' d='M24.147 25.2H1.503A17.923 17.923 0 0 0 3.6 28.8h20.556v-3.6h-.009Z'/%3E%3Cg transform='translate(15.84 18.9)'%3E%3Cpolygon fill='url(%23prefix__c)' points='8.307 0 8.307 9.9 16.56 9.9'/%3E%3Cpolygon fill='%23FFF' points='.063 9.9 8.307 9.9 8.307 0'/%3E%3C/g%3E%3Ccircle cx='24.147' cy='11.7' r='4.5' fill='%23FFC95B'/%3E%3Ccircle cx='12.753' cy='6.75' r='2.25' fill='%23FFC95B'/%3E%3C/g%3E%3C/svg%3E");
    background-size: contain;
    border-radius: 100%;
    display: inline-block;
    height: 36px;
    width: 36px;
  }
`;

export const ArrowIcon = () => {
  return (
    <svg width={'60'} height={'60'} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_529_3930)"><path d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z" fill="white"></path></g>
    </svg>
  );
};

{/* <svg class="close" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.2" cx="36" cy="36" r="35" stroke="white" fill="none" stroke-width="2"></circle><g clip-path="url(#clip0_529_3930)"><path d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z" fill="white"></path></g><defs><clipPath id="clip0_529_3930"><rect width="36" height="36" fill="white" transform="translate(54 18) rotate(90)"></rect></clipPath></defs></svg> */}