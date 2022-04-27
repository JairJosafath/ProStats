import { useState } from "react";
import { FlexboxGrid } from "rsuite";

const FlexItemCustom = ({ ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <FlexboxGrid.Item
      {...props}
      style={{
        padding: 8,
        borderRadius: 20,
        background: focus
          ? "var( --primary-statMe-listItemFocus)"
          : "var(--primary-statMe-listItem)",
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

export default FlexItemCustom;
