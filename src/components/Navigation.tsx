import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import uparrow from "../assets/uparrow.svg";
import React, { ComponentPropsWithoutRef, useEffect } from "react";
import * as Popover from "@radix-ui/react-popover";

export default function Navigation() {
  return (
    <header className="fixed z-10 flex w-full justify-between px-[4rem] py-[2rem]">
      <div className="fixed inset-0 top-auto py-[1.5rem] lg:hidden">
        <nav className="flex w-full justify-center">
          <div className="flex flex-wrap gap-[1rem] rounded-[1000px] bg-[#f9f9f9bf] p-[.5rem]">
            {images.map((image, index) => {
              return (
                <CustomLink
                  index={index}
                  element={image}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:cursor-pointer hover:bg-[#e6e6e6]"
                />
              );
            })}
          </div>
        </nav>
      </div>

      <img src={logo} className="hidden lg:block" />
      <nav className="static hidden rounded-[1000px] border-l-[#f0f0f0] bg-[#f9f9f9bf] p-[.8rem] backdrop-blur-[5px] lg:block">
        <div className="flex gap-[1rem]">
          {links.map((link, index) => {
            return (
              <CustomLink
                index={index}
                element={link}
                className="flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[1.6rem] py-[1.4rem] text-[1.5rem] font-light hover:cursor-pointer hover:bg-[#e6e6e6]"
              />
            );
          })}
        </div>
      </nav>
    </header>
  );
}

interface CustomLinkProps extends ComponentPropsWithoutRef<"a"> {
  index: number;
  element: React.ReactNode;
}
const CustomLink = (props: CustomLinkProps) => {
  return (
    <a tabIndex={1} key={props.index} className={props.className}>
      {props.element}
    </a>
  );
};

const links: Array<React.ReactNode> = [<div>Home</div>, <div>About</div>, <div>Community</div>, <div>Contact</div>];

const CustomButton = () => (
  <>
    <Popover.Trigger className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-[4px] h-[2.5px] w-[22px] bg-black" />
      <div className="h-[2.5px] w-[22px] bg-black" />
    </Popover.Trigger>
  </>
);
const images: Array<React.ReactNode> = [<img src={logo2} />, <img src={uparrow} />, <CustomButton />];
