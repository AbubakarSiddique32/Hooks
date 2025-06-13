import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState();
  const [text, setText] = useState();
  return (
    <div className=" w-full">
      {/* 1st Example */}
      <div className=" bg-slate-400 flex w-[90%] m-auto rounded-[20px] mt-5 flex-col justify-center items-center text-center p-10">
        <h1 className=" text-blue-950 font-bold text-[40px] mb-5">
          Hi this is UseState Hook
        </h1>

        <p className=" bg-slate-100 text-blue-900 p-5 rounded-full">
          This Is Counter {count}
        </p>
        <div className=" mt-5 flex gap-5">
          <button
            className="border mb-5 border-white p-2 px-5 rounded-full text-black font-bold hover:shadow-2xl hover:bg-slate-200 hover:scale-105"
            onClick={() => setCount((count) => count + 1)}
          >
            Increase
          </button>

          {/* 2ND */}
          <button
            className="border mb-5 border-white p-2 px-5 rounded-full text-black font-bold hover:shadow-2xl hover:bg-slate-200 hover:scale-105"
            onClick={() => setCount((count) => count - 1)}
          >
            Decrease
          </button>

          {/* 3rd */}
          <button
            className="border mb-5 border-white p-2 px-5 rounded-full text-black font-bold hover:shadow-2xl hover:bg-slate-200 hover:scale-105"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>

      {/* 2nd Example */}
      <div className=" bg-green-500 flex w-[90%] m-auto rounded-full mt-10 p-5 justify-center items-center flex-col">
        <button
          className=" bg-green-950 text-white py-3 px-6 rounded-lg"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Hide" : "Show"} Text
        </button>
        {isVisible && (
          <p className=" w-full text-center mt-5">This Text is Visible!</p>
        )}
      </div>

      {/* 3rd Example */}
      <div className=" bg-black flex w-[90%] m-auto rounded-full mt-10 p-5 justify-center items-center flex-col ">
        <input
          className="px-3 py-2"
          type="text"
          placeholder="Type Something Here..!"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p className=" bg-white p-3  text-gray-600 mt-3 rounded-[5px]">
          You Typed: {text}
        </p>
      </div>
    </div>
  );
};

export default UseState;
