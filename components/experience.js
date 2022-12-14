import React from "react";

const Experience = () => {
  return (
    <ol className="mt-10 relative ml-4 border-l border-gray-700 w-full laptop:w-3/5">
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-blue-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          Software Devloper Trainee At Infolabz
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
          1 year (05/2019 - 06/2020)
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          8 years old IT company, strong enough to represent itself by work and
          experience. We are into Web & APP Development, Corporate & Live
          Project training and Placements.
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-blue-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          Software Engineer at Veemo
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
          2+ year (06/2020 - 07/2022)
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Veemo is an omnichannel customer service platform, so that businesses
          can manage their customer service across all channels from a single
          unified platform
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 rounded-full ring-8 ring-gray-900 bg-blue-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          Full Time Freelance Software Developer
          <span className="opacity-80 text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
            Latest
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
          Ongoing
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          A software engineer with 2+ years of professional experience working
          remotely around the world
        </p>
      </li>
    </ol>
  );
};

export { Experience };
