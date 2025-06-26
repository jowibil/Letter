import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginForm from './pages/Login';
import SignUp from './pages/SignUp';
import OTPPage  from './pages/OneTimePassword';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/otp' element={<OTPPage />} />
      </Routes>
    </BrowserRouter>
  );
}