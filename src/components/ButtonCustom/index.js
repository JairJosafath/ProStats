import { useState } from "react";
import { Button } from "rsuite";
import styled from "styled-components";

const Wrapper = styled.button`
  margin: 10px;
  padding: 0;
  border-radius: 2em;
  /* :hover {
    filter: brightness(60%);
  } */
  #btn {
    background: var(--primary-blue);
    :hover {
      background: var(--primary-blue-very-light);
    }
  }
`;

const ButtonCustom = ({ isSelected, disableHover, ...props }) => {
  const [focus, setFocus] = useState(false);
  return (
    <Wrapper>
      <Button
        id={"btn"}
        appearance="primary"
        {...props}
        style={{
          margin: 0,
        }}
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
