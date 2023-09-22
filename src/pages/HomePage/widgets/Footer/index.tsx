import styled from '@emotion/styled';
import Text from '../../../../components/Atom/Text';
import ColSocial from './ColSocial';
import { Box, List, ListItem, ListItemButton, Popover, Theme } from '@mui/material';
import useDetachScreen, { theme } from '../../../../hooks/useDetachScreen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { COLOR_PRIMARY } from '../../../../assets/colors';
import langEng from '../../../../assets/lang/en/homepage.json';
import moment from 'moment';
import {
  bindTrigger,
  bindMenu,
  usePopupState,
} from 'material-ui-popup-state/hooks';
import { useTranslation } from 'react-i18next';







const Footer = () => {
  
  const { t, i18n } = useTranslation('homepage');
  const isMobile = useDetachScreen('mobile');  

  const resources = Object.keys(langEng.footer.resource).map(s => `footer.resource.${s}`);
  
  const connect = Object.keys(langEng.footer.connect).map(s => `footer.connect.${s}`);
  
  const main = Object.keys(langEng.footer.footer_main).map(s => `footer.footer_main.${s}`);
  
  const icons = [
    'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE4IDE0Jz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxwYXRoIGQ9J00tMS0zaDIwdjIwSC0xeicvPjxwYXRoIGZpbGw9JyM2NzYzNzAnIGZpbGwtcnVsZT0nbm9uemVybycgZD0nTTYuNTQ2Ljc3OGMtLjIzNSAwLTIuMTg1LjA1Ni00LjI0MSAxLjU4NCAwIDAtMi4xOTQgMy45NDYtMi4xOTQgOC44MDUgMCAwIDEuMjggMi4xOTQgNC42NDYgMi4zIDAgMCAuNTY0LS42NyAxLjAyMS0xLjI0OS0xLjkzNS0uNTc4LTIuNjY2LTEuNzgyLTIuNjY2LTEuNzgycy4xNTMuMTA3LjQyNy4yNmMuMDE1IDAgLjAzLjAxNC4wNi4wMy4wNDYuMDMuMDkyLjA0NS4xMzguMDc2LjM4LjIxMy43NjEuMzggMS4xMTIuNTE4LjYyNC4yNTkgMS4zNy40ODcgMi4yNC42NTUgMS4xNDIuMjEzIDIuNDgyLjI5IDMuOTQ1LjAxNWExMC45MjUgMTAuOTI1IDAgMCAwIDIuMjA5LS42NTUgOC43MTcgOC43MTcgMCAwIDAgMS43NTEtLjg5OXMtLjc2MSAxLjIzNC0yLjc1NyAxLjc5OGMuNDU3LjU2MyAxLjAwNiAxLjIxOCAxLjAwNiAxLjIxOCAzLjM2Ni0uMTA2IDQuNjQ2LTIuMyA0LjY0Ni0yLjI4NSAwLTQuODYtMi4xOTQtOC44MDUtMi4xOTQtOC44MDVDMTMuNTE3LjczMiAxMS40My43NzggMTEuNDMuNzc4bC0uMjEzLjI0NGMyLjU5Ljc3NyAzLjc5MyAxLjkyIDMuNzkzIDEuOTJhMTIuNjY0IDEyLjY2NCAwIDAgMC00LjU4Ni0xLjQ0OCAxMi44OSAxMi44OSAwIDAgMC0zLjA3Ny4wM2MtLjA5MSAwLS4xNjcuMDE2LS4yNTkuMDMtLjUzMy4wNjItMS44MjguMjQ1LTMuNDU4Ljk2LS41NjQuMjQ0LS44OTkuNDI3LS44OTkuNDI3czEuMjUtMS4yMDMgMy45OTItMS45OEw2LjU3Ljc3OGgtLjAyNHpNNi4xNiA2LjM5OWMuODY4IDAgMS41NjkuNzQ3IDEuNTU0IDEuNjc2IDAgLjkzLS42ODYgMS42NzYtMS41NTQgMS42NzYtLjg1MyAwLTEuNTU0LS43NDctMS41NTQtMS42NzYgMC0uOTMuNjg2LTEuNjc2IDEuNTU0LTEuNjc2em01LjU2IDBjLjg1MyAwIDEuNTU0Ljc0NyAxLjU1NCAxLjY3NiAwIC45My0uNjg1IDEuNjc2LTEuNTU0IDEuNjc2LS44NTMgMC0xLjU1NC0uNzQ3LTEuNTU0LTEuNjc2IDAtLjkzLjY4Ni0xLjY3NiAxLjU1NC0xLjY3NnonLz48L2c+PC9zdmc+',
    'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxOScgaGVpZ2h0PScxNycgdmlld0JveD0nMCAwIDE5IDE3Jz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxwYXRoIGQ9J00tLjMzMy0xaDIwdjIwaC0yMHonLz48cGF0aCBmaWxsPScjNjc2MzcwJyBmaWxsLXJ1bGU9J25vbnplcm8nIGQ9J00xOC41NTYgOC41MzJjMCAuNDE3LS4wODQuNzUtLjMzMyAxLjA4NGExLjYzMyAxLjYzMyAwIDAgMS0uNzQ3Ljc1Yy4wODMuMzM0LjA4My41ODQuMDgzLjkxOCAwIDEtLjMzMyAyLTEuMDggMi44MzQtLjY2NS44MzQtMS42NjIgMS41ODUtMi44MjUgMi4wODUtMS4xNjMuNS0yLjQ5Mi43NS0zLjk4Ny43NS0xLjQxMyAwLTIuNzQyLS4yNS0zLjkwNS0uNzUtMS4yNDYtLjUtMi4xNi0xLjE2Ny0yLjgyNC0yLjA4NS0uNjY1LS44MzMtMS4wOC0xLjgzNC0xLjA4LTIuODM0IDAtLjMzNCAwLS41ODQuMDgzLS45MTgtLjMzMi0uMTY2LS41ODItLjQxNi0uODMtLjc1Qy45NDMgOS4yODMuNzc3IDguOTUuNzc3IDguNTMyYzAtLjUuMTY2LTEgLjU4MS0xLjQxNy40MTYtLjQxNy44MzEtLjU4NCAxLjQxMy0uNTg0LjU4MSAwIC45OTYuMTY3IDEuNDEyLjU4NCAxLjQxMi0xIDMuMTU3LTEuNTAxIDUuMDY3LTEuNTg0TDEwLjQxNC4zNmMwLS4wODMuMDgzLS4xNjcuMTY2LS4xNjcuMDg0LS4wODMuMTY3LS4wODMuMjUtLjA4M2wzLjY1NS44MzRjLjA4My0uMjUuMzMyLS40MTcuNDk4LS41ODQuMjUtLjE2Ny40OTktLjI1Ljc0OC0uMjUuNDE1IDAgLjc0OC4xNjcgMS4wOC40MTcuMjUuMjUuNDE1LjY2Ny40MTUgMS4wODQgMCAuNDE3LS4xNjYuNzUtLjQxNSAxLjA4NC0uMjUuMzMzLS42NjUuNDE3LTEuMDguNDE3LS40MTUgMC0uNzQ4LS4xNjctMS4wOC0uNDE3LS4yNS0uMjUtLjQxNS0uNjY3LS40MTUtMS4wODRsLTMuMzIzLS43NS0uOTk3IDQuNjY5YzEuOTk0LjA4MyAzLjY1NS41ODMgNS4xNSAxLjU4NC40MTYtLjQxNy44MzEtLjU4NCAxLjQxMy0uNTg0LjU4MSAwIC45OTcuMTY3IDEuNDEyLjU4NC40OTguNDE3LjY2NS45MTcuNjY1IDEuNDE3ek01LjAxNSAxMC41MzNjMCAuNDE3LjE2Ni43NS40MTUgMS4wODQuMjUuMzM0LjY2NC40MTcgMS4wOC40MTcuNDE1IDAgLjc0OC0uMTY3IDEuMDgtLjQxNy4yNDktLjI1LjQxNS0uNjY3LjQxNS0xLjA4NCAwLS40MTctLjE2Ni0uNzUtLjQxNS0xLjA4NC0uMjUtLjI1LS42NjUtLjQxNy0xLjA4LS40MTctLjQxNiAwLS43NDguMTY3LS45OTcuNDE3LS4yNS4yNS0uNDk4LjY2Ny0uNDk4IDEuMDg0em03Ljk3NSAzLjUwMmMuMDgzLS4wODMuMDgzLS4xNjcuMDgzLS4yNSAwLS4wODMgMC0uMTY3LS4wODMtLjI1LS4wODMtLjA4NC0uMTY3LS4wODQtLjI1LS4wODQtLjA4MyAwLS4xNjYgMC0uMjQ5LjA4NC0uMjQ5LjI1LS42NjQuNS0xLjE2My41ODMtLjQ5OC4xNjctMS4wOC4xNjctMS41NzguMTY3LS40OTkgMC0xLjA4LS4wODMtMS41NzktLjE2Ny0uNDk4LS4xNjYtLjkxMy0uMzMzLTEuMTYzLS41ODMtLjA4My0uMDg0LS4xNjYtLjA4NC0uMjQ5LS4wODQtLjA4MyAwLS4xNjYgMC0uMjUuMDg0LS4wODIuMDgzLS4wODIuMTY3LS4wODIuMjUgMCAuMDgzIDAgLjE2Ny4wODMuMjUuMjUuMjUuNjY0LjUgMS4xNjMuNjY3LjQ5OC4xNjcuOTE0LjI1IDEuMjQ2LjMzNC4zMzIgMCAuNTgyLjA4My45MTQuMDgzLjMzMiAwIC41ODEgMCAuOTE0LS4wODMuMzMyIDAgLjc0Ny0uMTY3IDEuMjQ2LS4zMzQuMzMyLS4xNjcuNzQ3LS4zMzMuOTk3LS42Njd6bTAtMi4wMDFjLjQxNSAwIC43NDctLjE2NyAxLjA4LS40MTcuMzMyLS4yNS40MTUtLjY2Ny40MTUtMS4wODQgMC0uNDE3LS4xNjYtLjc1LS40MTUtMWExLjUzIDEuNTMgMCAwIDAtLjk5Ny0uNDE3Yy0uNDE2IDAtLjc0OC4xNjctMS4wOC40MTctLjI1LjI1LS40MTYuNjY3LS40MTYgMS4wODQgMCAuNDE2LjE2Ny43NS40MTYgMS4wODMuMjQ5LjE2Ny41ODEuMzM0Ljk5Ny4zMzR6Jy8+PC9nPjwvc3ZnPg==',
    'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNCcgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE0IDE2Jz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxwYXRoIGQ9J00tMi42NjctMmgyMHYyMGgtMjB6Jy8+PHBhdGggZmlsbD0nIzY3NjM3MCcgZmlsbC1ydWxlPSdub256ZXJvJyBkPSdNOS45NjMgMTEuOTI4djMuNjQyYzAgLjE3NCAwIC4yNi0uMTc3LjE3NEg2LjA2N2MtLjE3NyAwLS4xNzctLjA4Ny0uMTc3LS4xNzR2LTEuNjQ3YzAtLjA4Ny4wODktLjE3NC0uMDg4LS4xNzRoLS4yNjZhNC4zODcgNC4zODcgMCAwIDEtMS41MDUgMGMtLjg4NS0uMjYtMS41MDUtLjY5My0xLjg2LTEuNTZhOC41NzQgOC41NzQgMCAwIDAtLjk3My0xLjQ3NWMtLjA4OS0uMTczLS4zNTQtLjE3My0uNDQzLS4zNDYtLjA4OC0uMDg3LS4wODgtLjA4Ny0uMDg4LS4xNzRzLjA4OC0uMDg3LjE3Ny0uMDg3Yy43OTctLjA4NiAxLjQxNi4zNDcgMS43Ny45NTQuMzU1LjYwNy44ODYgMS4wNCAxLjUwNiAxLjIxNC41My4wODcuOTczLjA4NyAxLjUwNS0uMDg2LjA4OCAwIC4xNzctLjA4Ny4xNzctLjI2IDAtLjUyLjE3Ny0uOTU0LjUzMS0xLjM4OC0uMTc3IDAtLjI2Ni0uMDg3LS4zNTQtLjA4N0E0LjIxMyA0LjIxMyAwIDAgMSAzLjY3NyA5LjUgMy42ODUgMy42ODUgMCAwIDEgMi4yNiA3LjI0NmExMS45MzcgMTEuOTM3IDAgMCAxIDAtMi41MTVjLjA4OS0uNjA3LjI2Ni0xLjIxNC43MDktMS43MzQuMTc3LS4xNzMuMTc3LS4yNi4wODgtLjUyLS4yNjUtLjY5NC0uMTc3LTEuMzg4LjA4OS0yLjA4MSAwLS4xNzQuMDg4LS4xNzQuMjY1LS4xNzQuNTMyLjE3NC45NzQuNDM0IDEuMzI4Ljc4LjE3Ny4xNzQuMzU0LjM0Ny41MzIuNjA4LjA4OC4wODYuMDg4LjA4Ni4xNzcgMCAuMjY1LS4yNi42Mi0uMjYuOTc0LS4zNDdhOC43NzMgOC43NzMgMCAwIDEgMy4wMSAwYy4zNTQuMDg2LjcwOC4wODYuOTc0LjM0Ny4xNzcuMDg2LjE3Ny4wODYuMjY1LS4wODdhNS4wMyA1LjAzIDAgMCAxIC45NzQtLjk1NGMuMjY2LS4xNzMuNTMxLS4yNi43OTctLjM0Ny4wODkgMCAuMTc3IDAgLjI2Ni4wODcuMjY1Ljc4LjM1NCAxLjQ3NCAwIDIuMjU0IDAgLjA4Ny0uMDg5LjE3NCAwIC4yNi41My40MzQuNzA4IDEuMDQxLjc5NiAxLjY0OC4wODkuNzguMTc3IDEuNTYxLjA4OSAyLjM0MS0uMTc3IDEuMzAxLS44ODUgMi4zNDItMi4wMzYgMi45NDktLjA4OSAwLS4wODkgMC0uMDg5LjA4NiAwIDAtLjA4OCAwLS4wODguMDg3LS4wODkgMC0uMTc4LjA4Ny0uMjY2LjA4N2gtLjA4OWMtLjA4OCAwLS4wODggMC0uMDg4LjA4NmgtLjA4OWEuNjg0LjY4NCAwIDAgMC0uNDQyLjE3NGgtLjA4OWMtLjA4OCAwLS4yNjUgMC0uMzU0LjA4N0g5LjUyYy0uMDg4IDAgMCAuMDg2IDAgLjA4NiAwIC4wODcgMCAuMDg3LjA4OS4wODcgMCAuMDg3LjA4OC4wODcuMDg4LjE3MyAwIC4wODcgMCAuMTc0LjA4OS4yNnYuMDg3YzAgLjA4NyAwIC4yNi4wODguMzQ3di4yNmMuMDg5LjE3NC4wODkuMTc0LjA4OS4yNnonLz48L2c+PC9zdmc+',
    'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE2IDE0Jz48ZyBmaWxsPSdub25lJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnPjxwYXRoIGQ9J00tMi0zaDIwdjIwSC0yeicvPjxwYXRoIGZpbGw9JyM2NzYzNzAnIGZpbGwtcnVsZT0nbm9uemVybycgZD0nTTE1Ljc3OCAxLjkxOWMtLjU1Mi4yOC0xLjE5Ny40NjYtMS44NDEuNDY2LjY0NC0uMzczIDEuMTk2LTEuMDI2IDEuMzgtMS43NzItLjY0NC4zNzMtMS4yODguNjUzLTIuMDI0Ljc0NkMxMi43NC43MDYgMTEuOTEyLjMzMyAxMC45OS4zMzNjLTEuNzQ3IDAtMy4yMiAxLjQ5Mi0zLjIyIDMuMjY0IDAgLjI4IDAgLjQ2Ny4wOTIuNzQ2QzUuMTkyIDQuMjUgMi43OTkgMi45NDUgMS4yMzUuOTg2YTMuMjUyIDMuMjUyIDAgMCAwLS40NiAxLjY3OWMwIDEuMTE5LjU1MiAyLjE0NSAxLjQ3MiAyLjcwNC0uNTUyIDAtMS4wMTItLjE4Ni0xLjQ3My0uMzczIDAgMS41ODYgMS4xMDUgMi44OTEgMi41NzggMy4xNzEtLjI3Ni4wOTMtLjU1My4wOTMtLjgyOS4wOTMtLjE4NCAwLS4zNjggMC0uNjQ0LS4wOTMuMzY4IDEuMzA2IDEuNTY1IDIuMjM4IDMuMDM4IDIuMjM4LTEuMTA1Ljg0LTIuNDg2IDEuNC0zLjk1OCAxLjRILjIyMmE4Ljg2NiA4Ljg2NiAwIDAgMCA0Ljg3OSAxLjQ5MWM1Ljg5IDAgOS4xMTItNC45NDIgOS4xMTItOS4yMzJ2LS40NjdjLjU1Mi0uMzczIDEuMTA1LTEuMDI1IDEuNTY1LTEuNjc4eicvPjwvZz48L3N2Zz4=',
  ];

  const TextLang = () => {
    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

    return (
      <>
        <Box {...bindTrigger(popupState)} sx={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
        }}>
          ({i18n.language === 'en' ? 
            <i className='lang-icon-en'></i> : 
            <img height={'24'} width={'24'} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9klEQVR4nO1ZS2sUQRD+3CQKUYwxUdRE0RAQco1ZV7d7F/EgniVEDAgePIiIuciKBy/CJuDRhI16UQ96ECPiA8RfoSYnRYjmIG7iedfLJzX7yr7cnueOsAXFND0zXd/X01VdXQN0pCMdcS2cRBcTOEGFW1R4QY0Vavymxp+iSnvZuifPxBEjEGk/cI2D1Jijxho1aEsVflBhlkkMBw9cYQ817lMjbxt4veapkGESg8GAT+ACNTY8AF77RdapcN4/4OPoocJDz4HrOiKLYstr8L3UeOc7eF0m8VZsegW+J1DwuqwfOIat7gkEsWx00y+RcQdeY7pt4HVZp5yBP40BKmRDQGDDUYgtxnmGRBfsgU9i2KNNyivNM45DdmZ/zpGha7v8I6EwawYeiFh5il0Dt/eS346TNwb8IrEmSWNrApJVNhvkVKSgje5d2kGm95PTvX4upWhrApLuNhtgpp+83u8nQLbQmybrf6npAM9Gyaej5gav9nlN4LkJgeWGLydBfpkgv0bJ5BZzn5CrVwQUPpkQqKTKqUHy1dGCvh8js/GCSrvUL880MnZxO3n3QOHqHYGsCYHq+C8AZSZL4Eu6GiPv7AvWBxRy9gmInttG/jxZAS9t6QsSvDYnUH/autJXAV4iIn1BO7EyW0L1TvxkhFw5Rl7eWYj3n8fJxyOhdeKlqpcSIB8dIc92V/rOdJEPDhciUzNjfjixNgmjtRtZ4h8DJgL3gVRrAlJ0cmrA+42LNRM2YZrMfbc9uB9rXlfpqnE1z6qY2TXgz5rnpuWTNgIfygONQo4xDBkTKH6FTIgI3LMF3iIQw+5QHOoV1h3XTaVWGQICk47AbyKx2Ebw867Al39eaLxsA/g3TKLbNYFycVcKrsEReO1ZcbemvO5/ZFKY92zmGxLRmPIpOv1y7bC26qYaC9YG437GcxLnJWwHAr6KSAxDVtrhJHeSdxTStndYX4hIAqgRlbqN5Oxy8Cie7PJFlfbH4r2UZJWh+M3akY7g/5e/VHpo9aLkmMIAAAAASUVORK5CYII=" /> })
          <Text>{t('footer.lang')}</Text>
          <ArrowDropDownIcon htmlColor='white' />
        </Box>
        <Popover anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }} {...bindMenu(popupState)}
            >

            <List sx={{
              backgroundColor: '#716b7c'
            }}>
              <ListItem>
                <ListItemButton onClick={() => i18n.changeLanguage('en')}>
                  <i className='lang-icon-en'></i>
                  English
                  </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton  onClick={() => i18n.changeLanguage('ce')}>
                  <i className='lang-icon-en'></i>

                  China
                  </ListItemButton>
              </ListItem>
            </List>
            </Popover>

      </>
    );
  };

  

  return (
    <FooterStyled theme={theme}>
      <div className='footer_top_container'>
        <div className='footer_subscribe'>
          <Text variant='h3' className='subscribe_title'>{t('footer.title')}</Text>
          <iframe src='https://embeds.beehiiv.com/ff89783d-748b-4ba3-8700-4759f6f62831?slim=true' className='subscribe_iframe'></iframe>
        </div>
        <div className='footer_links'>
          <ColSocial title='footer.resource_title' list={resources.map(s => ({label: s, link: '/' }))} />
          <ColSocial title='footer.connect_title' list={connect.map(s => ({label: s, link: '/' }))} />
        </div>
      </div>
      <div className='footer_bottom_container' >
        {isMobile && <TextLang />}
        <div className='footer_main'>
          <Box display={'flex'} gap={2} flexWrap={'wrap'} justifyContent={'center'}>
            {!isMobile && <TextLang/>}
              {main.map((o, index) => (
                    <Text key={index} fontWeight={400} fontSize={'14px'} noWrap sx={{color: '#676370'}}>{t(o)}</Text>
              ))}
          </Box>
        </div>
        <div className='footer_secondary'>
          <div className='footer_secondary_social'>
            {icons.map((s, index) => (
              <Icon key={index} url={s}/>
            ))}
          </div>
          <Text noWrap sx={{
            color: '#676370'
          }}> {`© ${moment().get('year')} Decentraland`} </Text>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;

const Icon = styled.i<{url: string}>`
  background-image: url(${props => props.url});
  background-clip: content-box;
  background-position: 50%;
  background-repeat: no-repeat;
  color: ${COLOR_PRIMARY};
  display: inline-block;
  height: 20px;
  width: 20px;

`; 

const FooterStyled = styled.footer<{theme: Theme}>`
  padding: 0 100px;
  ${props => props.theme.breakpoints.down('sm')} {
    padding: 0 20px;

  }

  .footer_top_container {
    display: flex;
    justify-content: space-around;
    .footer_links {
        display: flex;
        gap: 200px;
        ${props => props.theme.breakpoints.down('md')} {
          gap: 0px;
          justify-content: space-between;
        }

      }
    ${props => props.theme.breakpoints.down('lg')} {
      flex-direction: column;
      padding: 0 10px;
      /* width: 60%; */

    }
  
    .footer_subscribe {
      width: 500px;
  
    ${props => props.theme.breakpoints.down('sm')} {
      width: 100%;
  
    }
  
  
    ${props => props.theme.breakpoints.down('md')} {
      h3 {
        font-size: 36px;
        font-weight: 400;
      }
    }
  
    }
    .subscribe_title {
      color: hsla(0,0%,100%,.4);
      font-size: 64px;
      font-weight: 400;
      letter-spacing: -.01em;
      line-height: 82px;
    }
  
    .subscribe_iframe {
      background-color: transparent;
      border: none;
      border-radius: 0;
      height: 52px;
      margin: 0;
      width: 80%;
    }
  }

  .footer_bottom_container {
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 0 auto;
    flex-wrap: nowrap;
    padding-bottom: 23px;
    margin-top: 100px;

    ${props => props.theme.breakpoints.down('lg')} {
      flex-direction: column;
      gap: 16px;
    }

    .footer_secondary {
      display: flex;

      ${props => props.theme.breakpoints.down('sm')} {
        flex-direction: column ;
        gap: 16px;

      }

      .footer_secondary_social {
        display: flex;
        gap: 16px;
        margin: 0 16px;
      }
    }
    .footer_links {
      display: flex;
      gap: 12px;
    }
  }


  .lang-icon-en{
    display: inline-block;
    height: 16px;
    width: 16px;
    background-image: url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz48ZyBmaWxsPSdub25lJz48cGF0aCBkPSdNMCAwaDE2djE2SDB6Jy8+PGNpcmNsZSBjeD0nOCcgY3k9JzgnIHI9JzgnIGZpbGw9JyNGMEYwRjAnLz48cGF0aCBmaWxsPScjMDA1MkI0JyBkPSdNMS42NTQgMy4xM0E3Ljk3IDcuOTcgMCAwIDAgLjI3NiA1LjkxMmg0LjE2MUwxLjY1NCAzLjEzem0xNC4wNyAyLjc4M2E3Ljk3MSA3Ljk3MSAwIDAgMC0xLjM3OC0yLjc4NGwtMi43ODMgMi43ODRoNC4xNjF6TS4yNzYgMTAuMDg3YTcuOTcyIDcuOTcyIDAgMCAwIDEuMzc4IDIuNzg0bDIuNzgzLTIuNzg0SC4yNzZ6TTEyLjg3IDEuNjU0QTcuOTcxIDcuOTcxIDAgMCAwIDEwLjA4OC4yNzZ2NC4xNjFsMi43ODQtMi43ODN6TTMuMTMgMTQuMzQ2YTcuOTcyIDcuOTcyIDAgMCAwIDIuNzgzIDEuMzc4di00LjE2MUwzLjEzIDE0LjM0NnpNNS45MTMuMjc2YTcuOTcyIDcuOTcyIDAgMCAwLTIuNzg0IDEuMzc4bDIuNzg0IDIuNzgzVi4yNzZ6bTQuMTc0IDE1LjQ0OGE3Ljk3MiA3Ljk3MiAwIDAgMCAyLjc4NC0xLjM3OGwtMi43ODQtMi43ODN2NC4xNjF6bTEuNDc2LTUuNjM3IDIuNzgzIDIuNzg0YTcuOTcxIDcuOTcxIDAgMCAwIDEuMzc4LTIuNzg0aC00LjE2MXonLz48ZyBmaWxsPScjRDgwMDI3Jz48cGF0aCBkPSdNMTUuOTMyIDYuOTU3SDkuMDQ0Vi4wNjdhOC4wOCA4LjA4IDAgMCAwLTIuMDg3IDB2Ni44OUguMDY3YTguMDggOC4wOCAwIDAgMCAwIDIuMDg2aDYuODl2Ni44OWE4LjA4IDguMDggMCAwIDAgMi4wODYgMHYtNi44OWg2Ljg5YTguMDggOC4wOCAwIDAgMCAwLTIuMDg2eicvPjxwYXRoIGQ9J20xMC4wODcgMTAuMDg3IDMuNTcgMy41N2E4LjAyIDguMDIgMCAwIDAgLjQ3LS41MTRsLTMuMDU2LTMuMDU2aC0uOTg0em0tNC4xNzQgMC0zLjU3IDMuNTdjLjE2NC4xNjQuMzM2LjMyLjUxNC40N2wzLjA1Ni0zLjA1NnYtLjk4NHptMC00LjE3NC0zLjU3LTMuNTdhOC4wMiA4LjAyIDAgMCAwLS40Ny41MTRsMy4wNTYgMy4wNTZoLjk4NHptNC4xNzQgMCAzLjU3LTMuNTdhOC4wMSA4LjAxIDAgMCAwLS41MTQtLjQ3bC0zLjA1NiAzLjA1NnYuOTg0eicvPjwvZz48L2c+PC9zdmc+');
  }
  /* .lang-icon-ce {
    display: inline-block;
    height: 16px;
    width: 16px;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC9klEQVR4nO1ZS2sUQRD+3CQKUYwxUdRE0RAQco1ZV7d7F/EgniVEDAgePIiIuciKBy/CJuDRhI16UQ96ECPiA8RfoSYnRYjmIG7iedfLJzX7yr7cnueOsAXFND0zXd/X01VdXQN0pCMdcS2cRBcTOEGFW1R4QY0Vavymxp+iSnvZuifPxBEjEGk/cI2D1Jijxho1aEsVflBhlkkMBw9cYQ817lMjbxt4veapkGESg8GAT+ACNTY8AF77RdapcN4/4OPoocJDz4HrOiKLYstr8L3UeOc7eF0m8VZsegW+J1DwuqwfOIat7gkEsWx00y+RcQdeY7pt4HVZp5yBP40BKmRDQGDDUYgtxnmGRBfsgU9i2KNNyivNM45DdmZ/zpGha7v8I6EwawYeiFh5il0Dt/eS346TNwb8IrEmSWNrApJVNhvkVKSgje5d2kGm95PTvX4upWhrApLuNhtgpp+83u8nQLbQmybrf6npAM9Gyaej5gav9nlN4LkJgeWGLydBfpkgv0bJ5BZzn5CrVwQUPpkQqKTKqUHy1dGCvh8js/GCSrvUL880MnZxO3n3QOHqHYGsCYHq+C8AZSZL4Eu6GiPv7AvWBxRy9gmInttG/jxZAS9t6QsSvDYnUH/autJXAV4iIn1BO7EyW0L1TvxkhFw5Rl7eWYj3n8fJxyOhdeKlqpcSIB8dIc92V/rOdJEPDhciUzNjfjixNgmjtRtZ4h8DJgL3gVRrAlJ0cmrA+42LNRM2YZrMfbc9uB9rXlfpqnE1z6qY2TXgz5rnpuWTNgIfygONQo4xDBkTKH6FTIgI3LMF3iIQw+5QHOoV1h3XTaVWGQICk47AbyKx2Ebw867Al39eaLxsA/g3TKLbNYFycVcKrsEReO1ZcbemvO5/ZFKY92zmGxLRmPIpOv1y7bC26qYaC9YG437GcxLnJWwHAr6KSAxDVtrhJHeSdxTStndYX4hIAqgRlbqN5Oxy8Cie7PJFlfbH4r2UZJWh+M3akY7g/5e/VHpo9aLkmMIAAAAASUVORK5CYII=');
  } */
`;