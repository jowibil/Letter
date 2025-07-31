import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserRound, Eye, EyeOff, House } from "lucide-react";
import SEO from "@/components/SEO";

interface SignUpData{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpErrors{
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

function SignupPage() {
  const [form, setForm] = useState<SignUpData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error when user starts typing
    if (errors[e.target.name as keyof SignUpErrors]) {
      setErrors({ ...errors, [e.target.name]: ""});
    }
  };

  const validateForm = () => {
    const newErrors: SignUpErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email format is invalid";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const { name, email, password } = form;
    setIsLoading(true);

    const loadingToast = toast.loading("Sending verification code...");

    try {
      await axios.post("http://localhost:5000/api/auth/send-code", { email });
      toast.success("Verification code sent!", { id: loadingToast });

      // Clear form on success
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/verify", { state: { name, email, password } });

    } catch (err: any) {
      toast.error(err.response?.data?.message || "Failed to send code.", {
        id: loadingToast,
      });
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center p-1.5 justify-center relative overflow-hidden">
      <SEO title="Create Account | SyntaxRush" description="Create your account in SyntaxRush." />
      {/* Background circles */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
      <div className="absolute top-3/5 right-12 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-ping"></div>

      {/* Signup Form */}
      <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10">
        <Link to="/" className="block w-fit"><House className="mb-3" size={23}/></Link>
        <UserRound className="m-auto mb-2" size={30} />
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          Create Account
        </h1>
        <p className="text-gray-600 text-center mb-8">Welcome to SyntaxRush!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${errors.name
                  ? "border-red-300 focus:ring-red-500"
                : "border-gray-200/50 focus:ring-[#FF4C00]"
                }`}
              placeholder="Enter your name"
              disabled={isLoading}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
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
              disabled={isLoading}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm pr-12 ${errors.password
                  ? "border-red-300 focus:ring-red-500"
                : "border-gray-200/50 focus:ring-[#FF4C00]"
                }`}
              placeholder="Enter your password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-11 text-gray-500 hover:text-gray-700 disabled:opacity-50"
              disabled={isLoading}
            >
              {showPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm pr-12 ${errors.confirmPassword
                  ? "border-red-300 focus:ring-red-500"
                : "border-gray-200/50 focus:ring-[#FF4C00]"
                }`}
              placeholder="Confirm password"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-11 text-gray-500 hover:text-gray-700 disabled:opacity-50"
              disabled={isLoading}
            >
              {showConfirmPassword ? (
                <Eye className="w-5 h-5" />
              ) : (
                <EyeOff className="w-5 h-5" />
              )}
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4C00] to-[#8B0000] rounded-lg"></div>
            <div className="absolute inset-[2px] bg-slate-50 rounded-md transition-colors duration-300 group-hover:bg-transparent"></div>
            <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-30 bg-gradient-to-r from-[#FF4C00] to-[#8B0000] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-base font-semibold text-black transition duration-300 group-hover:text-white ease z-10">
              {isLoading ? "Creating Account..." : "Sign Up"}
            </span>
          </button>
          {/* Sign In Redirect */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Have an account?
            <span
              className="text-[#FF4C00] hover:underline font-medium transition-colors duration-200 ml-1 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Sign In
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;