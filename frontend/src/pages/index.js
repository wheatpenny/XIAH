import React from 'react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <div>
        <h1>XIAH is Levi Sigworth</h1>
        <img src="icon.svg" alt="XIAH, LLC" />
        <p>I build boringly deployable websites with</p>
        <ul>
          <li>
            <img src="logos/drupal-logo.svg" alt="Drupal" />
          </li>
          <li>
            <img src="logos/gatsby-logo.svg" alt="Gatsby" />
          </li>
          <li>
            <img src="logos/nextjs-logo.svg" alt="Next.js" />
          </li>
        </ul>
        <p>I help </p>
        <ul>
          <li>
            <img src="logos/small-business.svg" alt="Small businesses" />
            Small businesses
          </li>
          <li>
            <img src="logos/agency.svg" alt="Agencies" />
            Agencies
          </li>
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
