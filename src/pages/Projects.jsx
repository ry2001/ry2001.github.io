import projectData from "../data/projectData";
import SingleProject from "../components/SingleProject";

export default function Projects() {
  return (
    <main
      className="font-robotomono bg-blue-300 p-5 select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-blue-100 p-5 my-5 mx-[30px] rounded-lg">
        <p className="text-center text-sm">
          As I am focusing on research now, this section will 
          not be updated frequently. 
          Refer to <a href="/publications" className="text-blue-700 hover:text-blue-900">Publications</a> for my research work.
        </p>
      </div>
      <p className="text-center text-sm">Click on the images to learn more about each project.</p>

      <section className="flex flex-row flex-wrap p-5 mx-[30px]">
        {projectData.map((project) => (
          <SingleProject
            key={project.id}
            id={project.id}
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
