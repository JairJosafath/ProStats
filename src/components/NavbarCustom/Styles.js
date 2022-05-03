import styled from "styled-components";

export const ButtonElevated = styled.button`
  background: rgba(30, 33, 36, 0.5);
  /* padding: ${(props) => (props.padding && props.padding) || "2px"}; */
  transform: perspective(1500px) rotateY(15deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  transition: transform 1s ease 0s;

  &:hover {
    transform: perspective(3000px) rotateY(5deg);
    box-shadow: rgba(0, 0, 0, 0.2) 2px 2px 2px 2px;
  }
`;
