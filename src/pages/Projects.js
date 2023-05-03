import projectData from "../data/projectData";
import SingleProject from "../components/SingleProject";

export default function Projects() {
  return (
    <main
      className="font-robotomono bg-blue-500 dark:bg-blue-950 p-5 select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="flex flex-col gap-10 p-5 lg:flex-row lg:flex-wrap dark:text-white">
        {projectData.map((project) => (
          <SingleProject
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
