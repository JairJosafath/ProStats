import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 8vh;
  left: 0;
  height: 95vh;
  width: 100vw;
  align-items: "center";
  text-align: center;
  padding: 30vh;
  display: "flex";
  z-index: 5000;
  backdrop-filter: blur(5px);

  .ico {
    font-size: 3em;
    color: var(--red);
  }
`;

export const Img = styled.img`
  src: ${(props) => props.src};
`;
