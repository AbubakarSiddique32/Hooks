import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className=" bg-slate-400 flex flex-col justify-center items-center text-center p-10">
      <h1 className=" text-blue-950 font-bold text-[40px] mb-5">
        Hi this is UseState Hook
      </h1>

      <button
        className="border mb-5 border-white p-2 px-5 rounded-full text-black font-bold hover:shadow-2xl hover:bg-slate-200 hover:scale-105"
        onClick={() => setCount((count) => count + 1)}
      >
        Click Me
      </button>
      <p className=" bg-slate-100 text-blue-900 p-5 rounded-full">
        This Is Counter {count}
      </p>
    </div>
  );
};

export default UseState;
