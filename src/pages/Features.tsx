import { Link } from 'react-router-dom';
import {
  MessageSquare,
  Eye,
  Send,
  Calendar,
  Building2,
  FileText,
  Sparkles,
  Zap,
  Image,
  LayoutGrid,
  Newspaper,
  Palette,
  Target,
  Globe,
  ArrowRight,
  Check,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MessageCircle,
  Leaf,
  Stethoscope,
  Building,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Scale,
  Megaphone,
  Utensils,
  Heart,
  Plane,
  Home,
  Wrench,
  TrendingUp,
  Users,
} from 'lucide-react';

// Core features
const coreFeatures = [
  {
    icon: MessageSquare,
    title: 'AI Chat Interface',
    description: 'Have a natural conversation with AI to create your content. Simply describe what you want - a product announcement, industry insight, or company update - and watch it come to life.',
    benefits: ['Natural language input', 'Context-aware responses', 'Iterative refinement'],
  },
  {
    icon: Eye,
    title: 'Live Preview Panel',
    description: 'See exactly how your posts will appear on each platform before publishing. Preview LinkedIn articles, Twitter threads, Instagram posts, and more in real-time.',
    benefits: ['Platform-accurate previews', 'Real-time updates', 'Mobile & desktop views'],
  },
  {
    icon: Send,
    title: 'One-Click Publishing',
    description: 'Connect your social accounts and publish directly from Socialway. No more copy-pasting or switching between apps.',
    benefits: ['Direct API integration', 'Multi-platform publishing', 'Scheduled posting'],
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    description: 'Plan your content strategy with an intuitive calendar view. See all your scheduled, draft, and published posts at a glance.',
    benefits: ['Drag-and-drop scheduling', 'Visual planning', 'Content pipeline tracking'],
  },
  {
    icon: Building2,
    title: 'Industry-Tailored AI',
    description: 'Our AI understands your industry\'s language, compliance requirements, and audience expectations. Get content that sounds like an expert wrote it.',
    benefits: ['50+ industry presets', 'Compliance awareness', 'Jargon & terminology'],
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    description: 'Upload your company documents, case studies, and brand guidelines. The AI references your materials to create accurate, on-brand content.',
    benefits: ['Document upload', 'Brand voice matching', 'Fact-based content'],
  },
];

// Content types
const contentTypes = [
  {
    icon: MessageSquare,
    title: 'Text Posts',
    description: 'Engaging captions and posts optimized for each platform\'s algorithm and audience expectations.',
    tokens: '1 token',
  },
  {
    icon: Image,
    title: 'AI-Generated Images',
    description: 'Custom visuals created to match your content, with your brand colors and style preferences.',
    tokens: '3 tokens',
  },
  {
    icon: LayoutGrid,
    title: 'Carousel Posts',
    description: 'Multi-slide educational content, product showcases, or step-by-step guides.',
    tokens: '10 tokens',
  },
  {
    icon: Newspaper,
    title: 'News Summaries',
    description: 'AI searches and summarizes the latest industry news, ready to share with your audience.',
    tokens: '2 tokens',
  },
];

