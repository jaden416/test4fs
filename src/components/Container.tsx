import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-[4rem] max-sm:px-[2rem]">{children}</div>;
}

export function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[1fr,2fr] grid-rows-[auto] items-end gap-[1.5rem] max-sm:grid-cols-[1fr]">
      {children}
    </div>
  );
}
