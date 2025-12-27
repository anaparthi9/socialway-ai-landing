import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/favicon.svg" alt="SocialWay.ai" className="w-8 h-8" />
            <span className="text-xl font-bold gradient-text">Socialway AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Privacy
            </Link>
            <a
              href="https://hub.socialway.ai"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Start Free Trial
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
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-gray-900 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy
              </Link>
              <a
                href="https://hub.socialway.ai"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full gradient-bg text-white font-semibold"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
