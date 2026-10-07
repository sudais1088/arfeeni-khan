import { ArrowDown, ArrowUpRight } from 'lucide-react';
import portraitImg from '../assets/images/arfeen_editorial_portrait_1791363194619.jpg';
import { PERSONAL_INFO } from '../data/portfolioData';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between border-b border-[#E8E4DC]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        {/* Editorial Index Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8E4DC] text-xs">
          <div className="flex items-center space-x-3 text-[#5E5B56]">
            <span className="font-mono tracking-widest text-[#434E3C] font-medium">01</span>
            <span className="text-[#9E9B95]">—</span>
            <span className="tracking-[0.2em] uppercase font-sans">IDENTITY</span>
          </div>

          <div className="flex items-center space-x-6 text-[#78746D]">
            <span className="tracking-[0.22em] uppercase text-[11px] font-sans">
              {PERSONAL_INFO.archiveLabel}
            </span>
            <span className="hidden sm:inline-block text-[#C5C1B8] font-mono">/</span>
            <span className="hidden sm:inline-block font-mono text-[11px] tracking-wider text-[#78746D]">
              VOL. 2026 · DOSSIER 01
            </span>
          </div>
        </div>

        {/* Main Masthead: Huge Name */}
        <div className="pt-10 pb-8 sm:pb-12">
          <h1 className="font-serif text-[3.25rem] sm:text-[5.5rem] md:text-[6.75rem] lg:text-[8rem] font-light tracking-[-0.03em] leading-[0.9] text-[#1C1B1A]">
            ARFEEN TARIQ
          </h1>

          {/* Identity Line */}
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-sm sm:text-base tracking-[0.16em] uppercase text-[#434E3C] font-sans font-medium">
            <span>Student</span>
            <span className="text-[#B5B0A6]">·</span>
            <span>Learner</span>
            <span className="text-[#B5B0A6]">·</span>
            <span>Explorer</span>
          </div>
        </div>

        {/* Asymmetrical Content Grid: Intro & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-6 sm:pt-10">
          {/* Left Column: Minimal Introduction & Editorial Data */}
          <div className="lg:col-span-7 space-y-10 lg:pr-8">
            <p className="font-serif text-2xl sm:text-3xl text-[#2B2927] leading-[1.38] font-normal text-balance max-w-2xl">
              {PERSONAL_INFO.intro}
            </p>

            <div className="space-y-6 text-[#5E5B56] text-sm sm:text-[15px] leading-relaxed max-w-xl">
              <p>
                Specializing in defensive computing principles, systems architecture, and security analysis.
                Committed to methodical self-education, quiet craftsmanship, and the ethical safeguarding of digital systems.
              </p>
            </div>

            {/* Editorial Metadata Block */}
            <div className="pt-4 border-t border-[#E8E4DC] grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#8A857D] font-mono">
                  Current Field
                </span>
                <span className="mt-1 block font-medium text-[#1C1B1A]">
                  BS Cyber Security
                </span>
              </div>
              <div>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#8A857D] font-mono">
                  Primary Base
                </span>
                <span className="mt-1 block font-medium text-[#1C1B1A]">
                  Lahore, Pakistan
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[10px] tracking-[0.2em] uppercase text-[#8A857D] font-mono">
                  Archive Status
                </span>
                <span className="mt-1 block font-medium text-[#434E3C]">
                  Active · 2024–2028
                </span>
              </div>
            </div>

            {/* Editorial Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.16em]">
              <a
                href="#about"
                className="group inline-flex items-center space-x-2 text-[#1C1B1A] hover:text-[#434E3C] transition-colors border-b border-[#1C1B1A] pb-1 hover:border-[#434E3C]"
              >
                <span>Read Full Biography</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#5E5B56] group-hover:text-[#434E3C] group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#documents"
                className="group inline-flex items-center space-x-2 text-[#5E5B56] hover:text-[#1C1B1A] transition-colors pb-1"
              >
                <span>Inspect Archive Documents</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#8A857D] group-hover:text-[#1C1B1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Strong Editorial Portrait */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer hairline framing */}
              <div className="p-3 bg-[#F4F1EA] border border-[#E2DDD3]">
                <div className="relative overflow-hidden aspect-[3/4] bg-[#EAE6DD]">
                  <img
                    src={portraitImg}
                    alt="Arfeen Tariq — Editorial Portrait"
                    className="w-full h-full object-cover editorial-image transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle film tone overlay */}
                  <div className="absolute inset-0 bg-[#3B3226]/5 pointer-events-none mix-blend-multiply" />
                </div>
              </div>

              {/* Editorial Caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#78746D]">
                <span className="tracking-widest uppercase font-mono">
                  Fig. 1.0 — Arfeen Tariq
                </span>
                <span className="font-mono text-[#8A857D]">REF. AT-P01</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full pt-16 flex items-center justify-between text-xs text-[#8A857D]">
        <div className="flex items-center space-x-3">
          <span className="w-8 h-[1px] bg-[#D4CFCA]" />
          <span className="tracking-[0.2em] uppercase text-[10px] font-sans">
            Scroll to discover
          </span>
        </div>

        <a
          href="#about"
          className="flex items-center space-x-2 text-[#5E5B56] hover:text-[#434E3C] transition-colors group"
          aria-label="Scroll down"
        >
          <span className="tracking-[0.16em] uppercase text-[11px] hidden sm:inline">
            Next: About
          </span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
