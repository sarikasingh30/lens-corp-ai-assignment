"use client";
import { MyContext } from "../../context/Store";
import React,{useContext} from 'react'

export const About = () => {
  const context = useContext(MyContext);
  const { theme} = context;
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto mb-2" style={{backgroundColor:theme=="dark"?"black":"white"}}>
        <div className="flex flex-col items-center justify-center gap-5 mb-20">
          <h1 className=" text-center text-6xl font-bold m-0" style={{color:theme=="dark"?"white":"black"}}>About Us</h1>
          <div
              className="h-2 w-40 rounded"
              style={{backgroundImage:"linear-gradient(#3c8ce7, #00eaff)"}}
            ></div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse md:flex-row-reverse w-3/4 justify-between items-center p-8 rounded-lg" style={{backgroundColor:theme=="dark"?"#1b1c1e":"#e2f2ff", color:theme=="dark"?"white":"black"}}>
          
            <div className="flex justify-center items-center bg-white p-4 rounded-lg">
              <img className="w-96 h-80 rounded-10 transition duration-300 object-cover" src="https://lenscorp.ai/_next/image?url=%2FImages%2FaboutLatest.webp&w=640&q=75" alt="Aimg"/>
            </div>
         
          <div className="flex flex-col items-start justify-center">
          <h3 className="text-3xl mb-5 text-start font-bold " style={{color:theme=="dark"?"white":"black"}}>Welcome To LENS</h3>
            <p className="w-3/4 mt-5 mb-5 text-start text-md font-light sm:mt-0" style={{color:theme=="dark"?"white":"black"}}> {`We put our hearts, souls and sweat into designing and developing custom AI - powered solutions for your business so you don't have to.`}</p>
            <button className= "text-lg px-8 py-3 my-4 rounded-lg " style={{color:theme=="dark"?"white":"black", border:theme=="dark"?"2px solid white":"2px solid black"}}>Learn More</button>
          </div>
        </div>
    </div>
  )
}
