import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Clips = ({ imageSrc, clip }) => {
  return (
    <div
      className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300
    lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14"
    >
      <img
        src={imageSrc}
        alt="img/clip"
        className="flex h-full w-full absolute inset-0 object-cover rounded-xl z-10"
      />
      <div className="bg-white blur-effect-theme absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 z-index[100] w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full">
        <BsFillPlayFill className="icon-style text-slate-900 md:w-3 md:h-3" />
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute rounded-xl inset-0 flex w-full h-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-20 transition-opacity duration-500"
      >
        <source type="video/mp4" src={clip} />
      </video>
    </div>
  );
};

export default Clips;
