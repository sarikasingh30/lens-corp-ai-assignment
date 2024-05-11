import { About } from "@/components/About/About";
import { Connect } from "@/components/Connect/Connect";
import { MainSection } from "@/components/MainSection/MainSection";


export default function Home() {
  return (
    <>
     {/* <h1>Home Page</h1> */}
     <MainSection/>
     <About/>
     <Connect/>
    </>
  );
}
