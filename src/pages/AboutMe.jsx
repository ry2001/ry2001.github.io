import React from "react";

export default function AboutMe() {
  return (
    <main className="font-robotomono bg-blue-300">
      <section className="bg-blue-300 p-5">
        <div className="flex justify-center">
          <p className="font-burtons text-5xl p-10">TAN Rui Yang</p>
        </div>
        <div className="w-4/5 flex flex-row items-center justify-center mx-auto">
          <div className="ml-20">
            <img src="profile.jpg" alt="Profile" className="rounded-lg mx-auto" />
          </div>
          <div className="text-justify text-lg pb-10 mx-auto px-5 my-5">
            <p className="p-3">
              I am a PhD student at the Singapore University of Technology and Design (SUTD)
              under the supervision of Prof. <a className="text-blue-700 hover:text-blue-900" href='https://www.roylee.sg/'>Roy Ka-Wei Lee</a>. I was a student in the Design and Artificial Intelligence (DAI) programme at SUTD, where I built
              my foundation in applied AI to real-world problems. You can find some of my projects under the
              <a href="/projects" className="text-blue-700 hover:text-blue-900"> Projects</a> section.
            </p>
            <p className="p-3">
              As I just started my PhD journey, I am excited to explore the field in AI research. My research
              interests include:
            </p>
            <ul className="px-5 list-disc list-inside">
              <li>Multimodal understanding</li>
              <li>Multimodal generation</li>
              <li>Agentic AI</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-blue-200 p-5">
        <div className="w-full flex flex-row justify-center">
          <div className="w-2/5 flex flex-col mx-5">
            <p className="font-burtons text-5xl p-10 text-center">Education</p>
            <div>
              <ol className="relative border-l border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    Sept 2025 - Present
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Singapore University of Technology and Design (SUTD)
                  </h3>
                  <p className="text-base font-normal text-gray-700 pb-2">
                    PhD in Information Systems Technology and Design (ISTD)
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    September 2020 - April 2024
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Singapore University of Technology and Design (SUTD)
                  </h3>
                  <p className="text-base font-normal text-gray-700 pb-2">
                    Bachelor of Science (Design and Artificial Intelligence),
                    Honours (CGPA: 4.0/5.0)
                  </p>
                </li>
              </ol>
            </div>
          </div>
          <div className="w-2/5 flex flex-col mx-5">
            <p className="font-burtons text-5xl p-10 text-center">Working Experience</p>
            <div>
              <ol className="relative border-l border-gray-700">
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    May 2024 - Aug 2025
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Singapore University of Technology and Design (SUTD)
                  </h3>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Social AI Studio
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-700">
                    Research Assistant
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    May 2023 - Sept 2023
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Changi Airport Group (CAG)
                  </h3>
                  <h3 className="text-sm font-semibold text-gray-800">
                    Digital, Innovation, Ventures & Analytics (DIVA)
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-700">
                    AI & IoT Engineer Intern
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
