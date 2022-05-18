import styled from "styled-components";
// import fallback from "../../img/news.png";

export const Wrapper = styled.div`
  position: relative;
  background: var(--primary-blue-dark);
  max-height: 480px;
  width: 600px;
  align-content: center;
  text-align: center;
  border-radius: 2em;
  padding: 20px;
  margin: 10px auto;
  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 300px;
    margin: 10px 0;
  }
  h4,
  h6,
  p {
    cursor: default;
  }

  .options {
    position: absolute;
    top: 10px;
    right: 30px;
  }
  /* .optionsEdit {
    position: absolute;
    top: 10px;
    right: 30px;
    :hover {
      backdrop-filter: brightness(50%);
      
    }
  } */
  .edit {
    :hover {
      background: blue;
    }
  }
  .delete {
    :hover {
      background: red;
    }
  }
`;
export const PlaceholderImage = styled.div`
  height: 300px;
  width: 100%;
  background: var(--primary-blue-dark);
`;
