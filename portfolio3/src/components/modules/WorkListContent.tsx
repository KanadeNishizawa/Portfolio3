import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type Props = {
  path: string;
  img: string;
  name: string;
};

const WorkListContent = (props: Props) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeIn' }}
    >
      <Link className='work-list__content' to={props.path}>
        <div className='work-list__img-wrapper'>
          <img className='work-list__img' src={props.img} />
        </div>
        <h4 className='work-list__label'>{props.name}</h4>
      </Link>
    </motion.div>
  );
};

export default WorkListContent;
