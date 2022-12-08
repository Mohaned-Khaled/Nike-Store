import React, { Fragment } from "react";

const Socials = ({ icon }) => {
  return (
    <Fragment>
      <img
        src={icon}
        alt="icon"
        className="w-8 h-8 cursor-pointer flex items-center md:w-6 md:h-6 sm:w-5 sm:h-5
   transition-all duration-300 hover:scale-110"
      />
    </Fragment>
  );
};

export default Socials;
