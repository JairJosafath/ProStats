import { useState } from "react";
import { Nav } from "rsuite";

const NavItemCustom = ({ isSelected, ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Nav.Item
      {...props}
      style={{
        height: 60,
        background: focus
          ? "var(--primary-statMe-sidenavFocus)"
          : isSelected
          ? "var(--primary-statMe-sidenavSelected)"
          : "var(--primary-statMe-sidenav)",
      }}
      onMouseEnter={() => {
        setFocus(true);
      }}
      onMouseLeave={() => {
        setFocus(false);
      }}
    />
  );
};

export default NavItemCustom;
