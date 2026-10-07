import { useState, FormEvent } from 'react';
import { Copy, Check, Send, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      // Create mailto fallback link to allow user to open email client if preferred
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8E4DC] text-xs">
          <div className="flex items-center space-x-3 text-[#5E5B56]">
            <span className="font-mono tracking-widest text-[#434E3C] font-medium">05</span>
            <span className="text-[#9E9B95]">—</span>
            <span className="tracking-[0.2em] uppercase font-sans">CORRESPONDENCE &amp; CONTACT</span>
          </div>

          <div className="text-xs text-[#78746D] font-mono tracking-widest uppercase">
            OPEN FOR DIALOGUE &amp; RESEARCH INQUIRIES
          </div>
        </div>

        {/* Section Header */}
        <div className="pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1B1A] leading-[1.15]">
              Initiate Correspondence
            </h2>
            <p className="mt-4 text-[#5E5B56] text-sm sm:text-base max-w-xl">
              For academic dialogues, technical collaborations, cybersecurity discussions, or general correspondence, write directly.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#78746D]">
              DIRECT CHANNEL
            </span>
          </div>
        </div>

        {/* Asymmetrical Grid: Direct Channels & Editorial Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Direct Address & Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D] block mb-3">
                Electronic Mail
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] hover:text-[#434E3C] transition-colors font-light block leading-tight break-all"
              >
                {PERSONAL_INFO.email}
              </a>

              <div className="mt-4 flex items-center space-x-4">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase text-[#5E5B56] hover:text-[#1C1B1A] transition-colors focus-visible:outline-none"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#434E3C]" />
                      <span className="text-[#434E3C]">Address Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <span className="text-[#D4CFCA]">·</span>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="inline-flex items-center space-x-1.5 text-xs tracking-wider uppercase text-[#5E5B56] hover:text-[#1C1B1A] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Client</span>
                </a>
              </div>
            </div>

            {/* Geographical & Administrative Details */}
            <div className="pt-8 border-t border-[#E8E4DC] space-y-4">
              <div>
                <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D] block">
                  Location &amp; Timezone
                </span>
                <p className="text-sm text-[#1C1B1A] mt-1 font-medium">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-[#5E5B56] font-mono mt-0.5">
                  UTC+5 (Pakistan Standard Time)
                </p>
              </div>

              <div className="pt-4">
                <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#78746D] block">
                  Response Cadence
                </span>
                <p className="text-xs text-[#5E5B56] mt-1 leading-relaxed">
                  Academic and technical communications are typically answered within 24–48 hours.
                </p>
              </div>
            </div>

            {/* Editorial Note Box */}
            <div className="p-6 bg-[#F5F2EB] border border-[#E5E0D6] space-y-2">
              <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#434E3C] block font-semibold">
                Archive Confidentiality
              </span>
              <p className="text-xs text-[#5E5B56] leading-relaxed">
                All inquiries are treated with strict professional discretion. PGP encryption keys available upon explicit request.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF8F5]">
            {status === 'success' ? (
              <div className="p-10 border border-[#434E3C]/30 bg-[#F5F2EB] space-y-6 animate-in fade-in duration-300">
                <div className="flex items-center space-x-3 text-[#434E3C]">
                  <Check className="w-5 h-5" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                    Dispatch Logged In Archive
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1B1A] font-light">
                  Thank you, {formData.name}.
                </h3>

                <p className="text-sm text-[#5E5B56] leading-relaxed">
                  Your message has been recorded into the personal repository. A direct reply will be dispatched to <strong className="font-medium text-[#1C1B1A]">{formData.email}</strong> shortly.
                </p>

                <div className="pt-4 flex items-center space-x-6 text-xs uppercase tracking-wider">
                  <button
                    onClick={handleReset}
                    className="text-[#434E3C] hover:text-[#1C1B1A] underline underline-offset-4"
                  >
                    Send Another Dispatch
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                      formData.subject || 'Portfolio Inquiry'
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="inline-flex items-center space-x-1.5 text-[#5E5B56] hover:text-[#1C1B1A]"
                  >
                    <span>Send via Mail App</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="sender-name"
                      className="block text-[11px] uppercase tracking-[0.18em] font-mono text-[#78746D]"
                    >
                      Your Name <span className="text-[#434E3C]">*</span>
                    </label>
                    <input
                      id="sender-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. H. Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-[#D4CFCA] focus:border-[#1C1B1A] py-2.5 text-sm text-[#1C1B1A] placeholder-[#B5B0A6] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="sender-email"
                      className="block text-[11px] uppercase tracking-[0.18em] font-mono text-[#78746D]"
                    >
                      Email Address <span className="text-[#434E3C]">*</span>
                    </label>
                    <input
                      id="sender-email"
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-[#D4CFCA] focus:border-[#1C1B1A] py-2.5 text-sm text-[#1C1B1A] placeholder-[#B5B0A6] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label
                    htmlFor="sender-subject"
                    className="block text-[11px] uppercase tracking-[0.18em] font-mono text-[#78746D]"
                  >
                    Subject of Inquiry
                  </label>
                  <input
                    id="sender-subject"
                    type="text"
                    placeholder="e.g. Cyber Security Collaboration / Academic Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-[#D4CFCA] focus:border-[#1C1B1A] py-2.5 text-sm text-[#1C1B1A] placeholder-[#B5B0A6] focus:outline-none transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label
                    htmlFor="sender-message"
                    className="block text-[11px] uppercase tracking-[0.18em] font-mono text-[#78746D]"
                  >
                    Message / Query <span className="text-[#434E3C]">*</span>
                  </label>
                  <textarea
                    id="sender-message"
                    required
                    rows={5}
                    placeholder="Provide context regarding your inquiry, academic interest, or proposed dialogue..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#D4CFCA] focus:border-[#1C1B1A] py-2.5 text-sm text-[#1C1B1A] placeholder-[#B5B0A6] focus:outline-none transition-colors resize-y leading-relaxed"
                  />
                </div>

                {/* Form Footer Action */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-[11px] text-[#8A857D] font-mono">
                    Direct dispatch to <span className="text-[#1C1B1A]">{PERSONAL_INFO.email}</span>
                  </span>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center space-x-2.5 px-8 py-3 bg-[#1C1B1A] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] hover:bg-[#434E3C] transition-colors focus-visible:outline-none disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'submitting' ? 'Dispatching...' : 'Dispatch Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
