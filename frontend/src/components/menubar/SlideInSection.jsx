import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SlideInSection = ({ children, delayy, durationn, easing = 'easeOut' }) => {
  // Using `useInView` to detect if the component is in view
  const [ref, inView] = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.2, // Adjust threshold to define when to trigger animation
  });

  return (
    <motion.div className='motiondiv'
      ref={ref}
      initial={{ opacity: 0, x: 200,y:0 }} // Initial state (hidden and shifted left)
      animate={inView ? { opacity: 1, x: 0 } : {}} // Slide in when in view
      transition={{ duration: durationn, ease: 'easeOut',delay:delayy }} // Animation properties
    >
      {children}

  
    </motion.div>
  );
};

export default SlideInSection;
