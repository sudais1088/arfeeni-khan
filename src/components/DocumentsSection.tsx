import { useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { DOCUMENTS, DocumentItem } from '../data/portfolioData';
import { DocumentModal } from './DocumentModal';

export function DocumentsSection() {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);

  return (
    <section id="documents" className="py-24 sm:py-32 border-b border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Index Marker */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#E8E4DC] text-xs">
          <div className="flex items-center space-x-3 text-[#5E5B56]">
            <span className="font-mono tracking-widest text-[#434E3C] font-medium">04</span>
            <span className="text-[#9E9B95]">—</span>
            <span className="tracking-[0.2em] uppercase font-sans">DOCUMENTS &amp; RECORDS</span>
          </div>

          <div className="text-xs text-[#78746D] font-mono tracking-widest uppercase">
            {DOCUMENTS.length} ENTRIES ARCHIVED
          </div>
        </div>

        {/* Section Header */}
        <div className="pt-12 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1C1B1A] leading-[1.15]">
              Curated Documents &amp; Papers
            </h2>
            <p className="mt-4 text-[#5E5B56] text-sm sm:text-base max-w-xl">
              Official academic records, curriculum vitae, technical study monographs, and verified credentials preserved in the personal repository.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#78746D]">
              CATALOG NO. AT-DOCS-2026
            </span>
          </div>
        </div>

        {/* Large Document Rows (Not a card grid! As specified: Large document rows with subtle dividers) */}
        <div className="border-t border-[#E8E4DC]">
          {DOCUMENTS.map((doc: DocumentItem, index: number) => (
            <div
              key={doc.id}
              onClick={() => setSelectedDoc(doc)}
              className="group py-8 sm:py-10 border-b border-[#E8E4DC] cursor-pointer transition-colors duration-200 hover:bg-[#F5F2EB]/50 -mx-4 px-4 sm:-mx-6 sm:px-6"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedDoc(doc);
                }
              }}
              aria-label={`Open document ${doc.name}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center">
                {/* Index & Year */}
                <div className="md:col-span-2 flex items-baseline space-x-4 md:space-x-0 md:flex-col">
                  <span className="font-mono text-xs text-[#434E3C] font-semibold">
                    0{index + 1}
                  </span>
                  <span className="font-serif text-lg md:text-xl text-[#78746D] font-light md:mt-1">
                    {doc.year}
                  </span>
                </div>

                {/* Document Name & Excerpt preview */}
                <div className="md:col-span-7 space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#1C1B1A] group-hover:text-[#434E3C] transition-colors font-normal leading-snug">
                    {doc.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#78746D]">
                    <span className="font-mono uppercase tracking-wider">{doc.catalogId}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.institution}</span>
                    <span aria-hidden="true">·</span>
                    <span>{doc.fileSize}</span>
                  </div>
                </div>

                {/* Document Type */}
                <div className="md:col-span-2 text-xs font-mono tracking-wider text-[#5E5B56] uppercase">
                  {doc.type}
                </div>

                {/* View / Open Action Button */}
                <div className="md:col-span-1 flex justify-start md:justify-end">
                  <div className="inline-flex items-center space-x-1.5 text-xs tracking-[0.16em] uppercase text-[#1C1B1A] group-hover:text-[#434E3C] font-medium transition-colors">
                    <span>VIEW</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#78746D] group-hover:text-[#434E3C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom Details */}
        <div className="mt-12 pt-6 flex flex-wrap items-center justify-between text-xs text-[#78746D]">
          <div className="flex items-center space-x-2">
            <FileText className="w-3.5 h-3.5 text-[#434E3C]" />
            <span className="tracking-widest uppercase font-mono text-[11px]">
              Direct academic requests may be directed via correspondence
            </span>
          </div>

          <a
            href="mailto:arfeentariq2008@gmail.com?subject=Document%20Request%20-%20Arfeen%20Tariq"
            className="mt-2 sm:mt-0 text-[#1C1B1A] hover:text-[#434E3C] underline underline-offset-4 tracking-wider uppercase text-[11px]"
          >
            Request Unlisted Manuscript
          </a>
        </div>
      </div>

      {/* Interactive Document Viewer Modal */}
      <DocumentModal
        docItem={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />
    </section>
  );
}
