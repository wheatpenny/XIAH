import React from 'react';
import styled from 'styled-components';

const CardBlockStyles = styled.div`
  padding: var(--space-md) 0 0 var(--space-md);
  position: relative;
  top: calc(-1 * var(--space-md));
  left: calc(-1 * var(--space-md));
  background: linear-gradient(
        to right,
        var(--color-accent) var(--space-xxl),
        transparent var(--space-xxl)
      )
      0 0 / 100% 2px no-repeat,
    linear-gradient(
        to bottom,
        var(--color-accent) var(--space-xl),
        transparent var(--space-xl)
      )
      0 0 / 2px 100% no-repeat;
  margin-bottom: var(--space-xxl);
`;

function CardBlock({ children }) {
  return (
    <>
      <CardBlockStyles>{children}</CardBlockStyles>
    </>
  );
}

export default CardBlock;
