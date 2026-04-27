import React from "react";

type ProjectItems="UI Library" | "Shadow Ink";

const CodeSection = () => {
  return (
    <div className="py-8 h-screen">
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>
          <button className="ml-2 px-2 py-1  text-white rounded hover:text-gray-300">
            UI Library
          </button>
        </li>
        <li>
          <button className="ml-2 px-2 py-1  text-white rounded hover:text-gray-300">
            Shadow Ink
          </button>
        </li>
      </ul>
    </div>
  );
};

export default CodeSection;


