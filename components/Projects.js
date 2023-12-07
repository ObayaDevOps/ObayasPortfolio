import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="tw-bg-white dark:tw-bg-gray-800">
      <div className="tw-max-w-6xl tw-mx-auto tw-h-48 tw-bg-white dark:tw-bg-gray-800">
        <h1 className=" tw-text-5xl md:tw-text-9xl tw-font-bold tw-py-10 tw-text-center md:tw-text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="tw-bg-[#F1F1F1] dark:tw-bg-gray-900">
        <div className="tw-max-w-6xl tw-mx-auto tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-8 tw-py-20 tw-pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              key={proj.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="tw-w-full tw-block tw-shadow-2xl">
      <div className="tw-relative tw-overflow-hidden">
        <div className="tw-h-72 tw-object-fill">
          <img
            src={imgUrl}
            alt="portfolio"
            className="tw-transform hover:tw-scale-125 tw-transition tw-duration-2000 tw-ease-out tw-object-cover tw-h-full tw-w-full tw-py-10 "
          />
        </div>
        <h1 className="tw-absolute tw-top-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl tw-bg-green-500 tw-rounded-md tw-px-2 ">
          {title}
        </h1>
        <h1 className="tw-absolute tw-bottom-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
