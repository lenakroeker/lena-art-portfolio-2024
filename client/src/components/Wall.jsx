import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Wall({ item }) {
  const { title, images, _id, year, dimensions } = item;
  return (
    <Wrapper>
      <Page end to={`/details/${_id}`}>
        <Img loading="lazy" src={images[0]} alt={title} />
        <Card>
          <Title>{title}</Title>
          <Year>
            {year}, {dimensions}
          </Year>
          <Navlink end to={`/details/${_id}`}>
            more info
          </Navlink>
        </Card>
      </Page>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: auto;
  height: 100vh;
  flex-shrink: 0; /* Prevents the "Wall" elements from shrinking */
  position: relative;
  @media only screen and (max-width: 500px) {
    height: 45vh;
    width: 100vw;
    margin-top: 20vh;
  }
`;

const Title = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  background: rgba(46, 31, 31, 0.8);
  color: #e3d9d9;
  padding: 20px 10px 10px 10px;
  text-align: center;
  position: absolute;
  right: 8vw;
  bottom: 13vw;
  @media only screen and (max-width: 500px) {
    bottom: -25vh;
    right: 12vw;
  }
`;

const Year = styled.div`
  font-size: 0.8em;
  margin: 10px;
`;

const Navlink = styled(NavLink)`
  color: #010f1c;
  background-color: white;
  font-size: 14px;
  padding: 4px 10px;
  transition: 0.5s;
  &:hover {
    background-color: #9fffe1;
  }
`;
