import { injectGlobal } from './index';

const globalCSS = injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    min-height: 100vh;
  }
`;

export default globalCSS;
