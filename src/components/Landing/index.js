import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Panel } from "rsuite";
import {
  CircleContainer,
  LeftImage,
  RightImage,
} from "../../containers/Home/Styles";
import Featured from "../Featured";
import { UL } from "./Styles";

const Landing = () => {
  const [arr, setArr] = useState([
    "red",
    "orange",
    "blue",
    "white",
    "black",
    "brown",
  ]);

  const { featured } = useOutletContext();
  return (
    <>
      <div>
        <div
          style={{
            zIndex: 100,
            background: "var(--primary-blue-dark)",
            paddingLeft: 10,
          }}
        >
          {/* <h5 style={{ padding: 5 }}>Featured Leagues and Teams</h5> */}
        </div>
        <div
          style={{
            overflowX: "hidden",
            overflowY: "hidden",
            display: "flex",
            background: "var(--primary-blue-dark)",
            height: "90px",
            padding: 10,
            maxWidth: "100vw",
          }}
        >
          {/* 5 leagues and 5 teams scrolling horizontally */}

          {featured &&
            featured?.map((featured, index) => {
              return <Featured featured={featured} />;
            })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          height: 400,
          background:
            "linear-gradient(var(--primary-blue-dark),var(--primary-blue))",
        }}
      >
        <Panel
          shaded
          style={{ flex: "1", margin: "60px" }}
          header={<h3>Automated Fixtures and Standings</h3>}
        >
          <UL>
            <li>generate all of your fixtures with a click of a button</li>
            <li>
              standings update automatically when the fixtures are completed
            </li>
            <li>input stats in an easy way</li>
          </UL>
        </Panel>{" "}
        <div style={{ flex: "1" }}>
          <RightImage src={"img/autoStandings.png"} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          height: 400,
          background:
            "linear-gradient(var(--primary-blue),var(--primary-blue-light))",
        }}
      >
        <div style={{ flex: "1" }}>
          <LeftImage src="img/customCards.png" />
          <LeftImage src="img/customCards.png" />
          <LeftImage src="img/customCards.png" />
        </div>
        <Panel
          shaded
          style={{ flex: "1", margin: "60px" }}
          header={<h3>Customize your teams and leagues to your needs</h3>}
        >
          <UL>
            <li>
              StatMe offers the ability for you to be in different teams and/or
              leagues
            </li>
            <li>
              From fun small leagues to very Competitive big leagues, You can do
              it all
            </li>
            <li>Customize your presentation of top performers and top teams</li>
          </UL>
        </Panel>
      </div>
      <div
        style={{
          display: "flex",
          height: 400,
          background:
            "linear-gradient(var(--primary-blue-light),var(--primary-blue-very-light))",
        }}
      >
        <Panel
          shaded
          style={{ flex: "1", margin: "60px" }}
          header={<h3>Sign Up and Get Started!</h3>}
        ></Panel>
        <div style={{ flex: "1" }}>
          {/* <InfoPanel>
            <h3>Add and remove teams From Your League</h3>
          </InfoPanel> */}
          {/* <InfoPanel />
          <InfoPanel />
          <InfoPanel /> */}
        </div>
      </div>
    </>
  );
};

export default Landing;
