import { Sidenav, Nav, Dropdown } from "rsuite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItemCustom from "../NavItemCustom";

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
        width: 240,
        height: "90vh",
        background: "var(--primary-statMe-sidenav)",
      }}
    >
      <Sidenav
        // defaultOpenKeys={["3", "4"]}
        appearance={"subtle"}
        style={{ background: "var(--primary-statMe-sidenav)" }}
      >
        <Sidenav.Header>
          <div style={headerStyles}>
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
                    style={{
                      background:
                        tournament.name === tournament1.name ? "blue" : "",
                    }}
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
        {showNav !== "hide" && (
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Link style={{ textDecoration: "none" }} to={`dashboard`}>
                {" "}
                <NavItemCustom
                  as="div"
                  eventKey="dashboard"
                  isSelected={activeKey === "dashboard" ? true : false}
                >
                  <p style={{ padding: "20px 50px 20px 50px" }}>Dashboard</p>
                </NavItemCustom>{" "}
              </Link>
              <Nav.Item panel style={panelStyles}>
                Manage
              </Nav.Item>
              <Link style={{ textDecoration: "none" }} to={`teamstats`}>
                {" "}
                <NavItemCustom
                  as="div"
                  eventKey="teamstats"
                  isSelected={activeKey === "teamstats" ? true : false}
                >
                  <p style={{ padding: "20px 50px 20px 50px" }}> Team Stats</p>
                </NavItemCustom>
              </Link>
              <Link style={{ textDecoration: "none" }} to="playerstats">
                {" "}
                <NavItemCustom
                  as="div"
                  eventKey="playerstats"
                  isSelected={activeKey === "playerstats" ? true : false}
                >
                  <p style={{ padding: "20px 50px 20px 50px" }}>Player Stats</p>
                </NavItemCustom>{" "}
              </Link>
              <Link style={{ textDecoration: "none" }} to="tournaments">
                {" "}
                <NavItemCustom
                  as="div"
                  eventKey="tournaments"
                  isSelected={activeKey === "tournaments" ? true : false}
                >
                  <p style={{ padding: "20px 50px 20px 50px" }}>Tournaments</p>
                </NavItemCustom>{" "}
              </Link>
              <Link style={{ textDecoration: "none" }} to="teams">
                {" "}
                <NavItemCustom
                  as="div"
                  eventKey="teams"
                  isSelected={activeKey === "teams" ? true : false}
                >
                  <p style={{ padding: "20px 50px 20px 50px" }}>Teams</p>
                </NavItemCustom>{" "}
              </Link>
              <Link style={{ textDecoration: "none" }} to="roles">
                {" "}
                <NavItemCustom
                  as="div"
                  eventKey="roles"
                  isSelected={activeKey === "roles" ? true : false}
                >
                  <p style={{ padding: "20px 50px 20px 50px" }}> Roles</p>
                </NavItemCustom>{" "}
              </Link>

              <Nav.Item panel style={panelStyles}>
                Post
              </Nav.Item>
              <Link style={{ textDecoration: "none" }} to="news">
                {" "}
                <NavItemCustom
                  as="div"
                  eventKey="news"
                  isSelected={activeKey === "news" ? true : false}
                >
                  <p style={{ padding: "20px 50px 20px 50px" }}> News</p>
                </NavItemCustom>{" "}
              </Link>
            </Nav>
          </Sidenav.Body>
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
