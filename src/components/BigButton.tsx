import React from "react";
import { motion } from "framer-motion";
import svgArrow from ".././assets/arrow.svg";

function BigButton({ title, className }: { title: string; className: string }) {
  const variants = { hover: { y: -10, backgroundColor: "#ebebeb" } };
  const img = { hover: { rotate: -35 } };
  return (
    <motion.a variants={variants} whileHover="hover" className={className}>
      <div className="font-semibold text-[2.4rem] md:text-[3.6rem]">{title}</div>
      <motion.img variants={img} src={svgArrow} className="w-[2.6rem]" />
    </motion.a>
  );
}

export default BigButton;
