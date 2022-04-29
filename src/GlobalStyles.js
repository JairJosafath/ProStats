import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    --primary-statMe-body:#1e2124;
    --primary-statMe-listItem:#222529;
    --primary-statMe-listItemFocus:#316294;
    --primary-statMe-sidenav:#1a1b1c;
    --primary-statMe-sidenavFocus:#2a2c2e;
    --primary-statMe-sidenavSelected:#44474a;
    
    --primary-statMe-button:rgba(69, 132, 196,.1);
    --primary-statMe-buttonFocus:rgba(69, 132, 196,1)



    margin: 0;
    padding: 0;
  }

  /* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--primary-statMe-sidenav);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:var(--primary-statMe-sidenavSelected);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;
