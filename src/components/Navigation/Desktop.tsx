import React from "react";
import { HomeLinkContent, UpArrowContent, Item } from "./Content.tsx";
import * as Nav from "@radix-ui/react-navigation-menu";
import logo from "../../assets/logo.svg";
import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}
const links = ["Home", "About", "Services", "Community", "Contact"];

const MotionNav = motion.create(Nav.Root);
const MotionList = motion.create(Nav.List);

export default function Desktop() {
  const [position, setPosition] = React.useState(false);
  const [icons, setIcons] = React.useState(false);
  const { scrollY } = useScroll();

  const v = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  React.useEffect(() => {
    if (position == false) setIcons((prev) => (prev = position));
  }, [position]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) setPosition(true);
    else setPosition(false);
  });

  const logoClass =
    "flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:bg-[#e6e6e6]";

  const itemClassName =
    "gap-6px flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[1.6rem] py-[1.4rem] text-[1.5rem] font-light hover:cursor-pointer hover:bg-[#e6e6e6]";

  function set() {
    setIcons((prev) => (prev = position));
  }
  return (
    <AnimatePresence initial={false}>
      <MotionNav
        layout
        style={{ justifyContent: position ? "center" : "space-between" }}
        className="fixed z-[999] flex w-full items-center justify-center p-[2.5rem]"
        onLayoutAnimationComplete={set}
      >
        <motion.img variants={v} width={104} height={52} animate={position ? "hidden" : "visible"} layout src={logo} />
        <MotionList
          layout
          className="static rounded-[1000px] border-l-[#f0f0f0] border-l-[] bg-[#f9f9f9bf] p-[.8rem] backdrop-blur-[5px]"
          onLayoutAnimationComplete={set}
        >
          <div className="flex gap-[6px] overflow-clip">
            {icons && <Item className={logoClass} children={<HomeLinkContent />} />}
            {links.map((link, index) => {
              return (
                <motion.a key={index} layout className={itemClassName}>
                  {link}
                </motion.a>
              );
            })}
            {icons && <Item className={logoClass} children={<UpArrowContent />} />}
          </div>
        </MotionList>
      </MotionNav>
    </AnimatePresence>
  );
}
