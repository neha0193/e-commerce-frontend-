import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-3 mb-6">
      <p className="text-gray-500 tracking-wide">
        {text1}{" "}
        <span className="text-gray-900 font-semibold">{text2}</span>
      </p>
      <span className="w-10 sm:w-16 h-[2px] bg-gray-900 rounded-full"></span>
    </div>
  );
};

export default Title;
