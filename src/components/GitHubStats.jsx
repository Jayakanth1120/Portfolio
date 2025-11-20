import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import GlassCard from './GlassCard';

const GitHubStats = ({ username = 'yourusername' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (!username || username === 'yourusername') {
    return null;
  }

  return (
    <section id="stats" className="stats-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">GitHub Statistics</h2>
        </motion.div>

        <div className="stats-grid">
          <GlassCard delay={0.2}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub Stats"
              className="github-stats-img"
            />
          </GlassCard>

          <GlassCard delay={0.3}>
            <img
              src={`https://github-readme-streak-stats.demolab.com/?user=${username}&theme=tokyonight&hide_border=true`}
              alt="GitHub Streak"
              className="github-stats-img"
            />
          </GlassCard>

          <GlassCard delay={0.4} className="contributions-card">
            <h3>Contributions</h3>
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night`}
              alt="GitHub Activity"
              className="github-stats-img"
            />
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;

