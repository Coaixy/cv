import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <Card className="flex h-full flex-col overflow-hidden bg-gradient-to-br from-white to-slate-100 p-4 transition-all duration-300 border border-slate-200 shadow-lg shadow-slate-300/40
                   group-hover:scale-[1.04] group-hover:border-sky-500 group-hover:shadow-xl group-hover:shadow-sky-500/30">
      <CardHeader className="p-0">
        <div className="space-y-2">
          <CardTitle className="text-base font-semibold text-slate-800 transition-colors group-hover:text-sky-600">
            {title}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <CardDescription className="font-mono text-sm text-slate-600 transition-colors group-hover:text-slate-500">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex p-0 pt-4">
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              className="px-2 py-1 text-xs bg-slate-200/70 text-slate-700 border-slate-300 transition-colors group-hover:bg-sky-100/90 group-hover:text-sky-700 group-hover:border-sky-400/80"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
        {link && (
          <ArrowRight className="ml-auto h-5 w-5 translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-sky-600 group-hover:opacity-100" />
        )}
      </CardContent>
    </Card>
  );
}
