import { data } from "../assets/illustrations/data.ts";

function IconGrid() {
  return (
    <div className="grid grid-cols-[1fr] grid-rows-[auto] gap-[1.2rem] md:grid-cols-[1fr,1fr,1fr]">
      {data.map((obj) => {
        return <Item icon={obj.src} title={obj.title} />;
      })}
    </div>
  );
}

export default IconGrid;

function Item({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="h-[19.2rem] rounded-[1.2rem] border border-[#e6e6e6]">
      <div className="relative flex h-full w-full flex-col items-stretch justify-between overflow-hidden p-[2.8rem]">
        <div className="mb-[1rem] w-[12.8rem]">
          <img src={icon} className="w-full" />
        </div>
        <div className="mb-[1rem]">
          <div className="w-[90%]">
            <h2 className="text-[2rem]">{title}</h2>
          </div>
        </div>
        <div className="absolute bottom-[2.5rem] left-auto right-[2rem] top-auto h-[1.8rem]">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}
