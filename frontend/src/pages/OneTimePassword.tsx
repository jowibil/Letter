import { InputOTPForm } from "@/layouts/OTPForm"
import { Mail } from 'lucide-react';


export default function OTPPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center relative overflow-hidden p-2">

            {/* Background Circles */}
            <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
            <div className="absolute top-3/5 right-12 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-ping"></div>

            {/* OTP Background */}
            <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10">


                <Mail className="m-auto"/>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">Email Verification</h1>
                <p className="text-gray-600 text-center mb-8">Welcome to SyntaxRush!</p>
                <p className="text-sm mb-4 text-center md:text-base">A verification code has been sent to <b>Email@gmail.com</b> </p>
                <p className="text-sm mb-8 md:text-base">Please check your inbox and enter the verification code below to verify your email address.
                The code will expire in: <b>69:60</b></p>
    

                {/* OTP FORM */}
                <InputOTPForm />
                <div className="flex items-center justify-evenly mt-8 text-sm md:text-base">
                    <h3>Resend Code</h3>
                    <h3>Change Email</h3>
                </div>
            </div>
        </div>
    )

}