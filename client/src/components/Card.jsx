import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Card({ item }) {
  const { title, images, _id, sold } = item;
  return (
    <Wrapper>
      <NavItem end to={`/details/${_id}`}>
        <ImgDiv>
          <Img loading="lazy" src={images[0]} alt={title} />
        </ImgDiv>
        {/* <Title>{title}</Title> */}
      </NavItem>
      {sold && <Sold>sold</Sold>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const Title = styled.div`
  margin-top: 10px;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 13px;
`;

const ImgDiv = styled.div``;

const Img = styled.img`
  width: 100%;
  height: auto;
  padding: 0 0 20px 0;
  object-fit: cover;
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const Sold = styled.div`
  background-color: red;
  border-radius: 30px;
  position: absolute;
  bottom: 3vw;
  right: 3vw;
  color: white;
  font-size: 10px;
  padding: 5px;
  @media only screen and (max-width: 500px) {
    bottom: 20px;
    right: 10px;
    padding: 5px;
    font-size: 0px;
  }
`;
