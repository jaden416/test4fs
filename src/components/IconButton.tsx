import React from "react";
import { motion } from "framer-motion";
import svgArrow from ".././assets/arrow.svg";

const IconButton: React.FC<IconButtonProps> = ({ text, className }) => {
  const button = {
    initial: { paddingRight: "0" },
    animate: { paddingRight: "1.2rem", backgroundColor: "#e6e6e6" },
  };

  const arrow = {
    initial: { transform: "translateX(-6px)", opacity: 0 },
    animate: { transform: "translateX(0px)", opacity: 1 },
  };

  return (
    <motion.a layout className={className} whileHover="animate" animate="initial" variants={button} initial="initial">
      <motion.div layout> {text} </motion.div>
      <motion.img layout variants={arrow} src={svgArrow} />
    </motion.a>
  );
};

export default IconButton;

interface IconButtonProps {
  text: string;
  className: string;
}
