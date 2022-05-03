import styled from "styled-components";

export const CircleContainer = styled.div`
  display: "inline";
  border-radius: 100%;
  width: 50px;
  height: 50px;
  min-width: 50px;
  min-height: 50px;
  max-height: 60px;
  max-width: 60px;
  background: ${(props) => props.color};
  animation-name: ${(props) => props.color};
  animation-timing-function: linear;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  margin-left: 30px;
  margin-right: 30px;

  @keyframes ${(props) => props.color} {
    0% {
      transform: translate(95vw, 0);
      opacity: 0;
    }
    25% {
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

export const LeftImage = styled.img`
  src: ${(props) => props.src};
  height: 300px;

  transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
  filter: blur(2px);
  opacity: 0.5;
  transition: 0.6s ease all;

  &:hover {
    transform: perspective(800px) rotateY(-15deg) translateY(-50px)
      rotateX(10deg) scale(1);
    filter: blur(0);
    opacity: 1;
  }
`;
export const RightImage = styled.img`
  src: ${(props) => props.src};
  height: 300px;
  margin-left: 150px;
  margin-top: 70px;
  /* transform: rotateY(-35deg) rotateX(15deg) translate3d(0, 0, 0); */

  transform: perspective(800px) rotateY(25deg) scale(0.9) rotateX(10deg);
  filter: blur(2px);
  opacity: 0.5;
  transition: 0.6s ease all;

  &:hover {
    transform: perspective(800px) rotateY(-15deg) translateY(-50px)
      rotateX(10deg) scale(1);
    filter: blur(0);
    opacity: 1;
  }
`;

export const InfoPanel = styled.div`
  transform: rotate3d(0.5, -0.866, 0, 15deg) rotate(1deg);
  box-shadow: 2em 4em 6em -2em rgba(0, 0, 0, 0.5),
    1em 2em 3.5em -2.5em rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border-radius: 0.5em;

  &:hover {
    transform: rotate3d(0, 0, 0, 0deg) rotate(0deg);
  }
`;
export const Banner = styled.div`
  background-image: url(${(props) => props.src});
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-color: rgba(1, 1, 1, 1);
  div {
    height: 100%;
    background: linear-gradient(
      115deg,
      rgba(1, 1, 1, 0.7),
      rgba(20, 20, 20, 0.6),
      rgba(40, 40, 40, 0.5),
      rgba(80, 80, 80, 0.4),
      rgba(100, 100, 100, 0.3)
    );
  }
  p,
  h4,
  h2 {
    padding: 30px;
  }
`;
