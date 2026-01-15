import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-200: #5d8c8c;
    --primary-300: #025751;
    --primary-500: #003f3b;
    --primary-600: #003532;

    --background-100: #ffffff;
    --background-300: #ecd6d5;
    --background-400: #d9afb2;

    --accent-100: #a9c7d9;
    --accent-300: #9abbd9;
    --accent-600: #733944;

    --success-100: #e6f4ea;
    --success-300: #34a853;
    --success-500: #137333;

    --error-100: #fdecea;
    --error-300: #d9afb2;
    --error-500: #d93025;
    --error-600: #a50e0e;

    --grey-100: #f2f2f2;
    --grey-300: #cccccc;
    --grey-700: #333333;
    --grey-900: #0b1226;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background-color: var(--background-300);
    color: var(--grey-900);
  }
`;

export default GlobalStyles;
