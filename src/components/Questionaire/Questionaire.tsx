"use client";
import { MyContext } from "../../context/Store";
import React, { useContext } from "react";
export const Questionaire = () => {
  const context = useContext(MyContext);
  const { theme } = context;
  return (
    <div className="grid place-items-center py-16">
      <div className="">
        <h2
          className="text-center text-xl font-bold m-0"
          style={{ color: theme == "dark" ? "white" : "black" }}
        >
          GET TO KNOW US
        </h2>
        <div
          className="h-1 w-20 m-auto rounded"
          style={{ backgroundImage: "linear-gradient(#3c8ce7, #00eaff)" }}
        ></div>
      </div>
      <p className="w-80 text-center text-4xl font-medium my-4"  style={{ color: theme=="dark"?"white":"black" }} >
        Frequently Asked Questions
      </p>
      <div>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center">
            {/* Accordian */}
            <div>
                <div id="accordion-open" data-accordion="open">
                    <h2 id="accordion-open-heading-1">
                    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                        <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What is Flowbite?</span>
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                        </svg>
                    </button>
                    </h2>
                
                    <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
                        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                            <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                        </div>
                    </div>
            
                </div>
            </div>
          <div></div>

          {/* <div>
            <div className="w-96">
              <div className="">
                <h2>
                  <button
                    className=""
                    type="button"
                  >
                    <div className="">
                      Do I need to sign a contract?
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="img"
                      className=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="currentColor"
                        d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  className="overflow-hidden display-none opacity-0 h-0"
                >
                  <div
                    role="region"
                    id="accordion-panel-:r0:"
                    className=""
                  >
                    We will first work with you to comprehend your requirements
                    in detail. Thereafter, we would draft an agreement with
                    proposed solutions.After assessing possible challenges and
                    pitfalls and identifying ways to overcome them, we will
                    jointly sign an agreement, not a binding contract.
                  </div>
                </div>
              </div>
              <div className="">
                <h2>
                  <button
                    className=""
                    type="button"
                    id="accordion-button-:r1:"
                    
                  >
                    <div className="">
                      How do we ensure quality of deliverables?
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                     
                      aria-hidden="true"
                      role="img"
                      className=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="currentColor"
                        d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  className=""
                >
                  <div
                    role="region"
                    id="accordion-panel-:r1:"
                    className=""
                  >
                    We are researchers, first. We thoroughly benchmark our
                    proposed solutions against internal and public datasets and
                    baselines after each development sprint. After final
                    delivery, we will continuously enhance our delivery based on
                    your feedbacks.
                  </div>
                </div>
              </div>
              <div className="">
                <h2>
                  <button
                    className=""
                    type="button"
                    
                  >
                    <div className="">
                      How do I begin collaboration?
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                     
                      aria-hidden="true"
                      role="img"
                      className=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="currentColor"
                        d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  className=""
                  
                >
                  <div
                    role="region"
                    id="accordion-panel-:r2:"
                    className=""
                  >
                    Please contact us at{" "}
                    <span style={{color: "rgb(244, 103, 93)"}}>
                      solutions@lenscorp.ai.
                    </span>{" "}
                    We usually respond within 24 Hrs.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <div className="">
                <h2>
                  <button
                    className=""
                    type="button"
                    id="accordion-button-:r3:"
                    
                  >
                    <div className="">
                      What sevices do we offer?
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                     
                      aria-hidden="true"
                      role="img"
                      className="Accordian1_icon__wzitS iconify iconify--octicon"
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="currentColor"
                        d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  className=""
                  
                >
                  <div
                    className=""
                  >
                    We build accurate and efficient AI systems for your
                    business. Our ethically-trained solutions are paving a new
                    path forward to create explainable, transparent, and easily
                    customizable. In addition, we grant ownership of all
                    copyrights to the system, software, and model to you.
                  </div>
                </div>
              </div>
              <div className="">
                <h2>
                  <button
                    className=""
                    type="button"
                    id="accordion-button-:r4:"
                    aria-expanded="true"
                    aria-controls="accordion-panel-:r4:"
                    data-index="1"
                  >
                    <div className="">
                      How do you ensure user privacy?
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                     
                      aria-hidden="true"
                      role="img"
                      className=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="currentColor"
                        d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  className=""
                >
                  <div
                    role="region"
                    className=""
                  >
                    We do not share, sell, or rent your competitive information
                    (including any and all data) to any third party.Since we
                    grant exclusive Intellectual Property Rights back to you, we
                    have no intention of violating any user privacy.
                  </div>
                </div>
              </div>
              <div className="">
                <h2>
                  <button
                    className=""
                    type="button"
                    
                  >
                    <div className="Accordian1_box__A8kuY css-1eziwv">
                      How can I pay for the services?
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                     
                      aria-hidden="true"
                      role="img"
                      className=""
                      width="1em"
                      height="1em"
                      viewBox="0 0 12 12"
                    >
                      <path
                        fill="currentColor"
                        d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l2.7 2.7l2.7-2.7c.3-.3.8-.3 1.1 0s.3.8 0 1.1l-3.2 3.2q-.3.3-.6.3"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  className=""
                >
                  <div
                    role="region"
                    className=""
                  >
                    We split the entire project into multiple milestones.We work
                    on an advanced milestone payment basis with an option to
                    drop off remaining milestones anytime.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
