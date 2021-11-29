import React from 'react';
import HomepageHero from '../components/HomepageHero';
import SEO from '../components/SEO';
import CardBlock from '../components/CardBlock';
import CardList from '../components/CardList';
import CardItem from '../components/CardItem';

export default function Home() {
  return (
    <>
      <SEO title="Home" />
      <main>
        <HomepageHero />
        <CardBlock>
          <p>I build deployable websites with</p>
          <CardList>
            <CardItem>
              <img src="logos/drupal-logo.svg" alt="Drupal" />
            </CardItem>
            <CardItem>
              <img src="logos/gatsby-logo.svg" alt="Gatsby" />
            </CardItem>
            <CardItem>
              <img src="logos/nextjs-logo.svg" alt="Next.js" />
            </CardItem>
          </CardList>
        </CardBlock>
        <CardBlock>
          <p>I help </p>
          <CardList>
            <CardItem>
              <div>
                <img src="logos/small-business.svg" alt="Small businesses" />
                <span className="carditem__title">Small businesses</span>
              </div>
            </CardItem>
            <CardItem>
              <div>
                <img src="logos/agency.svg" alt="Agencies" />
                <span className="carditem__title">Agencies</span>
              </div>
            </CardItem>
          </CardList>
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
