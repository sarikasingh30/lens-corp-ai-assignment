import { About } from "@/components/About/About";
import { Connect } from "@/components/Connect/Connect";
import { Figures } from "@/components/Figures/Figures";
import { MainSection } from "@/components/MainSection/MainSection";
import { NewClients } from "@/components/NewClients/NewClients";
import { Questionaire } from "@/components/Questionaire/Questionaire";


export default function Home() {
  return (
    <>
     {/* <h1>Home Page</h1> */}
     <MainSection/>
     <About/>
     <NewClients/>
     <Figures/>
     <Questionaire/>
     <Connect/>
    </>
  );
}
