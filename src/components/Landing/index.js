import { useState } from "react";
import { Panel } from "rsuite";
import {
  CircleContainer,
  LeftImage,
  RightImage,
} from "../../containers/Home/Styles";

const Landing = () => {
  const [arr, setArr] = useState([
    "red",
    "orange",
    "blue",
    "white",
    "black",
    "brown",
  ]);
  return (
    <>
      <div>
        <div
          style={{ zIndex: 100, background: "rgb(120,20,80)", paddingLeft: 10 }}
        >
          <h5>Featured Leagues</h5>
        </div>
        <div
          style={{
            overflowX: "hidden",
            display: "flex",
            background: "rgb(120,20,80)",
            height: 70,
            padding: 10,
            maxWidth: "100vw",
          }}
        >
          {/* 5 leagues and 5 teams scrolling horizontally */}

          {arr.map((color, index) => {
            return (
              <CircleContainer
                color={color}

                // onMouseEnter={() => setDuration("100s")}
                // onMouseLeave={() => setDuration("60s")}
              />
            );
          })}
        </div>
      </div>

      <div style={{ display: "flex", height: 400 }}>
        <Panel
          shaded
          style={{ flex: "1", margin: "60px" }}
          header={"Automated Standings!"}
        ></Panel>{" "}
        <div style={{ flex: "1" }}>
          <RightImage src={"img/autoStandings.png"} />
        </div>
      </div>
      <div style={{ display: "flex", height: 400 }}>
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
      <div style={{ display: "flex", height: 400 }}>
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
