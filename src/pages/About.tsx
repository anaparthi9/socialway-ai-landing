import { Sparkles, Target, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              <Sparkles size={16} />
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Creators with <span className="gradient-text">AI</span>
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to democratize social media marketing by making AI-powered content creation accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4">
                At SocialWay.ai, we believe that every business, creator, and individual deserves access to powerful marketing tools that were once reserved for large enterprises.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Our AI-powered platform transforms the way you create, schedule, and analyze social media content, saving you hours of work while delivering better results.
              </p>
              <p className="text-lg text-gray-600">
                We're committed to continuous innovation, ensuring our users always have access to the latest AI technologies and marketing strategies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-blue-100">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1M+</div>
                  <div className="text-blue-100">Posts Created</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5</div>
                  <div className="text-blue-100">Platforms Supported</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible with AI, bringing cutting-edge technology to our users.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">User-Centric</h3>
              <p className="text-gray-600">
                Every feature we build starts with understanding our users' needs and challenges in social media marketing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Simplicity</h3>
              <p className="text-gray-600">
                We make powerful AI accessible and easy to use, so you can focus on what matters - growing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Join the SocialWay.ai Community
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start creating amazing social media content with the power of AI.
          </p>
          <a
            href="https://hub.socialway.ai"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-bg text-white font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get Started Free
          </a>
        </div>
      </section>
    </div>
  );
}
