import Typed from "react-typed";
import { motion as m } from "framer-motion";
import { SlSpeech } from "react-icons/sl";
import { HiOutlineEye } from "react-icons/hi";
import { GiRegeneration } from "react-icons/gi";
import { BsFillClipboard2DataFill, BsGear } from "react-icons/bs";
import {
  SiPython,
  SiJavascript,
  SiRuby,
  SiGooglecloud,
  SiAmazonaws,
  SiPytorch,
  SiPandas,
  SiScikitlearn,
  SiNumpy,
  SiTensorflow,
  SiStreamlit,
  SiReact,
  SiFlask,
  SiRubyonrails,
} from "react-icons/si";

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
          <Typed
            strings={["Tan Rui Yang"]}
            typeSpeed={150}
            backSpeed={100}
            loop
            className="font-burtons text-5xl dark:text-white p-10"
          />
        </div>
        <div className="w-3/4 text-center text-lg pb-10 mx-auto px-5 my-5 dark:text-white">
          I graduated from Design and Artificial Intelligence (DAI) programme in
          SUTD (Singapore University of Technology and Design). I am currently
          working as a research assistant in Social AI Studio under Prof Roy
          Ka-Wei Lee. My interests lie in the applications of Artificial
          Intelligence and Data Science and I have acquired much experience in
          these areas through a variety of AI projects. As a person who believes
          in work-life balance, I like to watch comedies and play basketball
          during my free time to have fun and enjoy life.
        </div>
      </m.section>
      <section className="bg-blue-200 dark:bg-blue-800 p-5">
        <div className="flex justify-center">
          <Typed
            strings={["Area of interest"]}
            typeSpeed={150}
            backSpeed={100}
            loop
            className="font-burtons text-5xl dark:text-white p-10"
          />
        </div>
        <div className="flex flex-wrap gap-10 p-10 text-center justify-center lg:flex-wrap dark:text-white">
          <div className="flex-none flex-col basis-1/4">
            <BsGear className="text-5xl" />
            <h3 className="text-lg font-bold">Machine Learning</h3>
            <p className="py-2">
              I enjoy Machine Learning but I don't learn like machine
            </p>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <SlSpeech className="text-5xl" />
            <h3 className="text-lg font-bold">Natural Language Processing</h3>
            <p className="py-2">
              Language is a powerful tool, process and understand them better
            </p>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <HiOutlineEye className="text-5xl" />
            <h3 className="text-lg font-bold">Computer Vision</h3>
            <p className="py-2">
              Vision made my life, CV helps to discover even more details
            </p>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <GiRegeneration className="text-5xl dark:text-white" />
            <h3 className="text-lg font-bold">Generative AI</h3>
            <p className="py-2">
              Generative made the world better, don't stuck with creativity, use
              AI to generate
            </p>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <BsFillClipboard2DataFill className="text-5xl dark:text-white" />
            <h3 className="text-lg font-bold">Data Analysis</h3>
            <p className="py-2">
              This is a data driven world, analyze and understand them to help
              ourselves
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-500 dark:bg-blue-950 p-5">
        <div className="flex justify-center">
          <Typed
            strings={["Technical Skills"]}
            typeSpeed={150}
            backSpeed={100}
            loop
            className="font-burtons text-5xl dark:text-white p-10"
          />
        </div>
        <div className="flex flex-wrap gap-10 p-10 text-center justify-center lg:flex-wrap dark:text-white">
          <div className="flex-none flex-col basis-1/4">
            <SiPython className="text-5xl " />
            <h3 className="text-lg font-bold">Python</h3>
            <p className="py-2 h-50">
              Python is the first language that I learnt since 2020 and it
              helped me on a lot of projects especially Machine Learning and
              Deep Learning
            </p>
            <div>
              <SiNumpy className="text-5xl m-1" />
              <SiPandas className="text-5xl m-1" />
              <SiScikitlearn className="text-5xl m-1" />
              <SiPytorch className="text-5xl m-1" />
              <SiTensorflow className="text-5xl m-1" />
              <SiFlask className="text-5xl m-1" />
              <SiStreamlit className="text-5xl m-1" />
            </div>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <SiJavascript className="text-5xl" />
            <h3 className="text-lg font-bold">JavaScript</h3>
            <p className="py-2 h-50">
              I learnt Javascript since 2022 and made a few web applications
              with it. My interest is not frontend development, but a skill is a
              skill
            </p>
            <div>
              <SiReact className="text-5xl m-1" />
            </div>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <SiRuby className="text-5xl" />
            <h3 className="text-lg font-bold">Ruby</h3>
            <p className="py-2 h-100">
              Ruby is the language that I was forced to learn for course project
              in 2022 that we were forced to use Ruby on Rails for the web
              application's backend
            </p>
            <div>
              <SiRubyonrails className="text-5xl m-1" />
            </div>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <SiGooglecloud className="text-5xl" />
            <h3 className="text-lg font-bold">Google Cloud Platform</h3>
            <p className="py-2">
              Google Cloud Platform is the first cloud computing service I
              learnt to how to use APIs
            </p>
          </div>
          <div className="flex-none flex-col basis-1/4">
            <SiAmazonaws className="text-5xl" />
            <h3 className="text-lg font-bold">Amazon Web Service</h3>
            <p className="py-2">
              Amazon Web Service is another cloud computing service that I used
              for projects
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-200 dark:bg-blue-800 p-5">
        <div className="flex flex-col mt-10 justify-center items-center">
          <div className="flex justify-center">
            <Typed
              strings={["Roadmap"]}
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
                  May 2024 - Present
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
