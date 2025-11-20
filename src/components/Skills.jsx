import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiReact, 
  SiJavascript, 
  SiTypescript, 
  SiHtml5, 
  SiCss3, 
  SiSass,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiFigma,
  SiVite,
  SiRedux,
  SiWebpack,
  SiFramer
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Technology logos/icons
  const technologies = [
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'Sass', icon: SiSass },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Firebase', icon: SiFirebase },
    { name: 'Git', icon: SiGit },
    { name: 'Figma', icon: SiFigma },
    { name: 'Vite', icon: SiVite },
    { name: 'Redux', icon: SiRedux },
    { name: 'Webpack', icon: SiWebpack },
    { name: 'Framer Motion', icon: SiFramer },
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="skills-logos-wrapper"
        >
          <div className="skills-logos-container">
            {/* Duplicate logos for seamless infinite scroll effect */}
            {[...technologies, ...technologies].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={`${tech.name}-${index}`}
                  className="skill-logo-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ 
                    delay: 0.3 + (index % technologies.length) * 0.05,
                    duration: 0.4 
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <IconComponent className="skill-logo-icon" />
                  <span className="skill-logo-name">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
