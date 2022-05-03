import { useState } from "react";
import { List } from "rsuite";

const ListItemCustom = ({ isSelected, disableHover, height, ...props }) => {
  const [focus, setFocus] = useState(false);
  let style = isSelected
    ? {
        background: "var(--primary-statMe-listItemFocus)",
        borderRadius: 9,
      }
    : disableHover
    ? {
        background: "var(--primary-statMe-listItem)",
        borderRadius: 9,
      }
    : {
        background: focus
          ? "var(--primary-statMe-listItemFocus)"
          : "var(--primary-statMe-listItem)",
        borderRadius: 9,
      };

  if (height) {
    style["height"] = height;
  }
  return (
    <List.Item
      {...props}
      style={style}
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
