import React from "react";
import styled from "styled-components";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <Title>Contact</Title>
      <ContactForm />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  text-align: center;
  padding: 100px 0;
  @media only screen and (min-width: 500px) {
    padding: 100px 0;
    width: 100vw;
  }
`;
const Title = styled.h2``;
