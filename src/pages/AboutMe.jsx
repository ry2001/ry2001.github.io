import { ReactTyped } from "react-typed";
import { motion as m } from "framer-motion";

export default function AboutMe() {
  return (
    <main className="font-robotomono bg-blue-500 dark:bg-blue-950">
      <m.section
        className="bg-blue-500 dark:bg-blue-950 p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex justify-center">
          <ReactTyped
            strings={["Tan Rui Yang"]}
            typeSpeed={150}
            backSpeed={100}
            loop
            className="font-burtons text-5xl dark:text-white p-10"
          />
        </div>
        <div className="w-3/4 text-center text-lg pb-10 mx-auto px-5 my-5 dark:text-white">
          <p className="p-3">
            I am currently a PhD student at the Singapore University of Technology and Design (SUTD)
            under the supervision of Prof. <a className="dark:text-blue-100" href='https://www.roylee.sg/'>Roy Ka-Wei Lee</a>. I was
            a student in the Design and Artificial Intelligence (DAI) programme at SUTD, where I built
            my foundation in applied AI to real-world problems. You can find some of my projects under the
            <a href="/projects" className="dark:text-blue-100"> Projects</a> section.
          </p>
          <p className="p-3">
            My current research interests includes multimodal understanding, multimodal generation and LLM agentic
            workflow. However, since it is still early in my PhD journey, and the AI field is rapidly evolving, I 
            am open to explore other areas of AI research.
          </p>
        </div>
      </m.section>
      <section className="bg-blue-200 dark:bg-blue-800 p-5">
        <div className="flex flex-col mt-10 justify-center items-center">
          <div className="flex justify-center">
            <ReactTyped
              strings={["Experiences"]}
              typeSpeed={150}
              backSpeed={100}
              loop
              className="font-burtons text-5xl dark:text-white p-10"
            />
          </div>
          <div>
            <ol className="relative border-l border-gray-700 dark:border-gray-200">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900 dark:border-white dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-100">
                  Sept 2025 - Present
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Singapore University of Technology and Design (SUTD)
                </h3>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  PhD in Information Systems Technology and Design (ISTD)
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900 dark:border-white dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-100">
                  May 2024 - Aug 2025
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Singapore University of Technology and Design (SUTD)
                </h3>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Social AI Studio
                </h3>
                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                  Research Assistant
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900 dark:border-white dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-100">
                  September 2020 - April 2024
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Singapore University of Technology and Design (SUTD)
                </h3>
                <p className="text-base font-normal text-gray-700 dark:text-gray-400 pb-2">
                  Bachelor of Science (Design and Artificial Intelligence),
                  Honours (CGPA: 4.0/5.0)
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900 dark:border-white dark:bg-gray-200"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-800 dark:text-gray-100">
                  May 2023 - Sept 2023
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Changi Airport Group (CAG)
                </h3>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Digital, Innovation, Ventures & Analytics (DIVA)
                </h3>
                <p className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
                  AI & IoT Engineer Intern
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
