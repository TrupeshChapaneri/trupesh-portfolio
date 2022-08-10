/* eslint-disable @next/next/no-img-element */
import { Popover } from "@headlessui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button } from "./button";

const Header = ({ handleWorkScroll, handleAboutScroll }) => {
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium cursor-pointer py-2 px-10 laptop:p-0"
              >
                Trupesh.
              </h1>

              <div className="flex items-center">
                <Popover.Button>
                  <img
                    alt="img"
                    className="h-5"
                    src={`/images/${
                      !open ? "menu-white.svg" : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 bg-slate-800 shadow-md rounded-md`}
            >
              <div className="grid grid-cols-1">
                <Button onClick={handleWorkScroll}>Work</Button>
                <Button onClick={handleAboutScroll}>About</Button>

                <Button
                  onClick={() => window.open("mailto:trupesh789@gmail.com")}
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-7 container px-7 mx-auto hidden flex-row items-center justify-between sticky bg-black ${
          scrolled && "shadow-[-5px_16px_12px_-16px_rgba(0,0,0,0.1)]"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          Trupesh.
        </h1>

        <div className="flex">
          <Button onClick={handleWorkScroll}>Work</Button>
          <Button onClick={handleAboutScroll}>About</Button>
          <Button onClick={() => window.open("mailto:trupesh789@gmail.com")}>
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export { Header };
