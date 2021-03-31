import React from 'react';
import Reset from '../styles/Reset';
import Typography from '../styles/Typography';

function Layout({ children }) {
  return (
    <>
      <Reset />
      <Typography />
      <div className="site-wrapper">{children}</div>
    </>
  );
}

export default Layout;
