import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Mail } from 'lucide-react';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../components/ui/input-otp';

export default function OTPPage() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(60);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { name, email, password } = state || {};

  useEffect(() => {
    let interval: any = null;
    if (resendCooldown > 0) {
      interval = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendCooldown]);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error('Missing signup details. Please restart the signup process.');
      return;
    }

    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/auth/signup', {
        name,
        email,
        password,
        code,
      });
      toast.success('Signup successful!');
      navigate('/login');
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error('Email not available. Please go back and sign up again.');
      return;
    }

    try {
      setLoading(true);
      await axios.post('http://localhost:5000/api/auth/send-code', { email });
      toast.success('Verification code resent!');
      setResendCooldown(60);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Failed to resend code');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center relative overflow-hidden p-2">
      {/* Background Circles */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full opacity-60 blur-sm animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 blur-sm animate-bounce"></div>
      <div className="absolute top-3/5 right-12 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-60 blur-sm animate-ping"></div>

      <div className="bg-white/25 backdrop-blur-xl border border-white/30 rounded-3xl p-10 w-full max-w-md shadow-2xl relative z-10">
        <Mail className="m-auto" />
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-2">Email Verification</h1>
        <p className="text-gray-600 text-center mb-8">Welcome to SyntaxRush!</p>
        <p className="text-sm mb-4 text-center md:text-base">
          A verification code has been sent to <b>{email || 'your email'}</b>
        </p>
        <p className="text-sm mb-8 md:text-base text-center">
          Please check your inbox and enter the code below. You can request a new one after: <b>{resendCooldown}s</b>
        </p>

        <form onSubmit={handleVerify}>
            <InputOTP maxLength={6} value={code} onChange={setCode}>
            <InputOTPGroup className="justify-center mx-auto">
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
            </InputOTPGroup>
            </InputOTP>


          <button
            type="submit"
            disabled={loading}
            className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl transition-all"
          >
            {loading ? 'Verifying...' : 'Verify Code'}
          </button>

          <button
            type="button"
            onClick={handleResend}
            disabled={loading || resendCooldown > 0}
            className="w-full mt-3  text-pink-500 hover:underline text-sm"
          >
            {resendCooldown > 0 ? `Resend in ${resendCooldown}s` : 'Resend Verification Code'}
          </button>

          <div className="flex items-center justify-evenly mt-8 text-sm md:text-base">
            <button type="button" onClick={() => navigate('/signup')} className="text-pink-500 hover:underline">
              Change Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
