"use client";
import { MyContext } from "../../context/Store";
import React, { useContext, useState } from "react";
import { Accordian } from "./Accordian";
export const Questionaire = () => {
  const context = useContext(MyContext);
  const { theme } = context;

  const data = [
    {
      title: "Do I need to sign a contract?",
      des: `We will first work with you to comprehend your requirements
    in detail. Thereafter, we would draft an agreement with
    proposed solutions.After assessing possible challenges and
    pitfalls and identifying ways to overcome them, we will
    jointly sign an agreement, not a binding contract.`,
    },
    {
      title: "How do we ensure quality of deliverables?",
      des: `   We are researchers, first. We thoroughly benchmark our
    proposed solutions against internal and public datasets and
    baselines after each development sprint. After final
    delivery, we will continuously enhance our delivery based on
    your feedbacks.`,
    },
    {
      title: "How do I begin collaboration?",
      des: `Please contact us solutions@lenscorp.ai. 
    We usually respond within 24 Hrs.`,
    },
  ];

  const data1 = [
    {
      title: "What services do we offer?",
      des: `We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.`,
    },
    {
      title: "How do you ensure user privacy?",
      des: `We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.`,
    },
    {
      title: "How can I pay for the services?",
      des: `We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.`,
    },
  ];
  

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
      <p
        className="w-80 text-center text-4xl font-medium my-4"
        style={{ color: theme == "dark" ? "white" : "black" }}
      >
        Frequently Asked Questions
      </p>
      <div>
        <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center">
          {/* Accordian */}
          <div>
            {data.map((el, index) => {
              return (
                <Accordian
                  key={index}
                  title={el.title}
                  des={el.des}
                />
              );
            })}
          </div>
          <div>
          {data1.map((el, index) => {
              return (
                <Accordian
                  key={index}
                  title={el.title}
                  des={el.des}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
