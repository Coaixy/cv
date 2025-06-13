import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "三合木",
  initials: "Chen",
  location: "China",
  locationLink: "https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD",
  about: "奕的作品集",
  summary: "阴阳顺逆妙难穷，二至还归一九宫，若能了达阴阳理，天地都在一掌中.",
  avatarUrl: "https://q1.qlogo.cn/g?b=qq&nk=3045831167&s=640",
  personalWebsiteUrl: "https://www.letfate.com",
  contact: {
    email: "coaixy@qq.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Coaixy",
        icon: GitHubIcon,
      },
      // {
      //     name: "LinkedIn",
      //     url: "https://www.linkedin.com/in/bjarocki/",
      //     icon: LinkedInIcon,
      // },
      // {
      //     name: "X",
      //     url: "https://x.com/Coaixy",
      //     icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Zhejiang 's University",
      degree: "Clinical Medicine",
      start: "2022",
      end: "----",
    },
  ],
  work: [
    {
      company: "通枢AI",
      link: "",
      badges: [
        ""
      ],
      title: "Front-end Engineer | AIGC Enginner",
      logo: GitHubIcon,
      start: "2024",
      end: "Now",
      description: "通过现代科技与古老玄学的结合，探索未知的世界。",
    },
  ],
  skills: [
    "TypeScript",
    "Java",
    "Python",
    "六爻",
  ],
  projects: [
    {
      title: "灵钥通枢 - AI",
      techStack: [
        "六爻",
        "梅花易数",
        "奇门遁甲",
        "紫微斗数",
        "大六壬",
        "四柱"
      ],
      description: "LetFate倾心打造的AI思维链,融合了六爻、梅花易数、紫薇斗数、大六壬、奇门遁甲等传统术数",
      logo: ConsultlyLogo,
      link: {
        label: "github.com",
        href: "https://ai.letfate.com",
      },
    }
  ]
} as const;
