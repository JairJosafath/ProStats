import { useEffect, useState } from "react";
import { apiSettings } from "../../API/API";
import { CircleContainer } from "./Styles";
import fallback from "../../img/dummy.jpg";
import { useNavigate } from "react-router-dom";

const Featured = ({ featured, pause, setPause }) => {
  console.log(featured);
  const [image, setImage] = useState();
  const nav = useNavigate();

  useEffect(() => {
    // console.log(fixture.homeTeam, "logo");
    const setLogo = async () => {
      const data = await apiSettings
        .getImage(featured.logo)
        .catch((err) => console.log("catch it pls", err));
      if (data) {
        setImage(data);
      }
      console.log(data, "data");
    };
    setLogo();
  }, [featured]);
  return (
    <>
      <CircleContainer pause={pause}>
        <img
          onError={() => setImage(fallback)}
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
