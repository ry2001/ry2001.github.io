import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { FaFile } from "react-icons/fa";

function checkURL(id, url) {
  if (url.indexOf("github") !== -1) {
    return (
      <a key={`${id}-github`} href={url} target="_blank" rel="noreferrer" className="ml-auto px-1">
        <SiGithub className="cursor-pointer text-3xl m-1 hover:text-blue-400" />
      </a>
    );
  } else if (url.indexOf("arxiv") !== -1) {
    return (
      <a key={`${id}-arxiv`} href={url} target="_blank" rel="noreferrer" className="ml-auto px-1">
        <FaFile className="cursor-pointer text-3xl m-1 hover:text-blue-400" />
      </a>
    );
  } else if (url.length !== 0) {
    return (
      <a key={`${id}-external`} href={url} target="_blank" rel="noreferrer" className="ml-auto px-1">
        <BiLinkExternal className="cursor-pointer text-3xl m-1 hover:text-blue-400" />
      </a>
    );
  }
}

function italicizeReviewStatus(title, status = "(Under Review)") {
  return title.split(status).map((part, index) => (
    <span key={index}>
      {index > 0 && <em>{status}</em>}
      {part}
    </span>
  ));
}

function boldAuthorName(citation, name = "Tan, R. Y.") {
  return citation.split(name).map((part, index) => (
    <span key={index}>
      {index > 0 && <strong>{name}</strong>}
      {part}
    </span>
  ));
}



export default function SinglePaper(props) {
  return (
    <section className="flex mx-auto select-text">
      <div className="relative flex-1 rounded-xl py-1 bg-gray-200 shadow-lg hover:shadow-xl mb-5">
        <div className="text-center px-4 pt-5 pb-10">
          <p className="text-left font-bold text-lg mb-2">{italicizeReviewStatus(props.title)}</p>
          <p className="text-left mb-2">{boldAuthorName(props.citation)}</p>
        </div>
        <div className="absolute bottom-0">
          {props.urls.map((url) => checkURL(props.id, url))}
        </div>
      </div>
    </section>
  );
}
