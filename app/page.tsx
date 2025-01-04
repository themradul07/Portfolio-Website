import Image from "next/image";
import Hero from "./components/hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "@/data";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-black-100 text-white relative flex flex-col justify-center items-center overflow-clip mx-auto sm:px-10 px-5 ">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={
          navItems}
        /> 
        <Hero/>
        <Grid/>
        <RecentProjects/>
        {/* <Clients/> */}
        {/* <Experience/> */}
        <Approach/>
        <Footer/>


      </div>
    
    </main>
  );
}
