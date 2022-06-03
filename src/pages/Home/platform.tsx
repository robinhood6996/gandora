import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { platformClass } from "../../core/style/homepage";
import {
  landingItems1,
  landingItems2,
  landingItemClass,
} from "../../core/data/landinginfo";

import platformImage from "../../assets/images/platform.png";
import { map } from "jquery";

const Platform = () => {
  return (
    <div
      id="platform"
      className="sm:mx-60 sm:grid md:grid-cols-3 gap-20 sm:mt-160 mt-[50px] px-60 sm:px-0 mobile__platform-con"
    >
      <div className="">
        <img src={platformImage} />
        {/* <div className="uppercase text-42 leading-46 text-davygrey">
                <p>The platform</p>
                <p>where everyone</p>
                <p>can be anythin</p>
            </div> */}
        <div className={platformClass}>
          <div className="text-[10px] sm:text-18">
            <p>LIMITLESS</p>
            <p>POSSIBILITY VERSE</p>
          </div>
        </div>
        <a href="/map" target="_blank" rel="noopener noreferrer">
        <button className="hidden md:block bg-texasRose text-white hover:text-primary border border-texasRose h-30 w-197 text-14 uppercase tracking-20p mt-23 lg:ml-100 rounded-6">
          <FontAwesomeIcon icon={faFile} className="mr-7" /> whitepaper
        </button>
        </a>
      </div>
      <div>
        {landingItems1.map((item, index) => {
          let la = item.title.split(" ");
          let second = [...la];
          if (la.length >= 4) {
            second.shift();
          }

          return (
            <div key={index} className="mb-8p md:mb-32 md:h-170 ">
              <div className="bg-texasRose rounded-full w-55 h-55 bg-opacity-10 flex items-center">
                <img src={item.icon} className={landingItemClass.icon} />
              </div>
              <label className={landingItemClass.title}>
                {la.length >= 4 ? la[0] : item.title}
              </label>
              {la.length >= 4 && (
                <label className={landingItemClass.title}>
                  {second.join(" ")}
                </label>
              )}

              <p className={landingItemClass.content}>{item.content}</p>
            </div>
          );
        })}
      </div>
      <div>
        {landingItems2.map((item, index) => {
          return (
            <div key={index} className="mb-8p md:mb-32 md:h-170 ">
              <div className="sm:bg-seletiveyellow bg-texasRose  rounded-full w-55 h-55 bg-opacity-10 flex items-center">
                <img src={item.icon} className={landingItemClass.icon} />
              </div>
              <label className={landingItemClass.title}>{item.title}</label>
              <p className={landingItemClass.content}>{item.content}</p>
            </div>
          );
        })}
      </div>
      <a href="/map" target="_blank" rel="noopener noreferrer">
      <button className="block md:hidden bg-texasRose text-white hover:text-primary border border-texasRose h-35 w-220 text-18 uppercase tracking-20p my-50p rounded-6 mx-auto">
        <FontAwesomeIcon icon={faFile} className="mr-7" /> whitepaper
      </button>
      </a>
    </div>
  );
};

export default Platform;
