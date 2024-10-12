import biglogo from "../../assets/biglogo.svg";
import * as Nav from "@radix-ui/react-navigation-menu";

import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  links: string[];
  open: boolean;
};

export const transition = {
  type: "spring",
  duration: 0.8,
};

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
