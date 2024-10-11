import logo2 from "../assets/logo2.svg";
import uparrow from "../assets/uparrow.svg";
import * as Nav from "@radix-ui/react-navigation-menu";

export default function Navigation() {
  // create state variable that tracks whether the modal is open
  return (
    <header className="fixed z-10 flex w-full justify-between px-[4rem] py-[2rem]">
      <Nav.Root className="fixed inset-0 top-auto py-[1.5rem]">
        <div className="flex w-full flex-col justify-center px-[2.5rem]">
          <Nav.Viewport />

          <div className="flex justify-center">
            {/* this list will be its own sub-component and it will either have pressable links or unpressable links */}
            <Nav.List className="flex gap-[1rem] rounded-[1000px] bg-[#f9f9f9bf] p-[.5rem]">
              {/* this is a list item */}
            </Nav.List>
          </div>
        </div>
      </Nav.Root>
    </header>
  );
}

interface ItemProps {
  children: React.ReactElement | null;
  pressable: boolean;
}
const Item = ({ children }: ItemProps) => {
  return <Nav.Item>{children}</Nav.Item>;
};

const logo = <img src={logo2}></img>;
const arrow = <img src={uparrow}></img>;
