import { color } from "@mui/system";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Animation, Panel } from "rsuite";
import HomeNav from "../../components/HomeNav";
import useHome from "../../hooks/useHome";
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

  const {
    featured,
    leagues,
    league,
    setGetLeague,
    setGetFixturesByTournamentandRound,
    fixturesByTournamentAndRound,
  } = useHome();

  // useEffect(() => console.log("is it coming tru?", featured), [featured]);
  return (
    <>
      <Banner src={image}>
        <div>
          <h2>
            StatMe is a robust way to manage E-leagues effectively and easy!
          </h2>{" "}
          <p>
            <ul>
              <li>One League, Many different competitions!</li>
              <li>Auto fixture creation</li>
              <li>Auto table updates</li>
              <li>Player performance rating alghoritms</li>
              <li>And many ways to make your League Fun and Competitive</li>
            </ul>
            Let us worry about the boring stuff, league, setGetLeague, so YOU
            have fun!
          </p>
        </div>
      </Banner>
      <HomeNav />
      <Outlet
        context={{
          featured,
          leagues,
          league,
          setGetLeague,
          setGetFixturesByTournamentandRound,
          fixturesByTournamentAndRound,
        }}
      />
      <div style={{ height: "60px", background: "var(--primary-black)" }}>
        Footer
      </div>
    </>
  );
};

export default Home;
