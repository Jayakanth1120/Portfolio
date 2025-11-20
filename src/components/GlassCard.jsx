import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const GlassCard = ({ children, delay = 0, className = '', ...props }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;

