import React from "react";

import { stagger, motion, useAnimate } from "framer-motion";

export default function WorkItem({
  video,
  className,
  tags,
  title,
}: {
  title: string;
  video: string;
  className: string;
  tags: string[];
}) {
  const [scope, animate] = useAnimate();

  const handleMouse = () => {
    animate([
      [".tag", { y: -10 }, { duration: 0.5, delay: stagger(0.05), ease: "easeOut" }],
      [".tag", { y: 0 }, { duration: 0.5, delay: stagger(0.05), ease: "easeOut" }],
    ]);
  };
  return (
    <motion.div className={className} ref={scope} onMouseEnter={handleMouse}>
      <a className="relative inline-block h-full w-full pt-[150%] md:pt-[56.25%]">
        <div className="absolute inset-0 h-full w-full max-w-[100%] object-cover">
          <div className="relative h-full max-w-none overflow-hidden">
            <video
              src={video}
              loop
              autoPlay
              muted
              className="absolute inset-[-100%] m-auto h-full w-full object-cover"
            />
          </div>
        </div>
      </a>

      <motion.ul className="absolute inset-0 right-auto top-auto z-[2] flex flex-wrap gap-[.4rem] p-[1.25rem]">
        <motion.li className="tag relative self-start rounded-[1000px] bg-white p-3 text-black">
          <div className="text-[1.2rem]">{title}</div>
        </motion.li>
        {tags.map((tag) => {
          return (
            <motion.li className="tag relative self-start rounded-[1000px] bg-[#f9f9f9bf] p-3 text-black">
              <div className="text-[1.2rem]">{tag}</div>
            </motion.li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
}
