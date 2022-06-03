import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { socialIcons } from "../../core/data/soliallink2";
import {
  secondPostSocialClass,
  whiteBtnClass,
} from "../../core/style/homepage";

const Footer = () => {

  const [path, setPath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setPath(location.pathname);
    console.log('/path', path);
  }, [location]);

  if (path !== '/')
  
   {
    return <></>
  }

  return (
    <div className="bg-footerImg w-full h-500 min-h-500 bg-repeat-round mobile__footer">
      <div></div>
      <div className="msm:mx-20p md:mx-110">
        <div className="grid md:grid-cols-2 md:gap-240 text-white">
          <div className="md:mt-200 msm:mt-150">
            <p className="font-Rajdhani sm:text-35 text-18 font-bold sm:leading-45 leading-35 tracking-5 uppercase">
              contact us
            </p>
            <p className="font-Rajdhani sm:text-18 text-14  sm:leading-24 leading-14  tracking-2">
              You’ll find us at all hours on Discoard and also reach us through
              the usual channels.
            </p>
            <div className="md:my-50p msm:my-10p d-flex">
              {socialIcons.map((item, index) => {
                return (
                  <a key={index} href={item.url} target="_blank" className={secondPostSocialClass}>
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
        <div className="flex  items-center min-h-50">
          <p className="font-Rajdhani sm:text-12 text-10 font-medium text-white sm:text-left text-center mt-auto sm:mt-0">
            Copyright © 2022 Grandona. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
