import React from "react";
import { socialMedia } from "../utils";
import { Button } from "./button";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap`}>
      {socialMedia.map(({ id, title, link }) => (
        <Button key={id} onClick={() => window.open(link)}>
          {title}
        </Button>
      ))}
    </div>
  );
};

export { Socials };
