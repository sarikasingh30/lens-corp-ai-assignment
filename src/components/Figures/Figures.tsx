"use client";
import { MyContext } from "../../context/Store";
import React, { useContext } from "react";
export const Figures = () => {
  const context = useContext(MyContext);
  const { theme } = context;

  return (
    <div className="flex flex-col justify-center items-center w-full py-16"style={{ backgroundColor: theme == "dark" ? "#1b1c1e " : "#272e5c" ,color:"white" }}>
      <div className="text-3xl text-center mb-8">By the numbers</div>
      <div className="w-3/4 flex justify-around items-center">
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div className="flex justify-center items-baseline gap-0.5">
            <span className="text-center text-4xl font-bold leading-none">15</span>
            <span className="text-center text-4xl font-bold leading-none" style={{color:theme=="dark"?"#585858":"#0486ee"}}>+</span>
          </div>
          <div className="text-center text-lg leading-relaxed w-70">
            Solutions for Global crises
          </div>
        </div>
        <div className="w-0.5 h-28 bg-white"></div>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div className="flex justify-center items-baseline gap-0.5">
            <span className="text-center text-4xl font-bold leading-none">10</span>
            <span className="text-center text-4xl font-bold leading-none" style={{color:theme=="dark"?"#585858":"#0486ee"}}>+</span>
          </div>
          <div className="text-center text-lg leading-relaxed w-70">
            University Collaborations
          </div>
        </div>
        <div className="w-0.5 h-28 bg-white"></div>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <div className="flex justify-center items-baseline gap-0.5">
            <span className="text-center text-4xl font-bold leading-none">25</span>
            <span className="text-center text-4xl font-bold leading-none" style={{color:theme=="dark"?"#585858":"#0486ee"}
            }>+</span>
          </div>
          <div className="text-center text-lg leading-relaxed w-70">Employees Worldwide</div>
        </div>
      </div>
    </div>
  );
};
