import {motion} from 'framer-motion';

const MotionClickRotate = ({children, isActive, onClick}: {children: React.ReactNode, isActive: boolean, onClick?: () => void}) => {



  return (
    <motion.div onClick={onClick} style={{cursor: 'pointer'}}
    animate={{
      rotate: isActive ? 180 : 0
    }}>
      {children}
    </motion.div>
  );
};

export default MotionClickRotate;