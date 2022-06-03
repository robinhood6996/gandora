import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTshirt,
  faPaintBrush,
  faCog,
  faHeart,
  faLock,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import StatusIcon from "../../../components/statusIcon";
import GrandoItemIcon from "../../../assets/images/svgs/grando_item.svg";
const SlideItem = (props: any) => {
  const item = props.info;
  const num = props.num;
  const showClass = {
    contain: "w-[29%] md:w-230 rounded-6 shadow-primary my-6 mx-5p",
    img: "w-100p mx-auto h-100p md:w-230 md:h-230 rounded-t-6",
    title:
      "md:text-18 text-[6px] font-semibold font-Rajdhani leading-[6px] md:leading-25 text-cloudygrey flex justify-center items-center",
    detail:
      "md:text-10 text-[6px] font-Rajdhani sm:leading-13 text-cloudygrey my-3p",
    link: "",
  };
  let rareityBtn = <button></button>;
  let rare = "";
  if (item.rareity < 100) {
    rare = "#RARE ITEM";
    rareityBtn = (
      <button className="sm:text-10 text-[5px] bg-deepacua bg-opacity-20 shadow-primary text-deepacua p-2p px-5p rounded-default p mobile__rare-btn">
        RARE ITEM
      </button>
    );
  }

  if (item.rareity <= 5) {
    rare = "SUPER RARE";
    rareityBtn = (
      <button className="sm:text-10 text-[5px] bg-deepacua shadow-primary text-white p-2p px-5p rounded-default ml-5p mobile__rare-btn">
        SUPER RARE
      </button>
    );
  }

  return (
    <div className={showClass.contain} key={num}>
      <img className={showClass.img} src={item.img} />
      <div className="p-6">
        <p className={showClass.title}>
          <img src={GrandoItemIcon} className="mr-3" />
          <span className="mr-15">
            {item.title}
            <span className="inline sm:hidden">{" " + rare}</span>
          </span>{" "}
          {item.rareity == 100 ? "" : item.rareity + "%"}
        </p>
        <div className="flex sm:my-4p flex-wrap sm:flex-nowrap justify-between items-center">
          <div className="flex">
            <StatusIcon icon={faTshirt} size="15" type="default" />
            <StatusIcon icon={faPaintBrush} size="15" type="default" />
            <StatusIcon icon={faCog} size="15" type="default" />
          </div>

          <span className="hidden sm:block">{rareityBtn}</span>
        </div>
        <p className={showClass.detail}>CREATE BY : {item.creator}</p>
        <div className="md:text-32  text-davygrey flex items-center justify-between border-y-default border-mercury">
          <div className="text-8 sm:text-20">
            <FontAwesomeIcon icon={faEthereum} className="mr-10" />
            {item.price}
          </div>
          <div className=" flex bg-white rounded-full items-center cursor-pointer ">
            <div className="flex items-center mx-2p cursor-pointer bg-white rounded-full border-friarGrey border">
              <FontAwesomeIcon
                icon={faHeart}
                className="h-5 w-5 sm:h-30 sm:w-30 text-friarGrey"
              />
            </div>
            <div className="flex items-center mx-2p cursor-pointer bg-white rounded-full border-texasRose border hover:border-darkMintGreen">
              <FontAwesomeIcon
                icon={faLock}
                className="h-5 w-5 sm:h-30 sm:w-30 text-texasRose hover:text-darkMintGreen"
              />
            </div>
          </div>
        </div>
        <div className={showClass.detail + " flex"}>
          <div className="mr-10">
            <FontAwesomeIcon icon={faEye} className="mr-2" /> : 120k
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} className="mr-2" /> : 80.1k
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
