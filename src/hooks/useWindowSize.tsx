import React from "react";

export default function useWindowSize() {
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

  const handleWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWidth);
  }, []);

  return windowWidth;
}
