import { FlexboxGrid } from "rsuite";
import ListItemCustom from "../ListCustom";
// import { MdVerified, MdPendingActions } from "react-icons/md";
import { useEffect, useState } from "react";
import { apiSettings } from "../../API/API";
import fallback from "../../img/dummy.jpg";

import { Icon } from "@rsuite/icons";
const Fixture = ({ fixture }) => {
  const [homeLogo, setHomeLogo] = useState();
  const [awayLogo, setAwayLogo] = useState();

  useEffect(() => {
    // console.log(fixture.homeTeam, "logo");
    const setLogo = async () => {
      const dataHome = await apiSettings.getImage(fixture?.homeTeam.logo);
      setHomeLogo(dataHome);
      //   console.log(data);
      const dataAway = await apiSettings.getImage(fixture?.awayTeam.logo);
      setAwayLogo(dataAway);
    };
    setLogo();
  }, [fixture]);
  return (
    <>
      <ListItemCustom disableHover>
        <FlexboxGrid justify={"space-between"}>
          <FlexboxGrid.Item colspan={22}>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={1}>
                <img
                  onError={() => setHomeLogo(fallback)}
                  alt="club logo"
                  src={homeLogo ? homeLogo : fallback}
                  style={{ maxHeight: "2em" }}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={7}>
                <FlexboxGrid justify="center">
                  <FlexboxGrid.Item colspan={20}>
                    {fixture?.homeTeam.name}
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={3}>
                <FlexboxGrid justify="center">
                  <FlexboxGrid.Item>
                    {fixture?.status === "pending" && "-"}
                    {fixture?.status === "verified" && fixture?.homeScore}
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={1}>VS</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={3}>
                <FlexboxGrid justify="center">
                  <FlexboxGrid.Item>
                    {fixture?.status === "pending" && "-"}
                    {fixture?.status === "verified" && fixture?.awayScore}
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={7}>
                <FlexboxGrid justify="center">
                  <FlexboxGrid.Item colspan={20}>
                    {fixture?.awayTeam.name}
                  </FlexboxGrid.Item>
                </FlexboxGrid>
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={1}>
                <img
                  onError={() => setAwayLogo(fallback)}
                  alt="club logo"
                  src={awayLogo ? awayLogo : fallback}
                  style={{ maxHeight: "2em" }}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </ListItemCustom>
    </>
  );
};
export default Fixture;
