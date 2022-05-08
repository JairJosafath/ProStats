import { Sidenav, Nav, Dropdown } from "rsuite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Nav.Item from "../Nav.Item";
import { Body, Header } from "../PSideNavCustom/Styles";

const panelStyles = {
  padding: "15px 20px",
  color: "#aaa",
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: "gray",
  color: " #fff",
};

const SideNavCustom = ({
  leagueID,
  league,
  tournament,
  setTournament,
  fixturesByTournamentAndRound,
}) => {
  const [activeKey, setActiveKey] = useState();
  const [showNav, setShowNav] = useState("default");
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    console.log(activeKey);
  }, [activeKey]);
  useEffect(() => {
    console.log(showNav);
    if (showNav === "show") {
      setShowNav("default");
      setDrop(false);
    }
  }, [showNav]);

  // useEffect(() => {
  //   setTournament(
  //     league?.tournaments?.items.filter((tour) => tour.id === tournament.id)[0]
  //   );
  //   console.log("does tis even help?");
  // }, [fixturesByTournamentAndRound]);
  return (
    <div
      style={{
        flex: 1,
        minWidth: 100,
        height: "90vh",
        background: "var(--primary-black)",
      }}
    >
      <Sidenav
        // defaultOpenKeys={["3", "4"]}
        appearance={"subtle"}
      >
        <Header>
          <Sidenav.Header>
            <div>
              {league?.name}
              <Dropdown
                open={drop}
                title={tournament ? tournament.name : "choose tournament"}
                style={{ zIndex: 20 }}
                onClick={() => {
                  console.log("clicked");
                  setDrop(true);
                  setShowNav(showNav === "default" ? "hide" : "show");
                }}
              >
                {tournament &&
                  league?.tournaments?.items.map((tournament1) => (
                    <Dropdown.Item
                      className={
                        tournament?.name === tournament1?.tournament?.name
                          ? "selected item"
                          : "item"
                      }
                      onClick={() => {
                        console.log("item clicked");
                        setShowNav("show");
                        setTournament(tournament1);
                      }}
                    >
                      {tournament1?.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown>
            </div>
          </Sidenav.Header>
        </Header>
        {showNav !== "hide" && (
          <Body>
            <Sidenav.Body>
              <Nav activeKey={activeKey} onSelect={setActiveKey}>
                <Link style={{ textDecoration: "none" }} to={`dashboard`}>
                  {" "}
                  <Nav.Item
                    as="div"
                    eventKey="dashboard"
                    className={
                      activeKey === "dashboard" ? "item selected" : "item"
                    }
                  >
                    Dashboard
                  </Nav.Item>{" "}
                </Link>
                <Nav.Item panel style={panelStyles}></Nav.Item>
                <Link style={{ textDecoration: "none" }} to={`teamstats`}>
                  {" "}
                  <Nav.Item
                    as="div"
                    eventKey="teamstats"
                    className={
                      activeKey === "teamstats" ? "item selected" : "item"
                    }
                  >
                    {" "}
                    Team Stats
                  </Nav.Item>
                </Link>
                <Link style={{ textDecoration: "none" }} to="playerstats">
                  {" "}
                  <Nav.Item
                    as="div"
                    eventKey="playerstats"
                    className={
                      activeKey === "playerstats" ? "item selected" : "item"
                    }
                  >
                    Player Stats
                  </Nav.Item>{" "}
                </Link>
                <Link style={{ textDecoration: "none" }} to="tournaments">
                  {" "}
                  <Nav.Item
                    as="div"
                    eventKey="tournaments"
                    className={
                      activeKey === "tournaments" ? "item selected" : "item"
                    }
                  >
                    Tournaments
                  </Nav.Item>{" "}
                </Link>
                <Link style={{ textDecoration: "none" }} to="teams">
                  {" "}
                  <Nav.Item
                    as="div"
                    eventKey="teams"
                    className={activeKey === "teams" ? "item selected" : "item"}
                  >
                    Teams
                  </Nav.Item>{" "}
                </Link>
                {/* <Link style={{ textDecoration: "none" }} to="roles">
                  {" "}
                  <Nav.Item
                    as="div"
                    eventKey="roles"
                    className={activeKey === "roles" ? "item selected" : "item"}
                  >
                    Roles
                  </Nav.Item>{" "}
                </Link> */}

                <Nav.Item panel style={panelStyles}></Nav.Item>
                {/* <Link style={{ textDecoration: "none" }} to="news">
                  {" "}
                  <Nav.Item
                    as="div"
                    eventKey="news"
                    className={activeKey === "news" ? "item selected" : "item"}
                  >
                    News
                  </Nav.Item>{" "}
                </Link> */}
              </Nav>
            </Sidenav.Body>
          </Body>
        )}
      </Sidenav>
    </div>
  );
};

export default SideNavCustom;

/*
    <Dropdown eventKey="3" title="Advanced">
              <Dropdown.Item divider />
              <Dropdown.Item panel style={panelStyles}>
                Reports
              </Dropdown.Item>
              <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
              <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
              <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
              <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
              <Dropdown.Item divider />
              <Dropdown.Item panel style={panelStyles}>
                Settings
              </Dropdown.Item>
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              <Dropdown.Menu eventKey="4-5" title="Custom Action">
                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

*/
