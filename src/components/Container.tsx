import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-[4rem] max-sm:px-[2rem]">{children}</div>;
}
