import { useLayoutEffect, useEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export const socialMedia = [
  {
    id: "1",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/trupesh-chapaneri",
  },
  {
    id: "2",
    title: "Github",
    link: "https://github.com/TrupeshChapaneri",
  },
  { id: "3", title: "Email", link: "mailto:trupesh789@gmail.com" },
];

export const projects = [
  {
    id: "1",
    title: "Search Engine Results Page (SERP)",
    description: [
      "React.js",
      "React Query",
      "Material UI",
      "Node.js",
      "MongoDB",
    ],
    url: "https://rankingsonly.com",
  },
  {
    id: "2",
    title: "Trupesh's Portfolio",
    description: ["React.js", "Tailwind CSS", "GSAP"],
    url: "https://trupesh.netlify.app",
  },
];

export const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build and optimize your online presence with modern frameworks to enable faster development of elements, powerful features, responsive websites, mobility, and layout.",
  },

  {
    id: 2,
    title: "Branding",
    description:
      "We design key brand elements such as the logo, color scheme, typography, UI/UX and other design components that makes your brand stand out from competitors.",
  },
];
