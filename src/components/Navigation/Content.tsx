import React from "react";
import * as Nav from "@radix-ui/react-navigation-menu";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import logo2 from "../../assets/logo2.svg";
import uparrow from "../../assets/uparrow.svg";
import biglogo from "../../assets/biglogo.svg";

export const HomeLinkContent = () => {
  const { scrollY } = useScroll();
  const degree = useTransform(() => scrollY.get() * 0.4);
  return <motion.img src={logo2} style={{ rotate: degree }} />;
};

export const UpArrowContent = () => {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={top} className="flex h-full w-full items-center justify-center">
      <motion.img src={uparrow} />
    </button>
  );
};

interface MenuContentProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContent: React.FC<MenuContentProps> = ({ open, setOpen }) => {
  return (
    <>
      <Nav.Trigger
        onClick={() => setOpen(!open)}
        className="flex h-full w-full flex-col items-center justify-center rounded-[100px]"
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0, y: open ? 3 : 0 }}
          className="mb-[4px] h-[2.5px] w-[22px] bg-black"
        />
        <motion.div animate={{ rotate: open ? -45 : 0, y: open ? -3 : 0 }} className="h-[2.5px] w-[22px] bg-black" />
      </Nav.Trigger>
      <Modal open={open} links={["Home", "About", "Services", "Community", "Contact"]} />
    </>
  );
};

type ItemProps = {
  children: React.ReactNode;
  handlePress?: () => void;
};

export function Item(props: ItemProps) {
  return (
    <Nav.Item
      tabIndex={1}
      className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:bg-[#e6e6e6]"
    >
      {props.children}
    </Nav.Item>
  );
}

export const transition = {
  type: "spring",
  duration: 0.8,
};

interface ModalProps {
  links: string[];
  open: boolean;
}
export default function Modal(props: ModalProps) {
  return (
    <>
      <Nav.Content forceMount asChild>
        <AnimatePresence>
          {props.open && (
            <motion.div
              className="z-50 rounded-[14px] border border-[#d9d9d9] bg-[#f9f9f9bf] p-[2.4rem]"
              initial={{ y: "100vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100vh", opacity: 0 }}
              transition={transition}
            >
              <div className="flex flex-wrap gap-[6px]">
                {props.links.map((item: string) => (
                  <Nav.Item
                    key={item}
                    tabIndex={0}
                    className="gap-6px flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[18px] py-[16px] text-[14px] hover:cursor-pointer hover:bg-[#e6e6e6]"
                  >
                    <p className="text-[1.5rem]">{item}</p>
                  </Nav.Item>
                ))}
              </div>
              <div className="pt-[2rem]" />
              <div className="flex">
                <p className="text-[1.6rem]">Privacy</p>
              </div>
              <div className="pt-[1rem]" />
              <div className="flex flex-col gap-[8px]">
                <p className="text-[1.6rem]">Instagram</p>
                <p className="text-[1.6rem]">LinkedIn</p>
              </div>
              <div className="pt-[6.4rem]" />
              <img src={biglogo} />
            </motion.div>
          )}
        </AnimatePresence>
      </Nav.Content>
    </>
  );
}
