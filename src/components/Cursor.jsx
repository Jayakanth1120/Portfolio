import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);

  const smoothX = useSpring(x, { stiffness: 500, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 300, damping: 20 });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    const handleMouseMove = (e) => {
      if (window.innerWidth >= 768) {
        x.set(e.clientX);
        y.set(e.clientY);
      }
    };

    const handleMouseEnter = () => {
      if (window.innerWidth >= 768) {
        scale.set(1.5);
      }
    };

    const handleMouseLeave = () => {
      if (window.innerWidth >= 768) {
        scale.set(1);
      }
    };

    const links = document.querySelectorAll('a, button, .cursor-hover');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDesktop);
      window.removeEventListener('mousemove', handleMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [x, y, scale]);

  if (!isDesktop) {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        x: smoothX,
        y: smoothY,
        scale: smoothScale,
      }}
    />
  );
};

export default Cursor;

