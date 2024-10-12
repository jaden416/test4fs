import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import uparrow from "../assets/uparrow.svg";
import biglogo from "../assets/biglogo.svg";
import * as Nav from "@radix-ui/react-navigation-menu";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";

export default function Mobile() {
  // create state variable that tracks whether the modal is open
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed z-10 flex w-full justify-between px-[4rem] py-[2rem]">
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="pointer-events-none fixed inset-0 h-[100dvh] w-full backdrop-blur-[8px]"
        />
      )}

      <Nav.Root className="fixed inset-0 top-auto py-[1.5rem]">
        <div className="flex w-full flex-col justify-center gap-[8px] px-[4rem]">
          <Nav.Viewport forceMount />

          <div className="flex justify-center">
            {/* this list will be its own sub-component and it will either have links */}
            <Nav.List className="flex gap-[1rem] rounded-[1000px] border border-[#f0f0f0] bg-[#f9f9f9bf] p-[.5rem] backdrop-blur-[10px]">
              {/* this is a list item that is either pressable or unpressable*/}
              <Item children={<img src={logo2} />} />

              <Item children={<img src={uparrow} />} />

              <Nav.Item className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:bg-[#e6e6e6]">
                <Nav.Trigger
                  onClick={() => setOpen(!open)}
                  className="flex h-full w-full flex-col items-center justify-center rounded-[100px]"
                >
                  <motion.div
                    animate={{ rotate: open ? 45 : 0, y: open ? 3 : 0 }}
                    className="mb-[4px] h-[2.5px] w-[22px] bg-black"
                  />
                  <motion.div
                    animate={{ rotate: open ? -45 : 0, y: open ? -3 : 0 }}
                    className="h-[2.5px] w-[22px] bg-black"
                  />
                </Nav.Trigger>
                <Modal open={open} links={["Home", "About", "Services", "Community", "Contact"]} />
              </Nav.Item>
            </Nav.List>
          </div>
        </div>
      </Nav.Root>
    </header>
  );
}

type ConditionalItemProps = {
  pressable?: boolean;
  modal?: JSX.Element;
};

type ItemProps = UnconditionalItemProps & ConditionalItemProps;

const Item = (props: ItemProps) => {
  return (
    <Nav.Item
      tabIndex={1}
      className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:bg-[#e6e6e6]"
    >
      {props.children}
    </Nav.Item>
  );
};
type ModalProps = {
  links: string[];
  open: boolean;
};
export const transition = {
  type: "spring",
  duration: 0.8,
};

const Modal = (props: ModalProps) => {
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
};
