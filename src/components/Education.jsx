import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      degree: '12th grade',
      institution: 'S.P.B Matriculation Higher Secondary School',
      year: '2019'
    },
    {
      degree: 'Bachelor Degree',
      institution: 'K.S.R College of Arts & Science',
      specialization: 'Bachelor of Computer Application',
      year: '2022'
    },
    {
      degree: 'Master Degree',
      institution: 'Alagappa University',
      specialization: 'Master of Computer Application',
      year: '2026'
    },
  ];

  // Get earliest and latest years for timeline
  const years = educationData.map(edu => parseInt(edu.year));
  const timelineStart = Math.min(...years);
  const timelineEnd = Math.max(...years);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="education" className="education-section" ref={ref}>
      <div className="container">
        <div className="education-layout">
          <motion.div
            className="education-left"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 className="education-title" variants={itemVariants}>
              EDUCATION
            </motion.h2>
            <motion.div className="education-underline" variants={itemVariants}></motion.div>
            <motion.p className="education-description" variants={itemVariants}>
              A journey of continuous learning and growth in design and communication.
              Exploring the intersection of art, technology, and human connection.
            </motion.p>
          </motion.div>

          <motion.div
            className="education-right"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="education-timeline">
              <span className="timeline-year">{timelineStart} - {timelineEnd}</span>
            </div>

            <div className="education-list">
              {educationData.map((edu, index) => (
                <GlassCard
                  key={index}
                  delay={0.4 + index * 0.15}
                  className="education-item"
                >
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-details">
                    <span className="education-institution">{edu.institution}</span>
                    {edu.specialization && (
                      <>
                        <span className="education-separator">|</span>
                        <span className="education-specialization">{edu.specialization}</span>
                      </>
                    )}
                    <span className="education-separator">|</span>
                    <span className="education-year">{edu.year}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;


