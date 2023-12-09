"use client"
import React, { FC, ReactNode } from 'react';
import { motion } from "framer-motion"
import { cubicBezier } from 'framer-motion';
interface Heading2Props {
    className?: string;
    children: ReactNode,
    delay?: number
  }
  const eased = cubicBezier(0.65, 0, 0.35, 1)
const Paragraph:FC<Heading2Props> = ({ children, className, delay }) => {
    return (
      <motion.p viewport={{once:true}} initial={{y:120, opacity:0}} whileInView={{y:0, opacity:1}} transition={{type:"just", ease:eased, duration:0.75, delay}} className={`${className}`} >
        {children}
      </motion.p>
    );
  };

export default Paragraph
