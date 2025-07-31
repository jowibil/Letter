import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Eye, EyeOff, KeyRound, House } from 'lucide-react';

interface LoginData{
  email: string;
  password: string;
  rememberMe: boolean;
}
interface LoginErrors{
  email?: string;
  password?: string;
}

function LoginPage() {
  const [form, setForm] = useState<LoginData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();


  const validateForm = () => {
    const newErrors: LoginErrors = {};

    if(!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!form.password) {
      newErrors.password = "Password is required!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[e.target.name as keyof LoginErrors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      if (err.response?.status === 401) {
        toast.error("Invalid email or password");
        setErrors({
          email: "Invalid credentials",
          password: "Invalid credentials"
        });
      } else {
        toast.error(err.response?.data?.message || 'Login failed');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
      <div className="absolute top-3/5 right-12 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-ping"></div>

      {/* Login Card */}
      <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10">
        <Link to="/" className='block w-fit'><House className="mb-3" size={23} /></Link>

        <KeyRound className="m-auto" size={30}/>
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
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${errors.email
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-200/50 focus:ring-[#FF4C00]"
                }`}
              placeholder="Enter your email"
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${errors.password
                ? "border-red-300 focus:ring-red-500"
                : "border-gray-200/50 focus:ring-[#FF4C00]"
                }`}
              placeholder="Enter your password"
              disabled={isSubmitting}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
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
                id='rememberMe'
                type="checkbox"
                name="rememberMe"
                checked={form.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 rounded focus:ring-[#FF4C00] focus:ring-2"
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
            className="w-full rounded-lg px-3.5 py-3 overflow-hidden relative group cursor-pointer font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4C00] to-[#8B0000] rounded-lg"></div>
            <div className="absolute inset-[2px] bg-slate-50 rounded-md transition-colors duration-300 group-hover:bg-transparent"></div>
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-30 bg-gradient-to-r from-[#FF4C00] to-[#8B0000] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-base font-semibold text-black transition duration-300 group-hover:text-white ease z-10">
              {isSubmitting ?
                <div className='flex items-center justify-center'>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in...
                </div>
                : (
                  'Login'
                )}
            </span>  
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?
            <span
              className="text-[#FF4C00] hover:underline font-medium transition-colors duration-200 ml-1 cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
