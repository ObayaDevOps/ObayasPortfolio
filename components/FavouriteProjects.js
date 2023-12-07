import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="tw-bg-[#F1F1F1] -tw-mt-40 dark:tw-bg-gray-900">
      <div className="tw-max-w-6xl tw-mx-auto">
        <header className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-pt-40 tw-mx-10 md:tw-my-20 lg:tw-my-0">
          <h1 className="tw-text-6xl lg:tw-text-9xl tw-max-w-lg tw-font-bold tw-text-gray-500 tw-my-20 md:tw-my-20 md:tw-text-gray-700 dark:tw-text-gray-600 tw-text-center">
            Favourite Projects
          </h1>
          <Link href="/projects">
            <a className="tw-mb-20 md:tw-mb-0 tw-px-8 tw-py-4 tw-rounded-md tw-bg-white tw-shadow-lg tw-text-xl tw-font-semibold tw-flex tw-flex-row tw-space-x-4 tw-items-center dark:tw-text-gray-700">
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
              <p>View all</p>
            </a>
          </Link>
        </header>

        {/* Grid starts here */}
        <div className="tw-grid md:tw-grid-cols-3 tw-gap-8 lg:-tw-mt-8 tw-pb-40">


          {/* Single card */}
          <a
            href="https://www.afropocene.com/"
            className="tw-w-full tw-block tw-col-span-3 tw-shadow-2xl"
            title="Afropocene StudioLab"
          >
            <div className="tw-relative tw-overflow-hidden">
              <img
                src="projects/afropocene.png"
                alt="portfolio"
                className="tw-transform hover:tw-scale-125 tw-transition tw-duration-2000 tw-ease-out"
              />
              <h1 className="tw-absolute tw-top-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl tw-bg-red-500 tw-rounded-md tw-px-2">
              Afropocene StudioLab
              </h1>
              <h1 className="tw-absolute tw-bottom-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl">
                01
              </h1>
            </div>
          </a>


          <a
            href="https://www.taxedgeadvisory.co.uk/"
            className="tw-w-full tw-block tw-col-span-3  sm:tw-col-span-2 tw-shadow-2xl"
            title="Dralega Web Operations"
          >
            <div className="tw-relative tw-overflow-hidden">
              {/* <div className="overlay tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-70 tw-z-10"></div> */}
              <img
                src="projects/DralegaWebOps.png"
                alt="Dralega Web Operations"
                className="tw-transform hover:tw-scale-125 tw-transition tw-duration-2000 tw-ease-out"
              />
              <h1 className="tw-absolute tw-top-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl tw-bg-red-500 tw-rounded-md tw-px-2">
              Dralega Web Operations
              </h1>
              <h1 className="tw-absolute tw-bottom-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl">
                02
              </h1>
            </div>
          </a>


          {/* Single card */}
          <a
            href="https://www.taxedgeadvisory.co.uk/"
            className="tw-w-full tw-block tw-col-span-3 sm:tw-col-span-1  tw-object-cover"
            title="Tax Edge Advisory"
          >
            <div className="tw-relative tw-overflow-hidden">
              {/* <div className="overlay tw-absolute tw-inset-0 tw-bg-black tw-bg-opacity-70 tw-z-10"></div> */}
              <img
                src="projects/TaxEdge.png"
                alt="Hulu Clone Project"
                className="tw-transform hover:tw-scale-125 tw-transition tw-duration-2000 tw-ease-out"
              />
              <h1 className="tw-absolute tw-top-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl tw-bg-red-500 tw-rounded-md tw-px-2">
              Tax Edge Advisory
              </h1>
              <h1 className="tw-absolute tw-bottom-10 tw-left-10 tw-text-gray-50 tw-font-bold tw-text-xl">
                03
              </h1>
            </div>
          </a>




          
        </div>
      </div>
    </div>
  );
}
