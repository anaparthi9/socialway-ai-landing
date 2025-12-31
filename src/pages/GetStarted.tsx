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
} from 'lucide-react';
import { useState } from 'react';

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
      // Redirect to hub.socialway.ai with signup data
      const params = new URLSearchParams({
        name: formData.fullName,
        email: formData.email,
        source: 'landing-page',
      });
      window.location.href = `https://hub.socialway.ai/signup?${params.toString()}`;
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
          <a href="/" className="flex items-center gap-2">
            <img
              src="/socialway-icon.svg"
              alt="SocialWay.ai"
              className="w-8 h-8"
              style={{ borderRadius: '20%' }}
            />
            <span className="text-xl font-bold text-gray-900">SocialWay.ai</span>
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
                  <span>Free tokens included</span>
                </div>
              </div>
            </div>

            {/* Right Column - Signup Form */}
            <div id="signup-form" className="scroll-mt-24">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Beta</h2>
                  <p className="text-gray-600">Create your free account to get started</p>
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
                        Create Free Account
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

                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="https://hub.socialway.ai/login" className="text-purple-600 font-medium hover:underline">
                      Sign in
                    </a>
                  </p>
                </div>
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
            Get Started Free
            <ArrowRight size={20} />
          </button>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Free tokens included
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img
                src="/socialway-icon.svg"
                alt="SocialWay.ai"
                className="w-6 h-6"
                style={{ borderRadius: '20%' }}
              />
              <span className="text-sm text-gray-500">© 2025 SocialWay.ai</span>
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
