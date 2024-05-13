"use client";
import { MyContext } from "../../context/Store";
import React, { useContext } from "react";
export const ChooseLens = () => {
  const context = useContext(MyContext);
  const { theme } = context;
  return (
    <div className="grid place-items-center pb-24">
      <div className="">
        <h2
          className="text-center text-xl font-bold m-0"
          style={{ color: theme == "dark" ? "white" : "black" }}
        >
          WHY CHOOSE LENS
        </h2>
        <div
          className="h-1 w-20 m-auto rounded"
          style={{ backgroundImage: "linear-gradient(#3c8ce7, #00eaff)" }}
        ></div>
      </div>
      <p
        className="w-80 text-center text-4xl font-medium my-4"
        style={{ color: theme == "dark" ? "white" : "black" }}
      >
        AI-driven solutions backed by science
      </p>
      <p className="text-[#8a8a8a] text-center text-xl w-1/2 mb-[4rem]">
        Every piece of AI technology shipped from LENS is thoroughly benchmarked
        via rigorous evaluations. With a global network of experts and
        academicians, we guarantee the most accurate and robust solutions in the
        market.
      </p>
      <div className="flex flex-row gap-[1rem]">
        <div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>{" "}
            State-of-the-art solutions
          </div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>{" "}
            Fast &amp; Efficient
          </div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>
            No extra computation fee
          </div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>
            No licensing fee
          </div>
        </div>
        <div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>{" "}
            Lifetime support &amp; upgrades
          </div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>{" "}
            Plug-and-Play
          </div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>{" "}
            24x7 Progress Monitoring
          </div>
          <div
            className="text-lg font-extralight flex items-center gap-[.25rem] tracking-wider pt-[.25rem] pr-[1rem]"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              className=""
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>{" "}
            Incremental Updates
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-[5rem]">
        <div style={{ position: "relative" }}>
          {theme == "dark" ? (
            ""
          ) : (
            <div className="w-[250px] h-[200px] boreder rounded-[172px] bg-[#01c99b] filter blur-[170px] absolute -top-[40px] -left-[40px]"></div>
          )}
          <div
            className="z-30 h-[435px] w-[20rem] border rounded-[24px] m-[.5rem] flex flex-col justify-between items-start relative border-none"
            style={{ backgroundColor: theme == "dark" ? "#1b1c1e" : "white",color: theme == "dark" ? "white" : "black" }}
          >
            <div
              className="p-[2rem] font-bold text-[1.7rem] text-left flex"
              style={{
                textAlign: "center",
                color: theme == "dark" ? "white" : "black",
              }}
            >
              Exclusive Rights
            </div>

            <img
              alt="sol card img"
              width="251"
              height="91"
              className="self-center animate-ImgAnime delay-500"
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgreen.e71c8735.png&w=640&q=75"
              style={{ color: "transparent" }}
            />
            <div className="pt-0 pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] font-lighter text-[#8a8a8a] text-[16px] text-left">
              Our mission is to make an impact in empowering human society with
              AI. Hence, all Intellectual Property Rights belongs to you.
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          {theme == "dark" ? (
            ""
          ) : (
            <div className="w-[150px] h-[150px] boreder rounded-[172px] bg-[#00b2fc] filter blur-[170px] absolute -top-[50px] -right-[50px]"></div>
          )}
          <div
            className="z-30 h-[435px] w-[20rem] border rounded-[24px] m-[.5rem] flex flex-col justify-between items-start relative border-none"
            style={{  backgroundColor: theme == "dark" ? "#1b1c1e" : "white",color: theme == "dark" ? "white" : "black" }}
          >
            <div
              className="p-[2rem] font-bold text-[1.7rem] text-left flex"
              style={{
                textAlign: "center",
                color: theme == "dark" ? "white" : "black",
              }}
            >
              Research Driven
            </div>
            <img
              alt="sol card img"
              loading="lazy"
              width="138"
              height="138"
              className="self-center animate-ImgAnime delay-1000"
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblue.f22859fe.png&w=384&q=75"
              style={{ color: "transparent" }}
            />
            <div className="pt-0 pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] font-lighter text-[#8a8a8a] text-[16px] text-left">
              We regularly benchmark our solutions via comparing industry-vide
              evaluations so our partners only get the best that AI can offer.
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          {theme == "dark" ? (
            ""
          ) : (
            <div className="w-[250px] h-[200px] boreder rounded-[172px] bg-[#ff6160] filter blur-[170px] absolute -bottom-[30px] left-[60px]"></div>
          )}
          <div
            className="z-30 h-[435px] w-[20rem] border rounded-[24px] m-[.5rem] flex flex-col justify-between items-start relative border-none"
            style={{
              backgroundColor: theme == "dark" ? "#1b1c1e" : "white",
              color: theme == "dark" ? "white" : "black",
            }}
          >
            <div
              className="p-[2rem] font-bold text-[1.7rem] text-left flex"
              style={{
                textAlign: "center",
                color: theme == "dark" ? "white" : "black",
              }}
            >
              Plug-and-Play
            </div>
            <img
              alt="sol card img"
              loading="lazy"
              width="125"
              height="160"
              className="self-center animate-ImgAnime delay-200"
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fred.a7efdb29.png&w=256&q=75"
              style={{ color: "transparent" }}
            />
            <div className="pt-0 pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] font-lighter text-[#8a8a8a] text-[16px] text-left">
              We provide AI-driven solutions into businesses where they can
              bring tangible value. Each solution is customized as per your
              needs and deployed on any computing device of your choice.{" "}
            </div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          {theme == "dark" ? (
            ""
          ) : (
            <div className="w-[100px] h-[100px] boreder rounded-[172px] bg-[#fbc976] filter blur-[170px] absolute -right-[10px] -top-[50px]"></div>
          )}
          <div
            className="z-30 h-[435px] w-[20rem] border rounded-[24px] border-none m-[.5rem] flex flex-col justify-between items-start relative"
            style={{  backgroundColor: theme == "dark" ? "#1b1c1e" : "white",color: theme == "dark" ? "white" : "black" }}
          >
            <div
              className="p-[2rem] font-bold text-[1.7rem] text-left flex"
              style={{
                textAlign: "center",
                color: theme == "dark" ? "white" : "black",
              }}
            >
              Lifetime Support
            </div>
            <img
              alt="sol card img"
              loading="lazy"
              width="171"
              height="148"
              className="self-center animate-ImgAnime delay-1500"
              src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyellow.d937d179.png&w=384&q=75"
              style={{ color: "transparent" }}
            />
            <div className="pt-0 pr-[1.5rem] pb-[1.5rem] pl-[1.5rem] font-lighter text-[#8a8a8a] text-[16px] text-left">
              Should you face any issues, we are always at your service. We
              provide lifetime technical support &amp; upgrade options.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
