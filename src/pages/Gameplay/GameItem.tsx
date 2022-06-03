import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { GameItemProps } from "../../core/interfaces/pages";
import StatusIcon from "../../components/statusIcon";

const GameItem = (props: any) => {
  const item: GameItemProps = props.item;
  const index: number = props.index;
  return (
    <div
      className="w-[30%]  md:w-170 md:h-240 msm:2-100p rounded-t-10 rounded-b-30 shadow-primary shadow-cloudygrey/10 hover:shadow-cloudygrey m-11 font-Rajdhani text-cloudygrey"
      key={index}
    >
      <img src={item.img} className="w-full  md:w-170 md:h-170 rounded-t-10" />
      {/* msm:w-100p msm:h-100p */}
      <div className="m-6p">
        <p className="text-8 md:text-14 uppercase md:leading-16 leading-10 tracking-3p">
          mini game grando
        </p>
        <p className="text-8 md:text-14 uppercase md:leading-16 tracking-3p">
          {item.title}
        </p>
        <div className="flex text-texasRose md:mx-28 justify-center sm:text-10 text-8 my-5p">
          <span className="flex sm:mr-8p mr-4">
            <StatusIcon icon={faHeart} size="15" type="enable"></StatusIcon>{" "}
            {item.loverate}%{" "}
          </span>
          <span className="flex">
            <StatusIcon icon={faPlay} size="15" type="enable"></StatusIcon>{" "}
            {item.playrate}k{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
