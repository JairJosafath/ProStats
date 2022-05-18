import { List } from "@mui/material";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Dropdown, Panel } from "rsuite";
import NewsCard from "../../../components/NewsCard";
import NewsCardPublic from "../../../components/NewsCardPublic";

const Community = () => {
  const { id } = useParams();
  const [tournament, setTournament] = useState(false);
  const {
    league,
    setGetLeague,
    setGetFixturesByTournamentandRound,
    fixturesByTournamentAndRound,
  } = useOutletContext();
  useEffect(() => {
    console.log("list", tournament);
  }, [tournament]);
  return (
    <>
      {/* <h4 style={{ margin: 100 }}>
          Discord invitation Links for Leagues and Teams, A good way to gain
          members!
        </h4> */}
      <Panel
        style={{
          flex: "7",
          margin: 10,
          background: "var(--primary-blue)",
        }}
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
          {tournament?.news?.items.map((news) => (
            <li>
              <NewsCardPublic news={news} />
            </li>
          ))}
        </List>
      </Panel>
    </>
  );
};
export default Community;
