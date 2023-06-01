import { Project } from "../../components/ProjectCard";

const projetcList: Project[] = [
  {
    title: "Pomodoro Work Tracker - CLI",
    content:
      "Simple command-line interface(CLI) tool to set a pomodoro timer. Display daily/montly sessions. It conveniently saves your tasks in monthly JSON files, enabling you to review and analyze your productivity over time keeps your task history easily accessible and organized.",
    img: {
      url: "/img/preview_project_pomodoro.png",
      alt: "Preview Project Pomodoro",
    },
    tech: ["go", "bash"],
    github: "https://github.com/And1x/pomodoro",
    website: "",
  },
  {
    title: "Bitcoin & Lightning Guides",
    content:
      "A full-stack web app that enables users to create guides related to Bitcoin and Lightning. Users can earn Bitcoin through upvotes, incentivizing high-quality content. The app features a clean and simple UI, with a main focus on back-end technologies such as PostgreSQL, GO, and LNbits, which serves as the Bitcoin wallet infrastructure.",
    img: {
      url: "/img/preview_project_blnguides_1.png",
      alt: "Preview Project BLN Guides",
    },
    tech: ["go", "postgresql", "html5", "css3", "bitcoin"],
    github: "https://github.com/And1x/bln-guides",
    website: "https://bln-guides.onrender.com",
  },
  {
    title: "Nostr Search and Resources",
    content:
      "My most recent web application using React and Typescript to develop my skills in these technologies. It features a recommended Nostr resources section and a search function to find notes and profiles on Nostr. Additional features, such as a note-sending function, are already planned for future development",
    img: {
      url: "/img/preview_project_nostreact_1.png",
      alt: "Preview Project Nostreact",
    },
    tech: ["typescript", "react", "tailwind"],
    github: "https://github.com/And1x/nostreact",
    website: "https://nostreact.vercel.app/",
  },
];

export default projetcList;
