import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Button, FlexboxGrid, Panel } from "rsuite";
import {
  CircleContainer,
  LeftImage,
  RightImage,
} from "../../containers/Home/Styles";
import Featured from "../Featured";
import Loading from "../Loading";
import { UL } from "./Styles";
import Dashboard from "../../img/dashboard.png";
import Stats from "../../img/stats.png";
import ProfileDashboard from "../../img/profiledashboard.png";
import StatMeLogo from "../../img/StatMeLogo.svg";

const Landing = () => {
  const { featured, loading, setError } = useOutletContext();
  const nav = useNavigate();
  const [pause, setPause] = useState(false);

  return (
    <>
      {" "}
      {loading && <Loading size={"30px"} />}
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
              return (
                <Featured
                  pause={pause}
                  setPause={setPause}
                  featured={featured}
                />
              );
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
        <div style={{ flex: "1", display: "flex", paddingRight: 60 }}>
          <RightImage src={Dashboard} />
          <RightImage src={Stats} inverted />
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
        <div style={{ flex: "1", display: "flex" }}>
          {/* <LeftImage src="img/customCards.png" />
          <LeftImage src="img/customCards.png" /> */}
          <LeftImage src={ProfileDashboard} />
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
        >
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item>
              <Button
                onClick={() => {
                  nav("../signIn");
                }}
              >
                Sign Up
              </Button>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Panel>
        <div style={{ flex: "1" }}>
          {/* <InfoPanel>
            <h3>Add and remove teams From Your League</h3>
          </InfoPanel> */}
          {/* <InfoPanel />
          <InfoPanel />
          <InfoPanel /> */}
          <img
            style={{ marginLeft: 30 }}
            src={StatMeLogo}
            width={400}
            alt={"statme logo"}
          />
        </div>
      </div>
    </>
  );
};

export default Landing;
