import styled from '@emotion/styled';
import { Box, Theme } from '@mui/material';
import Text from '../../../../components/Atom/Text';
import { COLOR_PRIMARY, COLOR_TEXT } from '../../../../assets/colors';
import CardAskedQuestion from './CardAskedQuestion';
import useDetachScreen, { theme } from '../../../../hooks/useDetachScreen';
import ButtonOutline from '../../../../components/Atom/Button/ButtonOutline';
import MotionTopUp from '../../../../components/Atom/Motion/MotionTopUp';
import { useTranslation } from 'react-i18next';

export type AskedQuestionData = {
  title: string;
  description: string;
}

const askedQuestionData: AskedQuestionData[] = [
  {
    title: 'What is Decentraland?',
    description: '<p>Launched in 2020, Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day. Through Decentraland\'s decentralized autonomous organization (DAO) users can submit and vote on <a href="https://docs.decentraland.org/player/general/dao/overview/what-can-you-do-with-the-dao/"><u>proposals</u></a> and even apply for <a href="https://docs.decentraland.org/player/general/dao/overview/community-grants/"><u>grants</u></a> for the community to vote on.</p>'
  },
  {
    title: 'What is Decentraland?',
    description: '<p>Launched in 2020, Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day. Through Decentraland\'s decentralized autonomous organization (DAO) users can submit and vote on <a href="https://docs.decentraland.org/player/general/dao/overview/what-can-you-do-with-the-dao/"><u>proposals</u></a> and even apply for <a href="https://docs.decentraland.org/player/general/dao/overview/community-grants/"><u>grants</u></a> for the community to vote on.</p>'
  },
  {
    title: 'What is Decentraland?',
    description: '<p>Launched in 2020, Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day. Through Decentraland\'s decentralized autonomous organization (DAO) users can submit and vote on <a href="https://docs.decentraland.org/player/general/dao/overview/what-can-you-do-with-the-dao/"><u>proposals</u></a> and even apply for <a href="https://docs.decentraland.org/player/general/dao/overview/community-grants/"><u>grants</u></a> for the community to vote on.</p>'
  },
  {
    title: 'What is Decentraland?',
    description: '<p>Launched in 2020, Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day. Through Decentraland\'s decentralized autonomous organization (DAO) users can submit and vote on <a href="https://docs.decentraland.org/player/general/dao/overview/what-can-you-do-with-the-dao/"><u>proposals</u></a> and even apply for <a href="https://docs.decentraland.org/player/general/dao/overview/community-grants/"><u>grants</u></a> for the community to vote on.</p>'
  },
  {
    title: 'What is Decentraland?',
    description: '<p>Launched in 2020, Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day. Through Decentraland\'s decentralized autonomous organization (DAO) users can submit and vote on <a href="https://docs.decentraland.org/player/general/dao/overview/what-can-you-do-with-the-dao/"><u>proposals</u></a> and even apply for <a href="https://docs.decentraland.org/player/general/dao/overview/community-grants/"><u>grants</u></a> for the community to vote on.</p>'
  },
  {
    title: 'What is Decentraland?',
    description: '<p>Launched in 2020, Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day. Through Decentraland\'s decentralized autonomous organization (DAO) users can submit and vote on <a href="https://docs.decentraland.org/player/general/dao/overview/what-can-you-do-with-the-dao/"><u>proposals</u></a> and even apply for <a href="https://docs.decentraland.org/player/general/dao/overview/community-grants/"><u>grants</u></a> for the community to vote on.</p>'
  },
  {
    title: 'What is Decentraland?',
    description: '<p>Launched in 2020, Decentraland is a virtual social world, the first decentralized metaverse, and the only one that is open source. Within the Decentraland platform, which can run on a browser or desktop client, users can create, experience, and monetize content and applications as well as socialize and attend a wide range of daily, community-driven events. Decentraland is unique in that it is owned, created, and governed by the people who use it every day. Through Decentraland\'s decentralized autonomous organization (DAO) users can submit and vote on <a href="https://docs.decentraland.org/player/general/dao/overview/what-can-you-do-with-the-dao/"><u>proposals</u></a> and even apply for <a href="https://docs.decentraland.org/player/general/dao/overview/community-grants/"><u>grants</u></a> for the community to vote on.</p>'
  },
];

const AskedQuestion = () => {
  const {t} = useTranslation('homepage');
  const {t: commonLang} = useTranslation('common');

  const isTablet = useDetachScreen('tablet');

  return (
    <AskedQuestionStyled theme={theme}>
      <div className='background'>
          <Box padding={'36px 0 100px'} margin={'auto'} display={'flex'} flexDirection={'column'} alignItems={'center'} width={'100%'} justifyContent={'center'} maxWidth={'1000px'} gap={3}>
              <Text 
                fontSize={'16px'} 
                font-weight={600} 
                text-transform={'uppercase'} 
                sx={{
                  color: '#a09ba8',
                }} variant='h3'>{t('ask_question.subtitle')}</Text>
              <Text fontSize={isTablet ? '24px' : '36px'} fontWeight={isTablet ? 600 : 700} textAlign={'center'} variant='h2'>{t('ask_question.title')}</Text>

              {askedQuestionData.map((o, index) => (
                  <CardAskedQuestion key={index} {...o} />
              ))}
              <MotionTopUp>
                <ButtonOutline label={commonLang('see_more')}/>
              </MotionTopUp>
          </Box>
      </div>
    </AskedQuestionStyled>
  );
};

export default AskedQuestion;

const AskedQuestionStyled = styled.div<{theme: Theme}>`
  .background {
    background: linear-gradient(to right,${COLOR_TEXT} 4px,transparent 4px) 0 0,linear-gradient(to right,${COLOR_TEXT} 4px,transparent 4px) 0 100%,linear-gradient(to left,${COLOR_TEXT} 4px,transparent 4px) 100% 0,linear-gradient(to left,${COLOR_TEXT} 4px,transparent 4px) 100% 100%,linear-gradient(to bottom,${COLOR_TEXT} 4px,transparent 4px) 0 0,linear-gradient(to bottom,${COLOR_TEXT} 4px,transparent 4px) 100% 0,linear-gradient(to top,${COLOR_TEXT} 4px,transparent 4px) 0 100%,linear-gradient(to top,${COLOR_TEXT} 4px,transparent 4px) 100% 100%;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 20px;
  }
  .faqs-card {
    cursor: pointer;
    background-color: #242129;
    padding: 14px 20px 14px 56px;
    border-radius: 56px;
    /* background-image: linear-gradient(90deg,#43404a,#691fa9); */

    ${props => props.theme.breakpoints.down('sm')} {
      padding: 14px 20px 14px 30px;
    }

    width: 90%;

    &:hover {
      background-image: linear-gradient(90deg,#43404a,#691fa9)
    }

    .question {
      color: #cfcdd4;
      font-size: 28px;
      font-style: normal;
      font-weight: 300;
      line-height: 28px;
      margin: auto 0;
      font-weight: 600;
      vertical-align: middle;

      ${props => props.theme.breakpoints.down('lg')} {
        font-size: 18px;
      }
    }
  }
  .description {
    color: #ecebed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 165%;
    padding: 1em 0 2em;
    white-space: pre-line;

    & u {
      color: ${COLOR_PRIMARY};
    }
  }
`;
