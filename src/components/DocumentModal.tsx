import { useState } from 'react';
import { X, Download, Copy, Check, FileText, ExternalLink, Printer } from 'lucide-react';
import { DocumentItem } from '../data/portfolioData';

interface DocumentModalProps {
  docItem: DocumentItem | null;
  onClose: () => void;
}

export function DocumentModal({ docItem, onClose }: DocumentModalProps) {
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!docItem) return null;

  const handleCopyCitation = () => {
    const citation = `${docItem.author} (${docItem.year}). "${docItem.name}". ${docItem.institution}. Archive Reference: ${docItem.catalogId}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadSimulated = () => {
    // Generate clean text file content simulating the archive record
    const content = `=====================================================
PERSONAL ARCHIVE RECORD — ARFEEN TARIQ
=====================================================
DOCUMENT: ${docItem.name}
CATALOG ID: ${docItem.catalogId}
YEAR: ${docItem.year}
TYPE: ${docItem.type}
AUTHOR: ${docItem.author}
INSTITUTION: ${docItem.institution}
FORMAT: ${docItem.format}
FILE SIZE: ${docItem.fileSize}
-----------------------------------------------------
ABSTRACT / EXCERPT:
${docItem.excerpt}

KEY TOPICS / COMPETENCIES:
${docItem.keyTopics.join(', ')}

SUMMARY:
${docItem.description}
-----------------------------------------------------
OFFICIAL ARCHIVE VERIFICATION — ARFEEN TARIQ
Email: arfeentariq2008@gmail.com
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${docItem.catalogId}_${docItem.name.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 30)}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1C1B1A]/65 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#E8E4DC] shadow-2xl p-6 sm:p-10 my-8 text-[#1C1B1A] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC] text-xs text-[#78746D]">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-[#434E3C] font-semibold">{docItem.catalogId}</span>
            <span className="text-[#D4CFCA]">·</span>
            <span className="uppercase tracking-widest font-mono">{docItem.year} RECORD</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#5E5B56] hover:text-[#1C1B1A] transition-colors focus-visible:outline-none"
            aria-label="Close document modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Document Title & Type */}
        <div className="pt-8 pb-6">
          <div className="text-[11px] tracking-[0.2em] uppercase font-mono text-[#434E3C] mb-2">
            {docItem.type} · {docItem.format}
          </div>
          <h3
            id="modal-title"
            className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight text-[#1C1B1A]"
          >
            {docItem.name}
          </h3>
        </div>

        {/* Metadata Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#E8E4DC] text-xs bg-[#F5F2EB]/50 px-4">
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-[#8A857D] font-mono">
              Author
            </span>
            <span className="mt-1 block font-medium text-[#1C1B1A]">{docItem.author}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-[#8A857D] font-mono">
              Issuing Body
            </span>
            <span className="mt-1 block font-medium text-[#1C1B1A] truncate">{docItem.institution}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-[#8A857D] font-mono">
              Record Size
            </span>
            <span className="mt-1 block font-medium text-[#1C1B1A]">{docItem.fileSize}</span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-wider text-[#8A857D] font-mono">
              Verification
            </span>
            <span className="mt-1 block font-medium text-[#434E3C]">Verified Archive</span>
          </div>
        </div>

        {/* Document Narrative / Abstract */}
        <div className="py-6 space-y-6">
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase font-mono text-[#78746D] mb-2">
              Executive Description
            </h4>
            <p className="text-sm text-[#4A4744] leading-relaxed">
              {docItem.description}
            </p>
          </div>

          {/* Excerpt Box */}
          <div className="p-5 bg-[#F5F2EB] border-l-2 border-[#434E3C] space-y-2">
            <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-[#434E3C]">
              <FileText className="w-3.5 h-3.5" />
              <span>Document Excerpt &amp; Scope</span>
            </div>
            <p className="font-serif text-base text-[#2B2927] leading-relaxed italic">
              &ldquo;{docItem.excerpt}&rdquo;
            </p>
          </div>

          {/* Key Topics List (zero-pill discipline) */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#78746D] block mb-2">
              Key Indexed Concepts
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5E5B56]">
              {docItem.keyTopics.map((topic, idx) => (
                <span key={idx} className="flex items-center">
                  <span>{topic}</span>
                  {idx < docItem.keyTopics.length - 1 && (
                    <span className="text-[#C5C1B8] ml-3" aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-[#E8E4DC] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={handleCopyCitation}
            className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#5E5B56] hover:text-[#1C1B1A] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#434E3C]" />
                <span className="text-[#434E3C]">Citation Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Citation</span>
              </>
            )}
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.print()}
              className="hidden sm:flex items-center space-x-2 text-xs uppercase tracking-wider text-[#5E5B56] hover:text-[#1C1B1A] transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Sheet</span>
            </button>

            <button
              onClick={handleDownloadSimulated}
              className="flex items-center space-x-2 px-5 py-2.5 bg-[#1C1B1A] text-[#FAF8F5] text-xs uppercase tracking-widest hover:bg-[#434E3C] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloadSuccess ? 'Downloaded' : 'Download Record'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
