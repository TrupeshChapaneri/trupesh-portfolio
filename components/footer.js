import React from "react";
import { Socials } from "./socials";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-8 laptop:p-0">
        <h1 className="text-2xl text-bold">
          Let&apos;s talk about your project.
        </h1>
        <h1 className="text-3xl g-text tablet:text-6xl laptop:text-6xl mt-6 font-black w-4/5 mob:w-full laptop:w-4/5">
          trupesh789@gmail.com
        </h1>
        <div className="mt-3">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-20">
        Made With ❤ by{" "}
        <Link href="http://www.King.com">
          <a className="underline underline-offset-1">King</a>
        </Link>
      </h1>
    </>
  );
};

export { Footer };
