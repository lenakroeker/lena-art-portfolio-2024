import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";

import { useLocation } from "react-router-dom";

export default function ProjectDetail() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
    const getProjectById = async () => {
      try {
        const res = await publicRequest.get(`/projects/find/${id}`);
        console.log(res.data);
        setProject(res.data); // Check the response data
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
    getProjectById();
  }, [id]);

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
    <Wrapper>
      {project && (
        <>
          <Info>
            <Title>{project.title}</Title>
            {project.year && <Year>{project.year}</Year>}
            {project.media && <Media>{project.media}</Media>}
            {project.media && <Media>{project.dimensions}</Media>}
            {project.forSale && <Price>${project.price}</Price>}
            <Description>{project.description}</Description>
          </Info>
          {project.images && (
            <ImgWrapper id="scrollable-wrapper">
              {project.images.map((img) => {
                return <Img src={img} />;
              })}{" "}
            </ImgWrapper>
          )}
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 2vw 20vw;
  min-height: 95vh;
  @media only screen and (max-width: 500px) {
    padding: 5vw;
    height: auto;
  }
`;

const Info = styled.div`
  position: absolute;
  height: 30vh;
  top: 40vh;
  left: 20vw;
  width: 25vw;
  @media only screen and (max-width: 600px) {
    height: auto;
    position: relative;
    top: 50px;
    left: 0;
    width: 90vw;
  }
`;
const Title = styled.div`
  font-weight: bold;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  animation: none;
`;
const Year = styled.div`
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`;
const Media = styled.div`
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`;
const Price = styled.div`
  @media only screen and (max-width: 600px) {
    width: 50%;
  }
`;
const Description = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const ImgWrapper = styled.div`
  width: 45vw;
  height: auto;
  max-height: 95vh;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  background: #0000000;
  right: 5vw;
  top: 1vh;
  position: absolute;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none; /* Hides scrollbar in Internet Explorer and Edge */
  scrollbar-width: none; /* Hides scrollbar in Firefox */

  &::-webkit-scrollbar {
    display: none; /* Hides scrollbar in Chrome, Safari, and Opera */
  }
  @media only screen and (max-width: 600px) {
    position: relative;
    width: 100vw;
    top: 50px;
    bottom: 50px;
    max-height: 70vh;
  }
`;
