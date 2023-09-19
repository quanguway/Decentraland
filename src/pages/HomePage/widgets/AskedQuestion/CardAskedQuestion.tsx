import { Box, Collapse } from '@mui/material';
import Text from '../../../../components/Atom/Text';
import MotionClickRotate from '../../../../components/Atom/Motion/MotionClickRotate';
import { useState } from 'react';
import { AskedQuestionData } from '.';

const CardAskedQuestion = ({title, description}: AskedQuestionData) => {

  const [expand, setExpand] = useState<boolean>(false);

  return (
    <Box onClick={() => setExpand(!expand)} className='faqs-card' display={'flex'} flexDirection={'column'} gap={1} alignItems={'center'}>
      <Box display={'flex'} justifyContent={'space-between'} width={'100%'} alignContent={'center'}>
        <Text className='question'>{title}</Text>
        <MotionClickRotate isActive={expand}>
          <IconArrowToggle isActive={expand} />
        </MotionClickRotate>
      </Box>
      <Collapse in={expand} timeout='auto' unmountOnExit>
        <p className='description' dangerouslySetInnerHTML={{__html: description}}></p>
      </Collapse>
    </Box>
  );
};

export default CardAskedQuestion;

const IconArrowToggle = ({isActive}: {isActive: boolean}) => {
  return (
    <svg className="close" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity={isActive ? '1' : '0.2'} cx="36" cy="36" r="35" stroke={'white'} fill={isActive? 'white' :'none'} strokeWidth="2">
        </circle>
        <g clipPath="url(#clip0_529_3930)" fill={ isActive ? 'none' : 'white'}>
          <path d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z" fill={isActive ? '#242129' : 'white'}></path>
          </g><defs>
        <clipPath id="clip0_529_3930"><rect width="36" height="36" fill="#242129" transform="translate(54 18) rotate(90)"></rect></clipPath></defs></svg>
  );
};

const IconArrowExpand = () => {
  return (
    <svg className="open" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="1" cx="36" cy="36" r="35" stroke="white" fill="white" strokeWidth="2"></circle><g clipPath="url(#clip0_529_3930)">
        <path d="M45 33.0022L42.885 30.8872L36 37.7572L29.115 30.8872L27 33.0022L36 42.0022L45 33.0022Z" fill="#242129"></path></g><defs><clipPath id="clip0_529_3930">
          <rect width="36" height="36" fill="white" transform="translate(54 18) rotate(90)"></rect>
          </clipPath></defs></svg>
  );
};