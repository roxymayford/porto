import * as React from "react";
import { 
  Award, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Copy, 
  Check, 
  X, 
  ShieldCheck, 
  Calendar, 
  FileCheck,
  Building,
  Sparkles
} from "lucide-react";

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issuerBadge: string;
  category: "Cloud Architecture" | "Machine Learning & AI" | "Web Development";
  issueDate: string;
  credentialId: string;
  verifyUrl: string;
  skillsVerified: string[];
  description: string;
}

const ALL_CERTIFICATIONS: CertificationItem[] = [
  {
    id: "gcp-ace",
    name: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    issuerBadge: "GCP",
    category: "Cloud Architecture",
    issueDate: "Oct 2024 — Oct 2027",
    credentialId: "GCP-ACE-982410-RSM",
    verifyUrl: "https://cloud.google.com/certification",
    description: "Validates proficiency in deploying applications, monitoring operations, managing enterprise cloud infrastructure, and securing GCP IAM and BigLake environments.",
    skillsVerified: [
      "Google Kubernetes Engine (GKE)",
      "VPC Peering & Cloud Armor",
      "BigQuery Architecture",
      "Cloud IAM & Service Accounts",
      "Terraform on GCP"
    ],
  },
  {
    id: "deeplearning-ai-mls",
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    issuerBadge: "DL.AI",
    category: "Machine Learning & AI",
    issueDate: "Aug 2024",
    credentialId: "DLAI-MLS-77412-ID",
    verifyUrl: "https://coursera.org/verify/specialization",
    description: "Foundational masterclass taught by Andrew Ng covering mathematical formulations of supervised learning, gradient descent optimization, deep neural networks, and reinforcement learning.",
    skillsVerified: [
      "Deep Neural Networks",
      "Regularization & Bias/Variance",
      "Decision Trees & XGBoost",
      "Unsupervised Clustering (PCA & K-Means)",
      "Recommender Systems"
    ],
  },
  {
    id: "aws-saa",
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    issuerBadge: "AWS",
    category: "Cloud Architecture",
    issueDate: "Jan 2024 — Jan 2027",
    credentialId: "AWS-SAA-449102-ID",
    verifyUrl: "https://aws.amazon.com/verification",
    description: "Certifies knowledge of designing cost-optimized, fault-tolerant, and decoupled distributed systems across AWS Multi-AZ infrastructures.",
    skillsVerified: [
      "Multi-AZ Architecture",
      "Amazon ECS / Fargate",
      "Amazon RDS Aurora & DynamoDB",
      "API Gateway & AWS Lambda",
      "AWS CloudFront & Route53"
    ],
  },
  {
    id: "tensorflow-developer",
    name: "TensorFlow Developer Certificate",
    issuer: "TensorFlow / Google",
    issuerBadge: "TF",
    category: "Machine Learning & AI",
    issueDate: "Nov 2023",
    credentialId: "TF-DEV-559104-RSM",
    verifyUrl: "https://tensorflow.org/certificate",
    description: "Demonstrates practical competency in building and training computer vision models, NLP tokenizers, and sequence models using TensorFlow 2.x and Keras.",
    skillsVerified: [
      "Convolutional Neural Networks (CNN)",
      "Transfer Learning & ResNet",
      "Tokenization & Embeddings",
      "Time Series Forecasting",
      "Model Quantization & TFLite"
    ],
  },
  {
    id: "dicoding-fe-expert",
    name: "Menjadi Front-End Web Developer Expert",
    issuer: "Dicoding Indonesia (Google Authorized)",
    issuerBadge: "DCD",
    category: "Web Development",
    issueDate: "May 2023",
    credentialId: "DCD-FE-EXPERT-8812",
    verifyUrl: "https://dicoding.com/certificates/DCD-FE-EXPERT-8812",
    description: "Comprehensive certification on building offline-first Progressive Web Applications (PWA), Web Workers, Service Worker caching strategies, and Core Web Vitals optimization.",
    skillsVerified: [
      "Progressive Web Apps (PWA)",
      "Service Workers & Cache API",
      "Web Accessibility (a11y) & WCAG",
      "End-to-End Testing with CodeceptJS",
      "Web Performance (LCP, INP, CLS)"
    ],
  },
  {
    id: "dicoding-ml-intermediate",
    name: "Belajar Pengembangan Machine Learning",
    issuer: "Dicoding Indonesia",
    issuerBadge: "DCD",
    category: "Machine Learning & AI",
    issueDate: "Dec 2022",
    credentialId: "DCD-ML-INT-3310",
    verifyUrl: "https://dicoding.com/certificates/DCD-ML-INT-3310",
    description: "Hands-on implementation of machine learning workflows, hyperparameter tuning, model serving with Flask/FastAPI, and automated pipelines.",
    skillsVerified: [
      "Image Classification",
      "Sentiment Analysis with NLP",
      "TensorFlow Serving",
      "Scikit-Learn Preprocessing",
      "Model Evaluation Metrics"
    ],
  },
];

