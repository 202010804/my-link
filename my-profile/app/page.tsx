import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <main className="flex max-w-2xl flex-col items-center text-center">
        {/* Profile Section */}
        <section className="mb-12">
          <div className="mb-6 inline-block overflow-hidden rounded-full border-2 border-zinc-100 dark:border-zinc-800">
            {/* Replace with your actual profile image later if available */}
            <div className="h-32 w-32 bg-zinc-100 flex items-center justify-center text-4xl dark:bg-zinc-800">
              👋
            </div>
          </div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
            윤창식
          </h1>
          <p className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
            Software Engineer & Creative Developer
          </p>
        </section>

        {/* About Section */}
        <section className="mb-12">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            사용자 경험을 중요시하며, 효율적이고 확장 가능한 코드를 작성하는 것에 열정을 가지고 있습니다. 
            최신 웹 기술을 탐구하고 실제 서비스에 녹여내는 과정을 즐깁니다.
          </p>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-12 w-full">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Go"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-4 py-1.5 text-sm font-medium text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Links Section */}
        <section className="flex gap-6">
          <a
            href="https://github.com"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            Email
          </a>
        </section>
      </main>

      <footer className="mt-20 text-xs text-zinc-400">
        © {new Date().getFullYear()} 윤창식. All rights reserved.
      </footer>
    </div>
  );
}
