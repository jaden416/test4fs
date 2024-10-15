import vid from "./assets/video.mp4";
import Navigation from "./components/Navigation/Navigation";
import React from "react";
import Container from "./components/Container";
import WorkItem from "./components/WorkItem";
import IconButton from "./components/IconButton";
import "./index.css";

import { data } from "./assets/data.ts";

import vid1 from "./assets/videos/1.mp4";
import vid2 from "./assets/videos/2.mp4";

function App() {
  const ref = React.useRef(null);

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
      <header className="pb-[7rem] max-sm:pb-[3rem]">
        <Container>
          <div className="mx-auto py-[4.5rem]">
            <div className="max-w-[104rem]">
              <h1 ref={ref} className="font-semibold text-[10rem] leading-[105%] max-sm:text-[5.6rem]">
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
        </Container>
      </header>
      <div className="pt-[7rem] max-sm:pt-[3rem]">
        <Container>
          <p className="text-[1.6rem] uppercase">Work</p>
          <h2 className="font-semibold text-[4.8rem] max-sm:text-[4rem]">Featured Projects</h2>
          <div className="flex flex-col flex-wrap gap-[1.5rem] py-[3.2rem] md:flex-row">
            {data.map((obj) => {
              return <WorkItem video={obj.src} className={obj.className} title={obj.title} tags={obj.tags} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
