import React from "react";
import "./spinner.css";

const EmptyData = ({ title }: { title: string }): JSX.Element => {
  return (
    <div className="bg-white my-10 p-6 h-[40vh] flex flex-col justify-center items-center">
      <span className="loader mb-5"></span>
      <h1 className="text-black text-xl">No {title} data available.</h1>

    </div>
  );
};

export default EmptyData;
