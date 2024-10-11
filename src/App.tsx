import vid from "./assets/video.mp4";
import Navigation from "./components/Navigation.tsx";
import { motion, useInView } from "framer-motion";
import React from "react";
import IconButton from "./components/IconButton";
import "./index.css";

function App() {
  const ref = React.useRef(null);

  const view = useInView(ref, { amount: 0.2 });

  return (
    <>
      <Navigation />
      <div className="flex h-[100svh] min-h-[100svh] flex-col">
        <div className="flex-1">
          <div className="relative h-full">
            <video src={vid} loop autoPlay muted className="absolute h-full w-full object-cover" />;
          </div>
        </div>
      </div>
      <header className="">
        <div className="px-[4rem]">
          <div className="mx-auto py-[4.5rem]">
            <div className="max-w-[104rem]">
              <h1 ref={ref} className="font-semibold text-[10rem] leading-[105%] max-sm:text-[3.5rem]">
                Where founders build places for people to belong
              </h1>
            </div>
            <div className="max-w-[83.2rem] pt-[4rem]">
              <p className="text-[2.4rem] max-sm:text-[2.4rem]">
                You're here because you want to build something different. Something for meaningful and long-lasting
                change. It's more than a business, more than a brand too. It's a part of you that feels big and brave.
                Creating this kind of change takes a village. Let us be yours.
              </p>
            </div>
            <div className="flex gap-x-[1rem] pt-[4rem]">
              <IconButton text={"Get to know us"} />
              <IconButton text={"See our work"} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
