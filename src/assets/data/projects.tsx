import { Project } from "../../components/ProjectCard";

const projetcList: Project[] = [
  {
    title: "Pomodoro Work Tracker - CLI",
    content:
      "Simple CLI TOOL to set time to work. Saves completed session in JSON files on HD.",
    img: {
      url: "/src/assets/img/preview_project_pomodoro.png",
      alt: "Preview Project Pomodoro",
    },
    tech: ["go", "bash"],
    github: "https://github.com/And1x/pomodoro",
    website: "",
  },
  {
    title: "Bitcoin - Lightning Guides - WebApp",
    content:
      "Post eg. Guides in Markdown Format and get paid in Bitcoin. Users and Visitors can pay for Posts they like.",
    img: {
      url: "/src/assets/img/preview_project_blnguides_1.png",
      alt: "Preview Project BLN Guides",
    },
    tech: ["go", "postgresql", "html5", "css3", "bitcoin"],
    github: "https://github.com/And1x/bln-guides",
    website: "https://bln-guides.onrender.com",
  },
  {
    title: "Nostr Search and Resources",
    content:
      "React Application to search Notes and Profiles on Nostr. Also with a section of great Resources about Nostr.",
    img: {
      url: "/src/assets/img/preview_project_nostreact_1.png",
      alt: "Preview Project Nostreact",
    },
    tech: ["typescript", "react", "tailwind"],
    github: "https://github.com/And1x/nostreact",
    website: "https://nostreact.vercel.app/",
  },
];

export default projetcList;
