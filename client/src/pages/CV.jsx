import React from "react";
import styled from "styled-components";

export default function CV() {
  return (
    <Wrapper>
      <Title>CV</Title>
      <Block>
        <Item>Argyle Fine Art, 2024</Item>
        <Item>Hidden Letters, 2024</Item>
        <Item>Fairy thing, 2024</Item>
        <Item>What the Pop!, 2024</Item>
        <Item>Argyle Fine Art, 2023</Item>
        <Item>Dalhousie, 2008</Item>
      </Block>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 10vw 20vw;
  min-height: 95vh;
  @media only screen and (max-width: 500px) {
    padding: 5vw;
  }
`;
const Title = styled.h2``;
const Block = styled.div``;
const Item = styled.div``;
