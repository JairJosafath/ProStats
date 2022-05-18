import { useEffect, useState } from "react";
import { Link, Outlet, useOutletContext } from "react-router-dom";
import { Col, FlexboxGrid, Grid, List, Pagination, Row } from "rsuite";
import ListItemCustom from "../../components/ListCustom";
import { Nav, Navitem } from "./Styles";

const Leagues = () => {
  const {
    leagues,
    league,
    setGetLeague,
    setGetFixturesByTournamentandRound,
    fixturesByTournamentAndRound,
  } = useOutletContext();

  const [selected, setSelected] = useState();
  return (
    <>
      <Nav>
        <div style={{ width: "60%" }}>
          <FlexboxGrid justify="center">
            <FlexboxGrid.Item colspan={6}>
              <Link to="showLeagues" style={{ textDecoration: "none" }}>
                <Navitem
                  selected={selected === "leagues" ? true : false}
                  onClick={() => setSelected("leagues")}
                >
                  {" "}
                  Leagues
                </Navitem>
              </Link>{" "}
            </FlexboxGrid.Item>

            <FlexboxGrid.Item colspan={6}>
              <Link
                to={
                  league
                    ? `standings/${league?.id}`
                    : `standings/${leagues[0]?.id}`
                }
                style={{ textDecoration: "none" }}
              >
                <Navitem
                  selected={selected === "standings" ? true : false}
                  onClick={() => setSelected("standings")}
                >
                  {" "}
                  Standings
                </Navitem>
              </Link>{" "}
            </FlexboxGrid.Item>

            <FlexboxGrid.Item colspan={6}>
              <Link
                to={
                  league
                    ? `fixtures/${league?.id}`
                    : `fixtures/${leagues[0]?.id}`
                }
                style={{ textDecoration: "none" }}
              >
                <Navitem
                  selected={selected === "fixtures" ? true : false}
                  onClick={() => setSelected("fixtures")}
                >
                  {" "}
                  Fixtures
                </Navitem>
              </Link>{" "}
            </FlexboxGrid.Item>

            <FlexboxGrid.Item colspan={6}>
              <Link to="community" style={{ textDecoration: "none" }}>
                <Navitem
                  selected={selected === "community" ? true : false}
                  onClick={() => setSelected("community")}
                >
                  {" "}
                  Community
                </Navitem>
              </Link>{" "}
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </div>
      </Nav>

      <div
        style={{
          display: "flex",
          // paddingTop: 30,
          minHeight: "1000px",
          background: "var(--primary-grey-light)",
        }}
      >
        <div style={{ flex: 2, background: "" }}></div>{" "}
        <Outlet
          context={{
            leagues,
            league,
            setGetLeague,
            setGetFixturesByTournamentandRound,
            fixturesByTournamentAndRound,
          }}
        />{" "}
        <div style={{ flex: 2, background: "" }}></div>
      </div>
    </>
  );
};
export default Leagues;
