import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { ProjectsPage } from "./pages/ProjectsPage";
import { SolutionsPage } from "./pages/SolutionsPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/soluciones" element={<SolutionsPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
