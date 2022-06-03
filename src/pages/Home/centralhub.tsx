import { whitemapBtnClass, deepacuaBtnClass } from "../../core/style/homepage";
import centralHubImage from "../../assets/images/central-hub.png";
import avatarImg from "../../assets/images/avatar.png";

const CentralHub = () => {
  return (
    <div id="central-hub">
      <div className="w-full md:h-768 msm:h-333 flex items-center bg-centralhub bg-repeat-round">
        <div className="w-400 ml-mlg md:block hidden">
          <p className="sm:text-50 text-[22px] font-Hanno font-semibold text-white">
            CENTRAL HUB
          </p>
          <p className="text-17 font-Rajdhani  leading-21 text-white mb-20">
            Central Hub represents the entrance to the world. The central point
            where all players come to live in the world of Grandora.
          </p>
          <a href="/map" target="_blank" rel="noopener noreferrer">
          <button className={whitemapBtnClass + " w-200"}>Explore Map</button>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:hidden w-full items-center pt-20 text-center">
        <p className="sm:text-50 text-[22px] font-Hanno font-semibold text-texasRose text-center">
          CENTRAL HUB
        </p>
        <p className="text-[14px] sm:text-17 font-Rajdhani font-normal leading-[17px] sm:leading-24 text-friarGrey mb-20 px-50">
          Central Hub represents the entrance to the world. The central point
          where all players come to live in the world of Grandora.
        </p>
        <a href="/map" target="_blank" rel="noopener noreferrer">
        <button className="uppercase w-220 h-35 font-semibold text-14 bg-texasRose text-default text-center rounded-6 hover:text-texasRose hover:bg-primary">
          Explore Map
        </button>
        </a>
      </div>
      
    </div>
  );
};

export default CentralHub;
