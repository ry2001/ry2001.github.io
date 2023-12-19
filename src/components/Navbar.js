import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  return (
    <div className="flex bg-blue-500 justify-between items-center p-5 dark:bg-blue-950 dark:text-white w-15 h-15 select-none">
      <div>
        {props.darkMode ? (
          <Link to="/">
            <img
              src="LOGO_white.png"
              className="m-auto rounded-xl shadow-lg w-10 h-10"
              alt="my logo for dark mode"
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src="LOGO.png"
              className="m-auto rounded-xl shadow-lg w-10 h-10"
              alt="my logo for light mode"
            />
          </Link>
        )}
      </div>
      <div className="flex">
        {location.pathname === "/" ? (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5">About Me</div>
        ) : (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5 hover:text-blue-300">
            <Link to="/">About Me</Link>
          </div>
        )}
        {location.pathname.toLowerCase() === "/projects" ? (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5">Projects</div>
        ) : (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5 hover:text-blue-300">
            <Link to="/projects">Projects</Link>
          </div>
        )}
      </div>
      <div>
        {props.darkMode ? (
          <BsFillSunFill
            onClick={props.toggleDarkMode}
            className=" cursor-pointer text-4xl"
          />
        ) : (
          <BsFillMoonFill
            onClick={props.toggleDarkMode}
            className=" cursor-pointer text-4xl"
          />
        )}
      </div>
    </div>
  );
}
