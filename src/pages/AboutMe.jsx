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
              I am currently a researcher at Pints AI. I received my Masters of Engineering (Research) from Singapore University of Technology and Design (SUTD)
              under the supervision of Prof. <a className="text-blue-700 hover:text-blue-900" href='https://www.roylee.sg/'>Roy Ka-Wei Lee</a>. 
              You may see some of my research works under the <a href="/publications" className="text-blue-700 hover:text-blue-900"> Publications</a> section.
              I also received my Bachelor Degree from the Design and Artificial Intelligence (DAI) programme at SUTD as well. 
              You can find some of my previous projects under the <a href="/projects" className="text-blue-700 hover:text-blue-900"> Projects</a> section.
            </p>
            <p className="p-3">
              My current research interests include:
            </p>
            <ul className="px-5 list-disc list-inside">
              <li>Responsible AI</li>
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
                    Sept 2025 - Aug 2026
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Singapore University of Technology and Design (SUTD)
                  </h3>
                  <p className="text-base font-normal text-gray-700 pb-2">
                    Masters of Engineering (Research) (CGPA: 4.5/5.0)
                  </p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-gray-900"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-800">
                    Sept 2020 - Apr 2024
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
            <p className="font-burtons text-5xl p-10 text-center">News</p>
            <div className="bg-blue-100 overflow-y-auto max-h-96">
              <ul className="list-inside">
                <li>
                  <p className="border-x border-y border-gray-500 p-2">
                    <strong>Jun 2026:</strong> Invited tutorial session for DSO World of Science on "Panels of Deception: Visual Narrative Attacks on Multimodal Large Language Models"
                  </p>
                </li>
                <li>
                  <p className="border-x border-y border-gray-500 p-2">
                    <strong>Apr 2026:</strong> ComicJailbreak had been integrated to <a href="https://github.com/microsoft/PyRIT">Microsoft/PyRIT</a>
                  </p>
                </li>
                <li>
                  <p className="border-x border-y border-gray-500 p-2">
                    <strong>Sept 2025:</strong> One paper had been accepted to EMNLP Findings 2025!
                  </p>
                </li>
                <li>
                  <p className="border-x border-gray-500 p-2">
                    <strong>Oct 2024:</strong> One paper had been accepted to WWW (Web4Good track) 2025!
                  </p>
                </li>
                <li>
                  <p className="border-x border-y border-gray-500 p-2">
                    <strong>April 2024:</strong> One paper had been accepted to MM 2024 (Oral)!
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
