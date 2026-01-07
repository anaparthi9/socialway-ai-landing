import {
  ArrowRight,
  Check,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Shield,
  Clock,
  Zap,
  Users,
  Eye,
  EyeOff,
  Mail,
  CheckCircle,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Provider } from '@supabase/supabase-js';

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Platform data
const platforms = [
  { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2' },
  { icon: Twitter, name: 'X', color: '#000000' },
  { icon: Facebook, name: 'Facebook', color: '#1877F2' },
  { icon: Instagram, name: 'Instagram', color: '#E4405F' },
  { icon: MessageCircle, name: 'Bluesky', color: '#0085FF' },
];

export function GetStarted() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  // Handle social login (Google, LinkedIn)
  const handleSocialLogin = async (provider: Provider) => {
    try {
      setLoadingProvider(provider);
      setError('');

      // Track conversion attempt for social signup
      if (window.gtag) {
        window.gtag('event', 'social_signup_attempt', {
          'provider': provider,
        });
      }

      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: 'https://hub.socialway.ai/auth',
          queryParams: provider === 'google' ? {
            access_type: 'offline',
            prompt: 'consent',
          } : undefined,
        },
      });

      if (oauthError) {
        console.error(`${provider} login error:`, oauthError);
        setError(oauthError.message || `Failed to sign in with ${provider}`);
        setLoadingProvider(null);
      }
      // If successful, the page will redirect to the OAuth provider
    } catch (err: any) {
      console.error(`${provider} login error:`, err);
      setError(err.message || `Failed to sign in with ${provider}`);
      setLoadingProvider(null);
    }
  };

  // Countdown and redirect after successful signup
  useEffect(() => {
    if (signupSuccess && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (signupSuccess && countdown === 0) {
      window.location.href = 'https://hub.socialway.ai/login';
    }
  }, [signupSuccess, countdown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Basic validation
    if (!formData.fullName || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create user account with Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
            source: 'landing-page',
          },
          emailRedirectTo: 'https://hub.socialway.ai',
        },
      });

      if (signUpError) {
        // Handle specific errors
        if (signUpError.message.includes('already registered')) {
          setError('This email is already registered. Please sign in instead.');
        } else {
          setError(signUpError.message);
        }
        setIsSubmitting(false);
        return;
      }

      // Track conversion in Google Ads
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17838754689/iFAqCP3kotwbEIGXl7pC',
        });
      }

      // Check if email confirmation is required
      if (data.user && !data.session) {
        // Email confirmation required - show success state
        setSignupSuccess(true);
        setIsSubmitting(false);
      } else if (data.session) {
        // User is logged in - redirect to hub immediately
        window.location.href = 'https://hub.socialway.ai';
      }
    } catch {
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header - Logo Only */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <span
              className="text-3xl font-bold tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Socialway AI
            </span>
            <img
              src="/socialway-icon.svg"
              alt=""
              className="w-11 h-11"
              style={{ borderRadius: '25%' }}
            />
          </a>
          <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
            Beta Access
          </span>
        </div>
      </header>

      {/* Hero Section with Signup Form */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Value Prop */}
            <div className="text-center lg:text-left">
              {/* What is SocialWay.ai? */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                AI-Powered Software for{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Publish-Ready
                </span>{' '}
                Social Media Content
              </h1>

              {/* Platform icons */}
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                {platforms.map(({ icon: Icon, name, color }) => (
                  <div
                    key={name}
                    className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
                    title={name}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                ))}
              </div>

              {/* Who is it for? */}
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Built for <span className="font-semibold text-gray-900">individuals and teams</span> who want{' '}
                <span className="text-purple-600 font-medium">clarity</span>,{' '}
                <span className="text-purple-600 font-medium">consistency</span>, and{' '}
                <span className="text-purple-600 font-medium">control</span>.
              </p>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-blue-500" />
                  <span>Setup in 2 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-purple-500" />
                  <span>Tokens included</span>
                </div>
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div id="signup-form" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                {signupSuccess ? (
                  // Success State
                  <div className="text-center py-6">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))' }}
                    >
                      <CheckCircle size={40} className="text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
                    <p className="text-gray-600 mb-6">
                      We've sent a confirmation email to<br />
                      <span className="font-semibold text-gray-900">{formData.email}</span>
                    </p>

                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                      <div className="flex items-center justify-center gap-2 text-blue-700 mb-2">
                        <Mail size={20} />
                        <span className="font-medium">Check your inbox</span>
                      </div>
                      <p className="text-sm text-blue-600">
                        Click the confirmation link in your email to activate your account
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 mb-4">
                      Redirecting to sign in page in <span className="font-semibold text-purple-600">{countdown}</span> seconds...
                    </div>

                    <a
                      href="https://hub.socialway.ai/login"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:scale-[1.02]"
                      style={{
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                      }}
                    >
                      Go to Sign In
                      <ArrowRight size={18} />
                    </a>
                  </div>
                ) : (
                  // Form State
                  <>
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Beta</h2>
                      <p className="text-gray-600">Create your account to get started</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {error && (
                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                          {error}
                        </div>
                      )}

                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all pr-12"
                            placeholder="Min. 8 characters"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-lg text-white font-semibold text-lg transition-all hover:scale-[1.01] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        style={{
                          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                          boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
                        }}
                      >
                        {isSubmitting ? (
                          'Creating Account...'
                        ) : (
                          <>
                            Create Account
                            <ArrowRight size={20} />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        By signing up, you agree to our{' '}
                        <a href="/terms" className="text-purple-600 hover:underline">Terms of Service</a>{' '}
                        and{' '}
                        <a href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</a>
                      </p>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-white text-gray-400">or continue with</span>
                      </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="space-y-3">
                      {/* Google */}
                      <button
                        type="button"
                        onClick={() => handleSocialLogin('google')}
                        disabled={isSubmitting || loadingProvider !== null}
                        className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200 font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loadingProvider === 'google' ? (
                          <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
                        ) : (
                          <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                          </svg>
                        )}
                        <span>Continue with Google</span>
                      </button>

                      {/* LinkedIn */}
                      <button
                        type="button"
                        onClick={() => handleSocialLogin('linkedin_oidc')}
                        disabled={isSubmitting || loadingProvider !== null}
                        className="w-full h-12 flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 hover:shadow-md transition-all duration-200 font-medium text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loadingProvider === 'linkedin_oidc' ? (
                          <div className="w-5 h-5 border-2 border-gray-300 border-t-[#0A66C2] rounded-full animate-spin" />
                        ) : (
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        )}
                        <span>Continue with LinkedIn</span>
                      </button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <a href="https://hub.socialway.ai/login" className="text-purple-600 font-medium hover:underline">
                          Sign in
                        </a>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Why Teams Choose SocialWay.ai
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}
              >
                <Zap size={24} className="text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">AI That Understands</h3>
              <p className="text-gray-600 text-sm">
                Describe your idea in plain language. Our AI generates platform-optimized content instantly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}
              >
                <Check size={24} className="text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Publish-Ready Output</h3>
              <p className="text-gray-600 text-sm">
                Get structured posts with captions, hashtags, and AI-generated images ready to publish.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}
              >
                <Users size={24} className="text-indigo-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Multi-Platform</h3>
              <p className="text-gray-600 text-sm">
                One conversation, five platforms. Optimized for LinkedIn, X, Facebook, Instagram & Bluesky.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}
              >
                <Shield size={24} className="text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Brand Consistent</h3>
              <p className="text-gray-600 text-sm">
                Upload guidelines, set your tone, and maintain consistency across all your content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Brief */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            From Idea to Post in 3 Steps
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                1
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Describe Your Idea</h3>
              <p className="text-gray-600 text-sm">
                "Write a LinkedIn post about our new product launch"
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                2
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Review & Refine</h3>
              <p className="text-gray-600 text-sm">
                See previews for each platform. Ask for edits in natural language.
              </p>
            </div>

            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                3
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Publish</h3>
              <p className="text-gray-600 text-sm">
                Post instantly or schedule for the perfect time. Track everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join the beta and start creating professional, publish-ready content in minutes.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 4px 25px rgba(99, 102, 241, 0.4)',
            }}
          >
            Get Started
            <ArrowRight size={20} />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span
                className="text-xl font-bold tracking-tight"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Socialway AI
              </span>
              <img
                src="/socialway-icon.svg"
                alt=""
                className="w-8 h-8"
                style={{ borderRadius: '25%' }}
              />
              <span className="text-sm text-gray-500 ml-2">© 2025</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-gray-700">Privacy</a>
              <a href="/terms" className="text-gray-500 hover:text-gray-700">Terms</a>
              <a href="/contact" className="text-gray-500 hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
