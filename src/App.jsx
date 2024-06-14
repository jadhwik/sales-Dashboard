import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/AuthContext";
import LoginPage from "./Components/Login";
import RegisterPage from "./Components/RegisterForm";
// import CustomerDetailsPage from "./Components/customerDetails";
import DashboardPage from "./Components/Dash";
import ProtectedRoute from "./Components/protectedRoute";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/dashboard" element={<DashboardPage />}></Route>

          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
