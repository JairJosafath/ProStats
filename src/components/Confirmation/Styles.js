import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 8vh;
  left: 0;
  height: 95vh;
  width: 100vw;
  align-items: "center";
  text-align: center;
  align-self: auto;
  align-content: center;
  padding: 30vh;
  display: "block";
  z-index: 5000;
  backdrop-filter: blur(1px) brightness(80%);
  .ico {
    font-size: 3em;
    color: var(--red);
  }

  .modal {
    /* z-index: 5001; */
    background: var(--primary-blue-very-dark);
    width: 400px;
    height: 200px;
    border-radius: 3em;
    padding: 40px;
    margin: auto;
  }

  .header {
    margin-bottom: 20px;
  }

  .body {
    height: 60%;
  }
  .footer {
    button {
      margin: 0 30px;
    }
    height: 10%;
    width: 100%;
  }
`;

export const Img = styled.img`
  src: ${(props) => props.src};
`;
export const Important = styled.p`
  display: inline;
  color: var(--red);
  font-weight: bold;
`;
