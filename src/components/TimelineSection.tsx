import { useState } from 'react';
import { TIMELINE, TimelineItem } from '../data/portfolioData';

export function TimelineSection() {
  const [filter, setFilter] = useState<'all' | 'Education' | 'Milestone'>('all');

  const filteredTimeline = filter === 'all'
    ? TIMELINE
    : TIMELINE.filter((item) => item.category === filter);

  return (
    <section id="journey" className="py-24 sm:py-32 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8E4DC] text-xs">
          <div className="flex items-center space-x-3 text-[#5E5B56]">
            <span className="font-mono tracking-widest text-[#434E3C] font-medium">03</span>
            <span className="text-[#9E9B95]">—</span>
            <span className="tracking-[0.2em] uppercase font-sans">JOURNEY &amp; CHRONOLOGY</span>
          </div>

          {/* Interactive Editorial Filter (Segmented Text Buttons, zero-pill discipline) */}
          <div className="flex items-center space-x-4 text-xs font-sans">
            <button
              onClick={() => setFilter('all')}
              className={`pb-0.5 tracking-wider uppercase transition-colors text-[11px] ${
                filter === 'all'
                  ? 'text-[#1C1B1A] font-semibold border-b border-[#434E3C]'
                  : 'text-[#78746D] hover:text-[#1C1B1A]'
              }`}
            >
              All Records
            </button>
            <span className="text-[#D4CFCA]">/</span>
            <button
              onClick={() => setFilter('Education')}
              className={`pb-0.5 tracking-wider uppercase transition-colors text-[11px] ${
                filter === 'Education'
                  ? 'text-[#1C1B1A] font-semibold border-b border-[#434E3C]'
                  : 'text-[#78746D] hover:text-[#1C1B1A]'
              }`}
            >
              Academic
            </button>
            <span className="text-[#D4CFCA]">/</span>
            <button
              onClick={() => setFilter('Milestone')}
              className={`pb-0.5 tracking-wider uppercase transition-colors text-[11px] ${
                filter === 'Milestone'
                  ? 'text-[#1C1B1A] font-semibold border-b border-[#434E3C]'
                  : 'text-[#78746D] hover:text-[#1C1B1A]'
              }`}
            >
              Milestones
            </button>
          </div>
        </div>

        {/* Section Title */}
        <div className="pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1B1A] leading-[1.15]">
              Life &amp; Education Timeline
            </h2>
            <p className="mt-4 text-[#5E5B56] text-sm sm:text-base max-w-xl">
              A vertical editorial ledger of milestones, academic progression, and technical development. Structured by year and disciplined inquiry.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#78746D]">
              CATALOG SEQ. 2021 — 2028
            </span>
          </div>
        </div>

        {/* Vertical Editorial Timeline (Typography & Spacing, NO CARDS) */}
        <div className="relative border-t border-[#E8E4DC]">
          {filteredTimeline.map((item: TimelineItem, index: number) => (
            <div
              key={item.id}
              className={`py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start ${
                index !== filteredTimeline.length - 1 ? 'border-b border-[#E8E4DC]' : ''
              }`}
            >
              {/* Left Column: Year & Temporal Metadata */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-baseline space-x-3">
                  <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1B1A] font-light tracking-tight">
                    {item.year}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs text-[#78746D] font-mono pt-1">
                  <span className="text-[#434E3C] uppercase tracking-wider">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.period}</span>
                </div>

                <div className="text-xs text-[#8A857D] font-sans pt-1">
                  {item.location}
                </div>
              </div>

              {/* Right Column: Title, Narrative & Detailed Highlights */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-normal leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#4A4744] leading-relaxed max-w-2xl">
                  {item.description}
                </p>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="pt-4 space-y-2.5">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#78746D] block">
                      Key Accomplishments &amp; Coursework
                    </span>
                    <ul className="space-y-2">
                      {item.highlights.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start space-x-3 text-xs sm:text-sm text-[#5E5B56]"
                        >
                          <span className="text-[#434E3C] mt-1 select-none font-serif">—</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote note */}
        <div className="mt-16 pt-8 border-t border-[#E8E4DC] flex flex-wrap items-center justify-between text-xs text-[#78746D]">
          <span className="font-mono text-[11px] tracking-wider uppercase">
            [NOTE]: Timeline entries are continuously updated as academic terms conclude.
          </span>
          <span className="font-serif italic text-sm text-[#434E3C] mt-2 sm:mt-0">
            Next Term Evaluation: Fall 2026
          </span>
        </div>
      </div>
    </section>
  );
}
