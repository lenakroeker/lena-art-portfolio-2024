import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Grid from "../components/Grid";

export default function EarlyWork() {
  const location = useLocation();
  const category = location.pathname.split("/")[1];

  return (
    <Wrapper>
      <Title>EARLY WORK</Title>
      <Grid category={category} />
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
const Container = styled.div``;
