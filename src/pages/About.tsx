import { Link } from 'react-router-dom';
import {
  Sparkles,
  Target,
  Users,
  Zap,
  Heart,
  ArrowRight,
  Lightbulb,
  Shield,
  Globe,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MessageCircle,
} from 'lucide-react';

// Platforms supported
const platforms = [
  { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2' },
  { icon: Twitter, name: 'Twitter/X', color: '#000000' },
  { icon: Facebook, name: 'Facebook', color: '#1877F2' },
  { icon: Instagram, name: 'Instagram', color: '#E4405F' },
  { icon: MessageCircle, name: 'Bluesky', color: '#0085FF' },
];

// Company values
const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We constantly push the boundaries of what\'s possible with AI, bringing cutting-edge technology to businesses of all sizes.',
  },
  {
    icon: Users,
    title: 'User-Centric Design',
    description: 'Every feature we build starts with understanding our users\' needs and challenges in social media marketing.',
  },
  {
    icon: Zap,
    title: 'Simplicity',
    description: 'We make powerful AI accessible and easy to use, so you can focus on what matters - growing your business.',
  },
  {
    icon: Shield,
    title: 'Trust & Quality',
    description: 'We prioritize content quality and platform compliance, ensuring your brand is always represented professionally.',
  },
];

// What we solve
const problems = [
  {
    problem: 'Hours spent writing posts',
    solution: 'AI generates content in under 60 seconds',
  },
  {
    problem: 'Inconsistent posting schedule',
    solution: 'Content calendar with scheduling',
  },
  {
    problem: 'Expensive design tools',
    solution: 'AI-generated images included',
  },
  {
    problem: 'Writer\'s block',
    solution: 'Just describe what you want',
  },
  {
    problem: 'Platform-specific formatting',
    solution: 'Auto-optimized for each platform',
  },
  {
    problem: 'Off-brand content',
    solution: 'Industry-tailored AI with your guidelines',
  },
];

export function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#3b82f6' }}
            >
              <Sparkles size={16} />
              About Socialway
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Making Social Media{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Effortless
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to democratize social media marketing by making AI-powered content creation accessible to businesses of all sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Socialway was born from a simple observation: businesses know their products and services better than anyone, but translating that expertise into engaging social media content is a constant struggle.
                </p>
                <p>
                  We watched small business owners spend hours crafting a single LinkedIn post. We saw marketing teams juggling multiple platforms with inconsistent messaging. We noticed the gap between what businesses wanted to say and what they actually posted.
                </p>
                <p>
                  So we built Socialway - an AI-powered platform that understands your industry, learns your voice, and helps you create professional social media content in minutes, not hours.
                </p>
                <p className="font-medium text-gray-900">
                  Today, Socialway helps businesses across 50+ industries tell their stories on social media, one post at a time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Problem We Solve</h3>
              <div className="space-y-4">
                {problems.map(({ problem, solution }) => (
                  <div key={problem} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                      <span className="text-red-500 text-xs font-bold">-</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 line-through text-sm">{problem}</p>
                      <p className="text-gray-900 font-medium text-sm flex items-center gap-2">
                        <span className="text-green-500">+</span> {solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#3b82f6' }}
            >
              <Target size={16} />
              Our Mission
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Empowering Every Business to Have a Voice on Social Media
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We believe that effective social media marketing shouldn't require a big budget, a dedicated team, or hours of your time. With the right AI tools, any business can create content that connects, engages, and converts.
            </p>
            <div
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
            >
              <Heart className="text-white" size={24} />
              <span className="text-white font-medium">Built for businesses who do great work but struggle to talk about it</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Publish Everywhere
            </h2>
            <p className="text-lg text-gray-600">
              Create content optimized for all major social platforms
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {platforms.map(({ icon: Icon, name, color }) => (
              <div key={name} className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl">
                <Icon size={28} style={{ color }} />
                <span className="font-medium text-gray-900">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#3b82f6' }}
              >
                <Globe size={16} />
                Industry Expertise
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                We Speak Your Industry's Language
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI isn't generic. It's trained to understand the unique terminology, compliance requirements, and audience expectations of over 50 industries - from healthcare to hospitality, legal to logistics.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're a solar installer explaining net metering, a physical therapist sharing exercise tips, or a restaurant promoting seasonal specials, Socialway creates content that sounds like it was written by an industry expert - because our AI was trained by them.
              </p>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
              >
                See all supported industries
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                'Renewable Energy', 'Healthcare', 'Real Estate',
                'Professional Services', 'Retail', 'Education',
                'Legal', 'Marketing', 'Food & Hospitality',
                'Non-Profit', 'Travel', 'Manufacturing'
              ].map((industry) => (
                <div
                  key={industry}
                  className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all"
                >
                  <span className="text-sm font-medium text-gray-700">{industry}</span>
                </div>
              ))}
              <div
                className="col-span-3 rounded-xl p-4 text-center text-white font-medium"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
              >
                + 40 more industries
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join businesses across industries who are saving hours every week with AI-powered content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hub.socialway.ai"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
              }}
            >
              <Zap size={20} />
              Start Creating Free
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              Get In Touch
              <ArrowRight size={20} />
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required to start
          </p>
        </div>
      </section>
    </div>
  );
}
