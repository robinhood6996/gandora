import Landing from "./landing";
import Platform from "./platform";
import CentralHub from "./centralhub";
import Roadmaps from "./roadmaps/roadmaps";
import NewsSlide from "./news/newsslide";
import TrendSlide from "./trending/trendSlide";
import TeamDiv from "./team";

import tokenSalesImage from "../../assets/images/tokensales.png";
import { useEffect } from "react";
const Home = () => {
  return (
    <div id="">
      <Landing />
      <Platform />
      <CentralHub />
      
      
      <TeamDiv />
    </div>
  );
};

export default Home;
