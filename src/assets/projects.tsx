import { Project } from "../components/ProjectCard";

const projetcList: Project[] = [
  {
    title: "Pomodoro Work Tracker - CLI",
    content:
      "Simple CLI TOOL to set time to work. Saves completed session in JSON files on HD.",
    img: {
      url: "/src/assets/preview_project_pomodoro.png",
      alt: "Project Pomodoro",
    },
    tech: ["go"],
    github: "https://github.com/And1x/pomodoro",
    website: "",
  },
  {
    title: "Bitcoin - Lightning Guides - WebApp",
    content:
      "Post eg. Guides in Markdown Format and get paid in Bitcoin. Users and Visitors can pay for Posts they like.",
    img: {
      url: "",
      alt: "",
    },
    tech: ["Go, Postgres, LNbits"],
    github: "https://github.com/And1x/bln-guides",
    website: "https://bln-guides.onrender.com",
  },
  {
    title: "Nostr Search and Resources",
    content:
      "React Application to Search Notes and Profiles on Nostr. Section with Lists of great Resources about Nostr.",
    img: {
      url: "",
      alt: "",
    },
    tech: ["TS, React, Tailwind"],
    github: "",
    website: "",
  },
];

export default projetcList;
