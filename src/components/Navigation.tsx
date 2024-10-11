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
            {/* this list will be its own sub-component and it will either have links */}
            <Nav.List className="flex gap-[1rem] rounded-[1000px] bg-[#f9f9f9bf] p-[.5rem]">
              {/* this is a list item that is either pressable or unpressable*/}
              <Item children={<img src={logo2} />} />
              <Item children={<img src={uparrow} />} />
              <Item children={null} pressable={true} />
            </Nav.List>
          </div>
        </div>
      </Nav.Root>
    </header>
  );
}

interface UnconditionalItemProps {
  children: React.ReactNode;
}

type ConditionalItemProps = {
  pressable?: boolean;
  modal?: JSX.Element;
};

type ItemProps = UnconditionalItemProps & ConditionalItemProps;

const Item = (props: ItemProps) => {
  return (
    <Nav.Item className="flex h-[50px] w-[50px] items-center justify-center rounded-[1000px] bg-[#f0f0f0]">
      {props.children || (
        <div className="flex flex-col items-center justify-center rounded-[100px]">
          <div className="mb-[4px] h-[2.5px] w-[22px] bg-black" /> <div className="h-[2.5px] w-[22px] bg-black" />
        </div>
      )}
      {props.pressable && props.modal}
    </Nav.Item>
  );
};
type ModalProps = { children: React.ReactNode };

const Modal = (props: ModalProps) => {
  return <Nav.Content className="flex rounded-[14px] bg-[#f9f9f9bf] p-[2.4rem]"></Nav.Content>;
};
