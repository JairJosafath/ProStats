import { createGlobalStyle } from "styled-components";
//color pallette https://coolors.co/3d78b8-316294-2e537a-2a445f-263544-2e3238-222529-202327-1e2124
// green,red https://coolors.co/ac2020-c92727-ce3b3b-1d8e31-47d360-78e38b
export default createGlobalStyle`
  body {
    --primary-statMe-body:#1e2124;
    --primary-statMe-listItem:#222529;
    --primary-statMe-listItemFocus:#316294;
    --primary-statMe-sidenav:#1a1b1c;
    --primary-statMe-sidenavFocus:#2a2c2e;
    --primary-statMe-sidenavSelected:#44474a;
    
    --primary-statMe-button:rgba(69, 132, 196,.1);
    --primary-statMe-buttonFocus:rgba(69, 132, 196,1);

    --primary-black:#1e2124;
    --primary-black-light:#202327;
    --primary-grey:#222529;
    --primary-grey-light:#2E3238;
    --primary-blue-very-dark:#263544;
    --primary-blue-dark:#2A445F;
    --primary-blue:#2E537A;
    --primary-blue-light:#316294;
    --primary-blue-very-light:#3D78B8;

    --red-dark: #ac2020ff;
    --red: #c92727ff;
    --red-light: #ce3b3bff;
    --green-dark: #1d8e31ff;
    --green: #47d360ff;
    --green-light: #78e38bff;

    margin: 0;
    padding: 0;
    background:black ;
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
