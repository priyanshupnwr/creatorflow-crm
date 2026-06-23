import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Leads from "../pages/Leads/Leads";
import Pipeline from "../pages/Pipeline/Pipeline";
import Profile from "../pages/Profile/Profile";

import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;