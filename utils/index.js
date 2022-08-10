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
    title: "Project One Test",
    description: "Web Design",
    imageSrc:
      "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    url: "asdasd/",
  },
  {
    id: "2",
    title: "Project Two",
    description: "Web Development",
    imageSrc:
      "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
    url: "asdasd/",
  },
];

export const services = [
  {
    id: "1",
    title: "Art Direction",
    description:
      "We help with the creation and development of online advertising ideas, with particular focus on their visual appearance.",
  },
  {
    id: "2",
    title: "Branding",
    description:
      "We design key brand elements such as the logo, color scheme, typography, and other design components that makes your brand stand out from competitors.",
  },
  {
    id: "3",
    title: "Web Design",
    description:
      "We build and optimize your online presence.  Website is the digital entry point into your business and a powerful revenue channel.",
  },
  {
    id: "4",
    title: "3D Design",
    description:
      "We combine creative design and technical skills to build striking 3D visualisations that bring your project to life.",
  },
  {
    id: "05f6299a-ebed-4bc2-b5ab-584ebd8787cc",
    title: "New Service",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
  },
];
