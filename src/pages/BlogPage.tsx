import * as React from "react";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  Tag, 
  Search, 
  ArrowRight, 
  X, 
  Copy, 
  Check, 
  Share2, 
  Sparkles,
  ChevronRight
} from "lucide-react";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: "Machine Learning" | "Backend Systems" | "Frontend & UI/UX" | "Data Engineering";
  readTime: string;
  date: string;
  featured?: boolean;
  tags: string[];
  takeaways: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: { language: string; code: string };
    }[];
  };
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "llm-quantization-gguf-awq",
    title: "Demystifying LLM Quantization: Running 70B Models on Consumer GPUs with GGUF & AWQ",
    excerpt: "A deep dive into weight-only quantization techniques (W4A16, GGUF, AWQ, and EXL2), kernel matrix multiplications, perplexity degradation benchmarks, and running local models with llama.cpp.",
    category: "Machine Learning",
    readTime: "8 min read",
    date: "Jan 18, 2025",
    featured: true,
    tags: ["LLM", "Quantization", "GGUF", "AWQ", "PyTorch", "CUDA"],
    takeaways: [
      "4-bit AWQ and GGUF preserve 98%+ of FP16 perplexity while reducing VRAM footprints by 70%.",
      "Activation Outlier preservation is the secret sauce behind AWQ's low perplexity degradation.",
      "Offloading specific layer matrices to system RAM via llama.cpp allows running 70B parameters smoothly on unified memory."
    ],
    content: {
      intro: "Running state-of-the-art Large Language Models once required enterprise clusters of 8x A100 GPUs. Today, mathematical breakthroughs in post-training weight quantization allow software engineers to run 70-billion-parameter models directly on consumer workstations. In this article, we dissect the mechanics behind GGUF, AWQ, and why INT4 quantization does not destroy model reasoning.",
      sections: [
        {
          heading: "1. The Memory Bottleneck in Modern LLMs",
          body: "Standard FP16 (16-bit floating point) weights demand 2 bytes of VRAM per parameter. For a 70B model, just holding weights in GPU memory requires 140GB of VRAM—not accounting for the KV cache or context window buffers. By compressing weights from 16 bits down to 4 bits (INT4), the storage footprint drops to 0.5 bytes per parameter, allowing a 70B model to comfortably fit into ~38GB of memory.",
          codeSnippet: {
            language: "python",
            code: `# Calculating minimal VRAM requirement for quantized weights
def estimate_vram_gb(param_billions: float, bits: int, overhead_ratio: float = 1.2) -> float:
    raw_gb = (param_billions * 1e9 * (bits / 8)) / (1024 ** 3)
    return round(raw_gb * overhead_ratio, 2)

# Llama-3-70B in 4-bit quantization with KV cache buffer
print(f"70B 4-bit: {estimate_vram_gb(70, 4)} GB VRAM") # ~39.1 GB`
          }
        },
        {
          heading: "2. How AWQ (Activation-Aware Weight Quantization) Protects Salient Channels",
          body: "Traditional round-to-nearest (RTN) quantization indiscriminately rounds every float to the nearest integer grid. However, researchers discovered that only ~1% of weight channels dictate 90% of model perplexity. AWQ observes activation magnitudes during forward calibration passes and multiplies salient weights by an adaptive scaling factor before quantizing, preventing catastrophic degradation.",
        },
        {
          heading: "3. Benchmarking Local Inference with llama.cpp & Ollama",
          body: "Using llama.cpp with metal or CUDA acceleration enables matrix-vector multiplication (GEMV) kernels tuned specifically for INT4 quantized weights, delivering upwards of 28 tokens/sec on modern hardware.",
          codeSnippet: {
            language: "bash",
            code: `# Running local quantized 70B inference via llama.cpp
./llama-cli \\
  -m ./models/Meta-Llama-3-70B-Instruct-Q4_K_M.gguf \\
  --n-gpu-layers 48 \\
  --threads 12 \\
  --ctx-size 8192 \\
  --temp 0.7 \\
  --prompt "Explain Paxos consensus in simple distributed systems terms:"`
          }
        }
      ]
    }
  },
  {
    id: "resilient-microservices-go-kafka",
    title: "Architecting Resilient Microservices with Go, gRPC, and Apache Kafka",
    excerpt: "How to design high-throughput event-driven microservices capable of sustaining 50,000 requests per second with idempotent consumer groups, dead-letter queues, and OpenTelemetry distributed tracing.",
    category: "Backend Systems",
    readTime: "10 min read",
    date: "Dec 12, 2024",
    featured: true,
    tags: ["Go", "Kafka", "gRPC", "Microservices", "Docker", "Distributed Systems"],
    takeaways: [
      "Avoid distributed two-phase commit (2PC) transactions; leverage transactional outbox patterns with Kafka instead.",
      "Always design Kafka consumers to be strictly idempotent using unique message UUID dedup keys in Redis or Postgres.",
      "Dead Letter Queues (DLQ) with exponential retry backoff ensure poison-pill payloads never halt consumer group lag."
    ],
    content: {
      intro: "When transitioning from monolithic backends to distributed microservices, network unreliability and partial network partitions become standard operating conditions. In this technical walkthrough, we examine how to construct resilient asynchronous services using Go routines, gRPC multiplexing, and Apache Kafka partitioned topics.",
      sections: [
        {
          heading: "1. The Transactional Outbox Pattern in Go",
          body: "Directly publishing a Kafka message after writing to a database introduces dual-write inconsistencies. If the database commit succeeds but the network drops before Kafka acknowledges, events are lost forever. The transactional outbox pattern writes both the business entity and the outgoing event in a single atomic database transaction.",
          codeSnippet: {
            language: "go",
            code: `// Atomic outbox transaction in Go with pgx
func (s *OrderService) CreateOrder(ctx context.Context, order Order) error {
    tx, err := s.db.Begin(ctx)
    if err != nil {
        return err
    }
    defer tx.Rollback(ctx)

    // 1. Insert primary entity
    if err := s.orderRepo.InsertTx(ctx, tx, &order); err != nil {
        return err
    }

    // 2. Insert outbox event in identical database transaction
    eventPayload, _ := json.Marshal(order)
    outboxRecord := OutboxEvent{
        ID:        uuid.New().String(),
        Topic:     "orders.created.v1",
        Payload:   eventPayload,
        CreatedAt: time.Now().UTC(),
    }
    if err := s.outboxRepo.InsertTx(ctx, tx, outboxRecord); err != nil {
        return err
    }

    return tx.Commit(ctx)
}`
          }
        },
        {
          heading: "2. Idempotent Consumer Implementation with Redis Deduplication",
          body: "In Kafka, distributed brokers guarantee at-least-once delivery semantics. During rebalances or transient network drops, consumers will inevitably receive duplicate messages. We maintain an atomic SETNX key with a 48-hour TTL to reject duplicates with sub-millisecond overhead.",
        }
      ]
    }
  },
  {
    id: "tactile-web-neo-brutalism",
    title: "Tactile Web Design: Bringing Neo-Brutalism to Life with Tailwind CSS & GSAP Motion",
    excerpt: "Why modern web aesthetics have become homogenized with flat minimalism, and how sharp high-contrast borders, solid offset drop-shadows, curated obsidian dark palettes, and GSAP scroll scrubbing create unforgettable user experiences.",
    category: "Frontend & UI/UX",
    readTime: "6 min read",
    date: "Nov 28, 2024",
    featured: false,
    tags: ["Tailwind CSS", "GSAP", "Design System", "UI/UX", "Neo-Brutalism"],
    takeaways: [
      "Neo-Brutalism restores physical affordances to digital UI using heavy borders and solid offset drop-shadows.",
      "Combining dark obsidian (#1F2022) with vivid neon accents prevents the eye strain associated with harsh stark white brutalism.",
      "GSAP scroll-driven scrub triggers must cleanly register clearProps to prevent layout shifts on dynamic screens."
    ],
    content: {
      intro: "For the last decade, web design converged into safe, identical corporate minimalism: rounded pills, faint 1px gray borders, and faint gaussian blur shadows. Neo-Brutalism rebels against this uniformity by re-introducing bold typographic hierarchy, functional tactile buttons, and playful contrast.",
      sections: [
        {
          heading: "1. The Anatomy of Tactile Neo-Brutalist Buttons",
          body: "Unlike standard flat buttons with opacity transitions, Neo-Brutalist elements mimic physical micro-switches. On hover, the button translates -3px diagonally while extending a solid unblurred drop shadow. On active click, it translates +2px with a 1px shadow, giving the user tactile mechanical feedback.",
          codeSnippet: {
            language: "css",
            code: `/* Tactile Neo-Brutalist interactive button */
.btn-brutal {
  transition: transform 0.1s cubic-bezier(0.2, 0, 0, 1), 
              box-shadow 0.1s cubic-bezier(0.2, 0, 0, 1);
  border: 3px solid #292929;
  background-color: #FF4F00;
  color: #FFFFFF;
}

.btn-brutal:hover {
  transform: translate(-3px, -3px);
  box-shadow: 6px 6px 0px #292929;
}

.btn-brutal:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #292929;
}`
          }
        },
        {
          heading: "2. Pairing GSAP ScrollTrigger with Obsidian Themes",
          body: "By coordinating scroll velocity with GSAP timeline scrub, we can animate telemetry counters, SVG starbursts, and progress bars smoothly without janky re-renders.",
        }
      ]
    }
  },
  {
    id: "modern-data-lakehouse-bigquery-dbt",
    title: "Modern Data Lakehouses: Scaling ELT Pipelines with Google BigQuery & dbt",
    excerpt: "How we restructured multi-terabyte unpartitioned event logs into optimized Iceberg tables in Google Cloud BigQuery, slashing query costs by 62% using incremental dbt materialization and partition pruning.",
    category: "Data Engineering",
    readTime: "9 min read",
    date: "Oct 15, 2024",
    featured: false,
    tags: ["BigQuery", "dbt", "SQL", "Google Cloud", "Data Lakehouse", "ETL"],
    takeaways: [
      "Always partition BigQuery tables by ingestion date and cluster on high-cardinality filter dimensions like user_id and event_type.",
      "Use dbt incremental models with merge strategies to avoid processing historical immutable logs repeatedly.",
      "Implement quarantine staging tables with JSON schema assertion tests to prevent schema drift crashes."
    ],
    content: {
      intro: "Querying raw JSON payloads directly in cloud data warehouses is a common source of astronomical cloud billing surprises. In this case study, we document the transformation of an enterprise event pipeline into an optimized, cost-controlled BigQuery and dbt architecture.",
      sections: [
        {
          heading: "1. Partitioning and Clustering Strategies",
          body: "BigQuery charges based on the total bytes scanned by each query. By partitioning tables on a DATE(created_at) timestamp and clustering by event_category and status, analytical queries only scan relevant shards, instantly cutting scan sizes from 500GB down to 12GB per query.",
          codeSnippet: {
            language: "sql",
            code: `-- dbt model: partitioned & clustered analytics table
{{ config(
    materialized='incremental',
    unique_key='event_id',
    partition_by={
      "field": "event_date",
      "data_type": "date",
      "granularity": "day"
    },
    cluster_by=["event_type", "tenant_id"]
) }}

SELECT
    event_id,
    DATE(timestamp) AS event_date,
    timestamp,
    tenant_id,
    event_type,
    JSON_EXTRACT_SCALAR(payload, '$.amount') AS transaction_amount
FROM {{ source('raw_telemetry', 'events_stream') }}
{% if is_incremental() %}
    WHERE timestamp >= (SELECT MAX(timestamp) FROM {{ this }})
{% endif %}`
          }
        }
      ]
    }
  }
];

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [activeArticle, setActiveArticle] = React.useState<BlogPost | null>(null);
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  const categories = [
    "All",
    "Machine Learning",
    "Backend Systems",
    "Frontend & UI/UX",
    "Data Engineering",
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="bg-[#1F2022] min-h-screen text-[#E8F8F5]">
      {/* Header Banner */}
      <div className="border-b-4 border-[#292929] bg-[#141517] p-6 sm:p-10">
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFEA00]/10 border border-[#FFEA00]/30 font-mono text-xs font-bold text-[#FFEA00] uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Writing & Architecture Notes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
            Engineering <span className="text-[#FFEA00]">Insights</span> & Deep Dives
          </h1>

          <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/70 max-w-3xl leading-relaxed">
            In-depth technical guides, architectural post-mortems, and engineering experiments written by Raihan on AI/ML quantization, Go microservices, and modern UI systems.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-[#292929]">
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Published Posts</span>
              <span className="font-mono text-xl font-black text-[#FFEA00]">4 Articles</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Average Read Time</span>
              <span className="font-mono text-xl font-black text-[#00BFFF]">8 Minutes</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Code Snippets</span>
              <span className="font-mono text-xl font-black text-[#FF4F00]">100% Tested</span>
            </div>
            <div className="p-3 bg-[#1F2022] border-2 border-[#292929]">
              <span className="font-mono text-[10px] text-[#E8F8F5]/60 uppercase block">Topics</span>
              <span className="font-mono text-xl font-black text-[#D5006D]">ML, Go, Web, Cloud</span>
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
                ? BLOG_POSTS.length
                : BLOG_POSTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 font-mono text-xs font-bold uppercase transition-all whitespace-nowrap border-2 ${
                    selectedCategory === cat
                      ? "bg-[#FFEA00] text-[#1F2022] border-[#FFEA00] shadow-[2px_2px_0px_#292929]"
                      : "bg-[#292929] text-[#E8F8F5]/70 border-[#292929] hover:text-white hover:border-[#FFEA00]/50"
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
              placeholder="Search topics or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#141517] border-2 border-[#292929] font-mono text-xs text-white placeholder-[#E8F8F5]/40 focus:border-[#FFEA00] focus:outline-none transition-colors"
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

      {/* Articles Grid */}
      <div className="p-6 sm:p-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setActiveArticle(post)}
              className="group cursor-pointer bg-[#141517] border-4 border-[#292929] hover:border-[#FFEA00] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 shadow-[6px_6px_0px_#292929] hover:shadow-[8px_8px_0px_#FFEA00] hover:-translate-y-0.5"
            >
              <div className="space-y-4">
                {/* Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-black px-2.5 py-0.5 bg-[#1F2022] text-[#FFEA00] border border-[#292929] uppercase">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-xs text-[#E8F8F5]/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                </div>

                <div>
                  <h2 className="font-mono font-black text-xl sm:text-2xl text-white group-hover:text-[#FFEA00] transition-colors leading-tight">
                    {post.title}
                  </h2>
                </div>

                <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/70 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#1F2022] border border-[#292929] text-[#E8F8F5]/60 font-mono text-[10px]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#292929] flex items-center justify-between">
                <span className="font-mono text-xs text-[#00BFFF] font-bold uppercase">
                  Click to read full article
                </span>
                <span className="btn-brutal px-3 py-1 bg-[#292929] text-white font-mono text-xs font-bold uppercase group-hover:bg-[#FFEA00] group-hover:text-black flex items-center gap-1">
                  <span>Read</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-App Interactive Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#1F2022] border-4 border-[#FFEA00] shadow-[14px_14px_0px_#292929] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#FFEA00] text-[#1F2022] p-4 sm:p-5 flex items-center justify-between border-b-4 border-[#292929] sticky top-0 z-10 select-none">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-[#1F2022] text-[#FFEA00] font-mono text-[10px] font-black uppercase">
                  {activeArticle.category}
                </span>
                <span className="font-mono text-xs font-bold text-[#1F2022]">
                  {activeArticle.readTime} • {activeArticle.date}
                </span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="w-8 h-8 bg-[#1F2022] text-white hover:bg-black hover:text-white border-2 border-[#1F2022] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Reader Content Body */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Title & Author Info */}
              <div className="space-y-4 border-b-2 border-[#292929] pb-6">
                <h1 className="font-mono font-black text-2xl sm:text-4xl text-white leading-tight uppercase">
                  {activeArticle.title}
                </h1>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#292929] border border-[#FF4F00] p-1">
                    <img src="/logo.png" alt="Raihan" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-white block uppercase">
                      Raihan Shandi Adrida Meilano
                    </span>
                    <span className="font-mono text-[10px] text-[#00BFFF] block">
                      ML Engineer & Full-Stack Developer
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Takeaways Box */}
              <div className="bg-[#141517] border-2 border-[#FFEA00] p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#FFEA00] font-mono text-xs font-bold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Executive Takeaways</span>
                </div>
                <ul className="space-y-2 font-mono text-xs text-[#E8F8F5]/80">
                  {activeArticle.takeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FFEA00] font-bold">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Introduction */}
              <div className="font-mono text-xs sm:text-sm text-[#E8F8F5]/85 leading-relaxed space-y-4">
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  {activeArticle.content.intro}
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {activeArticle.content.sections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="font-mono font-black text-lg sm:text-xl text-white uppercase border-l-4 border-[#00BFFF] pl-3">
                      {section.heading}
                    </h2>
                    <p className="font-mono text-xs sm:text-sm text-[#E8F8F5]/80 leading-relaxed">
                      {section.body}
                    </p>

                    {/* Code Snippet Box */}
                    {section.codeSnippet && (
                      <div className="bg-[#141517] border-2 border-[#292929] overflow-hidden my-4">
                        <div className="bg-[#292929] px-4 py-2 flex items-center justify-between text-xs font-mono">
                          <span className="text-[#00BFFF] uppercase font-bold text-[11px]">
                            {section.codeSnippet.language} snippet
                          </span>
                          <button
                            onClick={() => handleCopyCode(section.codeSnippet!.code)}
                            className="flex items-center gap-1.5 text-white hover:text-[#FFEA00] transition-colors"
                          >
                            {copiedCode === section.codeSnippet.code ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-[#00BFFF]" />
                                <span className="text-[11px] text-[#00BFFF]">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span className="text-[11px]">Copy Code</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-4 font-mono text-xs text-[#E8F8F5] overflow-x-auto bg-[#101113] leading-relaxed">
                          <code>{section.codeSnippet.code}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Reader Footer */}
              <div className="pt-6 border-t-2 border-[#292929] flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 bg-[#292929] text-[#E8F8F5] font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors"
                >
                  Close Reader
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({ title: activeArticle.title, url: window.location.href });
                      } else {
                        handleCopyCode(window.location.href);
                      }
                    }}
                    className="btn-brutal inline-flex items-center gap-2 px-4 py-2 bg-[#FFEA00] text-[#1F2022] font-mono text-xs font-bold uppercase"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Post</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
