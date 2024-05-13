"use client";
import { MyContext } from "../../context/Store";
import { useContext } from "react";
export const MeetTrueAi = () => {
  const context = useContext(MyContext);
  const { theme } = context;
  return (
    <div
      className="flex justify-center items-center w-full pb-6"
    >
      <section className="flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between items-center mt-[6rem] relative w-full z-10 lg:clip-path-custom" 
    style={{backgroundColor:theme=="dark"?"#1b1c1e":"#272e5c"}}>
        <div className="hidden lg:block lg:z-20 lg:w-1/3 lg:mt-[4rem]">
          <img
            alt="vector"
            
            className="lg:ml-[5rem] lg:w-[333px] lg:h-[329px]"
            src="https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FvectorAi.8ec84e23.png&w=750&q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 md:pl-[6rem] flex flex-col items-center justify-center mt-[4rem] w-[50%]">
          <div className="flex justify-center items-center text-[#fff] text-[64px] font-bold gap-[15px] mb-[20px]">
            Meet
            <div className="relative">
              <div className="flex text-transparent bg-clip-text animate-meetAI" style={{backgroundImage: "linear-gradient(to right, #9747ff 0%, #2f80ed 50%, #ee216b 100%)"
}}>Tru-AI</div>
              <img
                alt="underline"
               
                className="absolute -bottom-[10px]"
                src="https://lenscorp.ai/_next/static/media/underline.27e9f7f7.svg"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div className="text-[#fff] text-[26px] font-bold leading-normal mb-[15px]">Design. Create. Deploy.</div>
          <div className="flex items-center justify-center gap-[10px]">
            <div style={{borderBottom: "2px solid #bdbdbd", width:"2.5rem", borderRadius: "10px"}}></div>
            <div className="text-[20px] inline mb-[15px] font-bold text-transparent bg-clip-text animate-meetAI" style={{backgroundImage: "linear-gradient(to right, #9747ff 0%, #2f80ed 50%, #ee216b 100%)"
}}>the Future of AI | Power to EDIT</div>
          </div>
          <div className="text-[#fff] text-center text-[14px] mb-[15px]">
            Based On your website &amp; traffic trends, Tru-AI optimises your
            website
          </div>
          <a target="_blank" href="https://makemyweb.ai/">
            <button className= "text-lg rounded-lg py-[10px] px-[20px] mb-4" style={{color:"white", border:"2px solid white"}}>
              <div>Learn More</div>
              
            </button>
          </a>
        </div>
        <div className="hidden md:w-1/3 md:flex md:justify-end lg:w-1/3 lg:flex lg:justify-end">
          <video autoPlay
            loop
            muted className="rounded-l-full w-[90%]">
            <source
              src="https://res.cloudinary.com/detwrhe0k/video/upload/v1691730954/lenscorp-website/product-intro_1_dmajx1_qaemeu.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </div>
  );
};
