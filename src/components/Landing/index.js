import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Panel } from "rsuite";
import {
  CircleContainer,
  LeftImage,
  RightImage,
} from "../../containers/Home/Styles";
import Featured from "../Featured";

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
          header={"Automated Standings!"}
        ></Panel>{" "}
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
          header={"Custom Player Cards!"}
        ></Panel>
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
          header={"More Control over your league!"}
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
      <div style={{ display: "flex", height: 60 }}> Footer</div>
    </>
  );
};

export default Landing;
