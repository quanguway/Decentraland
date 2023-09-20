import styled from '@emotion/styled';
import MotionScrollVisible from '../../../../../components/Atom/Motion/MotionScrollVisible';
import React, { useEffect, useRef } from 'react';
import { AnimationControls, useInView } from 'framer-motion';
import Text from '../../../../../components/Atom/Text';
import { Box } from '@mui/material';
import ButtonPrimary from '../../../../../components/Atom/Button/ButtonPrimary';
import ButtonOutline from '../../../../../components/Atom/Button/ButtonOutline';
import MotionTopUp from '../../../../../components/Atom/Motion/MotionTopUp';
import useDetachScreen from '../../../../../hooks/useDetachScreen';

type MissionContentItemProps = React.PropsWithRef<JSX.IntrinsicElements['div']> & { 
  animateControl: AnimationControls;
  children?: React.ReactNode;
 }

const MissionContentItem = ({ animateControl, children , ...props} : MissionContentItemProps) => {

  const ref = useRef<any>(null);
  const isInView = useInView(ref, {amount: 0.6});
  const isTablet = useDetachScreen('tablet');

  useEffect(() => {
    if(! isInView) {
      animateControl.start('hidden');
    } else {
      animateControl.start('visible');
    }
  },[isInView, animateControl]);  

  if(isTablet) {
    return (
      <MissionContentItemStyled isTablet={isTablet} style={{marginTop: '100px'}} {...props} ref={ref}>
        <Box display={'flex'} gap={4} flexDirection={'column'}>
          <Box>
            <MotionScrollVisible>
              1
            </MotionScrollVisible>
            <MotionScrollVisible>
              <Text className='tile'>Create</Text>
            </MotionScrollVisible>
          </Box>
          {children}

          <div>
            
            <MotionScrollVisible>
              <Text className='subtitle'>
                Decentraland is a world built by YOU where the only limit is your imagination. Create and sell Wearables & Emotes, construct captivating scenes and interactive experiences, or set up a personal space in your own World.
              </Text> 
            </MotionScrollVisible>
            <Box width={'100%'}>
              <ButtonPrimary fullWidth={true} className='button-create' label='Experiences & scenes'/>
              <MotionTopUp fullWidth={true}>
                <ButtonOutline fullWidth={true} label='Wearable & emotes'/>
              </MotionTopUp>
            </Box>
          </div>
        </Box>

      </MissionContentItemStyled>
    );
  }

  return (
    <MissionContentItemStyled isTablet={isTablet} {...props} ref={ref}>
      <Box display={'flex'} gap={4} flexDirection={'row'}>

        <MotionScrollVisible>
          1
        </MotionScrollVisible>
        {children}

        <div>
          <MotionScrollVisible>
            <Text className='tile'>Create</Text>
          </MotionScrollVisible>
          <MotionScrollVisible>
            <Text className='subtitle'>
              Decentraland is a world built by YOU where the only limit is your imagination. Create and sell Wearables & Emotes, construct captivating scenes and interactive experiences, or set up a personal space in your own World.
            </Text> 
          </MotionScrollVisible>
          <Box display={'flex'} gap={1} flexWrap={'wrap'}>
            <ButtonPrimary className='button-create' label='Experiences & scenes'/>
            <MotionTopUp>
              <ButtonOutline label='Wearable & emotes'/>
            </MotionTopUp>
          </Box>
        </div>
      </Box>

    </MissionContentItemStyled>
  );
};

export default MissionContentItem;

const MissionContentItemStyled = styled.div<{isTablet: boolean}>`
  font-weight: 700;
  font-size: 46px;
  display: flex;
  flex-direction: column;
  align-items: start;
  height: ${props => props.isTablet ? '100%' : '100vh'};
  gap: ${props => props.isTablet ? '0px' : '50px'};
  align-items: center;
  padding: 0px 20px;

  .tile {
    display: inline;
    font-size: 80px;
    font-weight: 700;
    line-height: 1;
    padding-bottom: 0.5em;
    vertical-align: top;
  }

  .button-create {
    background-color: white;
    flex-wrap: wrap;
    & p {
      color: black !important;
    }
    /* padding: 14px 40px;
    height: 100%; */
    &:hover {
      background-color: white;
    }
  }

  .subtitle {
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
    max-width: 580px;
    padding-bottom: 2em;
    padding: 150px 0px 90px 0px;
  }
`;