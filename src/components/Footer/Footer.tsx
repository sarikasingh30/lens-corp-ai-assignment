"use client";
import { MyContext } from "../../context/Store";
import React, { useContext } from "react";

export const Footer = () => {
  const context = useContext(MyContext);
  const { theme } = context;
  return (
    <footer>
      <div
        className="flex items-center justify-center py-16"
        style={{ backgroundColor: theme == "dark" ? "black" : "white" }}
      >
        <div className="w-3/4 flex flex-col items-center lg:flex-row md:flex-row lg:items-start md:items-start justify-between">
          <div className="flex flex-col items-center justify-center mt-3">
            <img
              src={
                theme == "dark"
                  ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=256&q=75"
                  : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
              }
              alt="image"
              className="w-18 h-16 font-bold text-black  px-2 py-1 rounded"
            />
            <span
              style={{ color: theme == "dark" ? "white" : "black" }}
            >{`Tomorrow's Vision, Today!`}</span>
            <div className="flex gap-15 mt-4">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewFooter_icon__2u1AY iconify iconify--ic"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  style={{ color: theme == "dark" ? "white" : "black" }}
                >
                  <path
                    fill="currentColor"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewFooter_icon__2u1AY iconify iconify--mdi"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  style={{ color: theme == "dark" ? "white" : "black" }}
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewFooter_icon__2u1AY iconify iconify--mdi"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  style={{ color: theme == "dark" ? "white" : "black" }}
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewFooter_icon__2u1AY iconify iconify--ic"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  style={{ color: theme == "dark" ? "white" : "black" }}
                >
                  <path
                    fill="currentColor"
                    d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"
                  ></path>
                </svg>
              </a>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="NewFooter_icon__2u1AY iconify iconify--ri"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  style={{ color: theme == "dark" ? "white" : "black" }}
                >
                  <path
                    fill="currentColor"
                    d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div
            className="flex flex-col items-center justify-center mt-3"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <span className="text-lg font-semibold tracking-widest mb-8">
              SITEMAP
            </span>
            <a target="blank" href="https://makemyweb.ai/">
              MakeMyWeb.
            </a>
            <a href="#services">Services</a>
            <span>Products</span>
            <a href="#blogs">Blogs</a>
            <a href="/about">Life at LENS</a>
          </div>
          <div
            className="flex flex-col items-center justify-center mt-3"
            style={{ color: theme == "dark" ? "white" : "black" }}
          >
            <span className="text-lg font-semibold tracking-widest mb-8">
              CONNECT
            </span>
            <a target="blank" href="https://makemyweb.ai/">
              +1-517-9300-792
            </a>
            <a href="#services">+91-9990-736-796</a>

            <a href="#blogs">solutions@lenscorp.ai</a>
          </div>
        </div>
      </div>
      <div
        className="text-base tracking-wide w-full flex items-center justify-center"
        style={{ backgroundColor: theme == "dark" ? "#1b1c1e " : "#272e5c" }}
      >
        <div className="w-3/4 flex justify-between items-center py-10">
          <span style={{ color: "rgb(153, 153, 153)" }}>
            2023 <span style={{ color: "white" }}>LENS, Inc. </span>All rights
            reserved.
          </span>
          <div className="flex justify-center items-center gap-10 text-white">
            <a href="" target="_blank">
              Code of conduct{" "}
            </a>
            <a href="" target="_blank">
              Sustainability Goals
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
