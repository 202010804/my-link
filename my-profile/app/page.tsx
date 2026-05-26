"use client";

import Image from "next/image";
import { useState } from "react";

// Project Data
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
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NeuroVision: Real-time Medical Imaging Classifier",
    category: "AI & ML",
    description: "CNN-based deep learning model classifying MRI scans with 99.2% accuracy.",
    detailedDesc: "Developed as a research initiative in my AI lab. It utilizes a custom ResNet-50 architecture optimized for diagnostic radiography, significantly reducing inference latency on edge devices.",
    tags: ["PyTorch", "Python", "Computer Vision", "ResNet"],
    github: "https://github.com/202010804/my-link",
    metrics: "99.2% Acc | 12ms Latency"
  },
  {
    id: 2,
    title: "EcoLink: Smart Energy Grid Predictor",
    category: "Both",
    description: "A full-stack dashboard predicting municipal energy demand using LSTM neural networks.",
    detailedDesc: "An end-to-end platform combining a Next.js interactive visualization dashboard with a Fast API backend serving real-time time-series predictions on district energy consumption patterns.",
    tags: ["Next.js", "FastAPI", "TensorFlow", "Tailwind CSS"],
    github: "https://github.com/202010804/my-link",
    demo: "http://localhost:3000",
    metrics: "94.5% Demand Accuracy"
  },
  {
    id: 3,
    title: "Llama-Agent: AI-driven Academic Assistant",
    category: "AI & ML",
    description: "RAG (Retrieval-Augmented Generation) bot trained on university curricula for fast Q&A.",
    detailedDesc: "Leverages LangChain and Llama 3 to analyze PDF textbooks and provide structured study guides and precise source-cited answers for computer science and engineering students.",
    tags: ["LangChain", "Llama 3", "VectorDB", "Python"],
    github: "https://github.com/202010804/my-link",
    metrics: "Avg. 1.2s Response Time"
  },
  {
    id: 4,
    title: "Algorithm Visualizer Pro",
    category: "Web Dev",
    description: "Interactive visualizer illustrating pathfinding, sorting, and neural net backpropagation.",
    detailedDesc: "A highly interactive web-based education tool built with React and TypeScript to help students build intuition for complex algorithmic flows through dynamic, beautiful step-by-step rendering.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Canvas API"],
    github: "https://github.com/202010804/my-link",
    demo: "http://localhost:3000"
  }
];

