import { ArrowRight, Check, Wand2, Target, Users, LineChart, Twitter, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Content Generation',
    description: 'Generate engaging posts tailored to your brand voice and audience.',
  },
  {
    icon: Target,
    title: 'Smart Optimization',
    description: 'AI-powered suggestions for hashtags, captions, and posting times.',
  },
  {
    icon: Users,
    title: 'Audience Insights',
    description: 'Deep analytics into audience behavior and content performance.',
  },
  {
    icon: LineChart,
    title: 'Performance Analytics',
    description: 'Real-time tracking and predictive analytics for your strategy.',
  },
];

const platforms = [
  { icon: Twitter, name: 'Twitter' },
  { icon: Linkedin, name: 'LinkedIn' },
  { icon: Facebook, name: 'Facebook' },
  { icon: Instagram, name: 'Instagram' },
  { icon: MessageCircle, name: 'Bluesky' },
];

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              style={{
                background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Socialway AI
            </h1>
            <img
              src="/socialway-icon.svg"
              alt=""
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
              style={{ borderRadius: '30%' }}
            />
          </div>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Create, schedule, and grow your social media presence with the power of AI.
          </p>

          <a
            href="https://hub.socialway.ai"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
            }}
          >
            Get Started Free
            <ArrowRight size={20} />
          </a>

          {/* Platforms */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400 mb-4">Works with your favorite platforms</p>
            <div className="flex items-center justify-center gap-8">
              {platforms.map(({ icon: Icon, name }) => (
                <div key={name} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Icon size={24} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to grow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful AI tools designed to save you time and maximize your social media impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                  }}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24" id="pricing">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600">
              Start free. Upgrade when you're ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Starter</h3>
              <p className="text-gray-500 text-sm mb-6">For individuals getting started</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">Free</div>
              <ul className="space-y-3 mb-8">
                {['5 AI posts/month', 'Basic analytics', 'Email support'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <Check size={18} className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://hub.socialway.ai"
                className="block w-full py-3 text-center rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Growth */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-500 shadow-xl relative">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-medium"
                style={{
                  background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                }}
              >
                Popular
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Growth</h3>
              <p className="text-gray-500 text-sm mb-6">For growing businesses</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $24.99<span className="text-base font-normal text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Unlimited AI posts', 'Advanced analytics', 'Priority support', 'Team collaboration', 'API access'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <Check size={18} className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://hub.socialway.ai"
                className="block w-full py-3 text-center rounded-full text-white font-medium transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                }}
              >
                Get Started
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-6">For large organizations</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $49.99<span className="text-base font-normal text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Custom AI models', 'Dedicated support', 'Advanced security', 'White label', 'SLA guarantee'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                    <Check size={18} className="text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://hub.socialway.ai"
                className="block w-full py-3 text-center rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            14-day free trial on all plans. No credit card required.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to grow your social presence?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of creators and businesses using Socialway AI.
          </p>
          <a
            href="https://hub.socialway.ai"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
              boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
            }}
          >
            Start Free Trial
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
