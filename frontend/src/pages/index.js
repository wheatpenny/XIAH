import React from 'react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div>
        <h1>XIAH is Levi Sigworth</h1>
        <p>I build boringly deployable websites with</p>
        <ul>
          <li>Drupal</li>
          <li>Gatsby</li>
          <li>Next</li>
        </ul>
        <p>I help </p>
        <ul>
          <li>Small businesses</li>
          <li>Agencies</li>
        </ul>
        <p>
          who want to make iterative change to their websites and web
          applications.
        </p>
        <p>
          Contact me on{' '}
          <a href="https://www.linkedin.com/in/levisigworth">LinkedIn</a>.
        </p>
      </div>
    </>
  );
}
