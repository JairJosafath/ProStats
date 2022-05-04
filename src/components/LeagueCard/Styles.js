import styled from "styled-components";

export const LogoCard = styled.div`
  display: flex;
  background: var(--primary-blue-light);
  height: 200px;
  width: 100%;
  padding: 10px;

  transform: perspective(800px) rotateY(-8deg);
  transition: transform 1s ease 0s;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.024) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.03) 0px 0px 8px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;

  &:hover {
    position: relative;
    padding: 15px;
    transform: perspective(800px) rotateY(-4deg);
    background: linear-gradient(
      var(--primary-blue-very-light),
      var(--primary-blue-dark)
    );

    height: 200px;
    width: 400px;
    z-index: 100;
    /* backdrop-filter: brightness(40%); */
    opacity: 0.9;

    img {
      height: 140px;
    }
    p {
      display: block;
    }
  }

  img {
    height: 125px;
  }
  p {
    display: none;
  }
  z-index: 1;

  #verified {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
  }
`;
