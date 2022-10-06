import React from "react";

import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

const AccordionLayout = ({
  title,
  children,
  index,
  activeIndex,
  setActiveIndex,
}) => {
  const handleSetIndex = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    }
    activeIndex !== index && setActiveIndex(index);
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(index)}
        className="flex w-1/2 justify-between p-2 mt-2 rounded  bg-primary-900 shadow-table opacity-0.3"
      >
        <div className="flex">
          <div className="text-white font-bold">{title}</div>
        </div>
        <div className="flex items-center justify-center">
          {activeIndex === index ? (
            <BsFillArrowDownCircleFill className="w-8 h-8" />
          ) : (
            <BsFillArrowUpCircleFill className="w-8 h-8" />
          )}
        </div>
      </div>

      {activeIndex === index && (
        <div className="shadow-3xl flex w-1/2 rounded-2xl pt-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 opacity-1 p-4 mb-6 text-cyan-50">
          {children}
        </div>
      )}
    </>
  );
};

export default AccordionLayout;
