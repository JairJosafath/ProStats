import { useState } from "react";
import { Button } from "rsuite";
import styled from "styled-components";

const Wrapper = styled.button`
  background: var(--primary-statMe-buttonFocus);
  margin: 10px;
  padding: 0;
  border-radius: 10%;
`;

const ButtonCustom = ({ isSelected, disableHover, ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Wrapper>
      <Button
        appearance="primary"
        {...props}
        style={
          isSelected
            ? {}
            : disableHover
            ? { margin: 0 }
            : {
                background: focus
                  ? "rgba(63, 148, 235,1)"
                  : "rgba(63, 148, 235,.4)",
                margin: 0,
              }
        }
        onMouseEnter={() => {
          setFocus(true);
        }}
        onMouseLeave={() => {
          setFocus(false);
        }}
      />
    </Wrapper>
  );
};

export default ButtonCustom;
