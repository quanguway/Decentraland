import styled from '@emotion/styled';
import { MotionProps, motion } from 'framer-motion';

type MotionTopUpProps = MotionProps & {
  children: React.ReactNode;
}
const MotionTopUp = ({children} : MotionTopUpProps) => {
  return (
    <MotionTopUpStyled
      whileHover={{
        transform: 'translate(0px, -5px)'
      }}
    >
      {children}
    </MotionTopUpStyled>
  );
};

export default MotionTopUp;

const MotionTopUpStyled = styled(motion.div)`
  width: fit-content;
`;