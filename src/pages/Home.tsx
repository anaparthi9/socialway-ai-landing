import {
  ArrowRight,
  Check,
  MessageSquare,
  Eye,
  Send,
  Calendar,
  Sparkles,
  Building2,
  FileText,
  Zap,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Briefcase,
  Stethoscope,
  Building,
  ShoppingBag,
  GraduationCap,
  Leaf,
  Scale,
  Megaphone,
  Palette,
  Utensils,
  Heart,
  Plane
} from 'lucide-react';

// Platform data
const platforms = [
  { icon: Linkedin, name: 'LinkedIn', color: '#0A66C2' },
  { icon: Twitter, name: 'Twitter/X', color: '#000000' },
  { icon: Facebook, name: 'Facebook', color: '#1877F2' },
  { icon: Instagram, name: 'Instagram', color: '#E4405F' },
  { icon: MessageCircle, name: 'Bluesky', color: '#0085FF' },
];

// Features data
const features = [
  {
    icon: MessageSquare,
    title: 'AI Chat Interface',
    description: 'Simply describe what you want to create. Our AI understands your intent and generates platform-optimized content instantly.',
  },
  {
    icon: Eye,
    title: 'Live Preview Panel',
    description: 'See exactly how your posts will look on each platform before publishing. Edit, refine, and perfect in real-time.',
  },
  {
    icon: Send,
    title: 'One-Click Publishing',
    description: 'Publish to all your connected platforms simultaneously or schedule for optimal engagement times.',
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    description: 'Visualize your content strategy with an intuitive calendar. Track drafts, scheduled posts, and published content.',
  },
  {
    icon: Building2,
    title: 'Industry-Tailored AI',
    description: 'AI models trained on your industry sector generate relevant, professional content that resonates with your audience.',
  },
  {
    icon: FileText,
    title: 'Knowledge Base',
    description: 'Upload your documents, presentations, and brand guidelines. The AI references your materials for accurate content.',
  },
];

// Industries data
const industries = [
  { icon: Leaf, name: 'Renewable Energy', benefit: 'Technical content made accessible' },
  { icon: Stethoscope, name: 'Healthcare', benefit: 'HIPAA-aware professional content' },
  { icon: Building, name: 'Real Estate', benefit: 'Property showcases that convert' },
  { icon: Briefcase, name: 'Professional Services', benefit: 'Thought leadership content' },
  { icon: ShoppingBag, name: 'Retail & E-commerce', benefit: 'Product posts that sell' },
  { icon: GraduationCap, name: 'Education', benefit: 'Engaging educational content' },
  { icon: Scale, name: 'Legal', benefit: 'Compliant, authoritative posts' },
  { icon: Megaphone, name: 'Marketing & PR', benefit: 'Campaign content at scale' },
  { icon: Palette, name: 'Creative & Design', benefit: 'Visual storytelling support' },
  { icon: Utensils, name: 'Food & Hospitality', benefit: 'Appetite-driving content' },
  { icon: Heart, name: 'Non-Profit', benefit: 'Mission-driven messaging' },
  { icon: Plane, name: 'Travel & Tourism', benefit: 'Destination inspiration' },
];

