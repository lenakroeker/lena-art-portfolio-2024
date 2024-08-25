import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const category = location.pathname.split("/")[1];
  const [open, setopen] = useState(false);

  const handleClick = () => {
    setopen(!open);
    console.log("click");
  };
  return (
    <Head>
      <NavItem end to="/">
        <Logo>
          Lena Kroeker : {category ? category.replace(/_/g, " ") : "ARTIST"}
        </Logo>{" "}
      </NavItem>
      {(open || window.innerWidth > 600) && (
        <Nav onClick={handleClick}>
          <NavItem end to="/painting">
            Painting
          </NavItem>
          <NavItem end to="/textile">
            Textile
          </NavItem>
          <NavItem end to="/garment">
            Garment
          </NavItem>

          <NavItem end to="/music">
            Music
          </NavItem>
          <NavItem end to="/earlyWork">
            Early Work
          </NavItem>
          <NavItem end to="/about">
            About
          </NavItem>
          <NavItem end to="/contact">
            Contact
          </NavItem>
        </Nav>
      )}

      <Hamburger onClick={handleClick}>MENU</Hamburger>
    </Head>
  );
}

const Head = styled.header`
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  width: 20vw;
  padding: 10px;
  z-index: 100;
  @media only screen and (max-width: 600px) {
    width: 100vw;
    padding: 0;
  }
`;

const Logo = styled.div`
  font-family: "Jersey 10", sans-serif;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 0;
  top: 50px;
  width: 20vw;
  justify-content: right;

  @media only screen and (min-width: 600px) {
    position: relative;
    top: 0;
    width: auto;
    display: flex;
    justify-content: left;
    align-items: center;
  }
`;

const NavItem = styled(NavLink)`
  padding: 5px;
  display: block;
  font-family: "Jersey 10", sans-serif;
  font-size: 24px;
  border: 1px dashed blue;
  @media only screen and (max-width: 600px) {
    background-color: white;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 10;
  background: white;
  font-size: 24px;

  border: 1px dashed blue;
  font-family: "Jersey 10", sans-serif;
  padding: 10px;

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;
