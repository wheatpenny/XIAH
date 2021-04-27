import React from 'react';
import styled from 'styled-components';

const CardItemStyles = styled.li`
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    display: inline;
  }

  .carditem__title {
    display: block;
  }
`;

function CardItem({ children }) {
  return (
    <>
      <CardItemStyles>{children}</CardItemStyles>
    </>
  );
}

export default CardItem;
