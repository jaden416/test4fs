import vid from "./assets/video.mp4";
import Navigation from "./components/Navigation/Navigation";
import React from "react";
import Container, { Grid } from "./components/Container";
import WorkItem from "./components/WorkItem";
import IconButton from "./components/IconButton";
import "./index.css";
import logo from "./assets/biglogo.svg";
import { data } from "./assets/data.ts";
import svgArrow from "./assets/whitearrow.svg";

import BigButton from "./components/BigButton.tsx";
import IconGrid from "./components/IconGrid.tsx";

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
              <h1 ref={ref} className="font-suiss_Medium text-[10rem] leading-[105%] max-sm:text-[5.6rem]">
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
              <IconButton
                text={"Get to know us"}
                className="flex items-center gap-x-[6px] rounded-[1000px] bg-[#f0f0f0] p-[1.2rem] pr-0 text-[1.6rem] hover:cursor-pointer"
              />
              <IconButton
                text={"See our work"}
                className="flex items-center gap-x-[6px] rounded-[1000px] bg-[#f0f0f0] p-[1.2rem] pr-0 text-[1.6rem] hover:cursor-pointer"
              />
            </div>
          </div>
        </Container>
      </header>
      <div className="pt-[7rem] max-sm:pt-[3rem]">
        <Container>
          <p className="text-[1.6rem] uppercase">Work</p>
          <h2 className="font-suiss_Medium text-[4.8rem] max-sm:text-[4rem]">Featured Projects</h2>
          <div className="flex flex-col flex-wrap gap-[1.5rem] py-[3.2rem] md:flex-row">
            {data.map((obj) => {
              return <WorkItem video={obj.src} className={obj.className} title={obj.title} tags={obj.tags} />;
            })}
          </div>
          <BigButton
            title="See more work"
            className="flex w-full items-center justify-center gap-[1.6rem] rounded-[1000px] bg-[#f0f0f0] px-[6.4rem] py-[8rem]"
          />
        </Container>
        <div className="pt-[10rem]"></div>
        <Container>
          <Grid>
            <div></div>
            <div className="flex flex-col gap-[2.4rem]">
              <div className="flex w-full max-w-[83.2rem] flex-col gap-[2.4rem]">
                <h1 ref={ref} className="font-suiss_Medium text-[4.8rem] leading-[105%] max-sm:text-[4rem]">
                  We've got the range (for a reason)
                </h1>
                <p className="pb-[3.2rem] text-[1.6rem] font-light md:text-[2rem]">
                  A strong presence that develops die-hard fans requires different elements working together
                  holistically. Whether you're sure about what you need or still figuring things out, we've got you
                  covered
                </p>
              </div>
              <IconGrid />
              <div className=""></div>

              <BigButton
                title="See more services"
                className="flex w-full items-center justify-center gap-[1.6rem] rounded-[1000px] bg-[#f0f0f0] px-[6.4rem] py-[5.5rem]"
              />
            </div>
          </Grid>
        </Container>
      </div>

      <div className="pt-[10rem]"></div>
      <section className="bg-[#f0f0f0]">
        <Container>
          <footer className="flex flex-col gap-[12rem] pb-[4rem] pt-[7.2rem]">
            <Grid>
              <div></div>
              <div className="flex flex-col gap-[2.4rem]">
                <div className="flex w-full flex-col gap-[2.4rem]">
                  <h1 className="font-suiss_Medium text-[7.2rem] leading-[105%]">
                    Ready to be a change-maker. It's time we talked.
                  </h1>
                  <div className="flex">
                    <IconButton
                      text={"Get in touch"}
                      className="flex items-center gap-x-[6px] rounded-[1000px] bg-[#ffffff] p-[1.2rem] pr-0 text-[1.6rem] hover:cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid>
              <div className="w-full">
                <img src={logo} className="w-[85%]" />
              </div>
              <div className="flex w-full flex-col">
                <div className="flex flex-col justify-between gap-[8rem] md:flex-row md:gap-0">
                  <div className="grid grid-cols-[1fr,1fr,1fr,1fr] grid-rows-[auto] items-start gap-[4rem]">
                    <div className="flex flex-col items-start justify-items-start">
                      <a className="text-[1.6rem]">Home</a>
                      <a className="text-[1.6rem]">Work</a>
                      <a className="text-[1.6rem]">About</a>
                      <a className="text-[1.6rem]">Services</a>
                    </div>
                    <div className="flex flex-col items-start justify-items-start">
                      <a className="text-[1.6rem]">Community</a>
                      <a className="text-[1.6rem]">Contact</a>
                      <a className="text-[1.6rem]">Privacy</a>
                    </div>
                    <div className="flex flex-col items-start justify-items-start">
                      <a className="text-[1.6rem]">Instagram</a>
                      <a className="text-[1.6rem]">LinkedIn</a>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="pb-[1.6rem] text-[1.6rem]">
                      For those interested in business, technology, creativity and being human.
                    </p>
                    <div className="flex w-full items-center justify-between rounded-[1000px] bg-white p-[1.2rem]">
                      <p className="text-[1.6rem]">Your email</p>
                      <div className="relative h-[3.8rem] w-[3.8rem] rounded-[1000px]">
                        <img src={svgArrow} className="absolute top-[11px] h-[16px] w-[20px]" />
                      </div>
                    </div>
                    <p className="pt-[1.6rem] text-[1.2rem] text-[#999]">
                      By subscribing you agree to with our Privacy Policy and provide consent to receive updates from
                      our company.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[2.4rem]">
                  <div className="flex flex-col">
                    <p className="text-[1.2rem] uppercase">hey@andhuman.co</p>
                    <p className="text-[1.2rem]">Geneva, Switzerland</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[1.2rem] uppercase">by andhuman + studio—y</p>
                    <p className="text-[1.2rem]">@andhuman 2024</p>
                  </div>
                </div>
              </div>
            </Grid>
          </footer>
        </Container>
      </section>
    </>
  );
}

export default App;
