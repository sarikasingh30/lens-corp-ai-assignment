"use client";
import { MyContext } from "../../context/Store";
import React, { useContext, useState } from "react";
interface accord{
    title:String,
    des:String
}
export const Accordian= ({title,des}:accord) => {
    const context = useContext(MyContext);
    const { theme } = context;
    const[open,setOpen]=useState(false)
  return (
    <div className="relative mb-3 w-3/4 m-auto" onClick={()=>setOpen(!open)}>
              <h6 className="mb-0" style={{border:theme=="dark"?"2px solid white":"2px solid black", color:theme=="dark"?"white":"black"}}>
                <button
                  className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border border-solid cursor-pointer border-black text-slate-700 rounded-t-1 group"
                  data-collapse-target="animated-collapse-1" style={{color:theme=="dark"?"white":"black"}}
                >
                  <span>{title}</span>
                  <i className="absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down group-open:rotate-180 px-2"></i>
                </button>
              </h6>
              <div
                data-collapse="animated-collapse-1"
                className="h-0 overflow-hidden transition-all duration-300 ease-in-out" style={{opacity:open==true?"100":"0",height:open==true?"25vh":"0"}}
              >
                <div className="p-4 text-sm leading-normal" style={{color:"#8293a3"}}>
                  {des}
                </div>
              </div>
            </div>
  )
}
