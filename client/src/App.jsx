import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Painting from "./pages/Painting.jsx";
import Garment from "./pages/Garment.jsx";
import Music from "./pages/Music.jsx";
import Textile from "./pages/Textile.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Series from "./pages/Series.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import CV from "./pages/CV.jsx";
import AddProject from "./admin/AddProject.jsx";
import AdminPage from "./admin/Admin.jsx";
import EditProject from "./admin/EditProject.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painting" element={<Painting />} />
        {/* <Route path="/garment" element={<Garment />} /> */}
        <Route path="/music" element={<Music />} />
        <Route path="/textile" element={<Textile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/details/:id" element={<ProjectDetail />} />
        <Route path="/series/:id" element={<Series />} />
        <Route path="/:id" element={<Series />} />

        <Route path="/admin" element={<Login />} />

        <Route
          path="/admin/home"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/addproject"
          element={
            <PrivateRoute>
              <AddProject />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/edit-project/:id"
          element={
            <PrivateRoute>
              <EditProject />
            </PrivateRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
