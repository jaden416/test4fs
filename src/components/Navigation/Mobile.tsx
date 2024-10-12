import logo2 from "../../assets/logo2.svg";
import uparrow from "../../assets/uparrow.svg";
import * as Nav from "@radix-ui/react-navigation-menu";
import React from "react";
import Item from "./Item";
import Modal from "./Modal";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Mobile() {
  const [open, setOpen] = React.useState<boolean>(false);

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
            <Nav.List className="flex gap-[1rem] rounded-[1000px] border border-[#f0f0f0] bg-[#f9f9f9bf] p-[.5rem] backdrop-blur-[10px]">
              <Item children={<HomeLinkContent />} />

              <Item children={<UpArrowContent />} />

              <Item children={<MenuContent open={open} setOpen={setOpen} />} />
            </Nav.List>
          </div>
        </div>
      </Nav.Root>
    </header>
  );
}

const HomeLinkContent = () => {
  const { scrollY } = useScroll();
  const degree = useTransform(() => scrollY.get() * 0.4);
  return <motion.img src={logo2} style={{ rotate: degree }} />;
};

const UpArrowContent = () => {
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

const MenuContent: React.FC<MenuContentProps> = ({ open, setOpen }) => {
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
