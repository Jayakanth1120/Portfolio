import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <BsMoonFill size={20} />
        ) : (
          <BsSunFill size={20} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

