"use client"
import React, { FC, ReactNode } from 'react';
import { cubicBezier } from 'framer-motion';
import { motion } from "framer-motion"
interface Heading2Props {
    className?: string;
    children: ReactNode
  }
  const eased = cubicBezier(0.65, 0, 0.35, 1)
const Heading2:FC<Heading2Props> = ({ children, className }) => {
    return (
      <motion.h2  viewport={{once:true}} initial={{y:120, opacity:0.5}} whileInView={{y:0, opacity:1}} transition={{type:"tween", ease:eased, duration:0.75}} className={`lg:text-3xl  min-h-[100] text-2xl font-medium ${className}`} >
        {children}
      </motion.h2>
    );
  };

export default Heading2






