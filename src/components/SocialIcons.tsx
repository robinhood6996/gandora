import { socialIcons } from "../core/data/soliallink2";

const SocialIcons = (props: any) => {
  return (
    <div className="d-flex">
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            className={
              socialIcons[index] != socialIcons[socialIcons.length - 1]
                ? "mr-[16px]"
                : ""
            }
            href={"#"}
          >
            <img
              src={item.icon}
              className={`w-20 h-20 sm:w-25 sm:h-25 ${props.type}`}
            />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
