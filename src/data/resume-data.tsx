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
    initials: "CYJ",
    location: "ZheJiang,China",
    locationLink: "https://www.google.com/maps/place/%E4%B8%AD%E5%9B%BD%E6%B5%99%E6%B1%9F%E7%9C%81",
    about: "Full Stack Engineer focused on building products with extra attention to detail",
    summary: "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
    avatarUrl: "https://q1.qlogo.cn/g?b=qq&nk=3045831167&s=640",
    personalWebsiteUrl: "https://www.lawliet.ren",
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
        company: "NakPump",
        link: "",
        badges: [
        ""
      ],
        title: "Full Stack Developer",
        logo: ParabolLogo,
        start: "2019",
        end: "Now",
        description: "A Company to help student learn medicine",
    },
  ],
    skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Java",
  ],
    projects: [
    {
        title: "Parasiter",
        techStack: [
        "TypeScript",
        "React"
      ],
        description: "Parasiter是一个基于React + Typescript + SWC的前端项目，是一个用于医学生学习镜下形态学习的网站",
        logo: ConsultlyLogo,
        link: {
          label: "github.com",
          href: "https://github.com/Coaixy/Parasiter",
      },
    },
    // {
    //     title: "Monito",
    //     techStack: [
    //     "Side Project",
    //     "TypeScript",
    //     "Next.js",
    //     "Browser Extension"
    //   ],
    //     description: "Browser extension that records everything happening in a web application",
    //     logo: MonitoLogo,
    //     link: {
    //       label: "monito.dev",
    //       href: "https://monito.dev/",
    //   },
    // },
    // {
    //     title: "Jarocki.me",
    //     techStack: [
    //     "Side Project",
    //     "Next.js",
    //     "MDX"
    //   ],
    //     description: "My personal website and blog. Built with Next.js and Notion API",
    //     logo: JarockiMeLogo,
    //     link: {
    //       label: "github.com",
    //       href: "https://jarocki.me/",
    //   },
    // },
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
