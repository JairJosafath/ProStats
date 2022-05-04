import styled from "styled-components";

export const Header = styled.div`
  background: linear-gradient(var(--primary-blue), var(--primary-blue-light));
  padding: 13px;
  color: whitesmoke;
  border-top-right-radius: 2em;
  :hover {
    padding: 11px;
    background: linear-gradient(
      var(--primary-blue-light),
      var(--primary-blue-very-light)
    );
  }

  .selected {
    background: var(--primary-blue-light);
    border-radius: 2em;
  }

  .item {
    :hover {
      background: var(--primary-blue-dark);
      border-radius: 2em;
    }
  }
`;

export const Body = styled.div`
  background: linear-gradient(var(--primary-black-light), var(--primary-black));
  .selected {
    margin: 5px;
    background: var(--primary-grey-light);
    border-bottom-right-radius: 2em;
    border-top-right-radius: 2em;
    /* margin-left: 30px; */
  }

  .item {
    border-bottom-right-radius: 2em;
    border-top-right-radius: 2em;
    padding: 10px;
    margin: 5px;
    padding-left: 20px;

    :hover {
      background: var(--primary-blue-dark);
    }
  }
`;
