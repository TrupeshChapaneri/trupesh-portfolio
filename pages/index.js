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
import { Experience } from "../components/experience";

export default function Home() {
  const workRef = useRef();
  const aboutRef = useRef();
  const connectRef = useRef();
  const serviceRef = useRef();

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

  const handleConnectScroll = () => {
    window.scrollTo({
      top: connectRef.current.offsetTop - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleServiceScroll = () => {
    window.scrollTo({
      top: serviceRef.current.offsetTop - 80,
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
        {...{
          handleWorkScroll,
          handleAboutScroll,
          handleConnectScroll,
          handleServiceScroll,
        }}
      />
      <div className="container mx-auto px-8 mb-8">
        <div className="laptop:mt-20 mt-8">
          <h1
            ref={textOne}
            className="text-2xl tablet:text-5xl laptop:text-6xl tablet:py-2 text-bold w-5/5 mob:w-full laptop:w-5/5"
          >
            Hello, Hi and Namste 🙏
          </h1>
          <h1
            ref={textTwo}
            className="text-2xl tablet:text-5xl laptop:text-6xl tablet:py-2 text-bold w-full laptop:w-4/5"
          >
            I&apos;m Trupesh Chapaneri
          </h1>
          <h1
            ref={textThree}
            className="text-2xl tablet:text-5xl laptop:text-6xl tablet:py-2 text-bold w-full laptop:w-4/5"
          >
            specializing in building
          </h1>
          <h1
            ref={textFour}
            className="text-2xl tablet:text-5xl laptop:text-6xl tablet:py-2 text-bold w-full laptop:w-5/5"
          >
            exceptional <span className="g-text">digital experiences.</span>
          </h1>

          <Socials className="mt-4 laptop:mt-10" />
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

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="text-2xl text-bold">Experience.</h1>
          <Experience />
        </div>

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

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={serviceRef}>
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

        <div className="border-t-4 my-10 laptop:my-40 border-gray-50" />
        <Footer {...{ connectRef }} />
      </div>
    </>
  );
}
