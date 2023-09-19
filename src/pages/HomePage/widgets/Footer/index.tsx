import styled from '@emotion/styled';
import Text from '../../../../components/Atom/Text';
import ColSocial from './ColSocial';
import { Theme } from '@mui/material';
import { theme } from '../../../../hooks/useDetachScreen';

const resources = [
  'Marketplace',
  'Builder',
  'Docs',
  'Places',
  'Events',
  'DAO',
  'Blog',
  'FAQ'
];

const connect = [
  'Live chat',
  'Email',
  'Discord',
  'Reddit',
  'Twitter',
  'Github'
];

const Footer = () => {


  return (
    <FooterStyled theme={theme}>
      <div className='footer_subscribe'>
        <Text variant='h3' className='subscribe_title'>Stay updated with Decentraland</Text>
        {/* <iframe src='https://embeds.beehiiv.com/ff89783d-748b-4ba3-8700-4759f6f62831?slim=true' className='subscribe_iframe'></iframe> */}
      </div>
      <div className='footer_links'>
        <ColSocial title='RESOURCES' list={resources.map(s => ({label: s, link: '/' }))} />
        <ColSocial title='CONNECT' list={connect.map(s => ({label: s, link: '/' }))} />
      </div>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.footer<{theme: Theme}>`
  display:  flex;
  padding: 0 100px;
  justify-content: space-around;

  ${props => props.theme.breakpoints.down('lg')} {
    flex-direction: column;
    padding: 0 10px;
    width: 400px;
    .footer_links {
      display: flex;
      justify-content: space-between;
    }
  }

  .footer_subscribe {
    width: 500px;

  ${props => props.theme.breakpoints.down('md')} {
    h3 {
      width: 400px;
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

  .footer_links {
    display: flex;
    gap: 12px;
  }

`;