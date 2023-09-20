import styled from '@emotion/styled';
import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import MotionTopUp from '../../../../components/Atom/Motion/MotionTopUp';
import { COLOR_TEXT } from '../../../../assets/colors';
import ButtonOutline from '../../../../components/Atom/Button/ButtonOutline';
import SwiperDescentralandPlaces from './SwiperDescentraland/Places';
import Text from '../../../../components/Atom/Text';
import useDetachScreen from '../../../../hooks/useDetachScreen';


type TabPanelProps = {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const InDecentraland = () => {

  const [value, setValue] = useState(0);

  const tabs = ['Places', 'Events'];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const isTablet = useDetachScreen('tablet');


  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >

          {value === index && (
            <Box sx={{ p: 3 }}>
                {children}
            </Box>
          )}
        </div>
    );
  }

  return (
    <InDecentralandStyled isTablet={isTablet}>
      <Text fontSize={'18px'} fontWeight={600} style={{ padding: isTablet ? '0px 30px' : '0px 100px', color: '#a09ba8' }}>In Decentraland</Text> 
      <div className='tabs-container'>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {/* <TabMotion label='Places' index={0} /> */}
          {tabs.map((label:string, index: number) => (
            <Tab className={'tab'} key={index} label={<>
              <MotionTopUp>
                  {label}
              </MotionTopUp>
            </>} {...a11yProps(1)}/>
          ))}
          </Tabs>
          { !isTablet && <MotionTopUp>
              <ButtonOutline label='SEE ALL PLACES'/>
            </MotionTopUp>
          } 
      </div>
    <CustomTabPanel value={value} index={0}>
      <SwiperDescentralandPlaces/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1}>
      <SwiperDescentralandPlaces/>
    </CustomTabPanel>
    </InDecentralandStyled>
  );
};

export default InDecentraland;

const InDecentralandStyled = styled(Box)<{isTablet: boolean}>`
  color: ${COLOR_TEXT};
  margin-top: 64px;

  .tabs-container {
    display: flex;
    justify-content: space-between;
    padding: ${props => props.isTablet ? '0px 30px' : '0px 100px'} ;
    gap: 20px;


    .tab {
      font-size: 48px;
      font-weight: 700;
      letter-spacing: -.01em;
      line-height: 40px;
      padding-bottom: 0.3em;
      position: relative;
      text-transform: capitalize;
    }

  }
  .Mui-selected {
    color: ${COLOR_TEXT} !important;
  }
  .MuiTab-root {
    padding: 12px 0px;
    color: #8c8a8d;
    margin-right: 12px;

    .Mui-selected {
    color: ${COLOR_TEXT} !important;
  }
  .MuiTab-textColorPrimary {
  }
  }

  .MuiTabs-indicator {
    background-color: ${COLOR_TEXT};
    height: 4px;
  }

  /* .MuiTab-textColorInherit {
    color: ${COLOR_TEXT};
  } */
`;