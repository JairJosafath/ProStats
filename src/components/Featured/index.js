import { useEffect, useState } from "react";
import { apiSettings } from "../../API/API";
import { CircleContainer } from "./Styles";
import fallback from "./fallback.png";

const Featured = ({ featured }) => {
  console.log(featured);
  const [image, setImage] = useState(fallback);
  const [size, setSize] = useState("25px");

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
      <CircleContainer
        size={size}
        // color={"green"}
        src={image ? image : fallback}
        onMouseEnter={() => setSize("65px")}
        onMouseLeave={() => setSize("50px")}
      />
    </>
  );
};
export default Featured;
