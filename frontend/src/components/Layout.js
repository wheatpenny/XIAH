import React from 'react';
import Reset from '../styles/Reset';
import Spacing from '../styles/Spacing';
import Typography from '../styles/Typography';

function Layout({ children }) {
  return (
    <>
      <Reset />
      <Typography />
      <Spacing />
      <div className="site-wrapper">{children}</div>
    </>
  );
}

export default Layout;
