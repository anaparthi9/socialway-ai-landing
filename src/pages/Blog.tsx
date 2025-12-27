import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'How AI is Revolutionizing Social Media Marketing',
    excerpt: 'Discover how artificial intelligence is transforming the way businesses create and manage social media content.',
    date: 'December 20, 2024',
    category: 'AI & Technology',
    readTime: '5 min read'
  },
  {
    title: '10 Tips for Creating Engaging LinkedIn Posts',
    excerpt: 'Learn the secrets to crafting LinkedIn posts that drive engagement and grow your professional network.',
    date: 'December 15, 2024',
    category: 'Social Media Tips',
    readTime: '7 min read'
  },
  {
    title: 'The Future of Content Creation: AI-Generated vs Human-Written',
    excerpt: 'An in-depth look at the pros and cons of AI-generated content and how to strike the right balance.',
    date: 'December 10, 2024',
    category: 'AI & Technology',
    readTime: '8 min read'
  },
  {
    title: 'Maximizing Your Social Media ROI in 2025',
    excerpt: 'Strategic insights on how to get the most value from your social media marketing investments.',
    date: 'December 5, 2024',
    category: 'Marketing Strategy',
    readTime: '6 min read'
  },
  {
    title: 'Instagram vs TikTok: Which Platform is Right for Your Brand?',
    excerpt: 'A comprehensive comparison to help you decide where to focus your social media efforts.',
    date: 'November 28, 2024',
    category: 'Platform Guides',
    readTime: '10 min read'
  },
  {
    title: 'Building a Consistent Brand Voice Across Platforms',
    excerpt: 'How to maintain your brand identity while adapting content for different social media platforms.',
    date: 'November 20, 2024',
    category: 'Branding',
    readTime: '6 min read'
  }
];

export function Blog() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            <Sparkles size={16} />
            Our Blog
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insights & <span className="gradient-text">Updates</span>
          </h1>
          <p className="text-xl text-gray-600">
            Stay up to date with the latest trends in social media marketing, AI technology, and content creation strategies.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            >
              {/* Placeholder image */}
              <div className="h-48 gradient-bg opacity-80 flex items-center justify-center">
                <Sparkles className="text-white" size={48} />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <button className="inline-flex items-center gap-1 text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Get the latest insights, tips, and updates delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none flex-1 max-w-md"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
