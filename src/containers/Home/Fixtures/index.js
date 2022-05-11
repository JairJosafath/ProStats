import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Dropdown, List, Pagination, Panel } from "rsuite";
import PublicFixture from "../../../components/PublicFixture";

const HFixtures = () => {
  const { id } = useParams();
  const {
    league,
    setGetLeague,
    setGetFixturesByTournamentandRound,
    fixturesByTournamentAndRound,
  } = useOutletContext();
  const [tournament, setTournament] = useState(false);
  const [activePage, setActivePage] = useState(1); //pagination

  useEffect(() => {
    setGetLeague(id);

    // console.log(league, "the league");
  }, [id]);
  useEffect(() => {
    if (tournament)
      setGetFixturesByTournamentandRound({
        tournamentID: tournament?.id,
        condition: { eq: activePage },
      });
  }, [activePage, tournament]);
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
          <List>
            {tournament &&
              fixturesByTournamentAndRound?.items?.map((fixture) => {
                return <PublicFixture fixture={fixture} />;
              })}
          </List>
          {tournament && (
            <Pagination
              style={{
                background: "var(--primary-black)",
                padding: 5,
                margin: 5,
                borderRadius: "2em",
              }}
              total={
                tournament?.team?.items.length *
                (tournament?.team?.items.length - 1)
              }
              limit={Math.floor(tournament?.team?.items?.length / 2)}
              activePage={activePage}
              onChangePage={setActivePage}
            />
          )}
        </Panel>
      </div>
    </>
  );
};
export default HFixtures;
