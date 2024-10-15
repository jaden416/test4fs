import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="px-[4rem] max-sm:px-[2rem]">{children}</div>;
}

export function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col-reverse items-end gap-[1.5rem] md:grid md:grid-cols-[1fr,2fr] md:grid-rows-[auto]">
      {children}
    </div>
  );
}
