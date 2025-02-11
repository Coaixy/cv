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
    name: "Coaixy",
    initials: "Chen",
    location: "China",
    locationLink: "https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD",
    about: "全栈工程师",
    summary: "Next.js React Python SpringBoot",
    avatarUrl: "https://q1.qlogo.cn/g?b=qq&nk=3045831167&s=640",
    personalWebsiteUrl: "https://www.diviner.fun",
    contact: {
      email: "coaixy@outlook.com",
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
        degree: "Clinical Laboratory Technology",
        start: "2022",
        end: "----",
    },
  ],
    work: [
    {
        company: "AiDiviner",
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
    "JavaScript",
    "TypeScript",
    "Java",
      "Python",
  ],
    projects: [
    {
        title: "AI-Diviner-Server",
        techStack: [
        "Spring Boot",
        "MySql",
          "Java",
          "Redis"
      ],
        description: "AI-Diviner-Server通过使用DeepSeek R1模型和GLM模型对占卜进行简易的解读",
        logo: ConsultlyLogo,
        link: {
          label: "github.com",
          href: "https://github.com/AI-Diviner/AI-Diviner-Server",
      },
    },
    // {
    //     title: "Roop-WebUI-V",
    //     techStack: [
    //     "Vue.js",
    //     "TypeScript",
    //     "daisyui"
    //   ],
    //     description: "Roop WebUI V是一个基于Vue.js + TypeScript + daisyui的前端项目，Roop AI换脸的前端项目",
    //     logo: MonitoLogo,
    //     link: {
    //       label: "github.com",
    //       href: "https://github.com/Coaixy/Roop-WebUI-V",
    //   },
    // },
    {
        title: "WeiBan-Tool",
        techStack: [
        "Python",
      ],
        description: "基于Python打造的微伴辅助工具，支持自动登录、自动刷课、题库提取、自动答题等功能。",
        logo: JarockiMeLogo,
        link: {
          label: "github.com",
          href: "https://github.com/Coaixy/weiban-tool",
      },
    },
    // {
    //     title: "Minimal",
    //     techStack: [
    //     "Side Project",
    //     "Next.js",
    //     "Puppeteer"
    //   ],
    //     description: "Minimalist calendars, habit trackers and planners generator",
    //     logo: Minimal,
    //     link: {
    //       label: "useminimal.com",
    //       href: "https://useminimal.com/",
    //   },
    // },
    // {
    //     title: "Barepapers",
    //     techStack: [
    //     "Side Project",
    //     "Next.js",
    //     "Puppeteer"
    //   ],
    //     description: "Generates beautiful wallpapers using random shapes and gradients",
    //     logo: BarepapersLogo,
    //     link: {
    //       label: "barepapers.com",
    //       href: "https://barepapers.com/",
    //   },
    // },
    // {
    //     title: "Year progress",
    //     techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js"
    //   ],
    //     description: "Tracks current year progress and displays a countdown",
    //     logo: YearProgressLogo,
    //     link: {
    //       label: "getyearprogress.com",
    //       href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //     title: "Parabol",
    //     techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //     description: "The Agile meeting co-pilot that delivers better meetings with less effort",
    //     logo: ParabolLogo,
    //     link: {
    //       label: "github.com",
    //       href: "https://parabol.co/",
    //   },
    // },
    // {
    //     title: "Evercast",
    //     techStack: [
    //     "Lead Frontend Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //     description: "Creative collaboration platform that combines video conferencing and HD media streaming",
    //     logo: EvercastLogo,
    //     link: {
    //       label: "evercast.us",
    //       href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //     title: "Mobile Vikings",
    //     techStack: [
    //     "Lead Android Developer",
    //     "Android",
    //     "Kotlin"
    //   ],
    //     description: "Android application for leading virtual mobile operator in Poland",
    //     logo: MobileVikingsLogo,
    //     link: {
    //       label: "mobilevikings.pl",
    //       href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //     title: "Howdy",
    //     techStack: [
    //     "Lead Android Developer",
    //     "Android",
    //     "Kotlin"
    //   ],
    //     description: "Howdy is a place for you to join communities you care about",
    //     logo: Howdy,
    //     link: {
    //       label: "play.google.com",
    //       href: "https://howdy.co/",
    //   },
    // },
    // {
    //     title: "Tastycloud",
    //     techStack: [
    //     "Lead Android Developer",
    //     "Android",
    //     "Kotlin"
    //   ],
    //     description: "Android application for managing and displaying restaurant menus in kiosk mode",
    //     logo: TastyCloudLogo,
    //     link: {
    //       label: "tastycloud.fr",
    //       href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //     title: "Ambit",
    //     techStack: [
    //     "Lead Android Developer",
    //     "Android",
    //     "Kotlin"
    //   ],
    //     description: "Android application that helps with sharing your contact details",
    //     logo: AmbitLogo,
    // },
    // {
    //     title: "Bim",
    //     techStack: [
    //     "Lead Android Developer",
    //     "Android",
    //     "Kotlin"
    //   ],
    //     description: "Android application that helps with booking a table in a restaurants",
    //     logo: BimLogo,
    // },
    // {
    //     title: "Canal Digital GO",
    //     techStack: [
    //     "Lead Android Developer",
    //     "Android",
    //     "Kotlin"
    //   ],
    //     description: "Video streaming mobile application for Canal Digital subscribers",
    //     logo: CDGOLogo,
    // },
  ],
} as const;
