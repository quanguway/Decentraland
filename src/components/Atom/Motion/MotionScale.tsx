import styled from '@emotion/styled';
import { MotionProps, motion } from 'framer-motion';

type MotionScaleProps = MotionProps & {
  children?: React.ReactNode;
}
const MotionScale = ({children} : MotionScaleProps) => {
  return (
    <MotionScaleStyled
      whileHover={{
        scale: 1.5
      }}
    >
      {children}
    </MotionScaleStyled>
  );
};

export default MotionScale;

const MotionScaleStyled = styled(motion.div)`
  width: fit-content;
`;