// Token packs
const tokenPacks = [
  { name: 'Starter', tokens: 50, price: 19, perToken: '0.38' },
  { name: 'Creator', tokens: 200, price: 49, perToken: '0.24', popular: true },
  { name: 'Pro', tokens: 500, price: 99, perToken: '0.20' },
  { name: 'Agency', tokens: 1500, price: 249, perToken: '0.17' },
];

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-4 mb-6">
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

            {/* Tagline */}
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
              From Ideas to Posts in Minutes
            </p>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Transform your social media presence with AI-powered content creation.
              Just describe what you need, and watch your posts come to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://hub.socialway.ai"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
                }}
              >
                Start Creating Free
                <ArrowRight size={20} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                See How It Works
              </a>
            </div>

            {/* Platform Icons */}
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <span className="text-sm text-gray-500">Publish to:</span>
              {platforms.map(({ icon: Icon, name, color }) => (
                <div key={name} className="flex items-center gap-2 text-gray-600">
                  <Icon size={22} style={{ color }} />
                  <span className="text-sm font-medium hidden sm:inline">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Create Content in 3 Simple Steps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No design skills needed. No copywriting expertise required. Just describe what you want.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
              >
                <MessageSquare className="text-white" size={28} />
              </div>
              <div className="text-sm font-semibold text-purple-600 mb-2">Step 1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Describe Your Idea</h3>
              <p className="text-gray-600">
                Tell our AI what you want to create. "Write a LinkedIn post about our new product launch" - that's all it takes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
              >
                <Eye className="text-white" size={28} />
              </div>
              <div className="text-sm font-semibold text-purple-600 mb-2">Step 2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Preview & Refine</h3>
              <p className="text-gray-600">
                See your post exactly as it will appear. Make adjustments with simple commands like "make it more professional" or "add emojis."
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
              >
                <Send className="text-white" size={28} />
              </div>
              <div className="text-sm font-semibold text-purple-600 mb-2">Step 3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Publish or Schedule</h3>
              <p className="text-gray-600">
                Post instantly to all your connected platforms or schedule for the perfect time. Track everything in your content calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'hsl(221 83% 53%)' }}
            >
              <Sparkles size={16} />
              Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Scale Your Social Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete toolkit for modern social media management, powered by industry-leading AI.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
                >
                  <Icon className="text-white" size={26} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Industry
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI adapts to your industry's unique language, compliance requirements, and audience expectations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map(({ icon: Icon, name, benefit }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon size={20} className="text-purple-600" />
                  <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                </div>
                <p className="text-xs text-gray-500">{benefit}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8">
            And many more industries supported through our comprehensive industry hierarchy system.
          </p>
        </div>
      </section>

      {/* What You Can Create Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Create Any Type of Content
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From quick updates to comprehensive campaigns, our AI handles it all.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Text Posts', description: 'Engaging captions optimized for each platform', tokens: '1 token' },
              { title: 'AI Images', description: 'Custom visuals generated to match your content', tokens: '3 tokens' },
              { title: 'Carousels', description: 'Multi-slide posts for educational content', tokens: '10 tokens' },
              { title: 'News Summaries', description: 'Industry news curated and summarized', tokens: '2 tokens' },
            ].map((item) => (
              <div key={item.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                  {item.tokens}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Your Brand, Your Voice
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Customize every aspect of your content generation to match your brand identity and communication style.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Tone Selection', description: 'Choose from professional, friendly, empathetic, bold, and more' },
                  { title: 'Call-to-Action Options', description: 'Customize CTAs or remove them entirely based on your goals' },
                  { title: 'Brand Guidelines', description: 'Upload your style guide for consistent messaging' },
                  { title: 'AI Notes', description: 'Add custom instructions that the AI references for every post' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Tone:</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Empathetic</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">CTA:</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Soft Call to Action</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Industry:</span>
                  <span className="text-sm text-gray-600">Energy → Renewables → Solar</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700 block mb-2">AI Notes:</span>
                  <p className="text-sm text-gray-600 italic">"Focus on sustainability and cost savings. Mention our U.S. and India operations..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24" id="pricing">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Pay-As-You-Go Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Buy tokens when you need them. No monthly commitments. Tokens never expire for 12 months.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tokenPacks.map((pack) => (
              <div
                key={pack.name}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-lg ${
                  pack.popular ? 'border-purple-500 shadow-lg' : 'border-gray-200'
                }`}
              >
                {pack.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-medium"
                    style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
                  >
                    Most Popular
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{pack.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{pack.tokens} tokens</p>
                  <div className="text-4xl font-bold text-gray-900 mb-1">${pack.price}</div>
                  <p className="text-sm text-gray-500 mb-6">${pack.perToken}/token</p>
                  <a
                    href="https://hub.socialway.ai"
                    className={`block w-full py-3 rounded-full font-medium transition-all ${
                      pack.popular
                        ? 'text-white hover:opacity-90'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                    style={pack.popular ? { background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' } : {}}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Token Usage Guide */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 mb-6 text-center">What Can You Create?</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">1</div>
                <p className="text-sm text-gray-600">Text post on any platform</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">3</div>
                <p className="text-sm text-gray-600">AI-generated image</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">10</div>
                <p className="text-sm text-gray-600">Carousel with 4-6 slides</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">2</div>
                <p className="text-sm text-gray-600">News search & summary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-1">5</div>
              <div className="text-gray-400">Platforms Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-gray-400">Industries Covered</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">&lt;60s</div>
              <div className="text-gray-400">Avg. Post Creation</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1">24/7</div>
              <div className="text-gray-400">AI Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/socialway-icon.svg"
              alt=""
              className="w-12 h-12"
              style={{ borderRadius: '30%' }}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join businesses across industries who are saving hours every week with AI-powered content creation.
            Start with free tokens and see the difference.
          </p>
          <a
            href="https://hub.socialway.ai"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-semibold text-lg transition-all hover:scale-[1.02] hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
              boxShadow: '0 4px 25px rgba(99, 102, 241, 0.4)',
            }}
          >
            <Zap size={22} />
            Start Creating Now
            <ArrowRight size={20} />
          </a>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • Free tokens to start • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
