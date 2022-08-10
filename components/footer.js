import React from "react";
import { Socials } from "./socials";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="mt-8 laptop:p-0">
        <h1 className="text-2xl text-bold">Contact.</h1>
        <div className="mt-5">
          <Socials />
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10">
        Made With ❤ by{" "}
        <Link href="http://www.King.com">
          <a className="underline underline-offset-1">King</a>
        </Link>
      </h1>
    </>
  );
};

export { Footer };
