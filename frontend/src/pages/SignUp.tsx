import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { UserRound, Eye, EyeOff } from 'lucide-react'; // ✅ Make sure you're using Lucide icons

function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({}); // ✅ dummy object to prevent error in conditional styling
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = form;

    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }

    const loadingToast = toast.loading('Sending verification code...');

    try {
      await axios.post('http://localhost:5000/api/auth/send-code', { email });
      toast.success('Verification code sent!', { id: loadingToast });
      navigate('/verify', { state: { name, email, password } });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to send code.', {
        id: loadingToast,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center p-1.5 justify-center relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
      <div className="absolute top-3/5 right-12 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-ping"></div>

      {/* Signup Form */}
      <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10">
        <UserRound className="m-auto" />
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h1>
        <p className="text-gray-600 text-center mb-8">Welcome to SyntaxRush!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${
                errors.name
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-200/50 focus:ring-purple-500'
              }`}
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm border-gray-200/50 focus:ring-purple-500"
              placeholder="Enter your email"
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
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${
                errors.password
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-200/50 focus:ring-purple-500'
              }`}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[52px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword" // ✅ matched to state key
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${
                errors.password
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-200/50 focus:ring-purple-500'
              }`}
              placeholder="Confirm password"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[52px] transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl transition-all"
          >
            Sign Up
          </button>

          {/* Sign In Redirect */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Have an account?
            <span
              className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200 ml-1 cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage; // ✅ correct export
