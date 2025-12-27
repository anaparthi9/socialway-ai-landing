import { ArrowRight, Sparkles, Check, Twitter, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';

export function Home() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <Sparkles size={16} />
              AI-Powered Social Media Management
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Create. Schedule. Grow.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your social media presence with AI-powered content creation, analytics, and automation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://hub.socialway.ai"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Start Free Trial
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Platform Icons */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <div className="flex items-center gap-2 text-gray-500">
                <Twitter size={20} />
                <span className="text-sm">Twitter</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Facebook size={20} />
                <span className="text-sm">Facebook</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Instagram size={20} />
                <span className="text-sm">Instagram</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <MessageCircle size={20} />
                <span className="text-sm">Bluesky</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">50K+</div>
              <div className="text-gray-600 mt-1">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">1M+</div>
              <div className="text-gray-600 mt-1">Posts Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">23%</div>
              <div className="text-gray-600 mt-1">Engagement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">12hrs</div>
              <div className="text-gray-600 mt-1">Time Saved/Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-4">
              <Sparkles size={16} />
              AI-Powered Content Creation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Create Content That Converts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI understands your brand voice and audience preferences to generate engaging content that drives results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'AI Content Generation',
                description: 'Generate engaging social media content tailored to your brand voice.',
                stats: ['1000+ Posts Generated', '+187% Engagement Rate']
              },
              {
                title: 'Smart Optimization',
                description: 'AI-powered suggestions for hashtags, captions, and posting times.',
                stats: ['+245% Reach Increase', '+89% Click-through Rate']
              },
              {
                title: 'Audience Analysis',
                description: 'Deep insights into your audience behavior and content performance.',
                stats: ['+143% Audience Growth', '94% Retention Rate']
              },
              {
                title: 'Performance Analytics',
                description: 'Real-time tracking and predictive analytics for your strategy.',
                stats: ['1M+ Data Points', '99.9% Accuracy Rate']
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Sparkles className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.stats.map((stat, i) => (
                    <div key={i} className="text-sm font-medium text-purple-600">{stat}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
              <Sparkles size={16} />
              Choose Your Growth Path
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scale Your Social Presence
            </h2>
            <p className="text-xl text-gray-600">
              Start free and scale as you grow. No credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-4">Perfect for exploring AI-driven marketing</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">Free</div>
              <ul className="space-y-3 mb-8">
                {['Basic Analytics Dashboard', 'Social Media Integration', 'Content Suggestions', 'Email Support', '5 AI-Generated Posts/month'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://hub.socialway.ai"
                className="block w-full py-3 text-center rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
              >
                Start Free Trial
              </a>
            </div>

            {/* Growth Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-purple-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $24.99<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Advanced Analytics', 'Custom Branding', 'Priority Support', 'Unlimited AI Posts', 'Team Collaboration', 'Competitor Analysis', 'API Access'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://hub.socialway.ai"
                className="block w-full py-3 text-center rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-4">For large-scale operations</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">
                $49.99<span className="text-lg font-normal text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {['Custom AI Models', 'Dedicated Support', 'Advanced Security', 'Custom Integrations', 'Unlimited Team Members', 'White Label Solutions', 'SLA Guarantee'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <Check size={20} className="text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://hub.socialway.ai"
                className="block w-full py-3 text-center rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              24/7 support
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-green-500" />
              No credit card required
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of creators and businesses using SocialWay.ai to grow their social presence.
          </p>
          <a
            href="https://hub.socialway.ai"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Start Your Free Trial
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