export default function Home() {
  const [filter, setFilter] = useState<"All" | "AI & ML" | "Web Dev">("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [emailName, setEmailName] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter logic
  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "All") return true;
    if (filter === "AI & ML") return proj.category === "AI & ML" || proj.category === "Both";
    if (filter === "Web Dev") return proj.category === "Web Dev" || proj.category === "Both";
    return true;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailName || !emailMessage) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setEmailName("");
      setEmailMessage("");
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#080711] text-zinc-100 selection:bg-indigo-500 selection:text-white overflow-x-hidden font-sans">
      
      {/* Premium Tech Grid & Glowing Orbs Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#0f0e26_1px,transparent_1px),linear-gradient(to_bottom,#0f0e26_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-900/20 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] h-[600px] w-[600px] rounded-full bg-purple-900/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[130px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-12 md:py-24">
        
        {/* Profile / Hero Section */}
        <header className="flex flex-col items-center md:items-start md:flex-row gap-8 md:gap-12 mb-20 animate-fade-in">
          {/* Avatar Area */}
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 opacity-75 blur-md transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0b1e] p-2">
              <Image
                src="/jimin_profile.png"
                alt="이지민 프로필 이미지"
                width={160}
                height={160}
                className="rounded-xl object-cover grayscale-[10%] contrast-[105%] group-hover:grayscale-0 transition duration-500"
                priority
              />
            </div>
            {/* Decorative Mini AI Badge */}
            <span className="absolute bottom-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500 text-xs font-bold shadow-lg animate-pulse">
              🤖
            </span>
          </div>

          {/* Intro Information */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold tracking-wider text-indigo-300 uppercase mb-4">
              <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
              AI & Software Engineering Student
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-zinc-100 to-indigo-300 bg-clip-text text-transparent">
              이지민 <span className="text-2xl font-light text-zinc-400">Jimin Lee</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-zinc-400 font-medium max-w-2xl leading-relaxed">
              데이터의 패턴 속에서 내일의 가능성을 발굴하는 <span className="text-indigo-300 font-semibold">인공지능(AI) 전공 대학생</span>입니다. 
              복잡한 백엔드 모델부터 매끄러운 웹 프론트엔드까지 유연하게 연결하는 풀스택 역량을 키워가고 있습니다.
            </p>

            {/* Social Badges */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://github.com/202010804/my-link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#0e0d23] hover:bg-[#141233] px-5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white transition duration-300 shadow-sm"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#0e0d23] hover:bg-[#141233] px-5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white transition duration-300 shadow-sm"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Me
              </a>
            </div>
          </div>
        </header>

        {/* Academic / Specialization Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">🏫</span>
            학업 및 관심 분야 (Academic Interest)
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800/80 bg-[#0a091a]/40 p-6 backdrop-blur-md hover:border-indigo-500/40 transition duration-300 group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300 inline-block">🧠</div>
              <h3 className="text-lg font-semibold mb-2 text-indigo-300">인공지능 & 딥러닝</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                PyTorch와 TensorFlow를 활용해 의료 이미지 판독 및 실시간 시계열 에너지 소비량 예측 모델을 설계 및 연구합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/80 bg-[#0a091a]/40 p-6 backdrop-blur-md hover:border-purple-500/40 transition duration-300 group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300 inline-block">🔗</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-300">Full-Stack AI Web</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                복잡한 AI 추론 엔진을 Next.js, FastAPI, Vector Database와 연결하여 실제 사용자가 가치를 느끼는 프로덕트로 구현합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800/80 bg-[#0a091a]/40 p-6 backdrop-blur-md hover:border-pink-500/40 transition duration-300 group">
              <div className="text-3xl mb-4 group-hover:scale-110 transition duration-300 inline-block">📚</div>
              <h3 className="text-lg font-semibold mb-2 text-pink-300">LLM & RAG 에이전트</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                LangChain과 미세조정(Fine-Tuning)된 소형 거대 언어모델을 기반으로 대학 학업을 돕는 RAG 어시스턴트를 연구 및 고도화합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Project Filtering Showcase */}
        <section className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">🚀</span>
                주요 프로젝트 (Core Projects)
              </h2>
              <p className="text-zinc-400 text-sm">카드 클릭 시 상세 정보를 보실 수 있습니다.</p>
            </div>
            
            {/* Filter buttons */}
            <div className="flex bg-[#0c0b20] border border-zinc-800 p-1 rounded-xl">
              {(["All", "AI & ML", "Web Dev"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition duration-200 ${
                    filter === cat
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat === "All" ? "전체 보기" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid gap-6 sm:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0a091d]/50 p-6 transition duration-300 hover:-translate-y-1.5 hover:border-indigo-500/40 hover:bg-[#0c0b24]"
              >
                {/* Visual decorative line */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
                
                <div className="flex items-center justify-between mb-4">
                  <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-400">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                      {project.metrics}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-300 transition duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags inside card */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-zinc-800/40 border border-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="text-xs font-medium text-indigo-400 flex items-center gap-1.5 group-hover:underline">
                  자세히 보기
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Tech Stack Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">⚡</span>
            보유 기술 스택 (Technical Expertise)
          </h2>
          <div className="space-y-6 rounded-2xl border border-zinc-800 bg-[#09081a]/60 p-8 backdrop-blur-md">
            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">Artificial Intelligence</h3>
              <div className="flex flex-wrap gap-3">
                {["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Python", "Pandas & NumPy", "Vector Databases"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl bg-indigo-950/40 border border-indigo-800/40 px-4 py-2 text-sm font-medium text-indigo-300 hover:border-indigo-500/50 hover:bg-indigo-950/60 transition duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-zinc-800/80 my-6" />

            <div>
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">Web Development</h3>
              <div className="flex flex-wrap gap-3">
                {["Next.js 15/16", "React 19", "TypeScript", "Tailwind CSS v4", "FastAPI", "Node.js", "REST APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl bg-purple-950/40 border border-purple-800/40 px-4 py-2 text-sm font-medium text-purple-300 hover:border-purple-500/50 hover:bg-purple-950/60 transition duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me / Interactive Form */}
        <section className="mb-20">
          <div className="grid md:grid-cols-5 gap-12 rounded-3xl border border-zinc-800 bg-gradient-to-br from-[#0c0b24] to-[#080717] p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[80px] pointer-events-none" />
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-extrabold tracking-tight mb-4">Let's Connect!</h2>
              <p className="text-zinc-400 leading-relaxed mb-6">
                대학 연구, AI 외주 프로젝트 개발, 오픈소스 협업 등 다양한 프로젝트와 네트워킹을 환영합니다. 편하게 이메일이나 메시지를 남겨주세요.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">📍</span>
                  Seoul, South Korea
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-zinc-400">📧</span>
                  jimin.lee.ai@example.com
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">성함 또는 기업명</label>
                  <input
                    type="text"
                    id="name"
                    value={emailName}
                    onChange={(e) => setEmailName(e.target.value)}
                    required
                    placeholder="홍길동"
                    className="w-full rounded-xl border border-zinc-800 bg-[#060512] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">메시지 내용</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={emailMessage}
                    onChange={(e) => setEmailMessage(e.target.value)}
                    required
                    placeholder="협업 제안 또는 궁금한 사항을 남겨주세요..."
                    className="w-full rounded-xl border border-zinc-800 bg-[#060512] px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-3.5 text-sm font-semibold text-white shadow-md transition duration-300 cursor-pointer"
                >
                  {isSubmitted ? "전송 완료! 감사합니다 ✨" : "메시지 보내기"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-900 pt-10 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} 이지민. Powered by Next.js & Tailwind CSS.</p>
        </footer>

      </div>

      {/* Interactive Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-[#0a091d] p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white text-xl font-bold h-8 w-8 flex items-center justify-center rounded-full bg-zinc-900/50 hover:bg-zinc-800 transition"
            >
              ✕
            </button>
            <span className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-400 mb-4">
              {selectedProject.category}
            </span>
            <h3 className="text-2xl font-bold mb-4 text-zinc-100">{selectedProject.title}</h3>
            
            {selectedProject.metrics && (
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3.5 py-1.5 rounded-xl">
                <span>⚡ Performance Metric:</span>
                <span className="font-bold">{selectedProject.metrics}</span>
              </div>
            )}
            
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              {selectedProject.detailedDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">사용된 기술</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg bg-zinc-900 border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 px-4 py-2.5 text-xs font-semibold text-white transition"
              >
                GitHub 보기
              </a>
              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-4 py-2.5 text-xs font-semibold text-white transition"
                >
                  라이브 데모
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
