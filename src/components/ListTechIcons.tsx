import { ReactComponent as JsIcon } from "/src/assets/icons/javascript.svg";
import { ReactComponent as TsIcon } from "/src/assets/icons/typescript.svg";
import { ReactComponent as HTML5Icon } from "/src/assets/icons/html5.svg";
import { ReactComponent as CSS3Icon } from "/src/assets/icons/css3.svg";
import { ReactComponent as GoIcon } from "/src/assets/icons/go.svg";
import { ReactComponent as PostgresqlIcon } from "/src/assets/icons/postgresql.svg";
import { ReactComponent as TailwindIcon } from "/src/assets/icons/tailwindcss.svg";
import { ReactComponent as ReactIcon } from "/src/assets/icons/react.svg";
import { ReactComponent as GitIcon } from "/src/assets/icons/git.svg";
import { ReactComponent as BashIcon } from "/src/assets/icons/bash.svg";
import { ReactComponent as BitcoinIcon } from "/src/assets/icons/bitcoin.svg";

export default function ListTechIcons({
  techList,
  size,
  hasTitle,
}: {
  techList: string[];
  size: "4" | "6" | "8" | "10" | "12" | "14";
  hasTitle: boolean;
}) {
  const iconSize = {
    "4": "w-4 h-4",
    "6": "w-6 h-6",
    "8": "w-8 h-8",
    "10": "w-10 h-10",
    "12": "w-12 h-12",
    "14": "w-14 h-14",
  };

  const listIcons = techList.map((name) => {
    switch (name) {
      case "typescript":
        return (
          <div className="flex flex-col items-center">
            <TsIcon
              className={`${iconSize[size]} fill-[#3178C6] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">Typescript</span> : null}
          </div>
        );
      case "javascript":
        return (
          <div className="flex flex-col items-center">
            <JsIcon
              className={`${iconSize[size]} fill-[#F7DF1E] dark:fill-white bg-black dark:bg-inherit`}
            />
            {hasTitle ? <span className="text-xs">Javascript</span> : null}
          </div>
        );
      case "html5":
        return (
          <div className="flex flex-col items-center">
            <HTML5Icon
              className={`${iconSize[size]} fill-[#E34F26] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">HTML5</span> : null}
          </div>
        );
      case "css3":
        return (
          <div className="flex flex-col items-center">
            <CSS3Icon
              className={`${iconSize[size]} fill-[#1572B6] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">CSS3</span> : null}
          </div>
        );
      case "go":
        return (
          <div className="flex flex-col items-center">
            <GoIcon
              className={`${iconSize[size]} fill-[#00ADD8] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">Go</span> : null}
          </div>
        );
      case "postgresql":
        return (
          <div className="flex flex-col items-center">
            <PostgresqlIcon
              className={`${iconSize[size]} fill-[#4169E1] dark:fill-white `}
            />
            {hasTitle ? <span className="text-xs">PostgreSQL</span> : null}
          </div>
        );
      case "tailwind":
        return (
          <div className="flex flex-col items-center">
            <TailwindIcon
              className={`${iconSize[size]} fill-[#06B6D4] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">Tailwind</span> : null}
          </div>
        );
      case "react":
        return (
          <div className="flex flex-col items-center">
            <ReactIcon
              className={`${iconSize[size]} fill-[#61DAFB] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">React</span> : null}
          </div>
        );
      case "git":
        return (
          <div className="flex flex-col items-center">
            <GitIcon
              className={`${iconSize[size]} fill-[#F05032] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">Git</span> : null}
          </div>
        );
      case "bash":
        return (
          <div className="flex flex-col items-center">
            <BashIcon
              className={`${iconSize[size]} fill-[#373737] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">Bash</span> : null}
          </div>
        );
      case "bitcoin":
        return (
          <div className="flex flex-col items-center">
            <BitcoinIcon
              className={`${iconSize[size]} fill-[#F7931A] dark:fill-white`}
            />
            {hasTitle ? <span className="text-xs">Bitcoin</span> : null}
          </div>
        );
      default:
        return <></>;
    }
  });

  return <>{listIcons}</>;
}
