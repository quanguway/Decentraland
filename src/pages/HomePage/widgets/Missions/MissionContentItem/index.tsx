import styled from '@emotion/styled';
import MotionScrollVisible from '../../../../../components/Atom/Motion/MotionScrollVisible';
import React, { ReactPropTypes, useEffect, useRef } from 'react';
import { AnimationControls, motion, useAnimation, useInView } from 'framer-motion';
import Text from '../../../../../components/Atom/Text';
import { Box } from '@mui/material';
import ButtonPrimary from '../../../../../components/Atom/Button/ButtonPrimary';
import ButtonOutline from '../../../../../components/Atom/Button/ButtonOutline';
import MotionTopUp from '../../../../../components/Atom/Motion/MotionTopUp';

type MissionContentItemProps = React.PropsWithRef<JSX.IntrinsicElements['div']> & { 
  animateControl: AnimationControls;
  children?: React.ReactNode;
 }

const MissionContentItem = ({ animateControl, children , ...props} : MissionContentItemProps) => {

  const ref = useRef<any>(null);
  const isInView = useInView(ref, {amount: 0.6});

  useEffect(() => {
    if(! isInView) {
      animateControl.start('hidden');
    } else {
      animateControl.start('visible');
    }
  },[isInView, animateControl]);  

  return (
    <MissionContentItemStyled 
    {...props} ref={ref}>
      <Box display={'flex'} gap={4}>
        <MotionScrollVisible>
          1
        </MotionScrollVisible>
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

const MissionContentItemStyled = styled.div`
  font-weight: 700;
  font-size: 46px;
  display: flex;
  align-items: start;
  /* height: 90vh; */
  /* gap: 50px; */
  align-items: center;

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