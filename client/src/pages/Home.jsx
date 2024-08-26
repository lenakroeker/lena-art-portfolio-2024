import React from "react";
import Gallery from "../assets/gallery2.jpeg";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Img src={Gallery} />
    </div>
  );
}

const Img = styled.img`
  width: 100%;
  height: auto;
  animation: none;
  @media only screen and (max-width: 500px) {
    height: 100vh;
    object-fit: cover;
  }
`;
