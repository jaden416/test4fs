import logo from "../assets/logo.svg";
import logo2 from "../assets/logo2.svg";
import uparrow from "../assets/uparrow.svg";
import React, { ComponentPropsWithoutRef, useEffect } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

const links: Array<string> = ["Home", "About", "Community", "Contact"];
const images: Array<string> = [logo2, uparrow];

export default function Navigation() {
  return (
    <header className="fixed z-10 flex w-full justify-between px-[4rem] py-[2rem]">
      <Popover>
        <div className="fixed inset-0 top-auto">
          <nav className="flex w-full justify-center">
            <div className="flex gap-[1rem] rounded-[1000px] bg-[#f9f9f9bf]">
              {images.map((image, index) => {
                return (
                  <CustomLink
                    index={index}
                    className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:cursor-pointer hover:bg-[#e6e6e6] lg:hidden"
                    linkSvg={image}
                  />
                );
              })}
            </div>
          </nav>
        </div>
      </Popover>

      <img src={logo} className="hidden lg:block" />
      <nav className="static hidden rounded-[1000px] border-l-[#f0f0f0] bg-[#f9f9f9bf] p-[.8rem] backdrop-blur-[5px] lg:block">
        <div className="flex gap-[1rem]">
          {links.map((link, index) => {
            return (
              <CustomLink
                link={link}
                index={index}
                className="hidden max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[1.6rem] py-[1.4rem] text-[1.5rem] font-light hover:cursor-pointer hover:bg-[#e6e6e6] lg:flex"
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
  link?: string;
  linkSvg?: string;
}
const CustomLink = (props: CustomLinkProps) => {
  return (
    <a key={props.index} className={props.className}>
      {props?.link}
      {props.linkSvg && <img className="h-[25px] w-[25px]" src={props.linkSvg} />}
    </a>
  );
};
