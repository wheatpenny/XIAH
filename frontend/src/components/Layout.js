import React from 'react';
import Color from '../styles/Color';
import Reset from '../styles/Reset';
import Spacing from '../styles/Spacing';
import Typography from '../styles/Typography';

function Layout({ children }) {
  return (
    <>
      <Reset />
      <Typography />
      <Spacing />
      <Color />
      <div className="site-wrapper">{children}</div>
    </>
  );
}

export default Layout;
