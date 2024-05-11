"use client";
import { MyContext } from "../../context/Store";
import React, { useContext } from "react";
import Image from "next/image";
export const MainSection = () => {
  const context = useContext(MyContext);
  const { theme} = context;
  return (
    <React.Fragment>
      {theme == "dark" ? (
        <div className="w-full h-screen overflow-hidden grid place-content-center mb-5">
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-screen z-10 object-cover"
          >
            <source
              src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730947/lenscorp-website/pexels-pressmaster-3129671-3840x2160-30fps_1_ak5nsz_d7alrn.mp4"
              type="video/mp4"
            />
          </video>
          <div className="flex flex-col items-center justify-center z-20">
            <h1 className="text-7xl text-white mb-5 text-center z-20 font-bold ">We are at the forefront of AI</h1>
            <p className="hidden lg:block mt-5 mb-5 text-center text-lg font-light text-white z-20">From Conserving Wildlife to Automatically Generating Caricatures
            <br/>
            {"-"}
            <span className="text-center text-lg font-bold">We Do It All</span>
            </p>
            <button className="bg-white text-black text-lg px-8 py-3 my-4 rounded-lg border border-black">Learn More</button>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen overflow-hidden grid place-content-center mb-5">
            <img className="absolute top-0 left-0 w-full h-screen z-10 object-cover" src="https://lenscorp.ai/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdetwrhe0k%2Fimage%2Fupload%2Fv1691730929%2Flenscorp-website%2FDesktop_-_23_u3ypg0.jpg&w=128&q=75" alt="mImg"/>
            <div className="w-3/4 flex flex-col items-start justify-center z-20 ml-7">
            <h1 className="text-5xl text-black mb-5 text-start z-20 font-bold ">We are at the forefront of AI</h1>
            <p className="hidden lg:block mt-5 mb-5 text-start text-lg font-light text-black z-20">From Conserving Wildlife to Automatically <br/>Generating Caricatures
            <span className="text-center text-lg font-bold">- We Do It All</span>
            </p>
            <button className="bg-black text-white text-lg px-8 py-3 my-4 rounded-lg border border-black">Learn More</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
