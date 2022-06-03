import { useState } from "react";
import Carousel from "react-multi-carousel";
import afee from "../../assets/images/avatars/afee.png";
import agie from "../../assets/images/avatars/agie.png";
import aa from "../../assets/images/avatars/aa.png";
import athom from "../../assets/images/avatars/athom.png";
import amo from "../../assets/images/avatars/amo.png";
import aohm from "../../assets/images/avatars/aohm.png";
import azag from "../../assets/images/avatars/azag.png";
import ayim from "../../assets/images/avatars/ayim.png";
import fee from "../../assets/images/users/fee.jpg";
import gie from "../../assets/images/users/gie.jpg";
import a from "../../assets/images/users/a.jpg";
import thom from "../../assets/images/users/thom.jpg";
import mo from "../../assets/images/users/mo.jpg";
import ohm from "../../assets/images/users/ohm.jpg";
import zag from "../../assets/images/users/zax.jpg";
import yim from "../../assets/images/users/yim.jpg";
import teamInfoImage from "../../assets/images/teams/teamInfo.png";

import "react-multi-carousel/lib/styles.css";

const TeamDiv = () => {

  const imgList = [
    {
      avatar: ayim,
      user: yim,
      name:"Tanat Juwiwat",
      position:"(CEO)"
    },
    {
      avatar: azag,
      user: zag,
      name:"Saroot Tubloy",
      position:"(COO)"
    },
    {
      avatar: aohm,
      user: ohm,
      name:"Kasarn Wichitrnithed",
      position:"(Business Development)"
    },
    {
      avatar: athom,
      user: thom,
      name:"Anusorn Tansun",
      position:'(Software Development Supervisor)'
    },
    {
      avatar: aa,
      user: a,
      name:"Nattapong Prachan",
      position:"(Lead Unity Developer)"
    },
    {
      avatar: amo,
      user: mo,
      name:"Patchara Tarakit",
      position:"(Game Designer)"
    },
    {
      avatar: agie,
      user:   gie,
      name:"Ronnakorn Yodjit",
      position:'(Technical artist)'
    },
    
    {
      avatar: afee,
      user: fee,
      name:"Nattapol Yodjit",
      position:'(Techart / Level Design)'

    }
  
    
   
    
    
    
  ]

  const [selectedImg, setSelectedImg] = useState<Array<number>>([])
  const [teamInfo,setTeamInfo]=useState({img:teamInfoImage,name:"",position:"",description:""})

  const teamClass: string =
    "sm:w-174 w-59 border border-4 border-white rounded-12 hover:border-seletiveyellow";

  const responsive = {
    xtablet: {
      breakpoint: { max: 724, min: 0 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };

  return (
    <div className=" md:mx-auto msm:mx-auto msm:mt-80p w-[96%] md:h-550">
      <p className="sm:text-64 text-22 text-texasRose text-seletiveyellow font-bold font-Hanno text-center sm:text-left pb-10">
        TEAM
      </p>
      <div className="flex justify-center mobile-flex-wrap">
        <div className="mobile-hidden grid grid-cols-4 mr-10 md:h-372 msm:h-60 ">
          {
             
            imgList.map((item, index) => (
              
              <div>
              <img
                src={selectedImg.includes(index) ? item.user : item.avatar}
                key={item.avatar}
                alt=""
                className={`${teamClass} cursor-pointer`}
                onMouseOver={() => {setSelectedImg(selectedImg.includes(index) ? selectedImg : [...selectedImg, index]);setTeamInfo({...teamInfo,img:item.user,name:item.name,position:item.position});}}
                onMouseOut={() =>{setSelectedImg(selectedImg.includes(index) ? selectedImg.filter((cell) => cell !== index) : selectedImg);setTeamInfo({...teamInfo,img:teamInfoImage,name:"",position:""})}}
              />
              <p className="w-100 text-center font-Rajdhani sm:text-14 text-14">{item.name}</p>
              <p className="w-100 text-center font-Rajdhani sm:text-12 text-12">{item.position}</p>
             </div>
            ))
          }
        </div>
        <div className="w-100 mb-5 mobile-d-block team-carousel">
          <Carousel responsive={responsive} infinite autoPlay>
            {imgList.map((item, index) => (
              <>
              <img
                src={selectedImg.includes(index) ? item.user : item.avatar}
                key={item.avatar}
                alt=""
                className="w-full border border-4 border-white rounded-12 hover:border-seletiveyellow"
                onClick={() => {setSelectedImg(selectedImg.includes(index) ? selectedImg.filter((cell) => cell !== index) : [...selectedImg, index]);setTeamInfo({...teamInfo,img:item.user,name:item.name,position:item.position})}}
              />
              <p className="w-100 text-center font-Rajdhani sm:text-14 text-14">{item.name}</p>
              <p className="w-100 text-center font-Rajdhani sm:text-12 text-12">{item.position}</p>
              </>
            ))}
          </Carousel>
        </div>
        <div className="sm:w-372 w-full team-main-logo">
          <img src={teamInfo.img} className="sm:w-372 md:h-372 rounded-lg" />
          <p className="sm:text-25 sm:leading-25 text-12 leading-15 tracking-15p text-davygrey font-medium font-Rajdhani pt-2 sm:pt-0">
            {teamInfo.name ? teamInfo.name :""}
          </p>
          <p className="sm:text-18 sm:leading-18 text-12 leading-15 tracking-15p text-davygrey font-medium font-Rajdhani pt-2 sm:pt-0">
            {teamInfo.position ? teamInfo.position :""}
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default TeamDiv;
