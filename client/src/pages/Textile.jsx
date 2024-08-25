import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Gallery from "../components/Gallery";

export default function EarlyWork() {
  const location = useLocation();
  const category = location.pathname.split("/")[1];

  return (
    <Wrapper>
      <Container>
        <Title>TEXTILE</Title>
        <Gallery category={category} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Title = styled.h2``;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;
