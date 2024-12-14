
import Image from "next/image";
import styles from "./page.module.css";
import { About, Brand, Casestudy, Certificate, Contact, Footer, Hero, Nav, Portfolio, Projects, Services } from "@/components/Components";


export default function Home() {
  return (
    <>
  
    <header>
      <Nav/>
    </header>
    <main>
      <Hero/>
      <Brand/>
      <About/>
      <Services/>
      <Portfolio/>
      <Casestudy/>
      <Projects/>
      <Certificate/>
      <Contact/>
    </main>
    <Footer/>
    
    </>
  );
}
