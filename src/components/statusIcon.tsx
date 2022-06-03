import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const StatusIcon = (props: any) => {
  let divClassStr = "flex items-center mx-2p cursor-pointer ";
  let iconClassStr = "mx-auto ";
  switch (props.type) {
    case "disable":
      divClassStr += "bg-white rounded-full border-friarGrey border ";
      iconClassStr += "text-friarGrey ";
      break;
    case "enable":
      divClassStr +=
        "bg-white rounded-full border-texasRose border hover:border-darkMintGreen ";
      iconClassStr += "text-texasRose hover:text-darkMintGreen ";
      break;
    case "full":
      divClassStr +=
        "bg-texasRose rounded-full border-texasRose border hover:border-darkMintGreen ";
      iconClassStr += "text-white hover:text-darkMintGreen ";
      break;
    case "default":
      divClassStr += "bg-desertStorm rounded-full ";
      iconClassStr += "text-darkMintGreen  ";
      break;
  }
  switch (props.size) {
    case "15":
      divClassStr += "w-10 h-10 sm:w-15 sm:h-15 ";
      iconClassStr += "w-5 h-5 sm:w-10 sm:h-10 ";
      break;
    case "20":
      divClassStr += "w-20 h-20 ";
      iconClassStr += "w-16 h-16 ";
      break;
    case "25":
      divClassStr += "w-25 h-25 ";
      iconClassStr += "w-16 h-16 ";
      break;
    case "30":
      divClassStr += "w-30 h-30 ";
      iconClassStr += "w-20 h-20 ";
      break;
  }
  // switch (props.screen){
  //     case 'sm':
  //         divClassStr += 'sm:w-15 sm:h-15 ';
  //         iconClassStr += 'sm:w-10 sm:h-10 ';
  //         break;
  //     case 'md':
  //         divClassStr += 'sm:w-30 sm:h-30 ';
  //         iconClassStr += 'sm:w-20 sm:h-20 ';
  //         break;
  // }

  return (
    <div className={divClassStr}>
      <FontAwesomeIcon icon={props.icon} className={iconClassStr} />
    </div>
  );
};

export default StatusIcon;
