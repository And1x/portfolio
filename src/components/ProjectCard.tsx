export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-slate-800 border dark:text-white min-w-[18rem] max-w-[25vw] p-2 shadow-lg border-slate-300 rounded dark:border-slate-600">
      <div className="border-b pb-2 border-b-slate-400 dark:border-b-orange-400">
        <h4 className="text-xl text-black dark:text-white">{project.title}</h4>
        <p className="p-1 text-gray-900 dark:text-gray-100">
          {project.content}
        </p>
        {/* todo: maximize image */}

        <img src={project.img.url} alt={project.img.alt} className="w-fit" />
      </div>
      <div className="flex gap-1 justify-end pt-2">
        <a href={project.github}>
          <div className="w-8 h-8 rounded hover:outline  hover:outline-orange-600 hover:dark:outline-orange-400">
            <svg viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                className="fill-black dark:fill-white"
              />
            </svg>
          </div>
        </a>

        {project.website ? (
          <a href={project.website}>
            <div className="w-8 h-8 rounded hover:outline  hover:outline-orange-600 hover:dark:outline-orange-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-v-4fa90e7f=""
              >
                <path
                  d="M7.05 11.293L4.93 13.414a4 4 0 005.657 5.657l2.828-2.828a4 4 0 000-5.657l-1.06 1.06a2.5 2.5 0 010 3.536L9.524 18.01a2.5 2.5 0 01-3.535-3.535l2.12-2.121-1.06-1.061z"
                  className="fill-black dark:fill-white"
                ></path>
                <path
                  d="M15.889 11.646l2.121-2.12a2.5 2.5 0 00-3.535-3.536l-2.829 2.828a2.5 2.5 0 000 3.536l-1.06 1.06a4 4 0 010-5.657l2.828-2.828a4 4 0 015.657 5.657l-2.121 2.121-1.061-1.06z"
                  className="fill-black dark:fill-white"
                ></path>
              </svg>
            </div>
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
