import { Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Enrollment from "../pages/Enrollment";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
