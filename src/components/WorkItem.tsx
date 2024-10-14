import React from "react";

export default function WorkItem({ video, className }: { video: string; className: string }) {
  return (
    <div className={className}>
      <a className="relative inline-block h-full w-full pt-[150%] md:pt-[56.25%]">
        <div className="absolute inset-0 h-full w-full max-w-[100%] object-cover">
          <div className="relative h-full max-w-none overflow-hidden">
            <video
              src={video}
              loop
              autoPlay
              muted
              className="absolute inset-[-100%] m-auto h-full w-full object-cover"
            />
          </div>
        </div>
      </a>
    </div>
  );
}
