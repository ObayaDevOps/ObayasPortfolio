import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState([]);

  useEffect(async () => {
    // let latestRepos = await getLatestRepos(userData);
    // console.log("latestRepos", latestRepos);
    setRepos(repositories);
  }, []);
  return (
    <section className="tw-bg-[#F1F1F1] tw--mt-40 dark:tw-bg-gray-900 tw-pb-40">
      <div className="tw-max-w-6xl tw-mx-auto">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center md:tw-pt-40 tw-mx-10">
          <h1 className="tw-text-6xl lg:tw-text-9xl tw-max-w-lg tw-font-bold tw-text-gray-500 tw-my-20 md:tw-my-10 md:tw-text-gray-700 dark:tw-text-gray-600 tw-text-center lg:tw-text-left">
            Latest Code
          </h1>

          <a
            href={`https://github.com/${userData.githubUsername}`}
            className="tw-mb-20 md:tw-mb-0 tw-px-8 tw-py-4 tw-rounded-md tw-bg-white tw-shadow-lg tw-text-xl tw-font-semibold tw-flex tw-flex-row tw-space-x-4 tw-items-center dark:tw-text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View GitHub</p>
          </a>
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8 tw-max-w-6xl tw-mx-auto tw-px-10 lg:tw--mt-10 tw-gap-y-20">
        {/* Single github Repo */}

        {repos &&
          repos.map((latestRepo, idx) => (
            <GithubRepoCard latestRepo={latestRepo} key="idx" />
          ))}
      </div>
    </section>
  );
}

const GithubRepoCard = ({ latestRepo }) => {
  return (
    <div className="github-repo">
      <h1 className="tw-font-semibold tw-text-xl dark:tw-text-gray-200 tw-text-gray-700">
        {latestRepo.name}
      </h1>
      <p className="tw-text-base tw-font-normal tw-my-4 tw-text-gray-500">
        {latestRepo.description}
      </p>
      <a
        href={latestRepo.clone_url}
        className="tw-font-semibold group tw-flex tw-flex-row tw-space-x-2 tw-w-full tw-items-center"
      >
        <p>View Repository </p>
        <div className="tw-transform  group-hover:tw-translate-x-2 tw-transition tw-duration-300">
          &rarr;
        </div>
      </a>
    </div>
  );
};
