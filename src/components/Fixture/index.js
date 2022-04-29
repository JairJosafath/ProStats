import { FlexboxGrid } from "rsuite";
import ListItemCustom from "../ListCustom";
import { MdVerified, MdPendingActions } from "react-icons/md";
import { useEffect, useState } from "react";
import { apiSettings } from "../../API/API";
import { Icon } from "@rsuite/icons";
const Fixture = ({
  currentFixture,
  fixture,
  setShowStats,
  setTypeDataTeamState,
  typeDataTeam,
  setCurrentFixture,
}) => {
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
      <ListItemCustom
        onClick={() => {
          setShowStats(false);
          setTimeout(() => {
            setShowStats(true);
            setTypeDataTeamState(typeDataTeam[0]);
          }, 500);

          setCurrentFixture(fixture);
        }}
      >
        <FlexboxGrid justify="space-between">
          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={4}>
                <img
                  alt="club logo"
                  src={homeLogo ? homeLogo : "dummy.jpg"}
                  style={{ maxHeight: "2em" }}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={10}>
                {fixture?.homeTeam.name}
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item colspan={3}>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item>{fixture?.homeScore}</FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item>VS</FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={3}>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item>{fixture?.awayScore}</FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid.Item>

          <FlexboxGrid.Item colspan={6}>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={10}>
                {fixture?.awayTeam.name}
              </FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                <img
                  alt="club logo"
                  src={awayLogo ? awayLogo : "dummy.jpg"}
                  style={{ maxHeight: "2em" }}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={2}>
            {fixture?.status === "pending" && (
              <Icon as={MdPendingActions} size="1.5em" fill="yellow" />
            )}
            {fixture?.status === "verified" && (
              <Icon as={MdVerified} size="1.5em" fill="green" />
            )}
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </ListItemCustom>
    </>
  );
};
export default Fixture;
