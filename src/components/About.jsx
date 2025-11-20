import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate frontend developer building modern web applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="about-content-card">
            <p className="about-paragraph">
              I'm a passionate frontend developer with expertise in React, JavaScript, and modern CSS. 
              I specialize in creating beautiful, responsive, and performant web experiences that bring 
              designs to life while ensuring optimal user experience across all devices. My approach 
              combines clean code practices, attention to detail, and a focus on creating intuitive 
              interfaces that users love to interact with.
            </p>
            <p className="about-paragraph">
              I'm constantly learning and staying up-to-date with the latest web technologies and best 
              practices. Whether it's building complex React applications, optimizing performance, or 
              crafting pixel-perfect designs, I'm dedicated to delivering high-quality solutions that 
              exceed expectations.
            </p>
            <p className="about-paragraph">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
              and sharing knowledge with the developer community. I believe in writing maintainable, 
              scalable code and always strive to improve my skills and take on new challenges.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
