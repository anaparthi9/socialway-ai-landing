import {
  ArrowRight,
  Check,
  Sparkles,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Shield,
  Clock,
  Zap,
  Users,
  ChevronDown,
  ChevronUp,
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

// FAQ data
const faqs = [
  {
    question: 'What platforms does SocialWay.ai support?',
    answer: 'SocialWay.ai supports 5 major platforms: LinkedIn, X (Twitter), Facebook, Instagram, and Bluesky. You can create optimized content for each platform and publish directly from our interface.',
  },
  {
    question: 'Is the beta really free?',
    answer: 'Yes! During our beta period, you get free tokens to try all features. No credit card required to sign up. We want you to experience the value before committing.',
  },
  {
    question: 'How quickly can I get access?',
    answer: 'Most beta signups are approved within 24 hours. You\'ll receive an email with your login credentials and getting started guide.',
  },
  {
    question: 'What makes SocialWay.ai different?',
    answer: 'Unlike generic AI tools, SocialWay.ai is built specifically for social media. Our AI understands platform-specific best practices, generates matching visuals, and gives you publish-ready content in a structured format.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp size={20} className="text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export function GetStarted() {
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

      {/* Hero Section - Above the Fold */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* What is SocialWay.ai? */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            AI-Powered Software for Creating{' '}
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
          <div className="flex items-center justify-center gap-3 mb-6">
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
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Built for <span className="font-semibold text-gray-900">individuals and teams</span> who want{' '}
            <span className="text-purple-600 font-medium">clarity</span>,{' '}
            <span className="text-purple-600 font-medium">consistency</span>, and{' '}
            <span className="text-purple-600 font-medium">control</span>.
          </p>

          {/* What should I do next? - Primary CTA */}
          <div className="mb-8">
            <a
              href="https://hub.socialway.ai"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 4px 25px rgba(99, 102, 241, 0.4)',
              }}
            >
              <Sparkles size={20} />
              Join the Beta
              <ArrowRight size={20} />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
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
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5</div>
              <div className="text-sm text-gray-500">Platforms Supported</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">60s</div>
              <div className="text-sm text-gray-500">Average Post Creation</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-500">Industries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-20">
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
                <Sparkles size={24} className="text-purple-600" />
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
                <Zap size={24} className="text-blue-600" />
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
      <section className="py-16 bg-gray-50">
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

      {/* Beta Benefits */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
                Limited Beta Access
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Why Join the Beta?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Be among the first to experience AI-powered social media content creation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Free tokens to get started</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Early adopter pricing locked in</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Direct access to our team</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <Check size={20} className="text-green-400 flex-shrink-0" />
                <span>Shape the product roadmap</span>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://hub.socialway.ai"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-gray-900 font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
              >
                <Sparkles size={20} className="text-purple-600" />
                Join the Beta Now
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="divide-y divide-gray-100 px-6">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Join the beta and start creating professional, publish-ready content in minutes.
          </p>
          <a
            href="https://hub.socialway.ai"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
              boxShadow: '0 4px 25px rgba(99, 102, 241, 0.4)',
            }}
          >
            <Sparkles size={20} />
            Join the Beta
            <ArrowRight size={20} />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Free tokens included • Cancel anytime
          </p>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-gray-100">
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
