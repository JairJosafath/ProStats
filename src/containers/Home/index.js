import { color } from "@mui/system";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Animation, Panel } from "rsuite";
import banner from "../../img/banner.png";
import image from "../../img/banner2.png";

import {
  Banner,
  CircleContainer,
  InfoPanel,
  LeftImage,
  RightImage,
} from "./Styles";
const Home = () => {
  // const [show, setShow] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => setShow(!show), 3000);
  // });

  return (
    <>
      <Banner src={image}>
        <div>
          <h2>
            StatMe is a robust way to manage leagues effectively and easy!
          </h2>{" "}
          <p>
            <ul>
              <li>One League, Many different competitions!</li>
              <li>Auto fixture creation</li>
              <li>Auto table updates</li>
              <li>Player performance rating alghoritms</li>
              <li>And many ways to make your League Fun and Competitive</li>
            </ul>
            Let us worry about the boring stuff, so YOU have fun!
          </p>
        </div>
      </Banner>

      <div style={{ background: "rgb(20,20,80)", height: 50 }}>
        Navbar to about or to view all leagues and Contact
      </div>
      <Outlet />
    </>
  );
};

export default Home;
