import styled from "styled-components";
import image from "../../img/banner2.png";

export const Navitem = styled.div`
  padding: 10px;
  text-align: center;
  transform: perspective(1500px) rotateY(0deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px -12px;
  background: rgb(20, 20, 20, 0.1);
  transition: transform 1s ease 0s;
  color: white;

  &:hover {
    transform: perspective(3000px) rotateX(25deg);
    box-shadow: rgba(0, 0, 0, 0.7) 0px 15px 15px -12px;
    background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.1));
    border-radius: 100%;
    color: lightblue;
  }

  a {
    text-decoration: none;
  }
`;
