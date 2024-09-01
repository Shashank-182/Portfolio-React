import React from "react";
import "./Home.css";
import img from '../images/WhatsApp Img.jpg';
import pdf from '../Resume/SHASHANK-HANUMANDLA.pdf';
import { FaInstagram,FaWhatsapp,FaGithub,FaLinkedin } from 'react-icons/fa';

function Home(){
    return(
        <div className="container-fluid cont p-3 " >

           
        <div className="context  ">
            <h2 className="text-start text-light">Hii, I'm <span className="text-danger">Shashank</span></h2>
          <p className="text-light font"> Full-Stack Java Developer with a passion for crafting robust and scalable web applications.</p>
          <p className="text-light  ">This portfolio is a showcase of my skills and experience in both front-end and back-end development,
             highlighting my ability to deliver end-to-end solutions using Java and modern web technologies</p>
             <div className='icons' >
                <a href="https://www.instagram.com/Shashannkkkk_"><FaInstagram className='sl-icons mx-1 '/>
                </a>
             <a href="https://wa.me/+918790108182"><FaWhatsapp className='sl-icons mx-1 ' href='#' /></a>
             <a href="https://github.com/Shashank-182"><FaGithub className='sl-icons mx-1 '  /></a>
             <a href="https://www.linkedin.com/in/ShashankHanumandla/"><FaLinkedin className='sl-icons mx-1 ' href='#' /></a>
             <a href={pdf}><button type="button" className="btn btn-danger  ">DOWNLOAD CV</button></a>
             </div>
             



        </div>
        <div className="context   image-container">
            <img src= {img} alt="Hero" className="img"/>
        </div>
        

      </div>
    );
}
export default Home;