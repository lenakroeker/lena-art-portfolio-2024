import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod.js";
import { NavLink, Link } from "react-router-dom";

export default function EditDeleteProject() {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [categoryFilter, setCategoryFilter] = useState(""); // State for category filter

  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = "/admin";
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await publicRequest.get("projects");
        setProjects(res.data.reverse());
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getProjects();
  }, []);

  const deleteProject = async (id) => {
    const token = localStorage.getItem("accessToken");
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      await fetch(`${API_URL}/projects/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(projects.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting the project:", error);
    }
  };

  // Filter projects based on search term and category filter
  const filteredProjects = projects.filter((project) => {
    const matchesSearchTerm = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "" || project.categories.includes(categoryFilter);
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <Wrapper>
      <Header>Welcome Admin!</Header>
      <Link to="/admin/addProject">
        <Button>Add Project</Button>
      </Link>
      <Button onClick={logout}>Logout</Button>

      {/* Search and filter inputs */}
      <SearchInput
        type="text"
        placeholder="Search by project name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CategoryFilter
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="painting">Painting</option>
        <option value="textile">Textile</option>
        <option value="earlyWork">Early Work</option>
        <option value="garment">Garment</option>
        <option value="ovenside">Ovenside</option>
        <option value="vips">VIPs</option>
        <option value="instances_of_peacefulness">
          Instances of Peacefulness
        </option>
        <option value="deconfinement">Deconfinement</option>
        <option value="the_quality_screen_time_variety_hour">TQSTVH</option>
      </CategoryFilter>

      <ProjectGrid>
        {filteredProjects.map((item, index) => (
          <ProjectCard key={index}>
            <Img src={item.images[0]} alt={item.title} />

            <Name>{item.title}</Name>
            <Edit end to={`/admin/edit-project/${item._id}`}>
              Edit
            </Edit>
            <Delete onClick={() => deleteProject(item._id)}>Delete</Delete>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 100px 20vw;
  padding: 30px;
`;
const Header = styled.div``;

const ProjectGrid = styled.div``;

const ProjectCard = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 10px 0;
  padding: 5px;
  border: 1px solid black;
`;

const Name = styled.div`
  width: 40%;
  margin: 10px 10%;
  font-weight: bold;
  font-size: 18px;
`;

const Img = styled.img`
  width: 10%;
  object-fit: cover;
`;

const Edit = styled(NavLink)`
  width: 200px;
  text-align: center;
  font-size: 18px;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 10px;
  margin: 10px;
  border: none;
  transition: 0.5s ease-in-out;
  background: #a3ffa3;
  height: 40px;

  &:hover {
    transform: scale(1.02);
  }
`;

const Delete = styled.button`
  background: #fc9797;
`;

const Button = styled.button`
  background-color: #98fbfe;
  &:hover {
    background-color: #5ef2f7;
  }
  &:active {
    background-color: #8efbbf;
  }
`;

const SearchInput = styled.input`
  margin: 10px;
  padding: 8px;
  font-size: 16px;
  width: 200px;
`;

const CategoryFilter = styled.select`
  margin: 10px;
  padding: 8px;
  font-size: 16px;
  width: 220px;
`;
