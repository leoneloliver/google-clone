import React from "react";
// import PaginationButtons from "./PaginationButtons";

export default function ImageResults({ results }) {
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
        {results.items?.map((result) => (
          <div key={result.link} className="mb-8">
            <div className="group">
              
              <a href=''>
                <img
                  className="group-hover:shadow-xl w-full h-60 object-contain mb-3 bg-gray-100 p-2"
                  src={result.link}
                  alt={result.title}
                />
              </a>

              <a className="group-hover:underline" href=''>
                <h2 className="truncate text-md">{result.title}</h2>
              </a>
              <a className="group-hover:underline" href=''>
                <p className="text-gray-600 text-sm">{result.displayLink}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-16">
        {/* <PaginationButtons/> */}
      </div>
    </div>
  );
}