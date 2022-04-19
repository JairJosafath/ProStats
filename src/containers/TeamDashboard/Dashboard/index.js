import { FlexboxGrid, Panel } from "rsuite";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
const TDashboard = () => {
  const { team, setGetTeamRequestsDahboard, teamRequestsDashboard } =
    useOutletContext();
  useEffect(() => {
    console.log("reqs", teamRequestsDashboard);
  }, [teamRequestsDashboard]);

  useEffect(() => {
    setGetTeamRequestsDahboard(team?.id);
  }, [team]);
  return (
    <>
      <Panel
        header="request from League"
        style={{ width: 200, height: 200 }}
        shaded
      >
        {teamRequestsDashboard?.requestsfromLeague?.items?.map((request) => (
          <>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={10}>
                {request.from.name}
              </FlexboxGrid.Item>
            </FlexboxGrid>
            <FlexboxGrid>
              <FlexboxGrid.Item colspan={10}>
                {request.from.admin.name}
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </>
        ))}
      </Panel>
    </>
  );
};

export default TDashboard;
