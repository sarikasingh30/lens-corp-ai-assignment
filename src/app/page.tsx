import { About } from "@/components/About/About";
import { Blogs } from "@/components/Blogs/Blogs";
import { Connect } from "@/components/Connect/Connect";
import { Figures } from "@/components/Figures/Figures";
import { MainSection } from "@/components/MainSection/MainSection";
import { NewClients } from "@/components/NewClients/NewClients";
import { Questionaire } from "@/components/Questionaire/Questionaire";


export default function Home() {
  return (
    <>
     <MainSection/>
     <About/>
     <Blogs/>
     <NewClients/>
     <Figures/>
     <Questionaire/>
     <Connect/>
    </>
  );
}
