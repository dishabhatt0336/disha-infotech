import { motion, useScroll } from "motion/react";

export default function ScrollProgress({ className = "", ...props }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`fixed inset-x-0 top-16 z-[50] h-[3px] origin-left 
        bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]
        ${className}`}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
