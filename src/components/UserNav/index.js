import { Dropdown, FlexboxGrid, Nav, Navbar } from "rsuite";
import { AiFillHome } from "react-icons/ai";
import { useEffect, useState } from "react";
import DropdownItem from "rsuite/esm/Dropdown/DropdownItem";
import NavItem from "rsuite/esm/Nav/NavItem";
import { Link } from "react-router-dom";
import SearchPlayer from "../SearchPlayers";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";

const CustomNav = ({ active, onSelect, user, roles, ...props }) => {
  return (
    <div style={{ display: "flex" }}>
      <Nav {...props} activeKey={active} onSelect={onSelect}>
        <Nav.Item disabled>{`${user?.username}:${roles[0]}`}</Nav.Item>

        <Nav.Item as={"div"} eventKey="dashboard" icon={<AiFillHome />}>
          <Link
            to={"dashboard"}
            style={{ color: "white", textDecoration: "none" }}
          >
            Dashboard
          </Link>
        </Nav.Item>

        {
          // <Nav.Item as={"div"} eventKey="upload player stats">

          <Nav.Dropdown title="upload player stats" style={{ zIndex: 0 }}>
            <Link
              to={"uploadplayerstats/ss"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Nav.Dropdown.Item>via screenshot</Nav.Dropdown.Item>
            </Link>
            <Link
              to={"uploadplayerstats/ma"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Nav.Dropdown.Item>manually</Nav.Dropdown.Item>
            </Link>
          </Nav.Dropdown>

          // </Nav.Item>
        }
        {!roles.includes("player") && (
          <Nav.Dropdown title="upload team stats" style={{ zIndex: 0 }}>
            <Link
              to={"uploadteamstats/ss"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Nav.Dropdown.Item>via screenshot</Nav.Dropdown.Item>
            </Link>
            <Link
              to={"uploadteamstats/ma"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <Nav.Dropdown.Item>manually</Nav.Dropdown.Item>
            </Link>
          </Nav.Dropdown>
        )}
        {
          <Nav.Item as={"div"} eventKey="manage player ">
            <Link
              to={"manageplayer"}
              style={{ color: "white", textDecoration: "none" }}
            >
              manage player
            </Link>{" "}
          </Nav.Item>
        }
        {!roles.includes("player") && (
          <Nav.Item as={"div"} eventKey="manage team ">
            <Link
              to={"manageteam"}
              style={{ color: "white", textDecoration: "none" }}
            >
              manage team{" "}
            </Link>
          </Nav.Item>
        )}
        {(roles.includes("admin") ||
          roles.includes("mod") ||
          roles.includes("newsMod") ||
          roles.includes("transferMod") ||
          roles.includes("reqMod") ||
          roles.includes("tournMod")) && (
          <Dropdown eventKey="post" title={"post"} size={"sm"}>
            <Link
              to={"news"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <DropdownItem>News</DropdownItem>{" "}
            </Link>
            <Link
              to={"transfer"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <DropdownItem>Transfer</DropdownItem>
            </Link>
          </Dropdown>
        )}
      </Nav>
      <FlexboxGrid justify="end" style={{ margin: 5 }}>
        <FlexboxGridItem colspan={18}>
          <SearchPlayer />
        </FlexboxGridItem>
      </FlexboxGrid>
    </div>
  );
};

const UserNav = ({ user, roles }) => {
  const [active, setActive] = useState("dashboard");
  return (
    <>
      <CustomNav
        user={user}
        roles={roles}
        appearance="subtle"
        active={active}
        onSelect={setActive}
      />
    </>
  );
};

export default UserNav;
