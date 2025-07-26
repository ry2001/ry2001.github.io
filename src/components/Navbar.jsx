import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="flex bg-blue-300 items-center p-5 select-none">
      <Link to="/">
        <img
          src="LOGO.png"
          className="m-auto rounded-xl  w-10 h-10"
          alt="my logo"
        />
      </Link>
      <div className="w-full flex justify-center">
        {location.pathname === "/" ? (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5">
            About Me
          </div>
        ) : (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5 hover:text-blue-800">
            <Link to="/">About Me</Link>
          </div>
        )}
        {location.pathname.toLowerCase() === "/projects" ? (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5">
            Projects
          </div>
        ) : (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5 hover:text-blue-800">
            <Link to="/projects">Projects</Link>
          </div>
        )}
        {location.pathname.toLowerCase() === "/publications" ? (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5">
            Publications
          </div>
        ) : (
          <div className="font-bananasitalic text-4xl large:text-5xl px-5 hover:text-blue-800">
            <Link to="/publications">Publications</Link>
          </div>
        )}
      </div>
    </div>
  );
}
