import { Link } from "react-router-dom";
import { FlexboxGrid } from "rsuite";
import { Navitem } from "./Styles";
import { GiSoccerBall } from "react-icons/gi";
import { Icon } from "@rsuite/icons";
import { useState } from "react";
import { FcAbout } from "react-icons/fc";
import { MdHome } from "react-icons/md";

// const LeagueBall = ({ hover }) => <GiSoccerBall size={hover ? "2.2em" : "1.5"} />;

const HomeNav = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div style={{ background: "var(--primary-black-light)", height: 50 }}>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item colspan={5}>
            <Link
              to={"/"}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHover("home")}
              onMouseLeave={() => setHover(false)}
            >
              <Navitem>
                Home
                <Icon
                  className="icon"
                  size={hover === "home" ? "2.2em" : "1.5em"}
                  as={MdHome}
                />
              </Navitem>
            </Link>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={5}>
            <Link
              to={"leagues/showLeagues"}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHover("leagues")}
              onMouseLeave={() => setHover(false)}
            >
              <Navitem>
                Leagues
                <Icon
                  className="icon"
                  spin={hover === "leagues"}
                  size={hover === "leagues" ? "2.2em" : "1.5em"}
                  rotate={100}
                  as={GiSoccerBall}
                />
              </Navitem>
            </Link>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={5}>
            <Link
              to={"about"}
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHover("about")}
              onMouseLeave={() => setHover(false)}
            >
              <Navitem>
                About
                <Icon
                  className="icon"
                  size={hover === "about" ? "2.2em" : "1.5em"}
                  as={FcAbout}
                />
              </Navitem>
            </Link>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </div>
    </>
  );
};
export default HomeNav;
