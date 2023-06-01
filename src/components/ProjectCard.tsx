import { ReactComponent as GithubIcon } from "/src/assets/icons/github.svg";
import { ReactComponent as LinkIcon } from "/src/assets/icons/link.svg";
import ListTechIcons from "./ListTechIcons";

export default function ProjectCard({ project }: { project: Project }) {
  const projectId = project.title.replace(" ", "-");
  return (
    <div className="flex flex-col bg-white dark:bg-slate-800 border dark:text-white min-w-[18rem] max-w-[25vw] p-2 shadow-lg border-slate-300 rounded dark:border-slate-600">
      <div className="pb-2">
        <h4 className="text-xl text-black dark:text-white">{project.title}</h4>
        <p className="p-1 text-gray-900 dark:text-gray-100">
          {project.content}
        </p>
        <div className="flex justify-center p-2">
          <img
            src={project.img.url}
            alt={project.img.alt}
            className="w-fit cursor-zoom-in"
            id={projectId}
            onClick={() => {
              document.getElementById(projectId)?.requestFullscreen();
            }}
          />
        </div>
      </div>

      <div className="border-y py-2 border-y-slate-400  dark:border-y-orange-400 mt-auto">
        <div className="flex gap-2">
          <ListTechIcons techList={project.tech} size={"6"} hasTitle={false} />
        </div>
      </div>

      <div className="flex gap-3 justify-end pt-2">
        <a
          href={project.github}
          className="flex flex-col justify-center items-center rounded hover:outline  hover:outline-orange-600 hover:dark:outline-orange-400"
        >
          <GithubIcon className="fill-black dark:fill-white w-8 h-8" />
          <span className="text-xs">source</span>
        </a>

        {project.website ? (
          <a
            href={project.website}
            className="flex flex-col justify-center items-center rounded hover:outline  hover:outline-orange-600 hover:dark:outline-orange-400"
          >
            <LinkIcon className="fill-black dark:fill-white w-8 h-8" />
            <span className="text-xs">visit</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}

export type Project = {
  title: string;
  content: string;
  img: { url: string; alt: string };
  tech: string[];
  github: string;
  website?: string;
};
