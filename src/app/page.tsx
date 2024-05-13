import { About } from "@/components/About/About";
import { Blogs } from "@/components/Blogs/Blogs";
import { ChooseLens } from "@/components/ChooseLens/ChooseLens";
import { Connect } from "@/components/Connect/Connect";
import { Figures } from "@/components/Figures/Figures";
import { MainSection } from "@/components/MainSection/MainSection";
import { NewClients } from "@/components/NewClients/NewClients";
import { OurVision } from "@/components/OurVision/OurVision";
import { Questionaire } from "@/components/Questionaire/Questionaire";


export default function Home() {
  return (
    <>
     <MainSection/>
     <About/>
     <ChooseLens/>
     <OurVision/>
     <Blogs/>
     <NewClients/>
     <Figures/>
     <Questionaire/>
     <Connect/>
    </>
  );
}
