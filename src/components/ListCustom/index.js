import { useState } from "react";
import { List } from "rsuite";

const ListItemCustom = ({ disableHover, ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <List.Item
      {...props}
      style={
        disableHover
          ? { background: "var(--primary-statMe-listItem)" }
          : {
              background: focus
                ? "var(--primary-statMe-listItemFocus)"
                : "var(--primary-statMe-listItem)",
            }
      }
      onMouseEnter={() => {
        setFocus(true);
      }}
      onMouseLeave={() => {
        setFocus(false);
      }}
    />
  );
};

export default ListItemCustom;
