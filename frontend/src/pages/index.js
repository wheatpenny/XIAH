import React from 'react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div>
        <h1>Typography Testing</h1>
        <p>hello world</p>
        <ul>
          <li>first</li>
          <li>second</li>
        </ul>
      </div>
    </>
  );
}
