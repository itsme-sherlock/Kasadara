import React from "react";

function GridPattern() {
  return (
    <section className="bg-gray-200">
      <div
        className="grid grid-cols-7 grid-rows-7 gap-2 mx-auto max-w-screen-lg p-4"
        style={{
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "repeat(7, 1fr)",
        }}
      >
        {Array.from({ length: 49 }, (_, index) => (
          <div
            key={index}
            className="bg-blue-500 h-16 flex items-center justify-center text-white"
          >
            {/* You can put content or leave it empty */}
            {index + 1}
          </div>
        ))}
      </div>
    </section>
  );
}

export default GridPattern;
