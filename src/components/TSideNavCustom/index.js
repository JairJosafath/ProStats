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

const TSideNavCustom = ({
  team,
  tournament,
  setTournament,
  fixturesByTournamentAndRound,
}) => {
  const [activeKey, setActiveKey] = useState("dashboard");
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
        appearance="subtle"
        style={{ background: "var(--primary-statMe-sidenav)" }}
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            {team?.name}
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
                team?.tournaments?.items.map((tournament1) => (
                  <Dropdown.Item
                    style={{
                      background:
                        tournament.name === tournament1.tournament.name
                          ? "blue"
                          : "",
                    }}
                    onClick={() => {
                      console.log("item clicked");
                      setShowNav("show");
                      setTournament(tournament1.tournament);
                    }}
                  >
                    {tournament1?.tournament?.name}
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
                </NavItemCustom>
              </Link>{" "}
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
                  <p style={{ padding: "20px 50px 20px 50px" }}>Team Stats</p>
                </NavItemCustom>
              </Link>{" "}
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
              {/* <Link style={{ textDecoration: "none" }} to="leagues">
                {" "}
                <NavItemCustom as="div" eventKey="leagues">
                  <p style={{ padding: "20px 50px 20px 50px" }}>Leagues</p>
                </NavItemCustom>
              </Link>{" "} */}
              <Link
                style={{ textDecoration: "none" }}
                to="players"
                isSelected={activeKey === "players" ? true : false}
              >
                {" "}
                <NavItemCustom as="div" eventKey="players">
                  <p style={{ padding: "20px 50px 20px 50px" }}>Players</p>
                </NavItemCustom>{" "}
              </Link>
              {/* <NavItemCustom as="div" eventKey="roles">
                <Link style={{ textDecoration: "none" }} to="roles">
                  <div style={activeKey !== "roles" ? { color: "#aaa" } : {}}>
                    Roles
                  </div>
                </Link>
              </NavItemCustom>
              <NavItemCustom as="div" eventKey="requests">
                <Link style={{ textDecoration: "none" }} to="requests">
                  <div
                    style={activeKey !== "requests" ? { color: "#aaa" } : {}}
                  >
                    Requests
                  </div>
                </Link>
              </NavItemCustom> */}
              {/* <Nav.Item panel style={panelStyles}>
                Post
              </NavItemCustom>
              <NavItemCustom as="div" eventKey="news">
                <Link style={{ textDecoration: "none" }} to="news">
                  <div style={activeKey !== "news" ? { color: "#aaa" } : {}}>
                    News
                  </div>
                </Link>
              </NavItemCustom>
              <NavItemCustom as="div" eventKey="transfer">
                <Link style={{ textDecoration: "none" }} to="transfer">
                  <div
                    style={activeKey !== "transfer" ? { color: "#aaa" } : {}}
                  >
                    Transfer
                  </div>
                </Link>
              </NavItemCustom> */}
            </Nav>
          </Sidenav.Body>
        )}
      </Sidenav>
    </div>
  );
};

export default TSideNavCustom;

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
