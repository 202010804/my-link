"use client";

import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: "AI & ML" | "Web Dev" | "Both";
  description: string;
  detailedDesc: string;
  tags: string[];
  github: string;
  demo?: string;
  metrics?: string;
  color: string; // Neobrutalist color for card background
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "🧠 Medical MRI classifier",
    category: "AI & ML",
    description: "Deep learning model classifying MRI scans with 99.2% accuracy.",
    detailedDesc: "A research project built using PyTorch. Leverages an optimized ResNet-50 architecture to recognize critical anomalies in brain MRIs. Achieved state-of-the-art results with extreme speed.",
    tags: ["PyTorch", "Python", "ResNet", "CV"],
    github: "https://github.com/202010804/my-link",
    metrics: "99.2% ACCURACY",
    color: "bg-[#A7F3D0]" // Mint green
  },
  {
    id: 2,
    title: "⚡ Smart Energy demand predictor",
    category: "Both",
    description: "Predictive dashboard utilizing LSTM neural networks for district energy grid.",
    detailedDesc: "A complete end-to-end full-stack app. Features a Next.js visualization fronted connected to a FastAPI predictive service using dynamic LSTM networks to forecast hourly grid demand.",
    tags: ["Next.js", "FastAPI", "TensorFlow", "Tailwind"],
    github: "https://github.com/202010804/my-link",
    demo: "http://localhost:3000",
    metrics: "94.5% DEMAND ACC",
    color: "bg-[#FDE047]" // Yellow
  },
  {
    id: 3,
    title: "🤖 Llama Academic RAG Agent",
    category: "AI & ML",
    description: "RAG Assistant analyzing core university curricula for quick, cited Q&A.",
    detailedDesc: "Uses LangChain, Llama 3, and Vector Databases to parse and analyze extensive textbook databases. Generates study guides and answers complex engineering queries in real-time.",
    tags: ["LangChain", "Llama 3", "VectorDB", "Python"],
    github: "https://github.com/202010804/my-link",
    metrics: "1.2s AVG SPEED",
    color: "bg-[#C084FC]" // Lavender purple
  },
  {
    id: 4,
    title: "🖥️ Algorithm visualizer Pro",
    category: "Web Dev",
    description: "Interactive visualizer illustrating pathfinding and sorting steps.",
    detailedDesc: "A educational visualizer designed to help students master algorithms. Created using React and Tailwind CSS. Features highly interactive stepping, customizable speed, and memory diagnostics.",
    tags: ["React", "TypeScript", "Canvas", "CSS"],
    github: "https://github.com/202010804/my-link",
    demo: "http://localhost:3000",
    color: "bg-[#FDA4AF]" // Coral pink
  }
];

