import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <Foot>
      ©2024 <Link href="https://www.lenakroekerdev.com/">L KROEKER</Link>
    </Foot>
  );
}

const Foot = styled.footer`
  position: fixed;
  padding: 10px;
  font-size: 10px;
  bottom: 0px;
  right: 5px;
  margin: 0px;
  width: 100%;
  text-align: right;
`;

const Link = styled.a`
  color: #d1eaf5;
`;
