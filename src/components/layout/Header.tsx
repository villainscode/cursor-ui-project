import { Menu, Search, Github } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-bg-primary border-b border-border-primary z-[300]">
      <div className="h-full px-6 flex items-center justify-between">
        {/* Left: Logo and Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden w-10 h-10 flex items-center justify-center hover:bg-bg-hover rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-text-secondary" />
          </button>
          <h1 className="text-xl font-bold text-text-primary">ComponentHub</h1>
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full h-10 pl-10 pr-16 rounded-lg bg-bg-secondary border border-border-primary text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-brand-primary/20 transition-all"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 text-xs text-text-tertiary bg-bg-tertiary rounded border border-border-primary">
              ⌘K
            </kbd>
          </div>
        </div>

        {/* Right: Theme Toggle and GitHub */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center hover:bg-bg-hover rounded-lg transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-text-secondary" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