export default function Home() {
  const [filter, setFilter] = useState<"All" | "AI & ML" | "Web Dev">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Interactive Console States
  const [consoleMetric, setConsoleMetric] = useState("AI_ACTIVE");
  const [consoleMsg, setConsoleMsg] = useState("Awaiting command...");
  
  // Contact States
  const [contactName, setContactName] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [feedback, setFeedback] = useState("");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "All") return true;
    if (filter === "AI & ML") return proj.category === "AI & ML" || proj.category === "Both";
    if (filter === "Web Dev") return proj.category === "Web Dev" || proj.category === "Both";
    return true;
  });

  const triggerConsoleAction = (action: string) => {
    if (action === "train") {
      setConsoleMsg("Model Training initiated: Epoch 1/100...");
      setTimeout(() => setConsoleMsg("Epoch 50/100: loss 0.045..."), 1000);
      setTimeout(() => setConsoleMsg("Training complete! Final Accuracy: 99.2%"), 2200);
    } else if (action === "predict") {
      setConsoleMsg("Querying Vector database...");
      setTimeout(() => setConsoleMsg("Found 3 matches. Semantic distance: 0.12"), 1000);
    } else {
      setConsoleMsg("Resetting system console...");
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactMsg) return;
    setFeedback(`SUCCESS: Message from ${contactName} queued!`);
    setTimeout(() => {
      setFeedback("");
      setContactName("");
      setContactMsg("");
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#111111] selection:bg-[#FFE600] selection:text-black font-mono p-4 md:p-8">
      
      {/* Neo-brutalist Header Bar */}
      <nav className="max-w-7xl mx-auto border-4 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
        <div className="flex items-center gap-3">
          <div className="bg-[#FFE600] border-2 border-black px-3 py-1 font-black text-lg tracking-wider transform -rotate-1">
            JIMIN.AI
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest hidden md:inline">
            // NEO-PORTFOLIO 2026
          </span>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/202010804/my-link"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black bg-white hover:bg-zinc-100 font-bold text-xs uppercase px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            GitHub
          </a>
          <a
            href="#projects"
            className="border-2 border-black bg-[#A7F3D0] hover:bg-[#86efac] font-bold text-xs uppercase px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            View Projects ↓
          </a>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto space-y-12 pb-24">
        
        {/* HERO SECTION - 2 Column Landing Layout */}
        <section className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Hero Left Column: Main Identity */}
          <div className="lg:col-span-7 border-4 border-black bg-[#FFE600] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
            {/* Decorative background star */}
            <div className="absolute -top-12 -right-12 text-black/10 text-[200px] font-black pointer-events-none transform rotate-12 select-none">
              ★
            </div>
            
            <div className="space-y-6">
              <div className="inline-block border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-wider">
                ⚡ IN ان공지능 (AI) Major Student
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none uppercase text-black break-keep">
                이지민<br />
                <span className="text-3xl md:text-5xl font-extrabold text-zinc-900 bg-white border-2 border-black px-3 py-1 inline-block mt-2">
                  JIMIN LEE
                </span>
              </h1>
              
              <p className="text-base md:text-lg font-bold leading-relaxed max-w-xl text-zinc-900 border-l-4 border-black pl-4 py-2">
                데이터의 심층적인 구조 속에서 지능형 솔루션을 설계하는 AI 전공 대학생입니다. 
                복잡한 딥러닝 추론 엔진부터 직관적인 웹 서비스까지 하나로 매끄럽게 연결합니다.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t-2 border-black/20 flex flex-wrap gap-3">
              <span className="border-2 border-black bg-white px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                📍 SEOUL, SOUTH KOREA
              </span>
              <span className="border-2 border-black bg-[#C084FC] px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                💼 RESEARCH LAB MEMBER
              </span>
              <span className="border-2 border-black bg-[#FDA4AF] px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                🤖 PYTORCH & NEXT.JS
              </span>
            </div>
          </div>

          {/* Hero Right Column: Interactive Terminal/Console (WOW effect) */}
          <div className="lg:col-span-5 border-4 border-black bg-[#111111] text-[#22c55e] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500 border border-black" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500 border border-black" />
                  <span className="h-3 w-3 rounded-full bg-green-500 border border-black" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Terminal: jimin-ai-core</span>
              </div>

              {/* Status Output */}
              <div className="space-y-2.5 text-xs md:text-sm font-mono">
                <p className="text-zinc-500">// SYSTEM DIAGNOSTICS</p>
                <div className="grid grid-cols-2 gap-2 border border-zinc-800 p-3 bg-zinc-950/50">
                  <p className="text-zinc-400">ACTIVE_MODEL:</p>
                  <p className="font-bold text-white">ResNet-50 / Llama3</p>
                  <p className="text-zinc-400">CUDA_STATUS:</p>
                  <p className="font-bold text-[#FFE600]">ENABLED (RTX 4090)</p>
                  <p className="text-zinc-400">CURRENT_GPA:</p>
                  <p className="font-bold text-[#A7F3D0]">4.21 / 4.5</p>
                </div>

                <div className="mt-4 p-3 bg-zinc-950 border border-zinc-900 min-h-[50px]">
                  <span className="text-zinc-500">&gt; </span>
                  <span className="text-white">{consoleMsg}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons to Trigger Dynamic Status updates */}
            <div className="mt-6 space-y-2">
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Trigger Console Diagnostics:</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => triggerConsoleAction("train")}
                  className="border border-[#22c55e] bg-zinc-900 text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-bold text-xs uppercase py-2 transition-all cursor-pointer text-center"
                >
                  [Train Model]
                </button>
                <button
                  onClick={() => triggerConsoleAction("predict")}
                  className="border border-[#22c55e] bg-zinc-900 text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-bold text-xs uppercase py-2 transition-all cursor-pointer text-center"
                >
                  [RAG Query]
                </button>
                <button
                  onClick={() => triggerConsoleAction("reset")}
                  className="border border-[#22c55e] bg-zinc-900 text-[#22c55e] hover:bg-[#22c55e] hover:text-black font-bold text-xs uppercase py-2 transition-all cursor-pointer text-center"
                >
                  [Reset]
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* ACADEMIC INTERESTS SECTION (3 Columns Desktop, 1 Column Mobile) */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight inline-block bg-[#C084FC] border-3 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            🎓 Academic Interests // 연구 분야
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            
            <div className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
              <span className="text-4xl block mb-4">🧠</span>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight text-black border-b-2 border-black pb-2">
                인공지능 & 딥러닝
              </h3>
              <p className="text-sm font-semibold text-zinc-700 leading-relaxed">
                PyTorch를 기반으로 컴퓨터 비전 모델을 연구하고 설계합니다. 특히 의료 MRI 분류 연구를 집중적으로 진행하며 99.2% 판독 정확도를 이끌어냈습니다.
              </p>
            </div>

            <div className="border-4 border-black bg-[#A7F3D0] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
              <span className="text-4xl block mb-4">🔗</span>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight text-black border-b-2 border-black pb-2">
                Full-Stack AI WEB
              </h3>
              <p className="text-sm font-semibold text-zinc-800 leading-relaxed">
                단순 모델 연구에 그치지 않고, Next.js와 FastAPI를 이용해 실제 클라이언트가 데이터 통계를 실시간으로 관찰할 수 있는 서비스 대시보드를 구축합니다.
              </p>
            </div>

            <div className="border-4 border-black bg-[#FDA4AF] p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all">
              <span className="text-4xl block mb-4">📚</span>
              <h3 className="text-xl font-black mb-3 uppercase tracking-tight text-black border-b-2 border-black pb-2">
                LLM & RAG AGENTS
              </h3>
              <p className="text-sm font-semibold text-zinc-800 leading-relaxed">
                LangChain과 Llama 3 프레임워크를 기반으로 대학교 학사 행정 및 전공 교재를 의미론적으로 정확하게 임베딩 및 분석하는 RAG 질의응답 비서를 개발합니다.
              </p>
            </div>

          </div>
        </section>

        {/* PROJECTS SHOWCASE SECTION (Filtered Grid, Neobrutalist design) */}
        <section id="projects" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight inline-block bg-[#FDA4AF] border-3 border-black px-4 py-2 transform rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              🚀 Core Projects // 핵심 프로젝트
            </h2>
            
            {/* Neobrutalist Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {(["All", "AI & ML", "Web Dev"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`border-2 border-black px-4 py-2 text-xs font-black uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] cursor-pointer ${
                    filter === cat
                      ? "bg-[#FFE600] text-black"
                      : "bg-white text-zinc-800 hover:bg-zinc-50"
                  }`}
                >
                  {cat === "All" ? "전체 목록" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Responsive Grid - 2 columns on desktop, 1 on tablet/mobile */}
          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`border-4 border-black ${project.color} p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1.5 hover:-translate-y-1.5 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer relative overflow-hidden group`}
              >
                {/* Visual badge top right */}
                <div className="absolute top-0 right-0 border-l-2 border-b-2 border-black bg-white px-3 py-1 text-[10px] font-black uppercase tracking-wider">
                  {project.category}
                </div>

                <div className="space-y-4">
                  {project.metrics && (
                    <span className="inline-block border-2 border-black bg-black text-[#A7F3D0] px-2.5 py-0.5 text-xs font-black">
                      {project.metrics}
                    </span>
                  )}
                  
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black group-hover:underline">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-zinc-900 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="border-2 border-black bg-white px-2 py-0.5 text-xs font-bold text-zinc-800">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 text-xs font-black uppercase tracking-wider text-black flex items-center gap-1">
                    🔍 click to read specs
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL EXPERTISE STAMP BOARD */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight inline-block bg-[#A7F3D0] border-3 border-black px-4 py-2 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            ⚡ Tech Expertise // 기술 보드
          </h2>
          
          <div className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-sm font-black uppercase text-zinc-400 tracking-widest border-b-2 border-zinc-100 pb-2 mb-4">
                  // ARTIFICIAL INTELLIGENCE & RESEARCH
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", 
                    "Python", "Pandas", "NumPy", "VectorDB (Chroma)", 
                    "HuggingFace", "Google Colab", "CUDA"
                  ].map((tech, idx) => (
                    <span
                      key={tech}
                      style={{ transform: `rotate(${(idx % 3 === 0 ? 1 : -1) * (idx % 2 === 0 ? 1.5 : 0.8)}deg)` }}
                      className="inline-block border-2 border-black bg-[#FFE600] px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-black uppercase text-zinc-400 tracking-widest border-b-2 border-zinc-100 pb-2 mb-4">
                  // FULL STACK DEVELOPMENT & UTILITIES
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Next.js", "React 19", "TypeScript", "Tailwind CSS v4", 
                    "FastAPI", "Node.js", "Express", "Git", "GitHub Actions", 
                    "Docker", "RESTful API", "Prisma"
                  ].map((tech, idx) => (
                    <span
                      key={tech}
                      style={{ transform: `rotate(${(idx % 2 === 0 ? -1.2 : 1.2)}deg)` }}
                      className="inline-block border-2 border-black bg-[#A7F3D0] px-4 py-2 text-xs font-black uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* NEOPRUTALIST CONTACT WINDOW */}
        <section className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-5 border-4 border-black bg-[#C084FC] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight leading-none text-black">
                Let's Build<br />
                Something Smart!
              </h2>
              <p className="text-sm font-bold text-zinc-900 leading-relaxed">
                인공지능 연구 협업, 풀스택 웹 개발, 오픈소스 기여 등 다양한 대외 프로젝트에 열려 있습니다. 궁금한 사항이 있다면 언제든지 로컬 큐에 메시지를 전송해 주세요.
              </p>
            </div>
            
            <div className="mt-8 space-y-3 pt-6 border-t-2 border-black/10 text-xs font-bold text-black uppercase">
              <p>📬 email: jimin.lee.ai@example.com</p>
              <p>🏢 university: AI & Computer Science Dept.</p>
            </div>
          </div>

          <div className="lg:col-span-7 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-black uppercase tracking-wider mb-2">// 성함 또는 기업명</label>
                <input
                  type="text"
                  id="name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  placeholder="HONG GILDONG"
                  className="w-full border-3 border-black bg-white px-4 py-3 text-sm font-bold text-black placeholder-zinc-400 outline-none focus:bg-yellow-50/30 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs font-black uppercase tracking-wider mb-2">// 메시지 상세 내용</label>
                <textarea
                  id="message"
                  rows={4}
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  required
                  placeholder="메시지를 적어주세요..."
                  className="w-full border-3 border-black bg-white px-4 py-3 text-sm font-bold text-black placeholder-zinc-400 outline-none focus:bg-yellow-50/30 focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border-3 border-black bg-[#FFE600] hover:bg-[#ebd400] text-black font-black uppercase text-xs tracking-wider py-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer text-center"
              >
                [ SEND MESSAGE TO QUEUE ]
              </button>

              {feedback && (
                <div className="border-2 border-black bg-[#A7F3D0] p-3 text-xs font-black uppercase mt-2">
                  {feedback}
                </div>
              )}
            </form>
          </div>

        </section>

      </main>

      {/* Footer ticker */}
      <footer className="border-t-4 border-black bg-black text-white p-6 -mx-4 md:-mx-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} 이지민. ALL INTELLECTUAL PROPERTY COMMITTED TO GITHUB.</p>
          <div className="flex gap-4">
            <span>[ SYSTEM: OK ]</span>
            <span>[ STACK: NEXTJS16 / TW4 ]</span>
          </div>
        </div>
      </footer>

      {/* NEOBRUTALIST DIALOG / SPECS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-lg border-4 border-black bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-8 overflow-y-auto max-h-[90vh]">
            
            {/* Modal Title Bar */}
            <div className="flex items-center justify-between border-b-3 border-black pb-4 mb-6">
              <span className="border-2 border-black bg-[#FFE600] px-3 py-0.5 text-xs font-black uppercase tracking-wider">
                {selectedProject.category} // PROJECT SPECTACLE
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="border-2 border-black bg-white hover:bg-zinc-100 h-8 w-8 flex items-center justify-center font-black cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
              >
                ✕
              </button>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tight text-black mb-4">
              {selectedProject.title}
            </h3>

            {selectedProject.metrics && (
              <div className="mb-4 inline-block border-2 border-black bg-[#A7F3D0] px-3 py-1 text-xs font-black">
                🏆 METRIC: {selectedProject.metrics}
              </div>
            )}

            <p className="text-sm font-semibold text-zinc-800 leading-relaxed mb-6 border-l-4 border-black pl-4 py-2">
              {selectedProject.detailedDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase text-zinc-400 tracking-wider mb-2">// SPECIFIED TECH STACK</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="border-2 border-black bg-zinc-50 px-2 py-0.5 text-xs font-bold text-zinc-900">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border-3 border-black bg-black hover:bg-zinc-900 text-white font-black text-center uppercase py-3 text-xs tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                [ GITHUB REPO ]
              </a>
              {selectedProject.demo ? (
                <a
                  href={selectedProject.demo}
                  className="border-3 border-black bg-[#FFE600] hover:bg-[#ebd400] text-black font-black text-center uppercase py-3 text-xs tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                >
                  [ LIVE DEMO ]
                </a>
              ) : (
                <div className="border-3 border-black border-dashed bg-zinc-50 text-zinc-400 font-bold text-center uppercase py-3 text-xs tracking-wider select-none">
                  [ NO DEMO ]
                </div>
              )}
            </div>

          </div>
        </div>
      )}
      
    </div>
  );
}
