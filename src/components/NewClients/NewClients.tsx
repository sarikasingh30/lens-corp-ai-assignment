"use client";
import "./NewClients.css"
import { MyContext } from "../../context/Store";
import React, { useContext } from "react";
export const NewClients = () => {
    const context = useContext(MyContext);
    const { theme } = context;
  return (
    <div className="text-center px-8 pb-20 overflow-hidden mt-4">
      <h1 className="text-center text-2xl font-semibold mb-16" style={{color:theme=="dark"?"white":"black"}}>
        We Work With Amazing Clients
      </h1>
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center gap-8 slide">
        <div>
          <img
            alt="gen"
            loading="lazy"
            width="200"
            height="113"
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGlobal_white.7630bd08.png&w=640&q=75"
            style={{ color: "transparent", height: "8rem", width: "12rem" }}
          />
        </div>
        <div>
          <img
            alt="gen"
            width="200"
            height="112"
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZkt_white.cacd6ecf.png&w=640&q=75"
            style={{ color: "transparent", height: "8rem", width: "12rem" }}
            
          />
        </div>
        <div>
          <img
            alt="gen"
            loading="lazy"
            width="200"
            height="96"
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCore_white.8ba066be.png&w=640&q=75"
            style={{ color: "transparent", height: "8rem", width: "12rem" }}
            
          />
        </div>
        <div>
          <img
            alt="gen"
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGrove.f0ee63ad.png&w=256&q=75"
            style={{ color: "transparent", height: "8rem", width: "12rem" }}
          />
        </div>
      </div>
    </div>
  );
};
