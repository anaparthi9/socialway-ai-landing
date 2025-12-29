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
  Plane,
  Play,
  Star,
  Image,
  Layers,
  Newspaper
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
      {/* Hero Section - Compact */}
      <section className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Text Content - Centered */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              From Ideas to Posts{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                in Minutes
              </span>
            </h1>

            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Transform your social media with AI-powered content creation. Describe what you need, and watch professional posts come to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
              <a
                href="https://hub.socialway.ai"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  boxShadow: '0 4px 20px rgba(99, 102, 241, 0.35)',
                }}
              >
                <Sparkles size={18} />
                Start Creating Free
              </a>
              <a
                href="#see-it-action"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                <Play size={16} className="fill-current" />
                See It In Action
              </a>
            </div>

            {/* Platform Icons - Compact */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm text-gray-400">Publish to:</span>
              {platforms.map(({ icon: Icon, name, color }) => (
                <div key={name} className="flex items-center gap-1.5" title={name}>
                  <Icon size={18} style={{ color }} />
                  <span className="text-xs font-medium text-gray-500 hidden sm:inline">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* App Preview - Side by Side Cards */}
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Main preview card */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300">
                <img
                  src="/images/post-instagram-solar.png"
                  alt="AI Generated Instagram Post Preview"
                  className="w-full"
                />
                <div className="absolute top-3 right-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Sparkles size={12} />
                  AI Generated
                </div>
              </div>

              {/* Secondary preview card */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300 hidden md:block">
                <img
                  src="/images/post-linkedin-energy.png"
                  alt="AI Generated LinkedIn Post"
                  className="w-full"
                />
                <div className="absolute top-3 left-3 bg-[#0A66C2] text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <Linkedin size={12} />
                  LinkedIn
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* See It In Action - Real Examples */}
      <section id="see-it-action" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{ background: 'rgba(99, 102, 241, 0.1)', color: 'hsl(221 83% 53%)' }}
            >
              <Star size={16} />
              Real Results
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              See What Our AI Creates
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real posts generated by Socialway AI for real businesses. Professional content, stunning visuals, in under 60 seconds.
            </p>
          </div>

          {/* Showcase Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Energy Industry Post */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Linkedin size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">LinkedIn Post</p>
                    <p className="text-xs text-gray-500">Energy Industry</p>
                  </div>
                </div>
                <img
                  src="/images/post-linkedin-energy.png"
                  alt="LinkedIn post for Energy company"
                  className="w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <Leaf size={16} className="text-green-500" />
                  Renewable Energy
                </span>
              </div>
            </div>

            {/* Healthcare Industry Post */}
            <div className="group lg:-mt-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Instagram Post</p>
                    <p className="text-xs text-gray-500">Healthcare Industry</p>
                  </div>
                </div>
                <img
                  src="/images/post-healthcare.png"
                  alt="Instagram post for Healthcare provider"
                  className="w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <Stethoscope size={16} className="text-pink-500" />
                  Healthcare
                </span>
              </div>
            </div>

            {/* Mobile Chat Interface */}
            <div className="group">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">AI Chat Interface</p>
                    <p className="text-xs text-gray-500">Mobile App</p>
                  </div>
                </div>
                <img
                  src="/images/mobile-chat.png"
                  alt="Mobile AI chat interface"
                  className="w-full"
                />
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                  <Zap size={16} className="text-purple-500" />
                  Research & Create
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://hub.socialway.ai"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
              }}
            >
              Try It Yourself - Free
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
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
            <div className="relative">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
                >
                  <MessageSquare className="text-white" size={32} />
                </div>
                <div className="absolute top-8 left-[60%] hidden md:block text-6xl font-bold text-gray-100">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Describe Your Idea</h3>
                <p className="text-gray-600">
                  "Write a LinkedIn post about our new solar installation project with an AI-generated image"
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
                >
                  <Eye className="text-white" size={32} />
                </div>
                <div className="absolute top-8 left-[60%] hidden md:block text-6xl font-bold text-gray-100">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Preview & Refine</h3>
                <p className="text-gray-600">
                  See your post exactly as it will appear. Ask for changes like "make it more professional" or "add statistics"
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  style={{ background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))' }}
                >
                  <Send className="text-white" size={32} />
                </div>
                <div className="absolute top-8 left-[60%] hidden md:block text-6xl font-bold text-gray-100">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Publish or Schedule</h3>
                <p className="text-gray-600">
                  Post instantly to all your connected platforms or schedule for the perfect time. Track in your calendar.
                </p>
              </div>
            </div>
          </div>

          {/* Demo Preview */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Two-Panel Interface</h3>
                <p className="text-gray-300 mb-6">
                  Chat with AI on one side, see your post preview on the other. Make real-time edits and see changes instantly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-green-400" />
                    <span>Platform-specific previews</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-green-400" />
                    <span>AI-generated images with your branding</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={20} className="text-green-400" />
                    <span>One-click edit requests</span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/images/post-instagram-solar.png"
                  alt="Platform preview interface"
                  className="rounded-xl shadow-2xl border border-gray-700"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                  <span className="text-sm font-medium text-gray-900">Ready to publish!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
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

      {/* Industries Section with Visual Examples */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built for Every Industry
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI adapts to your industry's unique language, compliance requirements, and audience expectations. From healthcare to hospitality, we've got you covered.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {industries.slice(0, 8).map(({ icon: Icon, name, benefit }) => (
                  <div
                    key={name}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-purple-50 hover:border-purple-200 border border-transparent transition-all"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <Icon size={18} className="text-purple-600" />
                      <h3 className="font-semibold text-gray-900 text-sm">{name}</h3>
                    </div>
                    <p className="text-xs text-gray-500 ml-7">{benefit}</p>
                  </div>
                ))}
              </div>

              <p className="text-gray-500 mt-6 text-sm">
                + Healthcare, Non-Profit, Travel & Tourism, and 40+ more industries
              </p>
            </div>

            {/* Visual showcase */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 transform -rotate-1 hover:rotate-0 transition-transform">
                <img
                  src="/images/post-healthcare.png"
                  alt="Healthcare industry post example"
                  className="rounded-xl w-full"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Stethoscope size={16} className="text-pink-500" />
                    <span className="text-sm font-medium text-gray-700">Healthcare Example</span>
                  </div>
                  <span className="text-xs text-gray-500">Generated in 45 seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Create Section */}
      <section className="py-24 bg-gray-50">
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
              { title: 'Text Posts', description: 'Engaging captions optimized for each platform', tokens: '1 token', Icon: FileText },
              { title: 'AI Images', description: 'Custom visuals generated to match your content', tokens: '3 tokens', Icon: Image },
              { title: 'Carousels', description: 'Multi-slide posts for educational content', tokens: '10 tokens', Icon: Layers },
              { title: 'News Summaries', description: 'Industry news curated and summarized', tokens: '2 tokens', Icon: Newspaper },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))' }}
                >
                  <item.Icon
                    size={24}
                    className="text-blue-500"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <span className="text-xs font-medium text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  {item.tokens}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-24 bg-white">
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

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300">Tone:</span>
                  <span className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm font-medium">Empathetic</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300">CTA:</span>
                  <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm font-medium">Soft Call to Action</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300">Industry:</span>
                  <span className="text-sm text-gray-200">Energy → Renewables → Solar</span>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur rounded-lg">
                  <span className="text-sm font-medium text-gray-300 block mb-2">AI Notes:</span>
                  <p className="text-sm text-gray-200 italic">"Focus on sustainability and cost savings. Always mention we serve both residential and commercial clients..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50" id="pricing">
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
                  pack.popular ? 'border-purple-500 shadow-lg scale-105' : 'border-gray-200'
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
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
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

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="/socialway-icon.svg"
              alt=""
              className="w-14 h-14"
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
