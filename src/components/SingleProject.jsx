import { motion as m } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { useState } from "react";

function showDesc(desc) {
  const location = desc["location"];
  const course = desc["course"];
  const time = desc["time"];
  const collaborator = desc["collaborator"];
  const description = desc["description"];
  return (
    <div className="flex flex-col w-80 large:h-96 large:w-96 px-3">
      <p className="font-bold text-lg w-70 pt-3">
        {location}
      </p>
      <p className="font-bold text-lg w-70">{course}</p>
      <p className="font-bold text-lg w-70 pb-3">
        {time}
      </p>
      <p className="text-sm w-70 py-3">
        {collaborator}
      </p>
      <p className="text-sm w-70 pb-3">{description}</p>
    </div>
  );
}

function checkURL(id, url) {
  if (url.indexOf("github") !== -1) {
    return (
      <a key={`${id}-github`} href={url} target="_blank" rel="noreferrer" className="ml-auto px-1">
        <SiGithub className="cursor-pointer text-3xl m-1 hover:text-blue-400" />
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

export default function SingleProject(props) {
  const [clicked, setClicked] = useState(true);

  return (
    <section className="flex mx-auto my-5 select-text">
      <m.div
        className="relative flex-1 rounded-xl bg-gray-200 shadow-lg hover:shadow-xl mb-10"
        whileHover={{ scale: 1.1 }}
      >
        <div>
          {clicked ? (
            <img
              onClick={() => setClicked(!clicked)}
              src={props.image}
              className="rounded-t-xl border-none h-80 w-80 large:h-96 large:w-96"
              alt="Single Project"
            />
          ) : (
            <div onClick={() => setClicked(!clicked)}>
              {showDesc(props.desc)}
            </div>
          )}
        </div>
        <div className="text-center px-4 pt-5 pb-10 w-80 large:w-96 my-5">
          <p className="font-bold text-lg mb-2">{props.title}</p>
          <span className="text-sm">{props.category}</span>
        </div>
        <div className="absolute bottom-0">
          {props.urls.map((url) => checkURL(props.id, url))}
        </div>
      </m.div>
    </section>
  );
}
