import vid from "./assets/video.mp4";
import Navigation from "./components/Navigation/Navigation";
import React from "react";
import Container, { Grid } from "./components/Container";

function App() {
  return (
    <>
      <Navigation />
      <header className="pt-[24rem]">
        <Container>
          <div className="max-w-[44rem] md:max-w-[110rem]">
            <h1 className="font-semibold text-[4rem] leading-[.98] md:text-[10rem]">
              A Hey there! Welcome to andhüman..
            </h1>
            <div className="pt-[2rem] md:max-w-[88rem]">
              <p className="text-[2.4rem]">
                Thanks for being here! You're probably wondering who we are. On paper, we're multidisciplinary brand
                builders. At heart, we're a bunch of dreamers, doers, and die-hard humans with a unique approach. Come
                on in, we'll walk you through what makes us, well, us:
              </p>
            </div>
          </div>
        </Container>
      </header>

      <div className="relative inset-0 float-none block overflow-visible"></div>
    </>
  );
}

export default App;
