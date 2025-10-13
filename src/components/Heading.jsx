import React from "react";

function Heading({ orange, normal }) {
  return (
    <div className="w-fit mx-auto ">
      <h2 className="md:text-5xl text-4xl font-bold ">
        {" "}
        <span className="text-orange-500">{orange}</span> {normal}
      </h2>

      <div className="md:w-34 w-32 h-1 bg-orange-300 md:mt-6 mt-4 ml-auto"></div>
    </div>
  );
}

export default Heading;
