import React from "react";

const Crad = ({ image , title , disc}) => {
  return (
    <div className="min-w-[300px] min-h-[400px] bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden group">
      {/* Image Section */}
      <div className="h-[50%] overflow-hidden">
        <img
          src={image}
          alt="Card Visual"
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-black text-sm">
         {disc}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Crad;

