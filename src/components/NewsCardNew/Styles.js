import styled from "styled-components";
// import fallback from "../../img/news.png";

export const Wrapper = styled.div`
  background: var(--primary-grey-light);

  width: 600px;
  align-content: center;
  text-align: center;
  border-radius: 2em;
  padding: 20px;
  margin: 5px;
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
`;
export const PlaceholderImage = styled.div`
  height: 300px;
  width: 100%;
  background: var(--primary-blue-dark);
`;

export const UploadArea = styled.div`
  max-width: 100%;
  max-height: 300px;
  min-height: 200px;
  margin: 10px 0;
`;
