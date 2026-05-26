"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LinkItem {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
}

type ThemeType = "minimal" | "neobrutalism" | "dark" | "aurora";

export default function Page() {
  // 1. Profile State
  const [profileName, setProfileName] = useState("이지민");
  const [profileBio, setProfileBio] = useState("AI & 소프트웨어공학 전공 대학생 | 데이터와 웹을 연결합니다.");

  // 2. Theme State
  const [activeTheme, setActiveTheme] = useState<ThemeType>("neobrutalism");

  // 3. Links State (Prefilled based on PRD and Scenarios)
  const [links, setLinks] = useState<LinkItem[]>([
    {
      id: "link-1",
      title: "🧠 MRI 의료 이미지 판독 분류기 (ResNet-50)",
      url: "https://github.com/202010804/my-link",
      isActive: true,
    },
    {
      id: "link-2",
      title: "⚡ 스마트 에너지 그리드 수요 예측기 (LSTM)",
      url: "https://github.com/202010804/my-link",
      isActive: true,
    },
    {
      id: "link-3",
      title: "🤖 대학 학사 행정 지원 RAG 에이전트 (Llama3)",
      url: "https://github.com/202010804/my-link",
      isActive: true,
    },
  ]);

  // 4. Contact Simulator State (WOW Factor: Messages submitted in preview show up in Dashboard!)
  const [submittedMessages, setSubmittedMessages] = useState<{
    id: string;
    sender: string;
    content: string;
    timestamp: string;
  }[]>([
    {
      id: "msg-1",
      sender: "김교수 (AI 연구소)",
      content: "MRI 분류 모델 성능 향상 관련하여 공동 연구 제안드립니다. 회신 부탁해요.",
      timestamp: "10분 전",
    },
  ]);

  // Preview-side mock contact inputs
  const [visitorName, setVisitorName] = useState("");
  const [visitorMsg, setVisitorMsg] = useState("");
  const [visitorStatus, setVisitorStatus] = useState("");

  // 5. Initial generator based on Name
  const getInitials = (name: string) => {
    if (!name) return "JM";
    const trimmed = name.trim();
    const words = trimmed.split(/\s+/);
    if (words.length > 1) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    const isKorean = /[\uac00-\ud7a3]/.test(trimmed);
    if (isKorean) {
      return trimmed.length > 1 ? trimmed.substring(0, 2) : trimmed;
    }
    return trimmed.substring(0, 2).toUpperCase();
  };

  // 6. Action Handlers for Links
  const addLink = () => {
    const newLink: LinkItem = {
      id: `link-${Date.now()}`,
      title: "🔗 새로운 링크 카드",
      url: "https://",
      isActive: true,
    };
    setLinks([newLink, ...links]);
  };

  const updateLink = (id: string, key: keyof LinkItem, value: any) => {
    setLinks(links.map((link) => (link.id === id ? { ...link, [key]: value } : link)));
  };

  const deleteLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  const moveLink = (index: number, direction: "up" | "down") => {
    const nextIndex = direction === "up" ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= links.length) return;
    const updated = [...links];
    const temp = updated[index];
    updated[index] = updated[nextIndex];
    updated[nextIndex] = temp;
    setLinks(updated);
  };

  // 7. Visitor Message Submit Handler
  const handleVisitorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorMsg.trim()) return;

    // Add to submitted messages console
    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: visitorName,
      content: visitorMsg,
      timestamp: "방금 전",
    };
    setSubmittedMessages([newMsg, ...submittedMessages]);
    setVisitorStatus("메시지 전송 완료! 대시보드로 즉시 수신되었습니다. ✨");
    setVisitorName("");
    setVisitorMsg("");

    setTimeout(() => {
      setVisitorStatus("");
    }, 3000);
  };

  // 8. Theme Classes Resolver for Preview
  const getThemeClasses = () => {
    switch (activeTheme) {
      case "minimal":
        return {
          bg: "bg-white text-zinc-900 border border-zinc-200",
          badge: "bg-zinc-150 text-zinc-800 border border-zinc-300 font-bold",
          card: "border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 shadow-sm transition",
          input: "border border-zinc-300 rounded-lg text-zinc-900",
          submitBtn: "bg-zinc-900 text-white hover:bg-zinc-800",
          textColor: "text-zinc-800",
          subTextColor: "text-zinc-500",
        };
      case "neobrutalism":
        return {
          bg: "bg-[#FAF7F0] text-black border-4 border-black",
          badge: "bg-[#FFE600] text-black border-3 border-black font-black shadow-[2px_2px_0px_#000]",
          card: "border-3 border-black bg-white hover:bg-[#FFE600] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#000] text-black shadow-[2px_2px_0px_#000] transition-all font-bold",
          input: "border-3 border-black bg-white text-black p-2 font-bold focus:bg-yellow-50/20",
          submitBtn: "bg-[#FFE600] border-3 border-black text-black font-black shadow-[3px_3px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0px_#000] hover:bg-[#ebd400]",
          textColor: "text-black",
          subTextColor: "text-zinc-800 font-semibold",
        };
      case "dark":
        return {
          bg: "bg-zinc-950 text-zinc-100 border border-zinc-800",
          badge: "bg-zinc-900 text-zinc-100 border border-zinc-800 font-bold",
          card: "border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-100 hover:border-zinc-700 transition",
          input: "border border-zinc-800 bg-zinc-900 text-zinc-100 rounded-lg",
          submitBtn: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 font-semibold",
          textColor: "text-zinc-100",
          subTextColor: "text-zinc-400",
        };
      case "aurora":
        return {
          bg: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white border border-white/10",
          badge: "bg-white/20 text-white border border-white/30 backdrop-blur-md font-bold",
          card: "border border-white/10 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/30 transition",
          input: "border border-white/20 bg-white/10 text-white placeholder-white/50 backdrop-blur-md rounded-lg",
          submitBtn: "bg-white text-indigo-950 font-bold hover:bg-zinc-100",
          textColor: "text-white",
          subTextColor: "text-indigo-200",
        };
    }
  };

  const previewStyles = getThemeClasses();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <span className="bg-zinc-900 px-3 py-1 font-black text-white text-sm tracking-wider transform -rotate-1 rounded-sm">
              MYLINK DASHBOARD
            </span>
            <span className="hidden text-xs font-semibold text-zinc-500 uppercase tracking-widest sm:inline">
              // PROJECT WORKSPACE
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/202010804/my-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-50 transition"
            >
              <span>GitHub 코드저장소</span>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Grid Workspace - Desktop split layout */}
      <main className="mx-auto grid max-w-7xl gap-8 p-4 md:p-8 lg:grid-cols-12">
        
        {/* Left Column: Admin Control Panel (7 cols on lg) */}
        <section className="lg:col-span-7 space-y-6">
          
          {/* Section 1: Profile customization form */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
              <span>👤</span> 프로필 정보 설정 (Profile Configuration)
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="name-input" className="block text-xs font-semibold text-zinc-500 mb-2">
                  대표 이름
                </label>
                <input
                  type="text"
                  id="name-input"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder="예: 이지민"
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-zinc-900 focus:bg-white transition"
                />
              </div>

              <div>
                <label htmlFor="bio-input" className="block text-xs font-semibold text-zinc-500 mb-2">
                  바이오 (소개 한마디)
                </label>
                <textarea
                  id="bio-input"
                  rows={2}
                  value={profileBio}
                  onChange={(e) => setProfileBio(e.target.value)}
                  placeholder="채널 성격을 드러내는 짧은 소개말을 적어주세요..."
                  className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm outline-none focus:border-zinc-900 focus:bg-white transition resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Preset Theme Selector */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4 flex items-center gap-2">
              <span>🎨</span> 모던 테마 프리셋 설정 (Preset Themes)
            </h2>
            
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {(["minimal", "neobrutalism", "dark", "aurora"] as ThemeType[]).map((theme) => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition cursor-pointer ${
                    activeTheme === theme
                      ? "border-zinc-900 bg-zinc-900 text-white shadow-md font-bold"
                      : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  <span className="text-lg mb-1">
                    {theme === "minimal" && "⚪"}
                    {theme === "neobrutalism" && "⚡"}
                    {theme === "dark" && "⚫"}
                    {theme === "aurora" && "🌈"}
                  </span>
                  <span className="text-xs capitalize font-semibold">{theme}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Links Manager list with edit controls */}
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-2">
                <span>🔗</span> 내 링크 카드 제어판 (Manage Links)
              </h2>
              <Button
                onClick={addLink}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg flex items-center gap-1 shadow-sm"
              >
                <span>+ 새 링크 추가</span>
              </Button>
            </div>

            <div className="space-y-4">
              {links.length === 0 ? (
                <div className="text-center py-10 border-2 border-dashed border-zinc-200 rounded-xl text-zinc-400 text-sm">
                  등록된 링크 카드가 없습니다. 상단의 '+ 새 링크 추가' 버튼으로 카드를 생성해 보세요!
                </div>
              ) : (
                links.map((link, idx) => (
                  <div
                    key={link.id}
                    className={`border p-4 rounded-xl shadow-sm transition flex gap-3 items-start bg-white ${
                      link.isActive ? "border-zinc-200" : "border-zinc-200 opacity-60 bg-zinc-50/50"
                    }`}
                  >
                    {/* Reordering Controls (satisfying arrow clicks) */}
                    <div className="flex flex-col gap-1 items-center pt-1.5">
                      <button
                        disabled={idx === 0}
                        onClick={() => moveLink(idx, "up")}
                        className="text-zinc-400 hover:text-zinc-900 disabled:opacity-20 transition"
                      >
                        ▲
                      </button>
                      <span className="text-[10px] font-black text-zinc-400 select-none">
                        ::
                      </span>
                      <button
                        disabled={idx === links.length - 1}
                        onClick={() => moveLink(idx, "down")}
                        className="text-zinc-400 hover:text-zinc-900 disabled:opacity-20 transition"
                      >
                        ▼
                      </button>
                    </div>

                    {/* Content Editor Panel */}
                    <div className="flex-1 space-y-2.5">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={link.title}
                          onChange={(e) => updateLink(link.id, "title", e.target.value)}
                          placeholder="링크 카드 제목"
                          className="flex-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold focus:border-zinc-950 outline-none"
                        />
                        <button
                          onClick={() => updateLink(link.id, "isActive", !link.isActive)}
                          className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition ${
                            link.isActive
                              ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600"
                              : "bg-zinc-100 border-zinc-200 text-zinc-400"
                          }`}
                        >
                          {link.isActive ? "노출중" : "숨김"}
                        </button>
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={link.url}
                          onChange={(e) => updateLink(link.id, "url", e.target.value)}
                          placeholder="목적지 URL (http:// 또는 https://)"
                          className="flex-1 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs text-zinc-500 font-mono focus:border-zinc-950 outline-none"
                        />
                        <button
                          onClick={() => deleteLink(link.id)}
                          className="border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 px-2.5 py-1.5 rounded-lg text-xs transition"
                          title="삭제"
                        >
                          ✕ 삭제
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Section 4: Received Simulator Messages Box (WOW Feature!) */}
          <div className="rounded-xl border border-zinc-200 bg-[#0c0b1e] text-[#22c55e] p-6 shadow-md font-mono">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
              <span className="text-sm font-bold flex items-center gap-2">
                <span>📬</span> 실시간 수신 메시지 모니터 (Live Queue Dashboard)
              </span>
              <span className="text-xs text-zinc-500">Auto-Refreshed</span>
            </div>
            
            <div className="space-y-3 max-h-[220px] overflow-y-auto">
              {submittedMessages.length === 0 ? (
                <div className="text-center py-6 text-zinc-600 text-xs">
                  대기열이 비어 있습니다. 오른쪽 스마트폰 목업에서 직접 메시지를 입력해 실시간 수신을 테스트해보세요!
                </div>
              ) : (
                submittedMessages.map((msg) => (
                  <div key={msg.id} className="border border-zinc-800 bg-zinc-950/60 p-3 rounded-lg text-xs space-y-1 animate-fade-in">
                    <div className="flex justify-between font-bold">
                      <span className="text-white">&gt; 보낸이: {msg.sender}</span>
                      <span className="text-zinc-500">{msg.timestamp}</span>
                    </div>
                    <p className="text-[#a7f3d0]">{msg.content}</p>
                  </div>
                ))
              )}
            </div>
          </div>

        </section>

        {/* Right Column: Live Mobile Viewport Frame Mockup (5 cols on lg) */}
        <section className="lg:col-span-5 flex justify-center items-start">
          
          <div className="sticky top-24 w-full max-w-[370px]">
            <p className="text-xs font-bold text-center text-zinc-400 uppercase tracking-widest mb-3">
              ⚡ LIVE MOBILE PREVIEW (실시간 폰 뷰어)
            </p>
            
            {/* Phone outer frame */}
            <div className="relative border-[12px] border-zinc-950 rounded-[48px] shadow-2xl overflow-hidden aspect-[9/18.5] bg-zinc-900 w-full">
              
              {/* Camera Notch decoration */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-zinc-950 rounded-b-2xl z-20 flex items-center justify-center">
                <span className="w-3 h-3 rounded-full bg-zinc-900/60 border border-zinc-800" />
              </div>

              {/* Live Preview Page Body */}
              <div className={`w-full h-full overflow-y-auto pt-10 pb-8 px-4 font-mono select-none ${previewStyles.bg} transition-colors duration-500 relative`}>
                
                {/* Brand Header */}
                <div className="text-center py-2 border-b border-black/10 dark:border-white/10 mb-6">
                  <span className="text-[10px] font-black tracking-widest opacity-80">[ JIMIN.AI ]</span>
                </div>

                {/* Profile Avatar Badge */}
                <div className="flex flex-col items-center mb-8">
                  <div className={`h-16 w-16 rounded-full flex items-center justify-center text-xl mb-4 transition-all ${previewStyles.badge}`}>
                    {getInitials(profileName)}
                  </div>
                  
                  <h3 className={`text-lg font-black tracking-tight text-center ${previewStyles.textColor}`}>
                    {profileName || "이름 없음"}
                  </h3>
                  
                  <p className={`text-[10px] mt-2 leading-relaxed text-center max-w-[240px] ${previewStyles.subTextColor}`}>
                    {profileBio || "소개글이 없습니다."}
                  </p>
                </div>

                {/* Links Loop Render */}
                <div className="space-y-3.5 mb-8">
                  {links.filter(l => l.isActive).map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block text-center py-3.5 px-4 text-xs font-bold transition rounded-xl ${previewStyles.card}`}
                    >
                      {link.title || "제목 없음"}
                    </a>
                  ))}
                  {links.filter(l => l.isActive).length === 0 && (
                    <div className="text-center py-6 text-[10px] opacity-40 italic">
                      활성화된 링크가 없습니다.
                    </div>
                  )}
                </div>

                {/* Visitor Simulation Form (WOW interactive component) */}
                <div className="border-2 border-dashed border-black/20 dark:border-white/20 p-3.5 rounded-xl space-y-3 bg-black/5 dark:bg-white/5">
                  <p className={`text-[10px] font-black uppercase text-center tracking-wider ${previewStyles.textColor}`}>
                    📬 메시지 즉시 수신 테스트
                  </p>
                  
                  <form onSubmit={handleVisitorSubmit} className="space-y-2 text-[10px]">
                    <input
                      type="text"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      required
                      placeholder="이름 또는 메일주소"
                      className={`w-full p-2 outline-none text-[10px] font-bold ${previewStyles.input}`}
                    />
                    <textarea
                      value={visitorMsg}
                      onChange={(e) => setVisitorMsg(e.target.value)}
                      required
                      rows={2}
                      placeholder="내용을 적고 전송해 보세요!"
                      className={`w-full p-2 outline-none text-[10px] font-bold resize-none ${previewStyles.input}`}
                    />
                    <button
                      type="submit"
                      className={`w-full py-2 text-[10px] font-bold text-center cursor-pointer transition ${previewStyles.submitBtn}`}
                    >
                      [ 메시지 대기열로 보내기 ]
                    </button>
                    {visitorStatus && (
                      <p className="text-emerald-500 font-bold text-center text-[9px] animate-pulse">
                        {visitorStatus}
                      </p>
                    )}
                  </form>
                </div>

                {/* Footer copyright */}
                <div className="text-center mt-10 pt-4 border-t border-black/5 dark:border-white/5">
                  <p className="text-[9px] opacity-40">
                    © 2026 {profileName || "이지민"}. Powered by MyLink
                  </p>
                </div>

              </div>

            </div>
          </div>

        </section>

      </main>

    </div>
  );
}
