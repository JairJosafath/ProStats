import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiSettings } from "../../API/API";
import fallback from "./fallback.png";
import { LogoCard } from "./Styles";
import { Icon } from "@rsuite/icons";
import { GiRank1, GiRank2 } from "react-icons/gi";

const LeagueCard = ({ league }) => {
  const [image, setImage] = useState();
  const [size, setSize] = useState("25px");

  useEffect(() => {
    // console.log(fixture.homeTeam, "logo");
    const setLogo = async () => {
      const data = await apiSettings.getImage(league.logo);
      if (data) {
        setImage(data);
      }
    };
    setLogo();
  }, [league]);
  return (
    <LogoCard>
      <Link
        to={`../standings/${league?.id}`}
        style={{ textDecoration: "none", display: "flex", color: "#fff" }}
      >
        <div style={{ flex: 1.5 }}>
          <h5>{league?.name}</h5>
          <img src={image ? image : "fallback.png"} alt={"logo"} />
        </div>
        <div style={{ paddingLeft: 3, flex: 1 }}>
          <p>Moderators:{league?.moderatornames}</p>
          <p>Members: 1,980</p>
          <p>CLubs: 300</p>
          <p>Tournaments: 80</p>
        </div>
      </Link>
      {/* <Icon
        id="verified"
        as={false ? GiRank1 : GiRank2}
        color="#CD7F32"
        size={"2em"}
      /> */}
    </LogoCard>
  );
};

export default LeagueCard;
