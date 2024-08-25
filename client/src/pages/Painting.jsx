import React, { useState } from "react";
import styled from "styled-components";
import Grid from "../components/Grid";

export default function EarlyWork() {
  const categories = [
    {
      name: "the_quality_screen_time_variety_hour",
      label: "The Quality Screen Time Variety Hour (2023)",
    },
    { name: "deconfinement", label: "Deconfinement (2022)" },

    {
      name: "instances_of_peacefulness",
      label: "Instances of Peacefulness (2021)",
    },
    { name: "vips", label: "Vips (2017 - present)" },

    { name: "ovenside", label: "Ovenside (2012)" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  return (
    <Wrapper>
      <Title>PAINTING</Title>
      <Tabs>
        {categories.map((cat) => (
          <Tab
            key={cat.name}
            isActive={selectedCategory === cat.name}
            onClick={() => setSelectedCategory(cat.name)}
          >
            {cat.label.replace(/_/g, " ")}
          </Tab>
        ))}
      </Tabs>
      <Grid category={selectedCategory} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px 2vw 10vw 20vw;
  min-height: 95vh;
  @media only screen and (max-width: 500px) {
    padding: 1vw;
    width: 100vw;
  }
`;

const Title = styled.h2``;

const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
  border: 2px dotted red;
  @media only screen and (max-width: 600px) {
    max-width: 100vw;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: -50px;
  }
`;

const Tab = styled.button`
  font-family: "Jersey 10", sans-serif;

  padding: 0.5rem 1rem;
  background: ${(props) => (props.isActive ? "#000" : "#ffffffec")};
  color: ${(props) => (props.isActive ? "#ffffffec" : "#000000")};
  border: 2px dotted green;
  font-size: 20px;
  border-radius: 0px;
  height: auto;
  cursor: pointer;
  text-transform: capitalize;

  &:hover {
    background: #2ac4fc13;
    color: #000000;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0;
  }
`;
