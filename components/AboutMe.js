import React from "react";
import userData from "@constants/data";
import ExperienceCard from "./ExperienceCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowCircleRight2 } from "iconsax-react";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900"></div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <div className="inline-flex flex-col items-center">
            {/* Image container */}
            <div className="w-full">
              <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
              <div className="flex flex-row justify-between mt-4">
                <div className="flex flex-row space-x-4"></div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                <span>Contact me on </span>
                <span>
                  <a
                    href={userData.socialLinks.twitter}
                    className="text-xl text-blue-300  font-semibold text-gray-600 dark:text-gray-300"
                  >
                    twitter
                  </a>
                </span>
              </h1>
            </div>
          </div>
          {/* Text area */}

          <div className="col-span-1 md:col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 text-center sm:text-left dark:text-gray-300 "
              >
                {desc}
              </p>
            ))}
            <div className="bg-[#F1F1F1] dark:bg-gray-900 -mt-4">
              <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
                {/* Experience card */}
                {userData.experience.map((exp, idx) => (
                  <>
                    <ExperienceCard
                      key={idx}
                      title={exp.title}
                      desc={exp.desc}
                      points={exp.points}
                      year={exp.year}
                      company={exp.company}
                      companyLink={exp.companyLink}
                    />
                    {idx === userData.experience.length - 1 ? null : (
                      <div className="divider-container flex flex-col items-center -mt-2">
                        <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                          <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                        </div>
                        <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                      </div>
                    )}
                  </>
                ))}
              </div>
            </div>
            <Link href="/projects">
              <a className="flex flex-col items-center">
                <div className="border flex flex-row justify-between px-8 p-2 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4 mt-20 w-1/3 -center">
                  <h1 className="font-semibold text-xl">Projects</h1>
                  <ArrowCircleRight2 size="32" color="#FF8A65" />
                  {/* <h1 className="text-gray-500">{company}</h1> */}
                </div>
              </a>
            </Link>
            {/* <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png"
                className="h-20 w-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="h-20 w-20 mx-4 my-4"
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
