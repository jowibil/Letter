import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff, KeyRound } from 'lucide-react';

function LoginPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: form.email,
        password: form.password,
      });
      toast.success(res.data.message || 'Login successful!');
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Login failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here');
  };

  const CreateAccount = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
      <div className="absolute top-3/5 right-12 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-ping"></div>

      {/* Login Card */}
      <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10">
        <KeyRound className="m-auto" />
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Login</h1>
        <p className="text-gray-600 text-center mb-8">Welcome Back! Please Login To Your Account.</p>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[52px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
              />
              <span className="ml-2 text-sm text-gray-700">Remember Me</span>
            </label>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transform transition-all duration-200 shadow-lg ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-pink-600 hover:to-red-600 hover:scale-105'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Logging in...
              </div>
            ) : (
              'Login'
            )}
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <button
              type="button"
              onClick={CreateAccount}
              className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200 ml-1 cursor-pointer"
            >
              Sign Up
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