// Platforms
const platforms = [
  { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2', description: 'Professional content, articles, and thought leadership' },
  { icon: Twitter, name: 'Twitter/X', color: '#000000', description: 'Threads, quick updates, and engagement posts' },
  { icon: Facebook, name: 'Facebook', color: '#1877F2', description: 'Community posts, events, and business updates' },
  { icon: Instagram, name: 'Instagram', color: '#E4405F', description: 'Visual content, stories, and reels captions' },
  { icon: MessageCircle, name: 'Bluesky', color: '#0085FF', description: 'Decentralized social, authentic engagement' },
];

// Industries
const industries = [
  {
    icon: Leaf,
    name: 'Renewable Energy',
    description: 'Communicate complex sustainability initiatives and technical achievements in accessible, engaging ways.',
    examples: ['Solar installation announcements', 'Energy savings case studies', 'Sustainability milestones'],
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    description: 'Create HIPAA-aware content that builds trust while educating patients and the community.',
    examples: ['Health tips and awareness', 'Provider introductions', 'Service announcements'],
  },
  {
    icon: Building,
    name: 'Real Estate',
    description: 'Showcase properties and market expertise with posts that drive inquiries and build authority.',
    examples: ['Property listings', 'Market updates', 'Neighborhood guides'],
  },
  {
    icon: Briefcase,
    name: 'Professional Services',
    description: 'Establish thought leadership and showcase expertise in law, accounting, consulting, and more.',
    examples: ['Industry insights', 'Case study highlights', 'Team spotlights'],
  },
  {
    icon: ShoppingBag,
    name: 'Retail & E-commerce',
    description: 'Create product posts that convert, seasonal campaigns, and customer-focused content.',
    examples: ['Product launches', 'Sale announcements', 'Customer testimonials'],
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Engage students, parents, and the community with informative and inspiring content.',
    examples: ['Program highlights', 'Student achievements', 'Enrollment campaigns'],
  },
  {
    icon: Scale,
    name: 'Legal',
    description: 'Build authority with compliant, professional content that educates without giving advice.',
    examples: ['Legal updates', 'Practice area education', 'Firm news'],
  },
  {
    icon: Megaphone,
    name: 'Marketing & PR',
    description: 'Scale your content production for clients with consistent quality across campaigns.',
    examples: ['Campaign content', 'Client spotlights', 'Industry trends'],
  },
  {
    icon: Palette,
    name: 'Creative & Design',
    description: 'Showcase your portfolio and creative process with visually compelling content.',
    examples: ['Project showcases', 'Behind-the-scenes', 'Design inspiration'],
  },
  {
    icon: Utensils,
    name: 'Food & Hospitality',
    description: 'Create appetite-driving content that fills tables and builds loyal customers.',
    examples: ['Menu features', 'Chef spotlights', 'Event promotions'],
  },
  {
    icon: Heart,
    name: 'Non-Profit',
    description: 'Tell your impact story with mission-driven messaging that inspires action and donations.',
    examples: ['Impact stories', 'Volunteer spotlights', 'Campaign launches'],
  },
  {
    icon: Plane,
    name: 'Travel & Tourism',
    description: 'Inspire wanderlust with destination content that drives bookings and engagement.',
    examples: ['Destination guides', 'Travel tips', 'Package promotions'],
  },
  {
    icon: Home,
    name: 'Home Services',
    description: 'Build trust with before/after content, tips, and seasonal service reminders.',
    examples: ['Project showcases', 'Maintenance tips', 'Seasonal promotions'],
  },
  {
    icon: Wrench,
    name: 'Manufacturing',
    description: 'Humanize your brand with behind-the-scenes content and industry expertise.',
    examples: ['Process showcases', 'Innovation highlights', 'Team features'],
  },
  {
    icon: TrendingUp,
    name: 'Finance & Insurance',
    description: 'Demystify complex topics with compliant, educational content that builds trust.',
    examples: ['Financial tips', 'Market insights', 'Product education'],
  },
  {
    icon: Users,
    name: 'HR & Recruiting',
    description: 'Attract top talent with employer branding content and company culture posts.',
    examples: ['Job postings', 'Culture highlights', 'Employee spotlights'],
  },
];

// Customization options
const customizationOptions = [
  {
    icon: Palette,
    title: 'Tone Selection',
    description: 'Choose from professional, friendly, empathetic, bold, inspirational, and more to match your brand voice.',
  },
  {
    icon: Target,
    title: 'Call-to-Action Options',
    description: 'Customize CTAs from soft engagement prompts to strong conversion drivers, or remove them entirely.',
  },
  {
    icon: FileText,
    title: 'Brand Guidelines',
    description: 'Upload your style guide, and the AI will follow your messaging rules, tone, and terminology.',
  },
  {
    icon: Globe,
    title: 'AI Notes',
    description: 'Add custom instructions that the AI references for every post - like always mentioning your tagline.',
  },
];

export function Features() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#3b82f6' }}
            >
              <Sparkles size={16} />
              Platform Features
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Everything You Need to{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Scale Your Social
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From AI-powered content creation to one-click publishing, Socialway gives you the complete toolkit for modern social media management.
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
                Start Creating Free
                <ArrowRight size={20} />
              </a>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Powerful tools designed to make social media content creation effortless and effective.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map(({ icon: Icon, title, description, benefits }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                >
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <ul className="space-y-2">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check size={16} className="text-green-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From quick text updates to stunning AI-generated visuals and multi-slide carousels.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map(({ icon: Icon, title, description, tokens }) => (
              <div
                key={title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                >
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
                  {tokens}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Publish Everywhere
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect your accounts and publish directly to all major social platforms.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {platforms.map(({ icon: Icon, name, color, description }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all text-center"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={28} style={{ color }} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#3b82f6' }}
            >
              <Building2 size={16} />
              Industry Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Your Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI understands the unique language, compliance requirements, and audience expectations of 50+ industries.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map(({ icon: Icon, name, description, examples }) => (
              <div
                key={name}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                  >
                    <Icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900">{name}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{description}</p>
                <div className="space-y-1">
                  {examples.map((example) => (
                    <div key={example} className="flex items-center gap-2 text-xs text-gray-500">
                      <div className="w-1 h-1 rounded-full bg-purple-400" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Brand, Your Voice
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Customize every aspect of your content generation to match your brand identity and communication style.
              </p>

              <div className="space-y-6">
                {customizationOptions.map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                      <p className="text-gray-600 text-sm">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300 w-20">Tone:</span>
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">Professional</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300 w-20">CTA:</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">Soft Engagement</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300 w-20">Industry:</span>
                  <span className="text-sm text-gray-200">Healthcare &rarr; Medical Practice</span>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300 block mb-2">AI Notes:</span>
                  <p className="text-sm text-gray-200 italic">"Always emphasize patient-centered care. Mention we've been serving the community for 25 years..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Banner */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-medium leading-relaxed">
            "Stop staring at a blank screen. Just tell the AI what you want to say, and watch your ideas become professional posts."
          </p>
          <p className="mt-6 text-gray-400 text-lg">
            From idea to published post — powered by AI that understands your industry
          </p>
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
              to="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              View Pricing
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
