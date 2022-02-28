import React from 'react';
import { motion } from 'framer-motion';
import Top from '../sections/Top';
import Works from '../sections/Works';
import About from '../sections/About';

const Home = () => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <Top />
      <Works />
      <About />
    </motion.section>
  );
};

export default Home;
