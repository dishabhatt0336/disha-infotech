import { motion } from "motion/react";

const animationVariants = {
  blur: {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  },
  shake: {
    hidden: { x: 0 },
    visible: { x: [-5, 5, -5, 5, 0] },
  },
  scale: {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  rotate: {
    hidden: { rotate: -10, opacity: 0 },
    visible: { rotate: 0, opacity: 1 },
  },
};

export function TextAnimate({
  children,
  animation = "fade",
  by = "word",
  duration = 0.5,
  stagger = 0.1,
  delay = 0,
  className = "",
  as = "p",
}) {
  const MotionComponent = motion[as];
  const selectedVariant = animationVariants[animation] || animationVariants.fade;

  // Split text based on 'by' prop
  const segments =
    by === "character"
      ? children.split("")
      : children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: selectedVariant.hidden,
    visible: {
      ...selectedVariant.visible,
      transition: {
        duration,
      },
    },
  };

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={container}
    >
      {segments.map((segment, index) => (
        <motion.span
          key={index}
          variants={item}
          style={{ display: "inline-block", whiteSpace: by === "word" ? "pre" : "normal" }}
        >
          {by === "word" && index > 0 ? " " : ""}
          {segment}
        </motion.span>
      ))}
    </MotionComponent>
  );
}