import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import Dashboard from "../pages/Dashboard/Dashboard";
import Leads from "../pages/Leads/Leads";
import Pipeline from "../pages/Pipeline/Pipeline";
import Profile from "../pages/Profile/Profile";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../pages/auth/ProtectedRoute";

function AppRoutes() {
  const { token } = useContext(AuthContext);

  return (
    <MainLayout>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            token ? <Navigate to="/" replace /> : <Login />
          }
        />

        <Route
          path="/register"
          element={
            token ? <Navigate to="/" replace /> : <Register />
          }
        />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />

        <Route
          path="/pipeline"
          element={
            <ProtectedRoute>
              <Pipeline />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Unknown Route */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </MainLayout>
  );
}

export default AppRoutes;