import { Icon } from "@aws-amplify/ui-react";
import { Avatar, FlexboxGrid } from "rsuite";
import ListItemCustom from "../ListCustom";
import { MdVerified, MdPendingActions } from "react-icons/md";
import { useEffect, useState } from "react";
import { apiSettings } from "../../API/API";
import FlexItemCustom from "../FlexItemCustom";
import fallback from "../../img/dummy.jpg";

const AdvancedFixture = ({
  setCurrentFixture,
  setSelectedTEam,
  fixture,
  setShowStats,
  setShowPlayers,
  setTypeDataPlayerState,
  typeDataPlayer,
  setShowFixtures,
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
        disableHover
        onClick={() => {
          // console.log("nothing for now");
        }}
      >
        <FlexboxGrid justify="center">
          <FlexItemCustom
            colspan={8}
            onMouseEnter={() => {
              // console.log("hovering", fixture?.homeTeam.name);
              setSelectedTEam(fixture?.teamHomefixturesId);
            }}
            onClick={() => {
              setShowPlayers(true);
              setShowFixtures(false);
              setTimeout(() => {
                // setShowStats(true);
                setTypeDataPlayerState(typeDataPlayer[0]);
                setSelectedTEam(fixture?.homeTeam);
              }, 500);

              setCurrentFixture(fixture);
            }}
          >
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={4}>
                <img
                  onError={() => setHomeLogo(fallback)}
                  alt="club logo"
                  src={homeLogo ? homeLogo : fallback}
                  style={{ maxHeight: "2em" }}
                />
              </FlexboxGrid.Item>
              <FlexboxGrid.Item>{fixture?.homeTeam.name}</FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexItemCustom>

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

          <FlexItemCustom
            colspan={8}
            onMouseEnter={() => {
              // console.log("hovering", fixture?.awayTeam.name);
              setSelectedTEam(fixture?.teamAwayfixturesId);
            }}
            onClick={() => {
              setShowPlayers(true);
              setShowFixtures(false);

              setTimeout(() => {
                // setShowStats(true);
                setTypeDataPlayerState(typeDataPlayer[0]);
                setSelectedTEam(fixture?.awayTeam);
              }, 500);

              setCurrentFixture(fixture);
            }}
          >
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item>{fixture?.awayTeam.name}</FlexboxGrid.Item>
              <FlexboxGrid.Item colspan={4}>
                <img
                  onError={() => setAwayLogo(fallback)}
                  alt="club logo"
                  src={awayLogo ? awayLogo : fallback}
                  style={{ maxHeight: "2em" }}
                />
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </FlexItemCustom>
        </FlexboxGrid>
      </ListItemCustom>
    </>
  );
};

export default AdvancedFixture;
