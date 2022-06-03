import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const Road = (props: any) => {
  const data = props.data;
  const num = props.num;
  const oStyle =
    data.active == true
      ? " text-white border-2 border-pastelGrey rounded-full bg-texasRose"
      : " text-white border-2 border-pastelGrey rounded-full bg-pastelGrey";
  return (
    <div key={num} className="flex mb-72 flex-col sm:flex-row">
      <div className="z-100">
        <FontAwesomeIcon
          icon={faDotCircle}
          className={"sm:w-30 sm:h-30 w-20 h-20 z-40" + oStyle}
        />
      </div>
      <div className=" sm:mr-50 sm:ml-10 ml-[43px] sm:mt-0 mt-[-27px]">
        <p className="sm:text-25 text-14 text-cloudygrey font-medium uppercase">
          {data.step}
        </p>
        <p className="sm:text-52 text-[22px] text-davygrey font-medium whitespace-nowrap">
          {data.date}
        </p>
      </div>
      <div className="sm:text-17 text-[14px] text-davygrey sm:ml-0 ml-40">
        {data.description.map((info: string, key: number) => {
          return <p key={key}>- {info}</p>;
        })}
      </div>
    </div>
  );
};

export default Road;
