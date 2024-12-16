
import Image from "next/image";
import styles from "./page.module.css";
import { About, Brand, Casestudy, Certificate, Contact, Ecom, Footer, Hero, Nav, Portfolio, Projects, Seo, Services, Smm } from "@/components/Components";


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
      <Seo/>
      <Smm/>
      <Ecom/>
      <Projects/>
      <Certificate/>
      <Contact/>
    </main>
    <Footer/>
    
    </>
  );
}
