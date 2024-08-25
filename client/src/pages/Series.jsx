import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Grid from "../components/Grid";

export default function EarlyWork() {
  const location = useLocation();
  const category = location.pathname.split("/")[1];

  return (
    <Wrapper>
      <Title>{category}</Title>
      <Grid category={category} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 5vw 2vw 10vw 20vw;
  min-height: 95vh;
  @media only screen and (max-width: 500px) {
    padding: 2vw;
  }
`;
const Title = styled.h2``;
const Container = styled.div``;
