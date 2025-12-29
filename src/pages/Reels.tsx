import { Play, Clock, Download, Eye, ExternalLink } from 'lucide-react';
// Reels page v1.0

const reels = [
  {
    id: 1,
    title: 'Problem-Solution',
    hook: 'Stop spending 2 hours on ONE social post',
    duration: '20-30 seconds',
    description: 'Shows the frustration of manual content creation and how Socialway AI solves it in 60 seconds.',
    platforms: ['TikTok', 'YouTube Shorts', 'Instagram Reels'],
    thumbnail: '/reels/reel-1/reel1-07-post-complete.png',
    screenshots: [
      { name: 'Empty Chat', file: 'reel1-02-empty-chat.png' },
      { name: 'Typing Prompt', file: 'reel1-03-typing-prompt.png' },
      { name: 'AI Working', file: 'reel1-04-ai-working.png' },
      { name: 'Generating Image', file: 'reel1-05-generating-image.png' },
      { name: 'Post Complete', file: 'reel1-07-post-complete.png' },
    ],
    scriptPath: '/reels/reel-1/SCRIPT.md'
  },
  {
    id: 2,
    title: 'Speed Demo',
    hook: 'I created a week\'s content in 5 minutes',
    duration: '30-45 seconds',
    description: 'A time-lapse style reel showing 7 posts being created in under 5 minutes.',
    platforms: ['TikTok', 'YouTube Shorts', 'Instagram Reels'],
    thumbnail: '/reels/reel-2/reel2-01-calendar.png',
    screenshots: [
      { name: 'Calendar View', file: 'reel2-01-calendar.png' },
      { name: 'Typing Prompt', file: 'reel2-02-prompt.png' },
      { name: 'AI Working', file: 'reel2-03-ai-working.png' },
      { name: 'Post Done', file: 'reel2-04-post-done.png' },
    ],
    scriptPath: '/reels/reel-2/SCRIPT.md'
  },
  {
    id: 3,
    title: 'Before/After',
    hook: 'My posts BEFORE vs AFTER using AI',
    duration: '15-20 seconds',
    description: 'A dramatic split-screen comparison showing the transformation from generic to professional posts.',
    platforms: ['TikTok', 'YouTube Shorts', 'Instagram Reels'],
    thumbnail: '/reels/reel-3/reel3-after-preview.png',
    screenshots: [
      { name: 'After - Full Post', file: 'reel3-after-post.png' },
      { name: 'After - Preview', file: 'reel3-after-preview.png' },
    ],
    scriptPath: '/reels/reel-3/SCRIPT.md'
  }
];

export function Reels() {
  return (
    <div className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 text-purple-600 text-sm font-medium mb-6">
            <Play size={16} />
            Marketing Reels
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Video <span className="gradient-text">Assets</span>
          </h1>
          <p className="text-xl text-gray-600">
            Ready-to-use reel packages with scripts, storyboards, and screenshots for TikTok, YouTube Shorts, and Instagram Reels.
          </p>
        </div>

        {/* Reel Cards */}
        <div className="space-y-12">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Header */}
              <div className="gradient-bg p-6 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-white/80 text-sm font-medium">Reel {reel.id}</span>
                    <h2 className="text-2xl font-bold mt-1">{reel.title}</h2>
                    <p className="text-white/90 mt-2 text-lg">"{reel.hook}"</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                    <Clock size={14} />
                    {reel.duration}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Description */}
                <p className="text-gray-600 mb-6">{reel.description}</p>

                {/* Platforms */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {reel.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Screenshots Preview */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye size={18} />
                    Screenshots
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {reel.screenshots.map((screenshot) => (
                      <div key={screenshot.file} className="group relative">
                        <img
                          src={`/reels/reel-${reel.id}/${screenshot.file}`}
                          alt={screenshot.name}
                          className="w-full aspect-video object-cover rounded-lg border border-gray-200 group-hover:border-blue-400 transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1 text-center truncate">
                          {screenshot.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={reel.scriptPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-medium"
                  >
                    <ExternalLink size={16} />
                    View Full Script
                  </a>
                  <a
                    href={`/reels/reel-${reel.id}/`}
                    download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-medium"
                  >
                    <Download size={16} />
                    Download Assets
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">More Reels Coming Soon</h3>
            <p className="text-gray-600 mb-4">
              We're working on 12 additional reel packages including testimonials, feature spotlights, and trending formats.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Testimonials', 'Feature Deep-Dives', 'Industry Use Cases', 'Trending Formats'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-gray-100 text-gray-500 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
