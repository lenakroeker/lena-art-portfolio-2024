import React, { useEffect, useState } from "react";
import { publicRequest } from "../../requestMethod";

import styled from "styled-components";
import Wall from "../components/Wall";

export default function Gallery(props) {
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

  useEffect(() => {
    const handleScroll = (event) => {
      const wrapper = document.getElementById("scrollable-wrapper");
      wrapper.scrollLeft += event.deltaY;
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <Wrapper id="scrollable-wrapper">
      {projects && projects.map((item) => <Wall item={item} key={item._id} />)}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  background: #ffffff;
  position: absolute;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* Hides scrollbar in Internet Explorer and Edge */
  scrollbar-width: none; /* Hides scrollbar in Firefox */

  &::-webkit-scrollbar {
    display: none; /* Hides scrollbar in Chrome, Safari, and Opera */
  }
`;
