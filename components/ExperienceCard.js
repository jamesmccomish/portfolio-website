import userData from "@constants/data";
import React from "react";

const ExperienceCard = ({
  title,
  desc,
  points,
  year,
  company,
  companyLink,
}) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-300 font-bold dark:text-gray-700">
        {year}
      </h1>
      <a href={companyLink}>
        <h1 className="font-semibold text-xl">{title}</h1>
        <h1 className="text-gray-500">{company}</h1>
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2 pb-2">{desc}</p>
      {points?.length > 0
        ? points.map((p) => <li className="font-semibold">{p}</li>)
        : null}
    </div>
  );
};

export default ExperienceCard;
