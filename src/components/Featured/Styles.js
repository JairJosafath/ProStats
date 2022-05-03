import styled from "styled-components";

export const CircleContainer = styled.img`
  display: "inline";
  border-radius: 100%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  min-width: 50px;
  min-height: 50px;
  z-index: 30;
  /* margin-bottom: 10px; */
  /* max-height: 60px;
  max-width: 60px; */
  /* background: ${(props) => props.color}; */
  animation-name: slide;
  animation-timing-function: linear;
  animation-duration: 30s;
  animation-iteration-count: infinite;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 30px;
  /* src: url(${(props) => props.image}); */
  @keyframes slide {
    0% {
      transform: translate(95vw, 0);
      opacity: 0;
    }
    7% {
      opacity: 1;
    }
    99% {
      opacity: 1;
    }
    100% {
      transform: translate(-50vw, 0);
      opacity: 0;
    }
  }
  border-radius: 1em;
`;
