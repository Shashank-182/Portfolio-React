import img from '../images/abt.png'
import './About.css'
import { FaHtml5, FaCss3Alt,FaJava,FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


function About() {

 
   return (
    <>
    <div className="container-fluid abt p-3 "  >
      <div className=" About abtme w-50" >
        <h3 className="text-start text-light play-regular" >ABOUT ME</h3>
        <p className="text-light " >I'm an ambitious, commercially focused With a strong foundation in both front-end and back-end development,
        I am driven by a commitment to building high-quality, user-centric applications., I'm seeking an entry-level role
        as a Fullstack Developer. The technologies I currently work with are …
        </p>
        <div className="skill-icons d-flex " >
          <div className="icons-item p-2"   ><FaHtml5 /></div>
          <div className="icons-item p-2"   ><FaCss3Alt /></div>
          <div className="icons-item p-2"   ><IoLogoJavascript /></div>
          <div className="icons-item p-2"   ><FaJava /></div>
          <div className="icons-item p-2"   ><FaReact /></div>

          
        </div>
      </div>
      <div className="About d-flex justify-content-center imgbx">
        <img src= {img} alt="Hero" className="abtimg"/>
      </div>
      
   </div>

   
   </>
  );
}

export default About;
