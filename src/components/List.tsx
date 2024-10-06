import logo from "../assets/logo.svg";
import { motion, useAnimate, useInView } from "framer-motion";
import React from "react";

const List = ({ arr, boo }: { arr: Array<string>; boo: boolean }) => {
  return (
    <motion.div
      layout
      className="flex h-[full] gap-x-[.8rem] rounded-[1000px] border-[#f0f0f0] bg-[#f9f9f911] p-[0.5rem] max-sm:hidden"
    >
      {arr.map((item: string) => (
        <motion.a
          key={item}
          tabIndex={0}
          layout
          className="gap-6px flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[18px] py-[16px] text-[14px] hover:cursor-pointer hover:bg-[#e6e6e6]"
        >
          <motion.p layout className="font-semimedium">
            {item}
          </motion.p>
        </motion.a>
      ))}
    </motion.div>
  );
};
