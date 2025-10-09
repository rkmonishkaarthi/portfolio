"use client";

import { motion } from 'framer-motion';

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function MotionWrapper({ children, className, id }: MotionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );
}
