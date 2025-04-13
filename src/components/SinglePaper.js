import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { FaFile } from "react-icons/fa";

function checkURL(url) {
  if (url.indexOf("github") !== -1) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="ml-auto px-1">
        <SiGithub className="cursor-pointer text-3xl m-1 hover:text-blue-400" />
      </a>
    );
  } else if (url.indexOf("arxiv") !== -1) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="ml-auto px-1">
        <FaFile className="cursor-pointer text-3xl m-1 hover:text-blue-400" />
      </a>
    );
  } else if (url.length !== 0) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="ml-auto px-1">
        <BiLinkExternal className="cursor-pointer text-3xl m-1 hover:text-blue-400" />
      </a>
    );
  }
}

export default function SinglePaper(props) {
  return (
    <section className="flex mx-auto select-text">
      <div className="relative flex-1 rounded-xl bg-gray-200 shadow-lg hover:shadow-xl mb-5 dark:bg-gray-700">
        <div className="text-center px-4 pt-5 pb-10">
          <p className="text-left font-bold text-lg mb-2">{props.title}</p>
          <p className="text-left mb-2">{props.citation}</p>
        </div>
        <div className="absolute bottom-0">
          {props.urls.map((url) => checkURL(url))}
        </div>
      </div>
    </section>
  );
}
