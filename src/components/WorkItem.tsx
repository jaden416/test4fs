import React from "react";

import { motion } from "framer-motion";

export default function WorkItem({ video, className }: { video: string; className: string }) {
  return (
    <motion.div className={className}>
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
      <TagGroup />
    </motion.div>
  );
}

const TagGroup = () => {
  return (
    <div className="absolute inset-0 right-auto top-auto z-[2] flex flex-wrap gap-[.4rem] p-[1.25rem]">
      <Tag />
      <Tag />
      <Tag />
    </div>
  );
};

const Tag = () => {
  return (
    <div className="relative self-start rounded-[1000px] bg-white p-3 text-black">
      <div className="text-[1.2rem]">Design</div>
    </div>
  );
};
