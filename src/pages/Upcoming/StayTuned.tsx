import React from "react";
import Tune from "../../assets/images/upcoming/tune.svg";
import { socialIcons } from "../../core/data/soliallink";
import {
  secondPostSocialClass,
} from "../../core/style/homepage";

const StayTuned = () => {
  return (
    <div className="pt-40 min-h-[80vh] h-full text-center px-20">
      <div className="flex flex-col justify-center items-center w-full h-full min-h-[80vh]">
        <img
          src={Tune}
          alt="icon"
          className="sm:h-98 h-70 mb-20 sm:mb-30 md:mb-40"
        />
        <h1 className="uppercase text-28 sm:text-40 tracking-widest md:text-75 font-poppins font-semibold md:leading-63 text-texasRose">
          stay <span className="text-davygrey">Tuned</span>{" "}
        </h1>
        <h3 className="font-Rajdhani pt-10 pb-15 md:pt-20 md:pb-30 font-semibold uppercase text-davygrey text-14 sm:text-20 md:text-28 tracking-widest sm:tracking-[0.2em] md:tracking-[0.35em]">
          something exciting is coming up.
        </h3>
        
        <div className="md:my-50p msm:my-10p d-flex" >
              {socialIcons.map((item, index) => {
                return (
                  <a key={index} href={item.url} target="_blank" className={secondPostSocialClass} style={{marginRight:15}}>
                    <img
                      src={item.icon}
                      className=" sm:w-26 sm:h-26 h-17 w-17 mr-10 sm:mr-0"
                    />
                  </a>
                );
              })}
            </div>
      </div>
    </div>
  );
};

export default StayTuned;
