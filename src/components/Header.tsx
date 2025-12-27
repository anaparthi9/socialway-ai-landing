import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - matching hub.socialway.ai exactly */}
          <Link to="/" className="flex items-center gap-3">
            <span
              className="text-2xl font-bold"
              style={{
                background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Socialway AI
            </span>
            <img
              src="/socialway-icon.svg"
              alt=""
              className="w-8 h-8"
              style={{ borderRadius: '30%' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-gray-500 hover:text-gray-900 font-medium transition-colors text-sm">
              About
            </Link>
            <Link to="/blog" className="text-gray-500 hover:text-gray-900 font-medium transition-colors text-sm">
              Blog
            </Link>
            <a
              href="https://hub.socialway.ai"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-medium text-sm transition-all hover:shadow-lg hover:scale-[1.02]"
              style={{
                background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)',
              }}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-gray-600 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="https://hub.socialway.ai"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold"
                style={{
                  background: 'linear-gradient(135deg, hsl(221 83% 53%), hsl(271 81% 56%))',
                }}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
