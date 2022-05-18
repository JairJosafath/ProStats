import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  background: var(--primary-blue-very-dark);
  height: 40px;
  align-items: center;
  justify-content: center;
`;
export const Navitem = styled.div`
  padding: 10px;
  text-align: center;
  transform: perspective(1500px) rotateY(0deg);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px -12px;
  /* background: var(--primary-blue-very-dark); */
  transition: transform 1s ease 0s;
  color: white;
  background: ${(props) =>
    props.selected
      ? "var(--primary-blue-light)"
      : "var(--primary-blue-very-dark)"};

  &:hover {
    transform: perspective(3000px) rotate&(10deg);
    box-shadow: rgba(0, 0, 0, 0.7) 0px 15px 15px -12px;
    /* background: linear-gradient(rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.1)); */
    /* border-radius: 100%; */
    background: var(--primary-blue);
  }

  a {
    text-decoration: none;
  }
`;
