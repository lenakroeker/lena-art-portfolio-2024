import React from "react";
import styled from "styled-components";
import YoungLena from "../assets/younglena.jpg";
import OldLena from "../assets/oldlena.jpg";

export default function About() {
  return (
    <Wrapper>
      <Title>ABOUT</Title>
      <Block>
        <Text>
          Lena Katrina Kroeker (b. 1989, London, England) moved to Halifax, Nova
          Scotia with her family in 1992, and later to the small fishing
          community of Long Cove, West Pennant, Nova Scotia in 1996. As a result
          of being homeschooled, Lena was able to focus on the study of art,
          design and music, and develop a strong creative practice early in
          life. She later went on to study music at Dalhousie's Fountain School
          of Performing Arts in Halifax, and moved to Montreal, Quebec in 2009
        </Text>
        <Img src={YoungLena} />
      </Block>
      <Block>
        <Mimages src={YoungLena} />
        <Mimages src={OldLena} />
      </Block>
      <Block>
        <Img src={OldLena} />

        <Text>
          Lena's work is influenced by traditional craftsmanship, social
          dynamics, and mysticism. Her aesthetic is inspired by the
          reinterpretation of historical commercialism, rooted in her
          unconventional upbringing and subsequent outsider perspective on
          societal institutions and pop culture. Lena currently lives in
          Montreal, Quebec. She maintains an interdisciplinary art, music and
          design practice while working in her other vocation as a web
          developer.
        </Text>
      </Block>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 4vw 20vw 10vw 22vw;
  min-height: 95vh;
  animation: fadeInAndSharpen 0.2s ease-in-out;

  @media only screen and (max-width: 500px) {
    padding: 40px 5vw 10px 5vw;
  }
`;
const Title = styled.h2``;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Block = styled.div`
  display: flex;
  column-gap: 3vw;
  @media only screen and (max-width: 500px) {
    margin: 10px 0 0 0;
  }
`;
const Img = styled.img`
  width: 50%;
  animation: none;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Mimages = styled.img`
  width: 50%;
  animation: none;
  @media only screen and (min-width: 500px) {
    display: none;
  }
`;
