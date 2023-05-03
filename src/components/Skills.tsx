import { ReactComponent as JsIcon } from "/src/assets/icons/javascript.svg";
import { ReactComponent as HTML5Icon } from "/src/assets/icons/html5.svg";
import { ReactComponent as CSS3Icon } from "/src/assets/icons/css3.svg";
import { ReactComponent as GoIcon } from "/src/assets/icons/go.svg";
import { ReactComponent as PostgresqlIcon } from "/src/assets/icons/postgresql.svg";
import { ReactComponent as TailwindIcon } from "/src/assets/icons/tailwindcss.svg";
import { ReactComponent as ReactIcon } from "/src/assets/icons/react.svg";
import { ReactComponent as GitIcon } from "/src/assets/icons/git.svg";
import { ReactComponent as BashIcon } from "/src/assets/icons/bash.svg";
import { ReactComponent as BitcoinIcon } from "/src/assets/icons/bitcoin.svg";

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex-grow-[2] bg-gray-50 dark:bg-gray-800 sm:pl-20 px-6 sm:py-16 py-6"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl text-slate-900 dark:text-white text-center">
          Skills and Experience
        </h1>
        <p className=" text-gray-700 dark:text-gray-300 sm:w-[65%] sm:text-xl text-center mt-4">
          I am an aspiring full-stack developer with a solid foundation in
          various technologies, including Go, Typescript, PostgreSQL, React,
          Tailwind, and Bitcoin Lightning. Although I have no professional
          experience, I have pursued personal projects and taken relevant
          courses to gain practical knowledge of programming concepts and
          principles. I am committed to producing clean, efficient code and
          providing an exceptional user experience. I am eager to contribute my
          skills and grow as a full-stack developer on a team.
        </p>
        <div className="flex flex-wrap gap-5 mt-7 ">
          <JsIcon className="fill-[#F7DF1E] dark:fill-white sm:w-12 sm:h-12 w-8 h-8 bg-black dark:bg-inherit" />
          <HTML5Icon className="fill-[#E34F26] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <CSS3Icon className="fill-[#1572B6] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <GoIcon className="fill-[#00ADD8] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <PostgresqlIcon className="fill-[#4169E1] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <TailwindIcon className="fill-[#06B6D4] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <ReactIcon className="fill-[#61DAFB] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <GitIcon className="fill-[#F05032] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <BashIcon className="fill-[#373737] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
          <BitcoinIcon className="fill-[#F7931A] dark:fill-white sm:w-12 sm:h-12 w-8 h-8" />
        </div>
      </div>
    </section>
  );
}
