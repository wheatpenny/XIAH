import React from 'react';
import styled from 'styled-components';

const CardListStyles = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--space-md);
  padding: 0;
`;

function CardList({ children }) {
  return (
    <>
      <CardListStyles>{children}</CardListStyles>
    </>
  );
}

export default CardList;
