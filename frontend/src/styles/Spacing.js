import { createGlobalStyle } from 'styled-components';

const Spacing = createGlobalStyle`
:root {
    --space-unit: var(--text-base-size);
    --space-xxs:  calc(0.25 * var(--space-unit));
    --space-xs:   calc(0.5 * var(--space-unit));
    --space-sm:   calc(0.75 * var(--space-unit));
    --space-md:   calc(1.25 * var(--space-unit));
    --space-lg:   calc(2 * var(--space-unit));
    --space-xl:   calc(3.25 * var(--space-unit));
    --space-xxl:  calc(5.25 * var(--space-unit));
}

p, ol, ul, form, label, h3, h4, h5, h6 {
  margin-bottom: var(--space-md);
}

h1 {
  margin-bottom: var(--space-xl);
}

h2 {
  margin-bottom: var(--space-lg);
}
`;

export default Spacing;
