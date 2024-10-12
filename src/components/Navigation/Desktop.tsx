import logo from "../../assets/logo.svg";
import logo2 from "../../assets/logo2.svg";
import uparrow from "../../assets/uparrow.svg";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import React from "react";

declare module "react" {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

export default function Desktop() {
  const [toggle, setToggle] = React.useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) setToggle(true);
    else setToggle(false);
  });

  return (
    <div className="bg-none">
      <Component toggle={toggle} links={["Home", "About", "Services", "Community", "Contact"]} />
    </div>
  );
}
interface CProps {
  toggle: boolean;
  links: Array<string>;
}

const Component: React.FC<CProps> = ({ toggle, links }) => {
  const [wait, setWait] = React.useState<boolean>(toggle);

  React.useEffect(() => {
    if (toggle == false) setWait((prev) => (prev = toggle));
  }, [toggle]);

  const v = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  function func() {
    setWait((prev) => (prev = toggle));
    console.log(wait);
  }

  const { scrollYProgress } = useScroll();

  const useYScroll = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <AnimatePresence initial={false}>
      <motion.div
        layout
        style={{ justifyContent: toggle ? "center" : "space-between" }}
        onLayoutAnimationComplete={func}
        className="fixed z-[999] flex w-full items-center justify-center p-[2.5rem]"
      >
        <motion.img
          variants={v}
          animate={toggle ? "hidden" : "visible"}
          layout
          style={{ width: toggle ? 0 : "60px" }}
          src={logo}
        />
        <motion.div
          layout
          className="static rounded-[1000px] border-l-[#f0f0f0] border-l-[] bg-[#f9f9f9bf] p-[.8rem] backdrop-blur-[5px]"
          onLayoutAnimationComplete={func}
        >
          <div className="flex gap-[6px] overflow-clip">
            {wait && (
              <motion.a
                key={1}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] text-[1rem] leading-[1] hover:bg-[#e6e6e6]"
              >
                <motion.img layout src={logo2} style={{ rotate: useYScroll }} className="absolute" alt="logo" />
              </motion.a>
            )}

            {links.map((link, index) => {
              return (
                <motion.a
                  key={index}
                  layout
                  className="gap-6px flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[1.6rem] py-[1.4rem] text-[1.5rem] font-light hover:cursor-pointer hover:bg-[#e6e6e6]"
                >
                  {link}
                </motion.a>
              );
            })}
            {wait && (
              <motion.a
                key={2}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] text-[1rem] leading-[1] hover:bg-[#e6e6e6]"
              >
                <motion.img src={uparrow} className="" alt="logo" />
              </motion.a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
