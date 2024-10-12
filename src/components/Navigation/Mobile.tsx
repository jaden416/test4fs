import * as Nav from "@radix-ui/react-navigation-menu";
import React from "react";
import { motion } from "framer-motion";
import { UpArrowContent, HomeLinkContent, MenuContent, Item } from "./Content.tsx";

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
