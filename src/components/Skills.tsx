import ListTechIcons from "./ListTechIcons";
import { fullTechList } from "../assets/data/techIconList";

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
        <div className="flex flex-wrap gap-4 mt-7 dark:text-white">
          <ListTechIcons techList={fullTechList} size={"12"} hasTitle={true} />
        </div>
      </div>
    </section>
  );
}
