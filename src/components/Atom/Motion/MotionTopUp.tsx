import styled from '@emotion/styled';
import { MotionProps, motion } from 'framer-motion';

type MotionTopUpProps = MotionProps & {
  children: React.ReactNode;
  fullWidth?: boolean;
}
const MotionTopUp = ({children, fullWidth} : MotionTopUpProps) => {
  return (
    <MotionTopUpStyled
      style={{width: fullWidth ? '100%' : 'fit-content'}}
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