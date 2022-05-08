import { useEffect, useState } from "react";
import { apiSettings } from "../../API/API";
import { CircleContainer } from "./Styles";
import fallback from "./fallback.png";
import { useNavigate } from "react-router-dom";

const Featured = ({ featured, pause, setPause }) => {
  console.log(featured);
  const [image, setImage] = useState(fallback);
  const nav = useNavigate();

  useEffect(() => {
    // console.log(fixture.homeTeam, "logo");
    const setLogo = async () => {
      const data = await apiSettings.getImage(featured.logo);
      if (data) {
        setImage(data);
      }
    };
    setLogo();
  }, [featured]);
  return (
    <>
      <CircleContainer pause={pause}>
        <img
          className="cont"
          onClick={() => nav(`leagues/standings/${featured?.id}`)}
          src={image ? image : fallback}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          alt="logos of leagues"
        />
      </CircleContainer>
    </>
  );
};
export default Featured;
