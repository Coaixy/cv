import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Sparkles, Code, Layers } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "小奕想要三合木 ｜ 奕的作品集",
  keywords: "灵钥通枢,灵启天玑,ai梅花,ai奇门,ai塔罗,ai雷诺曼,ai八字,ai算命," +
    "ai占卜, ai风水, ai八卦, ai易经, ai紫微斗数, ai奇门遁甲, ai六爻,六爻解忧,赛博占卜,灵爻妙解,鬼谷奇门",
  description: "​灵钥通枢（https://ai.letfate.com/）是全网首家免费的AI思维链占卜网站，融合了六爻、梅花易数等传统占卜术数，运用人工智能技术，为用户提供精准、便捷的占卜服务",
  appleWebApp: true
};

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-slate-50 text-slate-800 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-20%] right-[-20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-sky-500/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-20%] left-[-20%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] bg-fuchsia-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>

      <main className="flex-1 flex items-center justify-center p-4 z-10 w-full">
        <section className="mx-auto w-full max-w-2xl space-y-8 rounded-2xl bg-white/50 p-8 backdrop-blur-lg border border-slate-200 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-fuchsia-600">
                {RESUME_DATA.name}
              </h1>
            </div>
            <Avatar className="h-24 w-24 border-2 border-white/50 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-fuchsia-500/20">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex items-start gap-4 rounded-lg bg-slate-400/10 p-4 border border-slate-200/80">
            <Sparkles className="h-6 w-6 text-sky-500 mt-0.5 flex-shrink-0" />
            <p className="text-pretty font-mono text-sm text-slate-600">
              {RESUME_DATA.summary}
            </p>
          </div>
          
          <Section className="print-force-new-page scroll-mb-16">
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-200/80">
              <Code className="h-5 w-5 text-fuchsia-500" />
              <h2 className="text-xl font-semibold">AI导航</h2>
            </div>
            <div className="-mx-2 grid grid-cols-1 gap-6 md:grid-cols-2">
              {RESUME_DATA.projects.map((project, index) => {
                const projectLink = "link" in project ? project.link.href : undefined;

                if (projectLink) {
                  return (
                    <a
                      key={project.title}
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group transition-all duration-300 hover:-translate-y-1 animate-pop-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        tags={project.techStack}
                        link={projectLink}
                      />
                    </a>
                  );
                }

                return (
                  <div
                    key={project.title}
                    className="block group transition-all duration-300 animate-pop-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.techStack}
                    />
                  </div>
                );
              })}
            </div>
          </Section>
        </section>
      </main>
      
      <footer className="w-full py-4 text-center text-xs text-slate-500 z-10 print:hidden">
        <div className="container mx-auto flex justify-center items-center">
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline transition-colors hover:text-sky-500 flex items-center gap-1.5"
          >
            <Layers className="h-3.5 w-3.5" />
            浙ICP备2024132053号
          </a>
        </div>
      </footer>
    </div>
  );
}
