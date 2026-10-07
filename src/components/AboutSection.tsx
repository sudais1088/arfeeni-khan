import { PERSONAL_INFO, VALUES, INTERESTS, LANGUAGES } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 text-xs text-[#5E5B56] pb-8 border-b border-[#E8E4DC]">
          <span className="font-mono tracking-widest text-[#434E3C] font-medium">02</span>
          <span className="text-[#9E9B95]">—</span>
          <span className="tracking-[0.2em] uppercase font-sans">ABOUT & FOUNDATIONS</span>
        </div>

        {/* Section Heading */}
        <div className="pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1B1A] leading-[1.15] text-balance">
              Intellectual Curiosity &amp; Disciplined Inquiry
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#78746D]">
              ARCHIVE CURATION · 2026
            </span>
          </div>
        </div>

        {/* Bio & Education Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-20 border-b border-[#E8E4DC]">
          {/* Left: Short Bio (No long walls of text) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-serif text-xl sm:text-2xl text-[#2B2927] leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-[#5E5B56] text-sm sm:text-base leading-relaxed">
              Cyber security is not merely a technical vocation; it is an analytical discipline that requires deep patience, a comprehension of human systems, and relentless verification. I seek to construct robust mental models of hardware-software boundaries and defend critical data against compromise.
            </p>
          </div>

          {/* Right: Academic Standing & Credentials Summary */}
          <div className="lg:col-span-5 space-y-8 bg-[#F5F2EB] p-8 border border-[#E5E0D6]">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#434E3C] font-semibold">
                Degree in Progress
              </span>
              <h3 className="font-serif text-2xl text-[#1C1B1A] mt-2 font-medium">
                Bachelor of Science in Cyber Security
              </h3>
              <p className="text-xs text-[#5E5B56] mt-1 font-sans">
                {PERSONAL_INFO.degreeStatus}
              </p>
            </div>

            <div className="pt-6 border-t border-[#DFD9CD] space-y-4">
              <div>
                <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D]">
                  Prior Qualification
                </span>
                <p className="text-sm font-medium text-[#1C1B1A] mt-1">
                  Intermediate in Computer Science (ICS)
                </p>
                <p className="text-xs text-[#5E5B56]">
                  Completed 2023 · Mathematics &amp; Computer Science Core
                </p>
              </div>

              <div>
                <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D]">
                  Scholarly Stance
                </span>
                <p className="text-xs text-[#5E5B56] leading-relaxed mt-1">
                  Rooted in rigorous theoretical grounding paired with hands-on command-line experimentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Areas of Interest, Languages, and Personal Values */}
        <div className="pt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Column 1: Areas of Inquiry / Technical Focus */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D] block pb-3 border-b border-[#E8E4DC]">
                Areas of Inquiry
              </span>
            </div>

            <div className="space-y-6">
              {INTERESTS.map((item, index) => (
                <div key={index} className="space-y-1">
                  <h4 className="font-serif text-lg text-[#1C1B1A] font-medium">
                    {item.domain}
                  </h4>
                  <p className="text-xs text-[#5E5B56] leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Personal Values */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D] block pb-3 border-b border-[#E8E4DC]">
                Personal Values &amp; Philosophy
              </span>
            </div>

            <div className="space-y-6">
              {VALUES.map((val, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-baseline space-x-3">
                    <span className="font-mono text-[11px] text-[#434E3C]">0{index + 1}.</span>
                    <h4 className="text-sm font-medium tracking-wide text-[#1C1B1A]">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#5E5B56] pl-6 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Languages & Scholarly Literacy */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D] block pb-3 border-b border-[#E8E4DC]">
                Linguistic Fluency
              </span>
            </div>

            <div className="space-y-5">
              {LANGUAGES.map((lang, index) => (
                <div key={index} className="pb-4 border-b border-[#E8E4DC]/60 last:border-b-0 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-base text-[#1C1B1A]">
                      {lang.name}
                    </span>
                    <span className="text-[11px] font-mono text-[#78746D]">
                      {index === 0 ? 'EN' : index === 1 ? 'UR' : 'PA'}
                    </span>
                  </div>
                  <p className="text-xs text-[#5E5B56]">
                    {lang.proficiency}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote / Editorial Epigraph */}
            <div className="pt-6 border-t border-[#E8E4DC]">
              <blockquote className="font-serif italic text-sm text-[#434E3C] leading-relaxed">
                &ldquo;Understanding how a system fails is the true prerequisite to understanding how it works.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
