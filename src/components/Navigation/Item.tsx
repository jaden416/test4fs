import * as Nav from "@radix-ui/react-navigation-menu";
import React from "react";

type ItemProps = {
  children: React.ReactNode;
  handlePress?: () => void;
};

export default function Item(props: ItemProps) {
  return (
    <Nav.Item
      tabIndex={1}
      className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0] hover:bg-[#e6e6e6]"
    >
      {props.children}
    </Nav.Item>
  );
}
