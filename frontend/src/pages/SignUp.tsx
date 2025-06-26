import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from "lucide-react";
import { UserRound } from 'lucide-react';



interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmpassword: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmpassword?: string;
}

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
        name: '',
        email: '',
        password: '',
        confirmpassword: '',
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Username required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'E-Mail is required';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (!formData.confirmpassword) {
            newErrors.confirmpassword = 'Confirm your password';
        } else if (formData.confirmpassword !== formData.password) {
            newErrors.confirmpassword = "The passwords you entered do not match";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    // SUBMIT SA FORM
    const handleSubmit = async () => {

        if (!validateForm()) return;

        setIsSubmitting(true);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Creation of account successful:', formData);
            alert('Login successful!');
        } catch (error) {
            console.error('Login failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    };


    // Path to pages
    const navigate = useNavigate();
    const handleRedirectToLogin = () => {
        navigate('/login');
    };
    const handleRedirectToOTP = () => {
        navigate('/otp');
    }


    // SHOW or HIDE Password
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center p-1.5 justify-center relative overflow-hidden">
            {/* Background circles */}
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
            <div className="absolute top-3/5 right-12 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-ping"></div>

            {/* Login Background */}
            <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10">

                <UserRound className='m-auto'/>
                <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Create Account</h1>
                <p className="text-gray-600 text-center mb-8">Welcome to SyntaxRush!</p>

                <div className="space-y-6">

                    {/* Name or Username */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${errors.name
                                ? 'border-red-300 focus:ring-red-500'
                                : 'border-gray-200/50 focus:ring-purple-500'
                                }`}
                            placeholder="Enter your name"
                        />
                        {errors.name && (
                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className='relative'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${errors.password
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
                            {showPassword ? <Eye className='w-5 h-5' /> : <EyeOff className='w-5 h-5' />}
                        </button>

                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div className='relative'>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmpassword"
                            name="confirmpassword"
                            value={formData.confirmpassword}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800 placeholder:text-sm ${errors.password
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
                            {showConfirmPassword ? <Eye className='w-5 h-5' /> : <EyeOff className='w-5 h-5' />}
                        </button>
                        {errors.confirmpassword && (
                            <p className="mt-1 text-sm text-red-600">{errors.confirmpassword}</p>
                        )}
                    </div>


                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            name='email'
                            // value
                            // onchange
                            className={`w-full px-4 py-3 bg-gray-100/50 border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent backdrop-blur-sm transition-all duration-200 text-gray-800  placeholder:text-sm
                                ${errors.email
                                    ? 'border-red-300 focus:ring-red-500'
                                    : 'border-gray-200/50 focus:ring-purple-500'
                                }`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className='mt-1 text-sm text-red-600'>{errors.email}</p>
                        )}
                    </div>


                    {/* Login Button */}
                    <button
                        onClick={handleRedirectToOTP}
                        disabled={isSubmitting}
                        className={`w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transform transition-all duration-200 shadow-lg ${isSubmitting
                            ? 'opacity-70 cursor-not-allowed'
                            : 'hover:from-pink-600 hover:to-red-600 hover:scale-105'
                            }`}
                    >
                        {isSubmitting ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Logging in...
                            </div>
                        ) : (
                            'Sign Up'
                        )}
                    </button>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-gray-600">
                        Have an account?
                        <button
                            type="button"
                            onClick={handleRedirectToLogin}
                            className="text-pink-500 hover:text-pink-600 font-medium transition-colors duration-200 ml-1 cursor-pointer"
                        >
                            Sign In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