export function CertificationsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const [inspectCert, setInspectCert] = React.useState<CertificationItem | null>(null);

  const categories = [
    "All",
    "Cloud Architecture",
    "Machine Learning & AI",
    "Web Development",
  ];

  const filteredCerts = ALL_CERTIFICATIONS.filter((cert) => {
    const matchesCategory =
      selectedCategory === "All" || cert.category === selectedCategory;
    const matchesSearch =
      cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.credentialId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skillsVerified.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCopy = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-[#1F2022] min-h-screen text-[#E8F8F5]">
      {/* Header Banner */}
      <div className="border-b-4 border-[#292929] bg-[#141517] p-6 sm:p-10">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D5006D]/10 border border-[#D5006D]/30 font-mono text-xs font-bold text-[#D5006D] uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Official Credentials & Honors</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            Verified <span className="text-[#D5006D]">Certifications</span>
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/70 max-w-3xl leading-relaxed">
            Industry credentials issued by Google Cloud, DeepLearning.AI, Amazon Web Services, and Dicoding verifying skills in Machine Learning, Cloud Architecture, and Software Engineering.
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#292929]">
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Total Credentials</span>
              <span className="font-mono text-xl font-black text-[#D5006D]">6 Verified</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Cloud Credentials</span>
              <span className="font-mono text-xl font-black text-[#00BFFF]">GCP & AWS</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">AI & ML Badges</span>
              <span className="font-mono text-xl font-black text-[#FFEA00]">DL.AI & TF</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Status</span>
              <span className="font-mono text-xl font-black text-[#FF4F00]">100% Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="sticky top-[69px] z-30 bg-[#1F2022] border-b-4 border-[#292929] px-6 sm:px-10 py-4 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 no-scrollbar">
            {categories.map((cat) => {
              const count = cat === "All"
                ? ALL_CERTIFICATIONS.length
                : ALL_CERTIFICATIONS.filter((c) => c.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-all whitespace-nowrap border-2 ${
                    selectedCategory === cat
                      ? "bg-[#D5006D] text-white border-[#D5006D] shadow-[2px_2px_0px_#292929]"
                      : "bg-[#292929] text-[#E8F8F5]/70 border-[#292929] hover:text-white hover:border-[#D5006D]/50"
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-[#E8F8F5]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search cert or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#141517] border-2 border-[#292929] font-mono text-xs text-white placeholder-[#E8F8F5]/40 focus:border-[#D5006D] focus:outline-none transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#E8F8F5]/50 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="p-6 sm:p-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setInspectCert(cert)}
              className="group cursor-pointer bg-[#141517] border-4 border-[#292929] hover:border-[#D5006D] p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 shadow-[6px_6px_0px_#292929] hover:shadow-[8px_8px_0px_#D5006D] hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                {/* Badge & Category Row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-11 h-11 bg-[#292929] border-2 border-[#D5006D] flex items-center justify-center font-mono font-black text-xs text-[#D5006D] shadow-sm">
                    {cert.issuerBadge}
                  </div>
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 bg-[#1F2022] text-[#00BFFF] border border-[#292929] uppercase">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-mono font-black text-base sm:text-lg text-white group-hover:text-[#D5006D] transition-colors leading-tight">
                    {cert.name}
                  </h3>
                  <span className="font-mono text-xs font-bold text-[#E8F8F5]/60 block mt-1">
                    {cert.issuer}
                  </span>
                </div>

                <p className="font-mono text-xs text-[#E8F8F5]/70 line-clamp-2 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills Verified Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {cert.skillsVerified.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-[#1F2022] border border-[#292929] text-[#E8F8F5]/60 font-mono text-[10px]"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsVerified.length > 3 && (
                    <span className="px-1.5 py-0.5 bg-[#292929] text-[#FFEA00] font-mono text-[10px] font-bold">
                      +{cert.skillsVerified.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-5 border-t border-[#292929] flex items-center justify-between text-xs font-mono">
                <button
                  onClick={(e) => handleCopy(cert.credentialId, e)}
                  className="flex items-center gap-1.5 text-[#E8F8F5]/60 hover:text-white transition-colors"
                  title="Copy Credential ID"
                >
                  {copiedId === cert.credentialId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#00BFFF]" />
                      <span className="text-[#00BFFF] font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] truncate max-w-[120px]">{cert.credentialId}</span>
                    </>
                  )}
                </button>

                <span className="font-bold text-[#D5006D] group-hover:translate-x-1 transition-transform flex items-center gap-1 text-[11px] uppercase">
                  Verify ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Credential Inspector Modal */}
      {inspectCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#1F2022] border-4 border-[#D5006D] shadow-[12px_12px_0px_#292929] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="bg-[#D5006D] text-white p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#292929] select-none">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#FFEA00]" />
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/80 block">
                    Verified Credential Record
                  </span>
                  <h2 className="font-mono font-black text-lg sm:text-xl uppercase">
                    {inspectCert.name}
                  </h2>
                </div>
              </div>

              <button
                onClick={() => setInspectCert(null)}
                className="w-8 h-8 bg-[#1F2022] text-white hover:bg-white hover:text-black border-2 border-[#1F2022] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-[#141517] border-2 border-[#292929]">
                  <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block flex items-center gap-1">
                    <Building className="w-3 h-3 text-[#D5006D]" />
                    Issuer
                  </span>
                  <span className="font-mono text-xs font-bold text-white mt-1 block">
                    {inspectCert.issuer}
                  </span>
                </div>

                <div className="p-3 bg-[#141517] border-2 border-[#292929]">
                  <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#00BFFF]" />
                    Validity
                  </span>
                  <span className="font-mono text-xs font-bold text-[#00BFFF] mt-1 block">
                    {inspectCert.issueDate}
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3 bg-[#141517] border-2 border-[#292929]">
                  <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block flex items-center gap-1">
                    <FileCheck className="w-3 h-3 text-[#FFEA00]" />
                    Credential ID
                  </span>
                  <span className="font-mono text-xs font-bold text-[#FFEA00] mt-1 block truncate">
                    {inspectCert.credentialId}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#E8F8F5] uppercase tracking-wider block">
                  Description & Scope
                </span>
                <p className="p-4 bg-[#141517] border-2 border-[#292929] font-mono text-xs text-[#E8F8F5]/80 leading-relaxed">
                  {inspectCert.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#E8F8F5] uppercase tracking-wider block">
                  Demonstrated Competencies
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {inspectCert.skillsVerified.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 bg-[#141517] border border-[#292929]">
                      <CheckCircle2 className="w-4 h-4 text-[#D5006D] shrink-0" />
                      <span className="font-mono text-xs text-[#E8F8F5]/80">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#292929] flex items-center justify-between gap-4">
                <button
                  onClick={() => setInspectCert(null)}
                  className="px-4 py-2 bg-[#292929] text-[#E8F8F5] font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors"
                >
                  Close
                </button>

                <a
                  href={inspectCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brutal inline-flex items-center gap-2 px-5 py-2 bg-[#D5006D] text-white font-mono text-xs font-bold uppercase"
                >
                  <span>Open Official Issuer Registry</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
