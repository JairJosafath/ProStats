import styled from "styled-components";

export const CircleContainer = styled.div`
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

  img {
    border-radius: 1em;
    display: "inline";
    border-radius: 100%;
    width: 50px;
    height: 50px;
    min-width: 50px;
    min-height: 50px;
    z-index: 30;
    /* margin-bottom: 10px; */
    /* max-height: 60px;
  max-width: 60px; */
    /* background: ${(props) => props.color}; */
    animation-name: slide;
    animation-play-state: ${(props) => (props.pause ? "paused" : "running")};
    animation-timing-function: linear;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    /* src: url(${(props) => props.image}); */

    :hover {
      /* animation-play-state: paused; */
      width: 65px;
      height: 65px;
    }
  }
`;
