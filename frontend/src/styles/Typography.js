import { createGlobalStyle } from 'styled-components';
import '@fontsource/lato';

const Typography = createGlobalStyle`
:root {
    --font-primary: 'Lato', sans-serif;
    --font-secondary: var(--font-primary);

    /* set base values */
    --text-base-size: 1.8rem;
    --text-scale-ratio: 1.28;

    /* type scale */
    --text-xs: calc(var(--text---text-sm) * var(--text-scale-ratio));
    --text-sm: calc(var(--text-md) / var(--text-scale-ratio));
    --text-md: var(--text-base-size);
    --text-lg: calc(var(--text-md) * var(--text-scale-ratio));
    --text-xl: calc(var(--text-lg) * var(--text-scale-ratio));
    --text-xxl: calc(var(--text-xl) * var(--text-scale-ratio));
    --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));

    /* line-height */
    --heading-line-height: 1.2;
    --body-line-height: 1.4;
}

html {font-size: 62.5%;} /*10px*/

body {
  font-family: var(--font-primary);
  font-size: var(--text-md);
  line-height: var(--heading-line-height);
}

h1, h2, h3, h4, form legend {
    line-height: var(--heading-line-height);
}

h1 {
  font-size: var(--text-xxxl);
}

h2 {
  font-size: var(--text-xxl);
}

h3 {
  font-size: var(--text-xl);
}

h4 {
  font-size: var(--text-lg);
}
`;

export default Typography;
