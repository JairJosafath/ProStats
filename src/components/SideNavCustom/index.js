import { Sidenav, Nav, Dropdown } from "rsuite";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

const SideNavCustom = ({ leagueID }) => {
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
  return (
    <div style={{ width: 240, height: "90vh", background: "black" }}>
      <Sidenav
        // defaultOpenKeys={["3", "4"]}
        appearance="subtle"
        style={{ background: "black" }}
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            tournament Dropdown
            <Dropdown
              open={drop}
              title={"choose tournament"}
              style={{ zIndex: 20 }}
              onClick={() => {
                console.log("clicked");
                setDrop(true);
                setShowNav(showNav === "default" ? "hide" : "show");
              }}
            >
              <Dropdown.Item
                onClick={() => {
                  console.log("item clicked");
                  setShowNav("show");
                }}
              >
                working on it
              </Dropdown.Item>
            </Dropdown>
          </div>
        </Sidenav.Header>
        {showNav !== "hide" && (
          <Sidenav.Body>
            <Nav activeKey={activeKey} onSelect={setActiveKey}>
              <Nav.Item as="div" eventKey="dashboard">
                <Link to={`dashboard`}>
                  <div
                    style={activeKey !== "dashboard" ? { color: "#aaa" } : {}}
                  >
                    Dashboard
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item panel style={panelStyles}>
                Manage
              </Nav.Item>
              <Nav.Item as="div" eventKey="teamstats">
                <Link to={`teamstats`}>
                  <div
                    style={activeKey !== "teamstats" ? { color: "#aaa" } : {}}
                  >
                    Team Stats
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item as="div" eventKey="playerstats">
                <Link to="playerstats">
                  <div
                    style={activeKey !== "playerstats" ? { color: "#aaa" } : {}}
                  >
                    Player Stats
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item as="div" eventKey="tournaments">
                <Link to="tournaments">
                  <div
                    style={activeKey !== "tournaments" ? { color: "#aaa" } : {}}
                  >
                    Tournaments
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item as="div" eventKey="teams">
                <Link to="teams">
                  <div style={activeKey !== "teams" ? { color: "#aaa" } : {}}>
                    Teams
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item as="div" eventKey="roles">
                <Link to="roles">
                  <div style={activeKey !== "roles" ? { color: "#aaa" } : {}}>
                    Roles
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item as="div" eventKey="requests">
                <Link to="requests">
                  <div
                    style={activeKey !== "requests" ? { color: "#aaa" } : {}}
                  >
                    Requests
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item panel style={panelStyles}>
                Post
              </Nav.Item>
              <Nav.Item as="div" eventKey="news">
                <Link to="news">
                  <div style={activeKey !== "news" ? { color: "#aaa" } : {}}>
                    News
                  </div>
                </Link>
              </Nav.Item>
              <Nav.Item as="div" eventKey="transfer">
                <Link to="transfer">
                  <div
                    style={activeKey !== "transfer" ? { color: "#aaa" } : {}}
                  >
                    Transfer
                  </div>
                </Link>
              </Nav.Item>
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
