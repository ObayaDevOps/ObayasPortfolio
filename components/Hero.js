import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6", "#BF9000"];
  return (
    <div className="tw-flex tw-flex-row tw-justify-center tw-items-start tw-overflow-hidden">
      {/* Text container */}

      <div className="tw-w-full md:tw-w-1/2 tw-mx-auto tw-text-center md:tw-text-left lg:tw-p-20">
        <RoughNotationGroup show={true}>
        <RainbowHighlight color={colors[3]}>
            <h1 className="tw-text-4xl md:tw-text-8xl tw-font-bold tw-text-gray-700 dark:tw-text-gray-200 tw-my-2">
            Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[0]}>
            <h1 className="tw-text-4xl md:tw-text-8xl tw-font-bold tw-text-gray-700 dark:tw-text-gray-200 tw-my-2">
            Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="tw-text-4xl md:tw-text-8xl tw-font-bold tw-text-gray-700 dark:tw-text-gray-200 tw-my-2">
              Artist.
            </h1>
          </RainbowHighlight>
          {/* <RainbowHighlight color={colors[4]}>
            <h1 className="tw-text-4xl md:tw-text-8xl tw-font-bold tw-text-gray-700 dark:tw-text-gray-200 tw-my-2">
              Beekeeper.
            </h1>
          </RainbowHighlight> */}
          <RainbowHighlight color={colors[2]}>
            <h1 className="tw-text-4xl md:tw-text-8xl tw-font-bold tw-text-gray-700 dark:tw-text-gray-200 tw-my-2">
              Founder.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      <div className="tw-hidden lg:tw-block tw-relative tw-w-full md:tw-w-1/2 tw--mr-40 tw-mt-20">
        <div className="tw-w-3/4 ">
          <img src={userData.avatarUrl} alt="avatar" className=" tw-shadow" />
          <div className="tw-flex tw-flex-row tw-justify-between tw-mt-4">
            <div className="tw-flex tw-flex-row tw-space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="tw-font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
