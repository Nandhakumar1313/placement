import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("isAuthenticated") ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddJobPage /></PrivateRoute>} />
        <Route path="/edit/:id" element={<PrivateRoute><EditJobPage /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
