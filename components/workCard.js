import React from "react";

const WorkCard = ({ name, description, onClick }) => {
  return (
    <div className="py-2 laptop:py-2 first:ml-0">
      <h1
        onClick={onClick}
        className="mb-4 cursor-pointer text-3xl font-medium transition-all ease-out duration-300 hover:scale-105"
      >
        {name}
      </h1>
      {description.map((tech, i) => (
        <span
          key={i}
          className="opacity-80 text-sm font-medium mr-2 px-2 py-0.5 rounded bg-blue-200 text-blue-800"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export { WorkCard };
