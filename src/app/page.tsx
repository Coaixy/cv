import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon, Sparkles, Code, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-white">
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16 flex-grow">
        <div className="absolute top-[-50px] right-[-50px] w-80 h-80 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-80 h-80 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "2s" }}></div>
        
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white/80 backdrop-blur-sm print:space-y-6 rounded-xl shadow-md p-6 border border-slate-100 relative z-10 transition-all hover:shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex-1 space-y-1.5">
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {RESUME_DATA.name}
              </h1>
              <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.about}
              </p>
            </div>
            <Avatar className="h-28 w-28 border-2 border-muted shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
          
          <Section className="bg-slate-50/80 p-5 rounded-lg border border-slate-100 shadow-sm hover:shadow transition-all duration-300">
            <div className="flex items-start gap-2">
              <Sparkles className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-pretty font-mono text-sm text-muted-foreground">
                {RESUME_DATA.summary}
              </p>
            </div>
          </Section>
          
          <Section className="print-force-new-page scroll-mb-16">
            <div className="flex items-center gap-2 mb-4 pb-2 border-b">
              <Code className="h-5 w-5 text-purple-500" />
              <h2 className="text-xl font-bold">个人项目导航</h2>
            </div>
            <div className="-mx-3 grid grid-cols-1 gap-4 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
              {RESUME_DATA.projects.map((project, index) => {
                return (
                  <div 
                    key={project.title} 
                    className="transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      tags={project.techStack}
                      link={"link" in project ? project.link.href : undefined}
                    />
                  </div>
                );
              })}
            </div>
          </Section>
        </section>
      </main>
      
      {/* 添加备案信息 */}
      <footer className="w-full py-4 text-center text-xs text-muted-foreground bg-white/50 backdrop-blur-sm border-t print:hidden mt-auto transition-colors duration-300 hover:bg-white/80">
        <div className="container mx-auto flex justify-center items-center">
          <a 
            href="https://beian.miit.gov.cn/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline transition-colors hover:text-blue-500 flex items-center gap-1"
          >
            <Layers className="h-3 w-3" />
            浙ICP备2024132053号-1
          </a>
        </div>
      </footer>
    </div>
  );
}
