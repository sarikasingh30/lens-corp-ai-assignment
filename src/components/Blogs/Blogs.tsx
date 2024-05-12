"use client";
import { MyContext } from "../../context/Store";
import React, { useContext } from "react";
export const Blogs = () => {
  const context = useContext(MyContext);
  const { theme } = context;
  return (
    <div className="grid place-items-center overflow-hidden mt-4" id="blogs" style={{backgroundColor:theme=="dark"?"black":"white"}}>
      <div className="flex flex-col items-center gap-1.5 justify-center">
      <h2
          className="text-center text-xl font-bold m-0"
          style={{ color: theme == "dark" ? "white" : "black" }}
        >
         OUR BLOGS
        </h2>
        <div
          className="h-1 w-20 m-auto rounded"
          style={{ backgroundImage: "linear-gradient(#3c8ce7, #00eaff)" }}
        ></div>
      </div>
      <p className="w-80 text-center text-4xl font-medium my-4"
        style={{ color: theme == "dark" ? "white" : "black" }}>Inhouse Mindscape</p>
      <div className="w-5/6 flex flex-col lg:grid lg:w-3/4 lg:grid-cols-2 lg:gap-5 md:grid md:w-3/4 md:grid-cols-2 md:gap-5">
        <div className="flex relative">
          <div className=""></div>
          <div className="">
            <div className="">
              <div>
                <span
                  className=""
                  style={{ color: "rgb(248, 99, 96)" }}
                >
                  New!
                </span>
                <h2 className="">Generative AI</h2>
              </div>
              <div
                className=""
                style={{ backgroundColor: "rgb(255, 246, 205)" }}
              >
                <p className="">{`In today's data-driven marketing world, keeping up with content creation demands can be a challenge. Read our latest blog to explore the power of Generative AI and its potential to reshape the marketing landscape....`}</p>
              </div>
            </div>
            <div className="">
              <a href="/blogs/Generative AI">
                <button className="">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className=""></div>
          <div className="">
            <div className="">
              <div>
                <span
                  className=""
                  style={{ color: "rgb(101, 101, 101)" }}
                >
                  April 25, 2024
                </span>
                <h2 className="">
                  The Evolution of AI in Games
                </h2>
              </div>
              <div
                className=""
                style={{ backgroundColor: "rgb(226, 242, 255)" }}
              >
                <p className="">
                  The integration of artificial intelligence (AI) within the
                  gaming industry has been a remarkable journey, marked by
                  continual innovation. Read our latest blog to dive deep into
                  the fascinating history of AI in games and discover the
                  evolution that continues to shape the future of play!...
                </p>
              </div>
            </div>
            <div className="">
              <a href="/blogs/The Evolution of AI in Games">
                <button className="">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <div className=""></div>
          <div className="">
            <div className="">
              <div>
                <span
                  className=""
                  style={{color: "rgb(101, 101, 101)"}}
                >
                  April 18, 2024
                </span>
                <h2 className="">
                  Unmasking the Misconceptions of Artificial Intelligence in the
                  Workplace
                </h2>
              </div>
              <div
                className=""
                style={{backgroundColor: "rgb(255, 236, 235)"}}
              >
                <p className="">
                  The rise of Artificial Intelligence (AI) has sparked both
                  excitement and apprehension. Many professionals are unsure how
                  AI impacts their work....
                </p>
              </div>
            </div>
            <div className="">
              <a href="/blogs/Unmasking the Misconceptions of Artificial Intelligence in the Workplace">
                <button className="">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    className=""
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m13 8l4 4l-4 4M7 8l4 4l-4 4"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="./blogs">
        <button className="">
          <div>Explore More</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            className="NewBlog_icon__0f4Gu iconify iconify--octicon"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  );
};
