import React from "react";
import Background from "../assets/image.png";
import Background2 from "../assets/imagepx.png";
import Gold from "../assets/goldey.png";
import Gold2 from "../assets/goldeypx.png";
import styled, { keyframes } from "styled-components";
import Stone from "../assets/stone.jpg";

export default function Music() {
  return (
    <Wrapper>
      <Title>MUSIC</Title>
      <Img src={Background} />
      <Img2 src={Background2} />
      <Logo src={Gold} />
      <Logo2 src={Gold2} />
      <Select>SELECT ONE TO PLAY</Select>
      <Links>
        <Link href="https://www.instagram.com/goldewyn.music" target="_blank">
          INSTAGRAM
        </Link>
        <Link href="https://www.youtube.com/@goldewynmusic" target="_blank">
          YOUTUBE
        </Link>
        <Link
          href="https://open.spotify.com/artist/51gkA03LkNaBO23GGbpLFD"
          target="_blank"
        >
          SPOTIFY
        </Link>
        <Link href="https://goldewyn.bandcamp.com/music" target="_blank">
          BANDCAMP
        </Link>
      </Links>
    </Wrapper>
  );
}

const Title = styled.h2``;

const pixelclear = keyframes`
0% {
  opacity: 1;
}
  99% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadein = keyframes`
0% {
  opacity: 0;
}
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const blink = keyframes`
0% {
  opacity: 0;
}

  100% {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 60%;
  height: auto;
  animation: none;
  position: fixed;
  right: 8vw;
  top: 2vw;
  z-index: 0;
  animation: ${fadein} 0.5s;

  @media only screen and (max-width: 500px) {
    width: 94vw;
    right: 3vw;
    top: 50px;
  }
`;
const Img2 = styled.img`
  width: 60%;
  height: auto;
  animation: none;
  opacity: 0;
  position: fixed;
  right: 8vw;
  top: 2vw;
  z-index: 1;
  animation: ${pixelclear} 0.5s;
  @media only screen and (max-width: 500px) {
    width: 94vw;
    right: 3vw;
    top: 50px;
  }
`;

const Logo = styled.img`
  width: 60%;
  height: auto;
  animation: none;
  position: fixed;
  right: 8vw;
  top: 10vw;
  z-index: 0;
  animation: ${fadein} 1s;
  @media only screen and (max-width: 500px) {
    width: 94vw;
    right: 2.5vw;
    top: 200px;
  }
`;
const Logo2 = styled.img`
  width: 60%;
  height: auto;
  animation: none;
  opacity: 0;
  position: fixed;
  right: 8vw;
  top: 10vw;
  z-index: 1;
  animation: ${pixelclear} 1s;
  @media only screen and (max-width: 500px) {
    width: 94vw;
    right: 2.5vw;
    top: 200px;
  }
`;

const Select = styled.div`
  font-family: "Pixelify Sans", sans-serif;
  animation: ${blink} 1s infinite;
  animation-direction: alternate;
  margin-top: 55vh;
  margin-left: 4vw;
  font-size: 25px;
  @media only screen and (max-width: 500px) {
    margin-top: 45vh;
    margin-left: 3vw;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  position: fixed;
  top: 0;
  height: 100vh;

  padding: 0 20vw 10vw 40vw;
  text-align: center;
  @media only screen and (max-width: 500px) {
    padding: 5vw;
  }
`;

const Links = styled.div`
  position: fixed;
  bottom: 20vh;
  left: 40%;
  padding: 10px 0;
  border: 4px inset lightgrey;
  z-index: 3;
  animation: ${fadein} 0.3s;
  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    width: 60vw;
    left: 21vw;
    bottom: 10vh;
  }
`;

const Link = styled.a`
  font-family: "Pixelify Sans", sans-serif;
  font-size: 25px;
  background: blue;
  border-right: 2px solid white;
  padding: 10px;
  width: 200px;
  top: 50vh;
  cursor: pointer;
  color: white;
  &:hover {
    background: lightblue;
    color: black;
  }
  @media only screen and (max-width: 500px) {
    border-right: none;
    width: 100%;
    border-bottom: 2px solid white;
  }
`;
