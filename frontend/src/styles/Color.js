import { createGlobalStyle } from 'styled-components';

const Color = createGlobalStyle`
:root {
  // https://coolors.co/2d3142-bfc0c0-ffffff-ef8354-4f5d75
  --space-cadet: #2D3142;
  --silver: #bfc0c0;
  --white: #ffffff;
  --mandarin: #ef8354;
  --independence: #4f5d75;

  // grays
  --black: #1d1d21;
  --gray-10: #2e2e31;
  --gray-6: #7b7a7d;
  --gray-4: #a5a5a6;
  --gray-3: #bbbbbc;
  --gray-2: #d1d0d2;
  --gray-1: #e8e7e8;
  --white: white;

  // color assignments
  --color-primary: var(--space-cadet);
  --color-accent: var(--mandarin);

  --background: var(--white);
}

body {
  background: var(--background);
  color: var(--color-primary);
}
`;

export default Color;
