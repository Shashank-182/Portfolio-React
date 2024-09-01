import React from "react";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


import './Contact.css'
function Contact(){

    const phoneNumber = "+918790108182";

    return(
        <div className="container-fluid cnt play-regular" id="Contact">
            <h3 className="text-center text-light hdr">CONTACT</h3>
            <div className="cntskill-icons bg-transparent ">
                <a className="icons-item " href={`tel:${phoneNumber}`}><div className="icons-item p-2"><FaPhone className="icn" size={38} /></div> </a>
                <a className="icons-item " href="https://www.linkedin.com/in/ShashankHanumandla/"><div className="icons-item p-2"><FaLinkedin className="icn" size={38} /></div></a>
                <a className="icons-item" href="mailto:Shashankhanumandla@gmail.com"><div className=" icons-item p-2"><BiLogoGmail className="icn" size={38} /></div></a>
                <a className="icons-item" href="https://github.com/Shashank-182"><div className="icons-item p-2"><FaGithub className="icn" size={38} /></div></a>
            </div>

        </div>
    );
}
export default Contact;