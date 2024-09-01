import React from "react";
import "./Services.css";
import Card from 'react-bootstrap/Card';
import { FaHtml5, FaCss3Alt, FaReact,FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSpringboot } from "react-icons/si";

function Services() {
    return (
        <>
            <div className="container-fluid cards">
                <h3 className="text-center text-light play-regular " >PROJECTS</h3>
                <div className="row">
                    <div className="col">
                    <Card className="card">
                        <Card.Body className="bg-img1">
                            <div className="shutter py-5 text-center">
                            <h3 className="bg-transparent text-dark">Re-moto</h3>
                                <div className="button-container">
                                    <a href='https://github.com/Shashank-182/Re-moto'><button type="button" className="btn btn-danger see-code">See code</button></a>
                                    <a href='https://re-moto.netlify.app/'><button type="button" className="btn btn-danger see-code">See OUTPUT</button></a>
                                </div>
                                <div className="skl-icns bg-transparent d-flex justify-content-center">
                                    <div className="icons-item p-2"><FaHtml5 className="icn" size={38} style={{ color: 'black' }} /></div>
                                    <div className="icons-item p-2"><FaCss3Alt className="icn" size={38} style={{ color: 'black' }} /></div>
                                    <div className="icons-item p-2"><IoLogoJavascript className="icn" size={38} style={{ color: 'black' }} /></div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>

                    </div>
                    <div className="col">
                        <Card className="card">
                            <Card.Body className="bg-img2">
                                <div className="shutter py-5">
                                    <h3 className="bg-transparent text-dark text-center">Calculator</h3>
                                    <div className="button-container">
                                    <a href='https://github.com/Shashank-182/Calculator'><button type="button" className="btn btn-danger see-code">See code</button></a>
                                    <a href='https://cal091.netlify.app/'><button type="button" className="btn btn-danger see-code">See OUTPUT</button></a>
                                    </div>
                                    <div className="skl-icns bg-transparent d-flex justify-content-center">
                                        <div className="icons-item p-2"><FaHtml5 className="icn" size={38} style={{ color: 'black' }}  /></div>
                                        <div className="icons-item p-2"><FaCss3Alt className="icn" size={38} style={{ color: 'black' }}  /></div>
                                        <div className="icons-item p-2"><IoLogoJavascript className="icn" size={38} style={{ color: 'black' }}  /></div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card className="card">
                            <Card.Body className="bg-img3">
                                <div className="shutter py-5">
                                    <h3 className="bg-transparent text-dark text-center">ATM</h3>
                                    <div className="button-container">
                                    <a href='https://github.com/Shashank-182/ATM'><button type="button" className="btn btn-danger see-code">See code</button></a>
                                    </div>
                                    <div className="skl-icns bg-transparent d-flex justify-content-center">
                                        <div className="icons-item p-2"><FaJava className="icn" size={38} style={{ color: 'black' }}  /></div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card className="card">
                            <Card.Body className="bg-img4">
                                <div className="shutter py-5">
                                    <h3 className="bg-transparent text-dark text-center">Parking Management</h3>
                                    <div className="button-container">
                                    <a href='https://github.com/Shashank-182/Parking-management'><button type="button" className="btn btn-danger see-code">See code</button></a>
                                    <a href='https://react-parkingmanagement091.netlify.app/'><button type="button" className="btn btn-danger see-code">See OUTPUT</button></a>
                                    </div>
                                    <div className="skl-icns bg-transparent d-flex justify-content-center">
                                        <div className="icons-item p-2"><FaHtml5 className="icn" size={38} style={{ color: 'black' }}  /></div>
                                        <div className="icons-item p-2"><FaCss3Alt className="icn" size={38} style={{ color: 'black' }}  /></div>
                                        <div className="icons-item p-2"><SiSpringboot className="icn" size={38} style={{ color: 'black' }}  /></div>
                                        <div className="icons-item p-2"><FaReact className="icn" size={38} style={{ color: 'black' }}  /></div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Card className="card">
                            <Card.Body className="bg-img5">
                                <div className="shutter py-5">
                                    <h3 className="bg-transparent text-dark text-center">Portfolio</h3>
                                    <div className="button-container">
                                    <a href='https://github.com/Shashank-182/Portfolio-React'><button type="button" className="btn btn-danger see-code">See code</button></a>
                                    <a href='https://shashank-portfoliocv.netlify.app/'><button type="button" className="btn btn-danger see-code">See OUTPUT</button></a>
                                    </div>
                                    <div className="skl-icns bg-transparent d-flex justify-content-center">
                                        <div className="icons-item p-2"><FaHtml5 className="icn" size={38} style={{ color: 'black' }}  /></div>
                                        <div className="icons-item p-2"><FaCss3Alt className="icn" size={38} style={{ color: 'black' }}  /></div>
                                        <div className="icons-item p-2"><FaReact className="icn" size={38} style={{ color: 'black' }}  /></div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
