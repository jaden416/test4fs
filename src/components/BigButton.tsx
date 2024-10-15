import React from "react";
import { motion } from "framer-motion";
import svgArrow from ".././assets/arrow.svg";

function BigButton() {
  const variants = { hover: { y: -10, backgroundColor: "#ebebeb" } };
  const img = { hover: { rotate: -35 } };
  return (
    <motion.a
      variants={variants}
      whileHover="hover"
      className="flex w-full items-center justify-center gap-[1.6rem] rounded-[1000px] bg-[#f0f0f0] px-[6.4rem] py-[8rem]"
    >
      <div className="font-semibold text-[3.6rem]">See more work</div>
      <motion.img variants={img} src={svgArrow} className="w-[2.6rem]" />
    </motion.a>
  );
}

export default BigButton;
