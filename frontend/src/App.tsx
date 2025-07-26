import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import OTPPage from "./pages/OneTimePassword";
import { Toaster } from "react-hot-toast"; // ✅ Import Toaster
import ProtectedRoute from "./components/ui/protectedRoute";
import Dashboard from "./pages/Dashboard";
import CodeRunner from "./pages/Practice";
import Explore from "./pages/Explore";
import Problems from "./pages/Problems";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<OTPPage />} />
        <Route path="/practice" element={<CodeRunner />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/problems" element={<Problems />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
