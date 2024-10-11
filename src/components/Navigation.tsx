import logo2 from "../assets/logo2.svg";
import uparrow from "../assets/uparrow.svg";
import biglogo from "../assets/biglogo.svg";
import * as Nav from "@radix-ui/react-navigation-menu";

export default function Navigation() {
  // create state variable that tracks whether the modal is open
  return (
    <header className="fixed z-10 flex w-full justify-between px-[4rem] py-[2rem]">
      <Nav.Root className="fixed inset-0 top-auto py-[1.5rem]">
        <div className="flex w-full flex-col justify-center px-[4rem]">
          <Nav.Viewport />

          <div className="flex justify-center">
            {/* this list will be its own sub-component and it will either have links */}
            <Nav.List className="flex gap-[1rem] rounded-[1000px] bg-[#f9f9f9bf] p-[.5rem]">
              {/* this is a list item that is either pressable or unpressable*/}
              <Item children={<img src={logo2} />} />
              <Item children={<img src={uparrow} />} />
              <Item
                children={null}
                pressable={true}
                modal={<Modal links={["Home", "About", "Contact", "Community", "Contact"]} />}
              />
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
      {props.pressable && (
        <>
          <Nav.Trigger className="flex flex-col items-center justify-center rounded-[100px]">
            <div className="mb-[4px] h-[2.5px] w-[22px] bg-black" /> <div className="h-[2.5px] w-[22px] bg-black" />
          </Nav.Trigger>
          {props.modal}
        </>
      )}
      {props.children}
    </Nav.Item>
  );
};
type ModalProps = { links: string[] };

const Modal = (props: ModalProps) => {
  return (
    <Nav.Content className="rounded-[14px] bg-[#f9f9f9bf] p-[2.4rem]">
      <div className="flex flex-wrap gap-[6px]">
        {props.links.map((item: string) => (
          <Nav.Item
            key={item}
            tabIndex={0}
            className="gap-6px flex max-w-[100%] items-center rounded-[1000px] bg-[#f0f0f0] px-[18px] py-[16px] text-[14px] hover:cursor-pointer hover:bg-[#e6e6e6]"
          >
            <p className="font-semimedium">{item}</p>
          </Nav.Item>
        ))}
      </div>
      <div className="pt-[2rem]" />
      <div className="flex">
        <p className="text-[1.6rem]">Privacy</p>
      </div>
      <div className="pt-[1rem]" />
      <div className="flex flex-col gap-[8px]">
        <p className="text-[1.6rem]">Instagram</p>
        <p className="text-[1.6rem]">Privacy</p>
      </div>
      <div className="pt-[6.4rem]" />
      <img src={biglogo} />
    </Nav.Content>
  );
};
