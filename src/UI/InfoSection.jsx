import React from "react";

function InfoSection({ svgPath, title, description }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="bg-black  rounded-full mx-auto flex justify-center items-center mb-6"
        style={{ width: "60px", height: "60px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          width="30"
          height="30"
          className="text-white"
        >
          <path d={svgPath} />
        </svg>
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default InfoSection;
