import React from "react";

const Downloadlogo = () => {
  return (
    <div className="h-24 bg-gray-200 flex justify-center items-center gap-16">
      <h1 className="text-2xl font-bold ">
        For better experience,download the Swiggy app now
      </h1>
      <div className="flex flex-row justify-center items-center gap-5 ">
        <img
          className="w-44 h-16"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
          alt=""
        />
        <img
          className="w-44 h-16"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Downloadlogo;
