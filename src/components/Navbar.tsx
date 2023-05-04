import SunIcon from "/src/assets/icons/sun.svg";
import MoonIcon from "/src/assets/icons/moon.svg";

export default function Navbar({ toggleDark }: { toggleDark: () => void }) {
  return (
    <header className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 shadow-lg px-10 py-4 ">
      <div className="flex justify-between items-center text-xl">
        <nav>
          <a
            href="/#about"
            className="mr-4 hover:underline hover:decoration-orange-500"
          >
            Andi
          </a>

          <a
            href="/#projects"
            className="mr-4 hover:underline hover:decoration-orange-500"
          >
            Projects
          </a>

          <a
            href="/#skills"
            className="hover:underline hover:decoration-orange-500"
          >
            Skills
          </a>
        </nav>
        <button
          className="relative rounded bg-gray-200 hover:outline hover:outline-orange-500 dark:bg-gray-700"
          onClick={toggleDark}
        >
          <div className="absolute right-0 dark:invisible max-h-full">
            <img src={MoonIcon} alt="moon" />
          </div>
          <div className="absoulute right-0 invisible dark:visible max-h-full">
            <img src={SunIcon} alt="sun" />
          </div>
        </button>
      </div>
    </header>
  );
}
