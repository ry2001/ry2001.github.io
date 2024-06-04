import publicationData from "../data/publicationData";
import SinglePaper from "../components/SinglePaper";

export default function Publications() {
  return (
    <main
      className="font-robotomono bg-blue-500 dark:bg-blue-950 p-5 select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="flex flex-col gap-10 p-5 lg:flex-row lg:flex-wrap dark:text-white">
        <div className="flex mx-auto my-5 select-text">
          Still working on papers, please come again soon...
          <br></br>I wonder how you come into this page HAHAHA
        </div>
        {publicationData.map((project) => (
          <SinglePaper
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.img}
            desc={project.desc}
            urls={project.urls}
          />
        ))}
      </section>
    </main>
  );
}
