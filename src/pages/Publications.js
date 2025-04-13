import publicationData from "../data/publicationData";
import SinglePaper from "../components/SinglePaper";

export default function Publications() {
  const groupedData = publicationData.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});

  return (
    <main
      className="font-robotomono bg-blue-500 dark:bg-blue-950 p-5 select-none flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <section className="gap-10 p-5 lg:flex-row lg:flex-wrap dark:text-white">
        {Object.keys(groupedData)
          .reverse()
          .map((year) => (
            <div key={year}>
              <p className="text-left font-bold text-4xl pb-5">{year}</p>
              {groupedData[year].reverse().map((project) => (
                <SinglePaper
                  key={project.id}
                  citation={project.citation}
                  title={project.title}
                  urls={project.urls}
                />
              ))}
            </div>
          ))}
      </section>
    </main>
  );
}
