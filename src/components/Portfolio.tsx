import ProjectCard from "./ProjectCard";
import projects from "../assets/projects";

export default function Portfolio() {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800  p-12">
      <div className="flex flex-wrap justify-around min-w-fit py-6 gap-2 border-2 border-slate-300 rounded dark:border-slate-600">
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
    </section>
  );
}
