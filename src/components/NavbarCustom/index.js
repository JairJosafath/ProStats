import { Navbar, Nav, Dropdown, Button } from "rsuite";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "rsuite/esm/Nav/NavItem";
import * as queries from "../../graphql/queries";
import { API } from "aws-amplify";

const query = `
query MyQuery {
  getTournament(id: "75b681ba-1001-456b-b399-d40704ab4652") {
    playerTable {
      items {
        assists
        beat
        blocks
        expectedAssists
        goals
        interceptions
        matchRating
        nutmeg
        playerOfTheMatch
        saves
        skillmoveBeat
        tacklesWon
        player {
          name
        }
      }
    }
  }
}

`;

const NavBarInstance = ({
  signedIn,
  setSignedIn,
  onSelect,
  activeKey,
  user,
  ...props
}) => {
  const [league, setLeague] = useState("league");

  // useEffect(() => {
  //   const getLeagues = async () => {
  //     const AllLeagues = await API.graphql({
  //       query: query,
  //     });

  //     console.log("all leagues", AllLeagues);
  //   };
  //   getLeagues();
  // }, []);

  return (
    <Navbar {...props}>
      <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
        <Navbar.Brand onClick={() => onSelect("0")} as={"div"}>
          ProStats
        </Navbar.Brand>
      </Link>
      <Nav onSelect={onSelect} activeKey={activeKey}>
        <Link
          to={"standings"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Nav.Item as={"div"} eventKey="2">
            Standings
          </Nav.Item>
        </Link>

        <Link
          to={"transfers"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Nav.Item as={"div"} eventKey="3">
            Transfers
          </Nav.Item>
        </Link>

        <Link
          to={"fixtures"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Nav.Item as={"div"} eventKey="4">
            Fixtures
          </Nav.Item>
        </Link>

        <Dropdown title={league}>
          <Dropdown.Item
            eventKey="a"
            onSelect={() => setLeague("Super League")}
          >
            Super League
          </Dropdown.Item>
          <Dropdown.Item
            eventKey="b"
            onSelect={() => setLeague("Premier League")}
          >
            Premier League
          </Dropdown.Item>
          <Dropdown.Item eventKey="c" onSelect={() => setLeague("La Liga")}>
            La Liga
          </Dropdown.Item>
          <Dropdown.Item
            style={{ background: "rgba(0,0,0,.04)" }}
            eventKey="d"
            onSelect={() => setLeague("all")}
          >
            All leagues
          </Dropdown.Item>
        </Dropdown>
      </Nav>

      <Nav pullRight>
        {signedIn ? (
          <Dropdown title={user ? user.name : "Profile"}>
            <Dropdown.Item eventKey="d">
              <Link
                to={"account"}
                style={{ color: "black", textDecoration: "none" }}
              >
                Account
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="e">
              <Link
                to={"preferences"}
                style={{ color: "black", textDecoration: "none" }}
              >
                Preferences
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey="f" onClick={() => setSignedIn(!signedIn)}>
              <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
                Log Out
              </Link>
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <NavItem as={"div"} onClick={() => setSignedIn(!signedIn)}>
            <Link
              to={"dashboard"}
              style={{ color: "white", textDecoration: "none" }}
            >
              Sign in
            </Link>
          </NavItem>
        )}
      </Nav>
    </Navbar>
  );
};

const NavbarCustom = ({ setSignedIn, signedIn }) => {
  const [activeKey, setActiveKey] = useState(null);
  return (
    <NavBarInstance
      appearance="inverse"
      activeKey={activeKey}
      onSelect={setActiveKey}
      style={style}
      signedIn={signedIn}
      setSignedIn={setSignedIn}
    />
  );
};

const style = {
  background: "#0000B9",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 7,
};

export default NavbarCustom;
