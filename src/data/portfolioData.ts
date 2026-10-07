export interface TimelineItem {
  id: string;
  year: string;
  period?: string;
  title: string;
  category: 'Education' | 'Milestone' | 'Research';
  location: string;
  description: string;
  highlights?: string[];
}

export interface DocumentItem {
  id: string;
  name: string;
  catalogId: string;
  year: string;
  type: string;
  format: string;
  fileSize: string;
  description: string;
  author: string;
  institution: string;
  keyTopics: string[];
  excerpt: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface InterestItem {
  domain: string;
  focus: string;
}

export const PERSONAL_INFO = {
  name: 'Arfeen Tariq',
  archiveLabel: 'PERSONAL ARCHIVE',
  catalogNumber: 'ARCHIVE REF. AT-2026',
  identityLine: 'Student · Learner · Explorer',
  location: 'Lahore, Pakistan',
  email: 'arfeentariq2008@gmail.com',
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  intro:
    'A personal record documenting academic pursuits in Cyber Security, technical investigations, systems research, and intellectual curiosities.',
  bio:
    'Currently pursuing a Bachelor of Science in Cyber Security. Dedicated to understanding the architectural underpinnings of secure computing, defensive protocols, and operating system internals. Approaching technology with patient rigor, quiet craftsmanship, and an enduring curiosity for how complex systems operate and fail.',
  academicDegree: 'Bachelor of Science in Cyber Security',
  degreeStatus: 'Undergraduate Candidate (2024 – 2028)',
};

export const VALUES: ValueItem[] = [
  {
    title: 'Disciplined Inquiry',
    description: 'Approaching technical problems from first principles rather than superficial quick-fixes.',
  },
  {
    title: 'Rigorous Craft',
    description: 'Precision in documentation, code cleanliness, and security architecture validation.',
  },
  {
    title: 'Ethical Responsibility',
    description: 'Holding cyber defense as an obligation to protect individual privacy and critical infrastructure.',
  },
  {
    title: 'Continuous Cultivation',
    description: 'Treating learning not as a milestone, but as a deliberate daily practice of study and experimentation.',
  },
];

export const INTERESTS: InterestItem[] = [
  {
    domain: 'Defensive Security',
    focus: 'Threat modeling, intrusion detection patterns, and endpoint analysis',
  },
  {
    domain: 'Systems Architecture',
    focus: 'Linux kernel mechanisms, process isolation, and memory safety',
  },
  {
    domain: 'Network Engineering',
    focus: 'Packet inspection, TLS handshakes, and resilient routing protocols',
  },
  {
    domain: 'Cryptographic Foundations',
    focus: 'Symmetric & asymmetric primitives, hashing integrity, and key exchange',
  },
];

export const LANGUAGES = [
  { name: 'English', proficiency: 'Professional / Academic Fluency' },
  { name: 'Urdu', proficiency: 'Native Speaker' },
  { name: 'Punjabi', proficiency: 'Conversational Fluency' },
];

export const TIMELINE: TimelineItem[] = [
  {
    id: 'cyber-sec-bs',
    year: '2024 — 2028',
    period: 'Current Pursuit',
    title: 'BS in Cyber Security',
    category: 'Education',
    location: 'University Faculty of Computing',
    description:
      'Pursuing an undergraduate degree focused on digital defense, computer architecture, cryptography, operating systems, and network security protocols.',
    highlights: [
      'Foundational coursework in Data Structures, Algorithms, and Discrete Mathematics',
      'Laboratory practicals in Linux system administration and virtualized network labs',
      'Active participation in student cybersecurity study groups and Capture The Flag (CTF) challenges',
    ],
  },
  {
    id: 'ics-graduation',
    year: '2023',
    period: 'Completed',
    title: 'Intermediate in Computer Science (ICS)',
    category: 'Education',
    location: 'Punjab College / Board of Intermediate Education',
    description:
      'Graduated with distinction across core mathematics, statistics, and foundational computer science principles.',
    highlights: [
      'Comprehensive study of C/C++ structured programming principles',
      'Mastered fundamentals of database structures and Boolean algebra',
      'Awarded academic commendation for academic consistency',
    ],
  },
  {
    id: 'early-foundations',
    year: '2021 — 2022',
    period: 'Completed',
    title: 'Secondary School Certificate (Science & Computing)',
    category: 'Milestone',
    location: 'Federal / Regional Examination Board',
    description:
      'Early exploration into computer hardware components, foundational networking concepts, and logical problem solving.',
    highlights: [
      'First independent computer assembly and dual-boot Linux setup',
      'Explored bash shell scripting and foundational computer mechanics',
    ],
  },
];

export const DOCUMENTS: DocumentItem[] = [
  {
    id: 'doc-cv',
    name: 'Curriculum Vitae — Academic & Technical Dossier',
    catalogId: 'DOC-2026-CV-01',
    year: '2026',
    type: 'Curriculum Vitae',
    format: 'PDF / Verified Document',
    fileSize: '142 KB',
    description:
      'Complete academic record, laboratory projects, technical competencies, and coursework summary for Arfeen Tariq.',
    author: 'Arfeen Tariq',
    institution: 'Department of Cyber Security',
    keyTopics: ['Cyber Defense', 'C/C++', 'Linux Hardening', 'Computer Networks', 'Threat Analysis'],
    excerpt:
      'This document outlines the academic trajectory, specialized coursework, hands-on lab experiments, and security research proficiencies of Arfeen Tariq. Details include undergraduate coursework in Network Security, Operating Systems, Cryptography, and programming languages.',
  },
  {
    id: 'doc-ics-transcript',
    name: 'Academic Transcript & Credential (ICS Computer Science)',
    catalogId: 'DOC-2023-EDU-02',
    year: '2023',
    type: 'Academic Record',
    format: 'Official Credential / Verified',
    fileSize: '310 KB',
    description:
      'Formal academic record validating completion of Intermediate in Computer Science with distinction in computing and mathematics.',
    author: 'Board of Intermediate & Secondary Education',
    institution: 'Faculty of Sciences',
    keyTopics: ['Mathematics', 'Computer Science', 'Statistics', 'Structured Programming'],
    excerpt:
      'Official verification of intermediate qualifications. Covers comprehensive examinations in Applied Mathematics, Computer Science, and Physics/Statistics with recorded high academic achievement.',
  },
  {
    id: 'doc-network-paper',
    name: 'Study Monograph: Fundamentals of Packet Analysis & Subnetting',
    catalogId: 'DOC-2025-RES-03',
    year: '2025',
    type: 'Research Note',
    format: 'Technical Brief',
    fileSize: '215 KB',
    description:
      'An independent research monograph examining TCP/IP encapsulation, Wireshark packet dissection, and defensive firewall segmentation.',
    author: 'Arfeen Tariq',
    institution: 'Independent Security Studies',
    keyTopics: ['Packet Dissection', 'TCP/IP', 'Wireshark', 'CIDR Subnetting', 'Firewall Rules'],
    excerpt:
      'An investigation into the structural anatomy of network packets traversing local area networks. Features packet-level timing analyses, SYN-ACK handshake validation, and security mitigations against ARP poisoning.',
  },
  {
    id: 'doc-linux-hardening',
    name: 'Technical Guide: Linux Kernel Hardening & Auditing Baseline',
    catalogId: 'DOC-2025-LAB-04',
    year: '2025',
    type: 'Technical Dossier',
    format: 'System Specification',
    fileSize: '185 KB',
    description:
      'A practical reference guide detailing least-privilege configurations, pam authentication rules, and auditd system surveillance.',
    author: 'Arfeen Tariq',
    institution: 'Cyber Security Lab Notes',
    keyTopics: ['Linux Hardening', 'Auditd', 'Permissions', 'PAM Configuration', 'SSH Hardening'],
    excerpt:
      'A structured specification for configuring minimal attack surfaces across Debian and Red Hat server installations. Includes reproducible bash hardening manifests and audit rule definitions.',
  },
];
