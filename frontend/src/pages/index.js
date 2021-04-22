import React from 'react';
import HomepageHero from '../components/HomepageHero';
import SEO from '../components/SEO';
import CardBlock from '../components/CardBlock';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <main>
        <HomepageHero />
        <CardBlock>
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
        </CardBlock>
        <CardBlock>
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
        </CardBlock>

        <p>
          Contact me on{' '}
          <a href="https://www.linkedin.com/in/levisigworth">LinkedIn</a>.
        </p>
      </main>
    </>
  );
}
