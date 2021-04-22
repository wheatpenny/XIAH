import React from 'react';
import styled from 'styled-components';
import Color from '../styles/Color';
import Reset from '../styles/Reset';
import Spacing from '../styles/Spacing';
import Typography from '../styles/Typography';

const LayoutStyles = styled.div`
  padding: var(--space-md) var(--space-lg) 0 var(--space-lg);
  margin: 0 auto;
  max-width: 900px;
`;

function Layout({ children }) {
  return (
    <>
      <Reset />
      <Typography />
      <Spacing />
      <Color />
      <LayoutStyles className="site-wrapper">{children}</LayoutStyles>
    </>
  );
}

export default Layout;
