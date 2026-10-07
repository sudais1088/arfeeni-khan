import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'JOURNEY', href: '#journey', id: 'journey' },
    { label: 'DOCUMENTS', href: '#documents', id: 'documents' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E8E4DC] py-4 shadow-[0_2px_12px_rgba(28,27,26,0.03)]'
          : 'bg-[#FAF8F5]/80 backdrop-blur-xs border-b border-[#E8E4DC]/60 py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand / Archive Title */}
        <a
          href="#home"
          className="group flex flex-col tracking-wider focus-visible:outline-none"
        >
          <span className="font-serif text-lg sm:text-xl font-medium text-[#1C1B1A] group-hover:text-[#434E3C] transition-colors">
            ARFEEN TARIQ
          </span>
          <span className="text-[10px] tracking-[0.22em] text-[#78746D] uppercase font-sans">
            Personal Archive
          </span>
        </a>

        {/* Center Editorial Navigation */}
        <nav className="hidden md:flex items-center space-x-9" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 text-xs tracking-[0.18em] uppercase transition-colors font-sans ${
                  isActive
                    ? 'text-[#1C1B1A] font-medium'
                    : 'text-[#6C6861] hover:text-[#1C1B1A]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#434E3C] transition-all" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Info & Direct Mail CTA */}
        <div className="hidden lg:flex items-center space-x-6 text-xs text-[#78746D]">
          <div className="flex items-center space-x-2 border-r border-[#E8E4DC] pr-6">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#434E3C]" />
            <span className="tracking-widest uppercase font-mono text-[11px]">
              {timeString ? `${timeString} LOCAL` : 'ONLINE'}
            </span>
          </div>

          <a
            href="#contact"
            className="group flex items-center space-x-1.5 text-xs tracking-wider uppercase text-[#1C1B1A] hover:text-[#434E3C] transition-colors"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#78746D] group-hover:text-[#434E3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1B1A] hover:text-[#434E3C] transition-colors focus-visible:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E4DC] px-6 py-8 animate-in fade-in duration-200">
          <div className="space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm tracking-[0.2em] uppercase py-1 border-b border-[#E8E4DC]/40 ${
                  activeSection === link.id
                    ? 'text-[#434E3C] font-medium'
                    : 'text-[#1C1B1A] hover:text-[#434E3C]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[#E8E4DC] flex items-center justify-between text-xs text-[#78746D]">
            <span className="tracking-widest uppercase">Archive N° 2026</span>
            <a
              href="mailto:arfeentariq2008@gmail.com"
              className="text-[#1C1B1A] hover:text-[#434E3C] underline underline-offset-4"
            >
              arfeentariq2008@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
