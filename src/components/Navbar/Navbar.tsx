"use client";
import React, { useState, Fragment, useContext } from "react";
import "../../app/globals.css";
import { MyContext} from "../../context/Store";
import { Dialog, Transition } from "@headlessui/react";

import { FiSun, FiMoon } from "react-icons/fi";


export const Navbar = () => {
  const context = useContext(MyContext);
  const { theme, toggleTheme } = context;
//   console.log(toggleTheme,theme)
  const [open, setOpen] = useState(false);

  return (
    <div className="z-50 fixed top-0 left-0 w-full">

      {/* Small Screen */}

      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition>

          <div className="fixed inset-0 z-40 flex">
            <Transition
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="fixed top-0 right-0 h-full w-full max-w-xs flex flex-col overflow-y-auto bg-black text-white shadow-xl z-50">
                <div className="space-y-6 border-t border-gray-200 px-4 py-6 pt-28">
                  <div
                    className="font-medium bolder active:text-transparent bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text"
                    onClick={() => setOpen(false)}
                  >
                    MakeMyWeb.
                  </div>
                  <div
                    className="font-medium font-bolder active:text-transparent bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </div>
                  <div
                    className="font-medium font-bolder active:text-transparent bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text"
                    onClick={() => setOpen(false)}
                  >
                    Company
                  </div>
                  <div
                    className="font-medium font-bolder active:text-transparent bg-gradient-to-br from-blue-500 to-blue-300 bg-clip-text"
                    onClick={() => setOpen(false)}
                  >
                    Blogs
                  </div>
                  <div
                    className="font-medium text-gray-900 "
                    style={{ color: "white" }}
                  >
                    <button className="" onClick={toggleTheme}>
                      {/* <MdDarktheme size={35} style={{ color: theme === 'dark' ? 'white' : '' }} /> */}
                      {theme === "light" ? (
                        <FiMoon className="" size={20} />
                      ) : "dark" ? (
                        <FiSun size={20} />
                      ) : (
                        ""
                      )}
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition>
          </div>
        </Dialog>
      </Transition>

      {/* fullScreen  */}

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="px-4 sm:px-6 lg:px-8 shadow-xl "
          style={{
            backgroundColor: theme === "dark" ? "#141f33" : "#ffffff",

            color: theme === "dark" ? "#F3EEEA" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              {/* Brand Logo */}
              <div className="ml-4 flex lg:ml-0">
                <div className="flex">
                  <div className="flex ">
                    <img
                      className="w-18 h-16 font-bold text-black  px-2 py-1 rounded"
                      src={
                        theme == "dark"
                          ? "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FnewLogo.9985891c.png&w=256&q=75"
                          : "https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav_logo.e5fb945a.png&w=256&q=75"
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6 md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                  <div
                    className="text-sm font-medium text-black "
                    style={{ color: theme === "dark" ? "white" : "" }}
                  >
                    MakeMyWeb.
                  </div>
                  <div
                    className="text-sm font-medium text-black "
                    style={{ color: theme === "dark" ? "white" : "" }}
                  >
                    Home
                  </div>
                  <div
                    className="text-sm font-medium text-black "
                    style={{ color: theme === "dark" ? "white" : "" }}
                  >
                    Company
                  </div>
                  <div
                    className="text-sm font-medium text-black "
                    style={{ color: theme === "dark" ? "white" : "" }}
                  >
                    Blogs
                  </div>

                  {/* {user ? <div className="flow-root">
                  <a className="text-sm font-medium text-black cursor-pointer" onClick={handleLogout} style={{ color: theme === 'dark' ? 'white' : '', }}>
                    Logout
                  </a>
                  </div>:""}  */}
                </div>

                {/* Change the theme */}
                <div className="hidden lg:flex lg:ml-6 md:flex md:ml-6">
                  <button className="" onClick={toggleTheme}>
                    {/* <MdDarktheme size={35} style={{ color: theme === 'dark' ? 'white' : '' }} /> */}
                    {theme === "light" ? (
                      <FiMoon className="" size={20} />
                    ) : "dark" ? (
                      <FiSun size={20} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>
              </div>

              {/* hamburger menu button */}
              <button
                type="button"
                className="rounded-md bg-white p-2 text-black-400 md:hidden lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: theme === "dark" ? "#141f33" : "#ffffff",
                  color: theme === "dark" ? "white" : "",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};
