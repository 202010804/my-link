"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

export default function LandingPage() {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "❓ 정말 평생 무료인가요?",
      answer: "네! 마이링크의 핵심 기능(프로필 작성, 링크 무제한 추가, 4가지 감성 테마)은 평생 비용 없이 무료로 이용할 수 있습니다.",
      isOpen: false,
    },
    {
      question: "❓ 이미지 업로드 없이 어떻게 프로필이 완성되나요?",
      answer: "마이링크만의 독창적인 '실시간 이니셜 파서' 기술을 사용합니다! 사용자의 이름을 입력하면 자동으로 첫 1~2글자를 따서 세련된 텍스트 원형 배지로 즉석 생성해 드립니다.",
      isOpen: false,
    },
    {
      question: "❓ 변경사항이 실시간으로 깃허브 및 DB에 저장되나요?",
      answer: "네! 소유자 대시보드에서 정렬 순서를 바꾸거나 글자를 지우는 순간, 파이어베이스 실시간 NoSQL 데이터베이스에 원자적 트랜잭션으로 저장되어 전 세계 방문자에게 0.1초 만에 갱신됩니다.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, idx) => (idx === index ? { ...faq, isOpen: !faq.isOpen } : faq))
    );
  };

  return (
    <div className="relative min-h-screen bg-[#06050c] text-white selection:bg-purple-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* Background Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-15%] h-[600px] w-[600px] rounded-full bg-indigo-900/20 blur-[130px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] h-[700px] w-[700px] rounded-full bg-purple-900/15 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] h-[500px] w-[500px] rounded-full bg-pink-900/10 blur-[120px] pointer-events-none" />
      
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#141226_1px,transparent_1px),linear-gradient(to_bottom,#141226_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />

      <div className="relative z-10">
        
        {/* Navigation Bar */}
        <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between border-b border-white/5 backdrop-blur-md bg-zinc-950/40 sticky top-0 z-50">
          <div className="flex items-center gap-2">
            <span className="bg-purple-600 text-xs font-black px-2.5 py-1 tracking-wider uppercase transform -rotate-1 rounded-sm">
              MYLINK
            </span>
            <span className="text-sm font-bold tracking-tight text-white hidden sm:inline">마이링크</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition">서비스 특징</a>
            <a href="#pricing" className="hover:text-white transition">요금제</a>
            <a href="#faq" className="hover:text-white transition">자주 묻는 질문</a>
          </div>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4.5 py-2.5 rounded-xl shadow-lg transition duration-300 transform hover:scale-[1.03]"
          >
            <span>시작하기 (Go Dashboard)</span>
            <span className="text-[10px]">→</span>
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold text-purple-300">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
            실시간 Firebase 기반 링크트리 클론 서비스 런칭!
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent max-w-4xl mx-auto break-keep">
            모든 링크를 단 하나로, <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              감각적이게 연결하다.
            </span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            인스타그램 프로필 제약을 넘어, 나만의 포트폴리오와 소셜 채널을 아름다운 랜딩 페이지로 모아보세요. 이미지 용량 걱정 없는 초경량 이니셜 빌더가 실시간으로 동기화됩니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-zinc-100 text-zinc-950 font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.03] cursor-pointer"
            >
              🚀 10초 만에 무료 개설하기
            </Link>
            <a
              href="https://github.com/202010804/my-link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-sm px-6 py-4 rounded-2xl transition duration-300"
            >
              GitHub 소스 코드 감상
            </a>
          </div>

          {/* Interactive Mockup Illustration */}
          <div className="pt-16 max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1.5 rounded-[32px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-30 blur-lg group-hover:opacity-40 transition duration-1000" />
            <div className="relative border border-white/10 bg-zinc-950/80 rounded-[28px] overflow-hidden shadow-2xl p-4 md:p-6">
              
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/60" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/60" />
                  <span className="h-3 w-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Preview: app.mylink.app/dashboard</span>
              </div>

              {/* Grid representation */}
              <div className="grid md:grid-cols-12 gap-6 items-stretch">
                
                {/* Left pane (control mockup) */}
                <div className="md:col-span-7 bg-[#0b0a17] border border-white/5 rounded-2xl p-5 text-left space-y-4">
                  <div className="h-4 w-1/3 bg-purple-500/20 rounded-md" />
                  <div className="space-y-2">
                    <div className="h-9 w-full bg-white/5 rounded-xl border border-white/5" />
                    <div className="h-16 w-full bg-white/5 rounded-xl border border-white/5" />
                  </div>
                  <div className="border-t border-white/5 pt-4 flex justify-between items-center">
                    <div className="h-4 w-1/4 bg-white/10 rounded-md" />
                    <div className="h-8 w-1/3 bg-purple-600 rounded-lg" />
                  </div>
                </div>

                {/* Right pane (phone preview mockup) */}
                <div className="md:col-span-5 bg-gradient-to-br from-purple-950/30 to-indigo-950/30 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center space-y-4">
                  <div className="h-14 w-14 rounded-full bg-[#FFE600] text-black border-2 border-black flex items-center justify-center font-bold text-lg shadow-[2px_2px_0px_#000]">
                    JM
                  </div>
                  <div className="h-4 w-1/2 bg-white/20 rounded-md" />
                  <div className="h-3 w-3/4 bg-white/10 rounded-md" />
                  <div className="w-full space-y-2 pt-2">
                    <div className="h-10 w-full bg-white/10 rounded-xl border border-white/10" />
                    <div className="h-10 w-full bg-white/10 rounded-xl border border-white/10" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-[#08070f] border-y border-white/5 py-24">
          <div className="mx-auto max-w-5xl px-6 space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Features</h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">마이링크가 선사하는 3가지 강점</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Feature 1 */}
              <div className="border border-white/5 bg-zinc-950/60 rounded-2xl p-8 hover:border-purple-500/30 transition duration-300 space-y-4 group">
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center text-xl group-hover:scale-105 transition">
                  ⚡
                </div>
                <h3 className="text-xl font-bold text-white">실시간 0.1초 동기화</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  NoSQL Firestore 실시간 소켓 바인딩을 통해 소유자 관리자 대시보드에서의 수정, 정렬 스왑이 새로고침 없이 전 세계 방문자 화면에 즉시 렌더링됩니다.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border border-white/5 bg-zinc-950/60 rounded-2xl p-8 hover:border-pink-500/30 transition duration-300 space-y-4 group">
                <div className="h-12 w-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center text-xl group-hover:scale-105 transition">
                  🎨
                </div>
                <h3 className="text-xl font-bold text-white">4가지 감성 프리셋 테마</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  미니멀, 네오브루탈리즘, 다크 테마, 그리고 네온 그라데이션이 적용된 아우라 테마까지 나만의 크리에이티브 아우라에 알맞은 디자인을 클릭 한번에 적용합니다.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border border-white/5 bg-zinc-950/60 rounded-2xl p-8 hover:border-indigo-500/30 transition duration-300 space-y-4 group">
                <div className="h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl group-hover:scale-105 transition">
                  👥
                </div>
                <h3 className="text-xl font-bold text-white">자동 이니셜 배지</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  번거로운 이미지 업로드와 로딩 버퍼링을 제거하고, 입력한 한글/영어 이름을 기준으로 정갈하고 힙한 이니셜 텍스트 아이콘 배지를 자동 생성해 가독성을 높입니다.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 mx-auto max-w-5xl px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">Pricing</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">단순하고 합리적인 플랜</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto items-stretch">
            
            {/* Free plan */}
            <div className="border border-white/5 bg-zinc-950/40 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-zinc-400">베이직 플랜 (Basic)</h3>
                <div className="text-4xl font-black">$0 <span className="text-xs font-normal text-zinc-500">/ 평생 무료</span></div>
                <p className="text-xs text-zinc-500">개인 브랜딩 허브와 링크트리를 구축하려는 입문자용</p>
                <div className="border-t border-white/5 my-4" />
                <ul className="space-y-3 text-xs text-zinc-300">
                  <li className="flex items-center gap-2">✓ 무제한 링크 카드 생성</li>
                  <li className="flex items-center gap-2">✓ 실시간 드래그 앤 드롭 정렬</li>
                  <li className="flex items-center gap-2">✓ 4종 모던 감성 프리셋 테마</li>
                  <li className="flex items-center gap-2">✓ 실시간 이니셜 아바타 배지</li>
                </ul>
              </div>
              <Link
                href="/dashboard"
                className="mt-8 w-full py-3.5 text-center bg-white/5 hover:bg-white/10 text-white font-bold text-xs rounded-xl transition"
              >
                무료로 시작하기
              </Link>
            </div>

            {/* Pro Plan (Neobrutalism design highlight!) */}
            <div className="border-3 border-purple-600 bg-zinc-950 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 border-l-2 border-b-2 border-purple-600 bg-purple-600 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                POPULAR
              </div>
              
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-purple-400">프로페셔널 플랜 (Pro)</h3>
                <div className="text-4xl font-black">$9 <span className="text-xs font-normal text-zinc-500">/ 월</span></div>
                <p className="text-xs text-zinc-500">실시간 통계 데이터 분석 및 크리에이터 브랜딩 강화용</p>
                <div className="border-t border-white/5 my-4" />
                <ul className="space-y-3 text-xs text-zinc-200">
                  <li className="flex items-center gap-2 text-purple-300 font-bold">✓ 방문 통계 대시보드 (CTR 분석)</li>
                  <li className="flex items-center gap-2">✓ 무제한 링크 카드 생성</li>
                  <li className="flex items-center gap-2">✓ 카드 하이라이트 애니메이션 효과</li>
                  <li className="flex items-center gap-2">✓ 사용자 지정 HSL 그라데이션 커스텀</li>
                </ul>
              </div>
              <Link
                href="/dashboard"
                className="mt-8 w-full py-3.5 text-center bg-purple-600 hover:bg-purple-500 text-white font-black text-xs rounded-xl transition shadow-lg shadow-purple-500/20"
              >
                Pro 플랜 업그레이드
              </Link>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-[#08070f] border-t border-white/5 py-24">
          <div className="mx-auto max-w-3xl px-6 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-purple-400">FAQ</h2>
              <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">자주 묻는 질문</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  onClick={() => toggleFAQ(idx)}
                  className="border border-white/5 bg-zinc-950/40 p-5 rounded-2xl cursor-pointer hover:border-white/10 transition"
                >
                  <div className="flex justify-between items-center font-bold text-sm sm:text-base">
                    <span>{faq.question}</span>
                    <span className="text-purple-400 transition transform duration-200">
                      {faq.isOpen ? "▲" : "▼"}
                    </span>
                  </div>
                  {faq.isOpen && (
                    <p className="mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-24 mx-auto max-w-5xl px-6 text-center">
          <div className="bg-gradient-to-br from-[#120a26] to-[#080512] border border-white/10 p-12 md:p-20 rounded-3xl shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute top-[-20%] right-[-10%] h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[80px] pointer-events-none" />
            
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-none">
              지금 바로 나만의<br />
              마이링크를 연결해 보세요.
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
              복잡한 설치도, 이미지 업로드 버퍼링도 없습니다. 이름만 입력하고 다중 링크 허브를 단 10초 만에 획득하세요.
            </p>
            <div className="pt-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-black text-sm px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
              >
                <span>🚀 무료로 시작하기</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 py-12 text-center text-xs text-zinc-500">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
            <p>© {new Date().getFullYear()} MYLINK. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/202010804/my-link" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              <Link href="/dashboard" className="hover:text-white transition">Dashboard</Link>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
