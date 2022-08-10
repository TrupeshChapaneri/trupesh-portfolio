import React from "react";

const ServiceCard = ({ name, description }) => {
  return (
    <div
      className={`w-full mob:p-4 rounded-lg hover:bg-slate-800 transition-all ease-out duration-300`}
    >
      <h1 className="text-3xl">{name}</h1>
      <p className="mt-5 opacity-40 text-xl">{description}</p>
    </div>
  );
};

export { ServiceCard };
