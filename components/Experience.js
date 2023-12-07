import userData from "@constants/data";
import React from "react";

export default function Experience() {
  return (
    <section className="tw-bg-white dark:tw-bg-gray-800">
      <div className="tw-max-w-6xl tw-mx-auto tw-h-48 tw-bg-white dark:tw-bg-gray-800">
        <h1 className="tw-text-6xl tw-py-10 md:tw-text-9xl tw-font-bold tw-text-center  md:tw-text-left ">
          Experience
        </h1>
      </div>
      <div className="tw-bg-[#F1F1F1] dark:tw-bg-gray-900 -tw-mt-4">
        <div className="tw-grid tw-grid-cols-1 dark:tw-bg-gray-900 tw-max-w-xl tw-mx-auto tw-pt-20">
          {/* Experience card */}
          {userData.experience.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
              {idx === userData.experience.length - 1 ? null : (
                <div className="divider-container tw-flex tw-flex-col tw-items-center tw--mt-2">
                  <div className="tw-w-4 tw-h-4 tw-bg-green-500 tw-rounded-full tw-relative tw-z-10">
                    <div className="tw-w-4 tw-h-4 tw-bg-green-500 tw-rounded-full tw-relative tw-z-10 tw-animate-ping"></div>
                  </div>
                  <div className="tw-w-1 tw-h-24 tw-bg-gray-200 dark:tw-bg-gray-500 tw-rounded-full tw--mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="tw-relative experience-card tw-border tw-p-4 tw-rounded-md tw-shadow-xl tw-bg-white dark:tw-bg-gray-800 tw-z-10 tw-mx-4">
      <h1 className="tw-absolute tw--top-10 md:tw--left-10 md:tw--top-10 tw-text-4xl tw-text-gray-300 tw-font-bold dark:tw-text-gray-800">
        {year}
      </h1>
      <h1 className="tw-font-semibold tw-text-xl">{title}</h1>
      <a href={companyLink} className="tw-text-gray-500">
        {company}
      </a>
      <p className="tw-text-gray-600 dark:tw-text-gray-400 tw-my-2">{desc}</p>
    </div>
  );
};
