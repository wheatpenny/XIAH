import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-xxl);

  .hero--text {
    margin: 0;
  }

  .hero--image {
    justify-self: end;
  }
`;

function HomepageHero() {
  return (
    <>
      <HeroStyles>
        <h1 className="hero--text">XIAH is Levi Sigworth</h1>
        <img className="hero--image" src="icon.svg" alt="XIAH, LLC" />
      </HeroStyles>
    </>
  );
}

export default HomepageHero;
