import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Dropdown, Panel } from "rsuite";
import PlayerStandings from "../../../components/PlayerStandings";
import LeagueTable from "../../../components/Table";
import TeamStandings from "../../../components/TeamStandings";

const HStandings = () => {
  const { id } = useParams();
  const { league, setGetLeague } = useOutletContext();
  const [tournament, setTournament] = useState(false);
  useEffect(() => {
    setGetLeague(id);

    // console.log(league, "the league");
  }, [id]);
  useEffect(() => {
    // console.log(league, "the league");
    if (league) {
      setTournament(league.tournaments.items[0]);
    }
  }, [league]);

  return (
    <>
      <div
        style={{
          flex: 7,
          padding: 10,
          height: "800px",
        }}
      >
        <Panel
          style={{ margin: 10, background: "var(--primary-blue)" }}
          shaded
          header={
            <>
              <h3 style={{ position: "relative", padding: 15 }}>
                {league?.name}
              </h3>
              <Dropdown
                size={"sm"}
                title={tournament ? tournament.name : "choose Tournament"}
              >
                {league?.tournaments?.items?.map((tournament) => (
                  <Dropdown.Item onClick={() => setTournament(tournament)}>
                    {tournament.name}
                  </Dropdown.Item>
                ))}
              </Dropdown>
            </>
          }
        >
          {tournament && (
            <TeamStandings data={tournament && tournament?.table?.items} />
          )}
          {tournament && (
            <PlayerStandings
              data={tournament && tournament?.playerTable?.items}
            />
          )}
        </Panel>
      </div>
    </>
  );
};
export default HStandings;
