import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E8E4DC] bg-[#FAF8F5] py-16 text-xs text-[#78746D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          {/* Left Column: Brand & Colophon */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-serif text-lg text-[#1C1B1A] font-medium block">
              ARFEEN TARIQ
            </span>
            <p className="text-xs text-[#5E5B56] max-w-sm leading-relaxed">
              Personal archive documenting ongoing scholarship in Cyber Security, technical investigations, and systems exploration.
            </p>
            <div className="text-[11px] font-mono text-[#8A857D] pt-1">
              CATALOG NO. AT-2026 // LAHORE, PK
            </div>
          </div>

          {/* Center Column: Design & Typographic Colophon */}
          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#434E3C] block font-semibold">
              Editorial Colophon
            </span>
            <p className="text-xs text-[#5E5B56] leading-relaxed">
              Typeset in Cormorant Garamond &amp; Inter. Built upon an editorial palette of warm ivory, near-black charcoal, and deep muted olive.
            </p>
          </div>

          {/* Right Column: Direct Channels & Back to top */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#8A857D] block">
                Primary Channel
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs text-[#1C1B1A] hover:text-[#434E3C] transition-colors underline underline-offset-4"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-1.5 text-[11px] uppercase tracking-widest text-[#5E5B56] hover:text-[#1C1B1A] transition-colors"
                aria-label="Return to top of page"
              >
                <span>Return to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Copyright */}
        <div className="pt-8 border-t border-[#E8E4DC] flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#8A857D]">
          <div>
            © {new Date().getFullYear()} Arfeen Tariq. All archival records and intellectual notes reserved.
          </div>
          <div className="flex items-center space-x-4 font-mono text-[10px] uppercase">
            <span>Student</span>
            <span>·</span>
            <span>Learner</span>
            <span>·</span>
            <span>Explorer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
