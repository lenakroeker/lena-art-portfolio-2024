import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import Card from "../components/Card";

export default function Grid(props) {
  const [projects, setProjects] = useState(null);
  const category = props.category;

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
    const getProjectsByCategory = async () => {
      try {
        const res = await publicRequest.get(`/projects/category/${category}`);

        setProjects(res.data); // Check the response data
      } catch (error) {
        if (error.response) {
          console.log("Response data:", error.response.data);
          console.log("Response status:", error.response.status);
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error setting up request:", error.message);
        }
      }
    };
    getProjectsByCategory();
  }, [category]);

  return (
    <Wrapper category={category}>
      <Container>
        {projects &&
          projects.map((item) => <Card item={item} key={item._id} />)}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: ${(props) =>
    props.category === "the_quality_screen_time_variety_hour"
      ? "15px 15px 0 15px"
      : "0"};
  min-height: 95vh;
  background: ${(props) =>
    props.category === "the_quality_screen_time_variety_hour"
      ? "#000000"
      : "transparent"};

  @media only screen and (max-width: 600px) {
    padding: ${(props) =>
      props.category === "the_quality_screen_time_variety_hour"
        ? "15px 15px 0 15px"
        : "0"};
    height: auto;
    margin-top: 50px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 0px;
`;
