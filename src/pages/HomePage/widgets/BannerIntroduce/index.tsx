import styled from '@emotion/styled';
import MotionScrollVisible from '../../../../components/Atom/Motion/MotionScrollVisible';
import { Theme } from '@mui/material';
import { theme } from '../../../../hooks/useDetachScreen';
import { motion } from 'framer-motion';


const BannerIntroduce = () => {

  const introduceText = 'Join a community of creators & explorers in a dynamic, virtual social world  owned and shaped by you.';
  const groupText = introduceText.split(' ');
  // const contentRef = useRef<any>(null);
  // const mainControls = useAnimation();

  // const isInView = useInView(contentRef, {once: true});

  // useEffect(() => {
  //   if(isInView) {
  //     mainControls.start('visible');
  //   }
  // },[isInView]);


  // const [hookedYPostion, setHookedYPosition] = useState(0);
  // useMotionValueEvent(scrollYProgress, 'change', (latest) => {
  //   setHookedYPosition(latest);
  // });
  
  // const opacity = useTransform(scrollYProgress, [0, 0], [0, 1]);

  
  

  // const display = useTransform(scrollYProgress, (pos) => {
  //   return pos === 1 ? 'none' : 'inline-block';
  // });

  // const container = {
  //   transition: { ease: [0.17, 0.67, 0.83, 0.67] },
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       duration: 2,
  //       delayChildren: 0.5
  //     }
  //   }
  // };

  return (
    <BannerIntroduceStyled theme={theme}>
      <div className='content'>
        {groupText.map((s, index) => (
          <MotionScrollVisible key={index} transition={{delay: index/30, duration: 0.5}}>
            {s}
          </MotionScrollVisible>
        ))}
      </div>
      <img className='background' alt="about" src="https://images.ctfassets.net/ea2ybdmmn1kv/3ZWmepXxoHB6obGymUZA1V/c373c008f8a7883b6d3a46096bed7d1d/about-background-9b042b07b1fec70f004ed94da87bd309.webp"></img>
    </BannerIntroduceStyled>
  );
};

export default BannerIntroduce;

const BannerIntroduceStyled = styled(motion.div)<{theme: Theme}>`
  position: relative;
  .background {
    height: 784px;
    width: 100%;
    /* object-fit: contain; */
  }
  .content {
    /* padding: 0px 40px; */
    transform: translate(10%, 80%);
    position: absolute;
    flex-wrap: wrap;
    justify-content: center;
    display: flex;
    gap: 8px;
    font-size: clamp(2.75rem,5.2vw + .475rem,4.375rem);
    /* font-weight: 700; */
    width: 80%;

    ${props => props.theme.breakpoints.down('xs')} {
      font-size: clamp(1.75rem,2.2vw,3.375rem);
    }
  }
`;