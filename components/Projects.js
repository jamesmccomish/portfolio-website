import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      {/* <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div> */}
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900"></div>

      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:w-full md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              sub={proj.sub}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, sub, imgUrl, number }) => {
  return (
    <a href={link} className="shadow-2xl dark:bg-gray-700 rounded-xl">
      <div className="h-1/2 flex flex-col">
        <img
          src={imgUrl}
          alt="linked image"
          className="scale-95 hover:scale-100  transition duration-500 ease-out rounded-xl h"
        />
        <div className="flex flex-row items-center">
          <h1 className="text-gray-500 dark:text-gray-300 font-bold text-xl  rounded-md px-2">
            {title}
          </h1>
          <h1 className="text-gray-500 dark:text-gray-300 text-sm  rounded-md px-2">
            {sub}
          </h1>
        </div>
      </div>
    </a>
  );
};
