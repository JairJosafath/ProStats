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
    position: fixed;

    font-size: ${(props) => props.size || "60px"};
  }
  #inner {
    animation-name: spin;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  #outer {
    opacity: 0.8;
    animation-name: spin;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
