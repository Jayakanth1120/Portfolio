import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import resumePdf from '../assets/Jayakanth-B-Resume.pdf';

const Hero = () => {
  const constraintsRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Jayakanth1120', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/jayakanth-b-757070296/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:jayakanthboopathi@gmail.com', label: 'Email' },
  ];

  return (
    <section ref={constraintsRef} className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-left"></div>
        <div className="gradient-orb orb-right"></div>
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello !!!
          </motion.p>

          <motion.h1 className="hero-name" variants={itemVariants}>
            I'm <span className="name-highlight">Jayakanth</span>
          </motion.h1>

          <motion.div className="hero-title-badge" variants={itemVariants}>
            <span>FRONTEND DEVELOPER</span>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            Passionate frontend developer crafting beautiful, responsive, and performant web experiences. 
            I specialize in React, JavaScript, and modern CSS to bring creative designs to life. 
            Always learning, always building.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a
              href="#projects"
              className="btn btn-primary cursor-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href={resumePdf}
              download="Jayakanth-B-Resume.pdf"
              className="btn btn-secondary cursor-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-social"
            variants={itemVariants}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link cursor-hover"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="hero-divider" variants={itemVariants}>
            <div className="divider-line"></div>
            <div className="divider-circle"></div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="hero-image-container">
            <img 
              src="/jayakanth.png" 
              alt="Jayakanth - Frontend Developer" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="hero-image-placeholder"><span>Your Photo</span></div>';
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
