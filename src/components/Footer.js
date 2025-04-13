import { SiGithub, SiLinkedin, SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-gray-500 p-5 relative bottom-0 w-full text-2xl lg:text-3xl text-black dark:bg-black dark:text-gray-500">
      <div className="flex p-5">
        <a
          href="https://www.github.com/ry2001"
          target="_blank"
          rel="noreferrer"
          className="ml-auto px-1"
        >
          <SiGithub className="cursor-pointer text-5xl  hover:text-blue-400" />
        </a>
        <a
          href="https://www.linkedin.com/in/rui-yang-tan"
          target="_blank"
          rel="noreferrer"
          className="px-1"
        >
          <SiLinkedin className="cursor-pointer text-5xl  hover:text-blue-400" />
        </a>
        <a
          href="https://scholar.google.com/citations?user=10ZuVdUAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="px-1"
        >
          <SiGooglescholar className="cursor-pointer text-5xl  hover:text-blue-400" />
        </a>
        <a
          href="mailto:ruiyangtan15@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="mr-auto px-1"
        >
          <MdEmail className="cursor-pointer text-5xl  hover:text-blue-400" />
        </a>
      </div>
      <div className="text-center text-sm p-5">
        © 2025 - All rights reserved
      </div>
    </div>
  );
}
