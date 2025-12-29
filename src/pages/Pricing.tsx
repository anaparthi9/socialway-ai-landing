import { Link } from 'react-router-dom';
import {
  Check,
  Zap,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  Image,
  LayoutGrid,
  Newspaper,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

// Token packs
const tokenPacks = [
  {
    name: 'Starter',
    tokens: 50,
    price: 19,
    perToken: '0.38',
    description: 'Perfect for trying out the platform',
    features: [
      '50 tokens to use anytime',
      'All content types included',
      'All 5 platforms supported',
      'Tokens valid for 12 months',
    ],
  },
  {
    name: 'Creator',
    tokens: 200,
    price: 49,
    perToken: '0.24',
    popular: true,
    description: 'Most popular for regular content creators',
    features: [
      '200 tokens to use anytime',
      'All content types included',
      'All 5 platforms supported',
      'Tokens valid for 12 months',
      'Priority support',
    ],
  },
  {
    name: 'Pro',
    tokens: 500,
    price: 99,
    perToken: '0.20',
    description: 'For businesses scaling their content',
    features: [
      '500 tokens to use anytime',
      'All content types included',
      'All 5 platforms supported',
      'Tokens valid for 12 months',
      'Priority support',
      'Custom AI notes',
    ],
  },
  {
    name: 'Agency',
    tokens: 1500,
    price: 249,
    perToken: '0.17',
    description: 'For agencies and high-volume creators',
    features: [
      '1500 tokens to use anytime',
      'All content types included',
      'All 5 platforms supported',
      'Tokens valid for 12 months',
      'Priority support',
      'Custom AI notes',
      'Bulk content generation',
    ],
  },
];

// Token usage
const tokenUsage = [
  { icon: MessageSquare, type: 'Text Post', tokens: 1, description: 'Single platform text post' },
  { icon: Image, type: 'AI Image', tokens: 3, description: 'AI-generated custom image' },
  { icon: LayoutGrid, type: 'Carousel', tokens: 10, description: '4-6 slide carousel post' },
  { icon: Newspaper, type: 'News Summary', tokens: 2, description: 'Industry news search & summary' },
];

// FAQ items
const faqItems = [
  {
    question: 'What is a token and how does it work?',
    answer: 'Tokens are the currency you use to create content on Socialway. Different content types cost different amounts of tokens. For example, a text post costs 1 token, while an AI-generated image costs 3 tokens. You buy tokens upfront and use them whenever you want - they never expire for 12 months.',
  },
  {
    question: 'Do tokens expire?',
    answer: 'Tokens are valid for 12 months from the date of purchase. This gives you plenty of time to use them at your own pace without pressure.',
  },
  {
    question: 'Can I try Socialway for free?',
    answer: 'Yes! When you sign up, you receive free tokens to try the platform. This lets you experience the full power of AI content creation before purchasing any token packs.',
  },
  {
    question: 'Which social platforms do you support?',
    answer: 'We currently support LinkedIn, Twitter/X, Facebook, Instagram, and Bluesky. You can connect your accounts and publish directly from Socialway, or copy your content to post manually.',
  },
  {
    question: 'How does the AI understand my industry?',
    answer: 'When you set up your account, you select your industry and sub-category. Our AI is trained on industry-specific content and understands the language, compliance requirements, and audience expectations of 50+ industries. You can also add custom AI notes to further personalize the output.',
  },
  {
    question: 'Can I upload my own brand guidelines?',
    answer: 'Yes! You can upload documents like brand guidelines, style guides, and company information to your Knowledge Base. The AI references these materials to create content that matches your brand voice and follows your messaging rules.',
  },
  {
    question: 'How long does it take to create a post?',
    answer: 'Most posts are generated in under 60 seconds. You simply describe what you want in natural language, and the AI creates platform-optimized content with matching visuals. You can then refine it with follow-up instructions if needed.',
  },
  {
    question: 'What if I need help or have questions?',
    answer: 'We offer support through our in-app chat and email. Creator, Pro, and Agency customers receive priority support with faster response times.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: "Socialway uses a pay-as-you-go model with no subscriptions to cancel. You simply buy token packs when you need them. There are no recurring charges or commitments.",
  },
  {
    question: 'Is there a limit to how many posts I can create?',
    answer: 'No limits! You can create as many posts as your tokens allow. There are no daily, weekly, or monthly caps on content generation.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex items-center justify-between w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export function Pricing() {
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
              Simple Pricing
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Pay As You Go,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                No Subscriptions
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Buy tokens when you need them. No monthly commitments, no recurring charges. Tokens are valid for 12 months.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenPacks.map((pack) => (
              <div
                key={pack.name}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${
                  pack.popular ? 'border-purple-500 shadow-lg scale-105 z-10' : 'border-gray-200'
                }`}
              >
                {pack.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-medium"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{pack.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{pack.description}</p>
                  <div className="text-5xl font-bold text-gray-900 mb-1">${pack.price}</div>
                  <p className="text-sm text-gray-500">{pack.tokens} tokens (${pack.perToken}/token)</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pack.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                      <Check size={18} className="flex-shrink-0 text-green-500 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://hub.socialway.ai"
                  className={`block w-full py-3 rounded-full font-medium text-center transition-all ${
                    pack.popular
                      ? 'text-white hover:opacity-90 hover:shadow-lg'
                      : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  style={pack.popular ? { background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' } : {}}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Usage Guide */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Can You Create?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how many tokens each content type uses. Mix and match to suit your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tokenUsage.map(({ icon: Icon, type, tokens, description }) => (
              <div
                key={type}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
                >
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{type}</h3>
                <p className="text-gray-500 text-sm mb-3">{description}</p>
                <div className="text-3xl font-bold text-purple-600">{tokens}</div>
                <p className="text-sm text-gray-500">token{tokens > 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>

          {/* Example calculations */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-6 text-center">Example: What 200 Tokens Gets You</h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">50</div>
                <div className="text-gray-300">Text posts with AI images</div>
                <div className="text-sm text-gray-400 mt-1">(4 tokens each)</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">20</div>
                <div className="text-gray-300">Carousel posts</div>
                <div className="text-sm text-gray-400 mt-1">(10 tokens each)</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold mb-2">66</div>
                <div className="text-gray-300">AI-generated images</div>
                <div className="text-sm text-gray-400 mt-1">(3 tokens each)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl p-8 md:p-12 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}
          >
            <Zap className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Start With Free Tokens
            </h2>
            <p className="text-lg text-white/90 mb-6 max-w-xl mx-auto">
              Sign up today and get free tokens to try the platform. No credit card required.
            </p>
            <a
              href="https://hub.socialway.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Get Started Free
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#3b82f6' }}
            >
              <HelpCircle size={16} />
              FAQ
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about Socialway
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            {faqItems.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
            >
              Contact our team
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gray-50">
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
              Start Creating Now
            </a>
            <Link
              to="/features"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 hover:bg-white transition-all"
            >
              Explore Features
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
