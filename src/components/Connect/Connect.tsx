"use client";
import { MyContext } from "../../context/Store";
import React,{useContext} from 'react'
export const Connect = () => {
    const context = useContext(MyContext);
  const { theme} = context;
  return (
    <div className="flex flex-col lg:flex-row md:flex-row">
        <div className="flex flex-col items-center lg:items-start md:items-start lg:w-1/2 md:w-1/2 justify-center w-full p-20" style={{backgroundColor:theme=="dark"?"#1b1c1e":"white"}}>
            <h2 className="text-5xl font-semibold leading-tight w-3/4 mb-8" style={{color:theme=="dark"?"white":"black"}}>Get in touch with us</h2>
            <p className="text-base tracking-tighter mb-8" style={{color:theme=="dark"?"white":"black"}}>Send your enquiry now!</p>
            <form className="w-3/4 rounded-3xl flex p-1 items-center justify-between" style={{backgroundColor:theme=="dark"?"black":"#ededed"}} >
                <input className="w-3/4 p-2 text-base border border-transparent rounded-l bg-transparent" style={{color:theme=="dark"?"white":"black"}} placeholder="Enter email address" type="email" name="email" />
                <button className="px-4 py-2 text-base rounded-3xl text-white border-none w-40 cursor-pointer" style={{backgroundColor:"#272e5c"}} type="submit">Request Demo</button>
            </form>
        </div>
        <div className="flex items-center lg:items-end md:items-end lg:w-1/2 md:w-1/2 justify-center w-full border-b-2 border-l-0 border-r-0 py-16" style={{border:theme=="dark"?"#1b1c1e":"white"}}>
            <img alt="map" className="max-width-full" src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMap.1a735ef7.png&w=1920&q=75"/>
        </div>
    </div>
  )
}
