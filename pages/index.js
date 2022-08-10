import { useRef } from "react";
import Head from "next/head";
import { Header } from "../components/header";
import { ServiceCard } from "../components/serviceCard";
import { Socials } from "../components/socials";
import { WorkCard } from "../components/workCard";
import { projects, services, useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import { Footer } from "../components/footer";
import { Cursor } from "../components/cursor";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 30 },
      { y: 0 }
    );
  }, []);

  return (
    <>
      <Cursor />
      <Head>
        <title>Trupesh.</title>
      </Head>
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <div className="container mx-auto mb-8">
        <div className="laptop:mt-20 mt-8">
          <h1
            ref={textOne}
            className="text-3xl tablet:text-6xl laptop:text-7xl p-1 tablet:py-3 text-bold w-4/5 mob:w-full laptop:w-4/5"
          >
            Hello 👋
          </h1>
          <h1
            ref={textTwo}
            className="text-3xl tablet:text-6xl laptop:text-7xl p-1 tablet:py-3 text-bold w-full laptop:w-4/5"
          >
            I&apos;m Trupesh Chapaneri
          </h1>
          <h1
            ref={textThree}
            className="text-3xl tablet:text-6xl laptop:text-7xl p-1 tablet:py-3 text-bold w-full laptop:w-4/5"
          >
            specializing in building
          </h1>
          <h1
            ref={textFour}
            className="text-3xl tablet:text-6xl laptop:text-7xl p-1 tablet:py-3 text-bold w-full laptop:w-4/5"
          >
            exceptional <span className="g-text">digital experiences.</span>
          </h1>

          <Socials className="mt-2 laptop:mt-8" />
        </div>

        <ol className="relative border-l border-gray-700">
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
              Flowbite Application UI v2.0.0{" "}
              <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              <svg
                className="mr-2 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                  clipRule="evenodd"
                ></path>
              </svg>{" "}
              Download ZIP
            </a> */}
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
              Flowbite Application UI v2.0.0{" "}
              <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
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
              Flowbite Application UI v2.0.0{" "}
              <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
                Latest
              </span>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              Released on January 13th, 2022
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce &amp; Marketing
              pages.
            </p>
          </li>
        </ol>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Work.</h1>
          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">Services.</h1>
          <div className="mt-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="text-2xl text-bold">About.</h1>
          <p className="mt-10 leading-10 text-xl laptop:text-3xl w-full laptop:w-3/5">
            Hey, I&apos;m Trupesh Chapaneri, a software engineer with 2+ years
            of professional experience working remotely around the{" "}
            <span className="g-text">world.</span> I create websites, brand
            identities, packaging, and everything in-between. I&apos;m
            passionate about building & designing delightful experiences with
            the combination of business, marketing and UI/UX design to make
            customers and users satisfied when they are using products and
            services online.
          </p>
        </div>
        <div className="border-t-2 laptop:my-40 border-gray-50" />
        <Footer />
      </div>
    </>
  );
}
