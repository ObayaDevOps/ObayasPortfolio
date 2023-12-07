import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="tw-bg-white dark:tw-bg-gray-800">
      <div className="tw-max-w-6xl tw-mx-auto tw-h-48 tw-bg-white dark:tw-bg-gray-800">
        <h1 className=" tw-text-5xl md:tw-text-9xl tw-font-bold tw-py-10 md:tw-py-10  tw-text-center md:tw-text-left">
          About Me.
        </h1>
      </div>
      <div className="tw-bg-[#F1F1F1] tw--mt-10 dark:tw-bg-gray-900">
        <div className="text-container tw-max-w-6xl tw-mx-auto tw-pt-20">
          <p
            className="tw-leading-loose tw-text-2xl md:tw-text-4xl tw-font-semibold  tw-mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title} Currently working on{" "} <br />
            <a
              className="tw-bg-red-500 tw-rounded-md tw-px-2 tw-py-1 tw-text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} ✈️
            </a>
          </p>
        </div>
      </div>
      <div className="tw-bg-[#F1F1F1] dark:tw-bg-gray-900 tw-px-4">
        <div className="tw-pt-20 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-max-w-6xl tw-mx-auto tw-gap-y-20 tw-gap-x-20">
          {/* Social Buttons */}
          <div className="tw-inline-flex tw-flex-col">
            <div>
              <h1 className="tw-text-xl tw-font-semibold tw-text-gray-700 dark:tw-text-gray-200">
                Contact
              </h1>
              <p className="tw-text-lg tw-text-gray-500 tw-mt-4 dark:tw-text-gray-300">
                For any sort of help / enquiry, shoot  me an{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="tw-text-gray-800 tw-border-b-2 tw-border-gray-800 dark:tw-border-gray-300 tw-font-bold dark:tw-text-gray-300"
                >
                  E-mail
                </a>{" "}
                and I'll get back to you!
              </p>
            </div>
            <div className="tw-mt-8">
              <h1 className="tw-text-xl tw-font-semibold tw-text-gray-700 dark:tw-text-gray-200">
                Job Opportunities
              </h1>
              <p className="tw-text-lg tw-text-gray-500 tw-mt-4 dark:tw-text-gray-300">
                I'm looking for a job currently in Stockholm, Sweden, If you see me as a good fit,
                check my{" "}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="tw-text-gray-800 tw-border-b-2 tw-border-gray-800 dark:tw-border-gray-300 tw-font-bold dark:tw-text-gray-300"
                >
                  CV
                </a>{" "}
                and I'd love to work for you.
              </p>
            </div>



            {/* Social Links */}
            <h1 className="tw-text-xl tw-font-semibold tw-text-gray-700 tw-mt-8 dark:tw-text-gray-200">
              Social Links
            </h1>
            <div className="tw-mt-4 tw-ml-4">
              <div className="tw-flex tw-flex-row tw-justify-start tw-items-center ">
                <a
                  href={userData.socialLinks.facebook}
                  className="tw-flex tw-flex-row tw-items-center tw-space-x-4 group"
                >
                  <div className="tw-my-4">&rarr;</div>
                  <p className="tw-text-lg tw-text-gray-500 tw-font-mono tw-relative tw-overflow-hidden dark:tw-text-gray-300">
                    <div className="tw-absolute tw-h-0.5 tw-w-full tw-bg-gray-400 tw-bottom-0 tw-transform tw--translate-x-24 group-hover:tw-translate-x-0 tw-transition tw-duration-300"></div>
                    Facebook
                  </p>
                </a>
              </div>
              <div className="tw-flex tw-flex-row tw-justify-start tw-items-center">
                <a
                  href={userData.socialLinks.twitter}
                  className="tw-flex tw-flex-row tw-items-center tw-space-x-4 group"
                >
                  <div className="tw-my-4">&rarr;</div>
                  <p className="tw-text-lg tw-text-gray-500 tw-font-mono tw-relative tw-overflow-hidden dark:tw-text-gray-300">
                    <div className="tw-absolute tw-h-0.5 tw-w-full tw-bg-gray-400 tw-bottom-0 tw-transform tw--translate-x-24 group-hover:tw-translate-x-0 tw-transition tw-duration-300"></div>
                    Twitter
                  </p>
                </a>
              </div>
              <div className="tw-flex tw-flex-row tw-justify-start tw-items-center">
                <a
                  href={userData.socialLinks.github}
                  className="tw-flex tw-flex-row tw-items-center tw-space-x-4 group"
                >
                  <div className="tw-my-4">&rarr;</div>
                  <p className="tw-text-lg tw-text-gray-500 tw-font-mono tw-relative tw-overflow-hidden dark:tw-text-gray-300">
                    <div className="tw-absolute tw-h-0.5 tw-w-full tw-bg-gray-400 tw-bottom-0 tw-transform tw--translate-x-24 group-hover:tw-translate-x-0 tw-transition tw-duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="tw-flex tw-flex-row tw-justify-start tw-items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="tw-flex tw-flex-row tw-items-center tw-space-x-4 group"
                >
                  <div className="tw-my-4">&rarr;</div>
                  <p className="tw-text-lg tw-text-gray-500 tw-font-mono tw-relative tw-overflow-hidden dark:tw-text-gray-300">
                    <div className="tw-absolute tw-h-0.5 tw-w-full tw-bg-gray-400 tw-bottom-0 tw-transform tw--translate-x-24 group-hover:tw-translate-x-0 tw-transition tw-duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
              <div className="tw-flex tw-flex-row tw-justify-start tw-items-center">
                <a
                  href={userData.socialLinks.instagram}
                  className="tw-flex tw-flex-row tw-items-center tw-space-x-4 group"
                >
                  <div className="tw-my-4">&rarr;</div>
                  <p className="tw-text-lg tw-text-gray-500 tw-font-mono tw-relative tw-overflow-hidden dark:tw-text-gray-300">
                    <div className="tw-absolute tw-h-0.5 tw-w-full tw-bg-gray-400 tw-bottom-0 tw-transform tw--translate-x-28 group-hover:tw-translate-x-0 tw-transition tw-duration-300"></div>
                    Instagram
                  </p>
                </a>
              </div>
            </div>

            <a href="https://www.buymeacoffee.com/afropocene" target="_blank" rel="noreferrer"><img className="tw-p-5" src="/buy-me-a-coffee.png" alt="Buy Me A Coffee" height="48" width="180" /></a>
          </div>
          {/* Text area */}
          <div className="tw-col-span-1 md:tw-col-span-2">
            {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="tw-text-xl tw-text-gray-700 tw-mb-4 dark:tw-text-gray-300 "
              >
                {desc}
              </p>
            ))}

            <h1 className="tw-bg-red-500 tw-text-3xl tw-rounded-md tw-px-2 tw-py-1 tw-inline-block tw-font-bold tw-text-gray-50">
              Tech Stack
            </h1>
            <div className="tw-flex tw-flex-row tw-flex-wrap tw-mt-8">
              <img
                src="tech stack/html-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/css-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/js-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/ts-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/git-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/react-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/nextjs-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/firebase-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/strapi-logo.webp"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/mongodb-logo.webp"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/sanity-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
              <img
                src="tech stack/python-logo.png"
                className="tw-h-20 tw-w-20 tw-mx-4 tw-my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
