import { Navbar, Nav, Dropdown, Button } from "rsuite";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "rsuite/esm/Nav/NavItem";
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import useGetFavoriteLeague from "../../hooks/useGetFavoriteLeagues";
import { ButtonElevated } from "./Styles";
import Logo from "../../img/StatMeLogo.svg";
import { Icon } from "@rsuite/icons";

const NavBarInstance = ({
  onSelect,
  activeKey,
  loggedIn,
  league,
  setLeague,
  ...props
}) => {
  const { user, signOut } = useAuthenticator();
  let navigate = useNavigate();
  const [leagues, loadingLEagues, errorLeagues] = useGetFavoriteLeague();

  // const [leagues, setLeagues] = useState([]);

  // console.log("innav", league);
  // useEffect(() => {
  //   const getLeagues = async () => {
  //     const AllLeagues = await API.graphql({
  //       query: query,
  //     });

  //     setLeagues(AllLeagues.data.listLeagues.items);

  //     console.log("allleagues", leagues);
  //     // console.log(leagues);
  //     // leagues.map((league) => console.log(league.name));
  //   };
  //   getLeagues();
  // }, []);

  return (
    <>
      <Navbar {...props}>
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
          {" "}
          <ButtonElevated>
            <Navbar.Brand onClick={() => onSelect("0")} as={"div"}>
              <img src={Logo} alt={"logo"} width={"40px"} />
              StatMe <p style={{ display: "inline", fontSize: 9 }}>beta</p>
            </Navbar.Brand>
          </ButtonElevated>{" "}
        </Link>

        {/* <Nav onSelect={onSelect} activeKey={activeKey}> */}
        {/* <Link
          key={"standings"}
          to={"standings"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Nav.Item as={"div"} eventKey="2">
            Standings
          </Nav.Item>
        </Link>

        <Link
          key={"transfers"}
          to={"transfers"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Nav.Item as={"div"} eventKey="3">
            Transfers
          </Nav.Item>
        </Link>

        <Link
          key={"fixtures"}
          to={"fixtures"}
          style={{ color: "white", textDecoration: "none" }}
        >
          <Nav.Item as={"div"} eventKey="4">
            Fixtures
          </Nav.Item>
        </Link>

        <Dropdown title={league.name || "league"} style={{ color: "white" }}>
          {leagues?.map((league) => (
            <Dropdown.Item
              key={league.id}
              eventKey={league.id}
              onSelect={() => setLeague(league)}
            >
              {league.name}
            </Dropdown.Item>
          ))}
          {/* <Dropdown.Item
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
          </Dropdown.Item> */}
        {/* <Dropdown.Item style={{ background: "rgba(0,0,0,.04)" }} eventKey="d">
            All leagues
          </Dropdown.Item>
        </Dropdown> */}
        {/* </Nav> */}
        <Nav pullRight>
          {loggedIn ? (
            <Dropdown
              title={user ? user.username : "Profile"}
              style={{ color: "white" }}
            >
              {/* <Dropdown.Item eventKey="d">
              <Link to={"account"} style={{ textDecoration: "none" }}>
                Account
              </Link>
            </Dropdown.Item> */}
              <Dropdown.Item eventKey="e">
                <Link to={`preferences`} style={{ textDecoration: "none" }}>
                  Manage Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item
                eventKey="f"
                onClick={() => {
                  navigate("/");
                  signOut();
                }}
              >
                Log Out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <NavItem as={"div"} style={{ background: "rgba(0,0,0,0)" }}>
              {" "}
              <Link
                to={"signIn"}
                style={{ color: "white", textDecoration: "none" }}
              >
                <ButtonElevated>
                  <p style={{ padding: 10 }}>Sign in</p>
                </ButtonElevated>{" "}
              </Link>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

const NavbarCustom = ({
  setSignedIn,
  signedIn,
  league,
  setLeague,
  loggedIn,
}) => {
  const [activeKey, setActiveKey] = useState(null);
  return (
    <NavBarInstance
      appearance="default"
      activeKey={activeKey}
      onSelect={setActiveKey}
      style={style}
      league={league}
      setLeague={setLeague}
      loggedIn={loggedIn}
    />
  );
};

const style = {
  background: "rgba(1,1,1,0)",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 20,
  paddingRight: 50,
  boxShadow: "2px 2px 2px 2px rgba(0,0,0,.2)",
  backdropFilter: "blur(5px)",
  height: "7vh",
  minHeight: "60px",
};

export default NavbarCustom;
