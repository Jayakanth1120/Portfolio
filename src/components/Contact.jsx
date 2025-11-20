import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'PHONE & MOBILE',
      details: ['+91 8072286203'],
      link: 'tel:+918072286203',
      action: 'Call'
    },
    {
      icon: FaEnvelope,
      title: 'EMAIL',
      details: ['jayakanthboopathi@gmail.com'],
      link: 'mailto:jayakanthboopathi@gmail.com',
      action: 'Email'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'ADDRESS',
      details: ['6/B,Pallipalayam, Namakkal', 'TamilNadu- 638006'],
      link: 'https://www.google.com/maps/search/?api=1&query=6/B,Pallipalayam,Namakkal,TamilNadu+638008',
      action: 'View on Map'
    },
    {
      icon: FaLinkedin,
      title: 'SOCIAL MEDIA',
      details: ['LinkedIn Profile'],
      link: 'https://in.linkedin.com/in/jayakanth-b-757070296?trk=public_profile_samename-profile',
      action: 'Visit LinkedIn'
    },
  ];

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="section-subtitle italic-subtitle">
            Let's Work Together
          </p>
        </motion.div>

        <div className="contact-info-grid">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard
                delay={index * 0.1}
                className="contact-info-card clickable"
                onClick={() => handleCardClick(info.link)}
              >
                <div className="contact-icon">
                  <info.icon />
                </div>
                <h3 className="contact-card-title">{info.title}</h3>
                <div className="contact-details">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="contact-detail-text">
                      {detail}
                    </p>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
