import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, MotionProps } from 'framer-motion';


type MotionScrollVisibleProps = MotionProps & {
  children: React.ReactNode
}

const MotionScrollVisible = ({children, ...props}: MotionScrollVisibleProps) => {

  const contentRef = useRef<any>(null);
  const mainControls = useAnimation();

  const isInView = useInView(contentRef, {once: true});

  useEffect(() => {
    if(isInView) {
      mainControls.start('visible');
    }
  },[isInView]);

  return (
    <motion.div 
     ref={contentRef}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }} 
      initial='hidden'
      animate={mainControls}
      style={{color: '#fff'}} 
      transition={{ duration: 0.5, delay: 0.1 }}
      {...props}
      >
        {children}
    </motion.div>
  );
};

export default MotionScrollVisible;