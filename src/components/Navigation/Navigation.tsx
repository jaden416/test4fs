import Desktop from "./Desktop";
import Mobile from "./Mobile";

import useWindowSize from "../../hooks/useWindowSize";

export default function Navigation() {
  const width = useWindowSize();
  const breakpoint = 768;

  return <>{width > breakpoint ? <Desktop /> : <Mobile />}</>;
}
