import "./ProjectCard.scss"
import pronounce from "../../assets/images/pronounce.PNG"
import demo from "../../assets/videos/demo.mp4"
import Modal from 'react-bootstrap/Modal';
import { useState } from "react"

export default function ProjectCard1() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="projectcard">
            <h2 className="projectcard__title">Pronounce</h2>
            <div className="projectcard__container">
                <img className="projectcard__image" src={pronounce} alt="Pronounce"></img>
                <div className="projectcard__details">
                    <p className="projectcard__info">React Project - A pronunciation assessment app to assist users in their language
                        learning journey. Available in four languages.</p>
                    <div className="projectcard__links">
                    <a href="https://github.com/ChathurikaAJ/chathurika-jayakody-pronounce" target="_blank" rel="noreferrer"><p className="projectcard__link">Github</p></a>
                        <p className="projectcard__link" onClick={handleShow} >Demo</p>
                    </div>
                </div>
            </div>
           
            <Modal show={show} onHide={handleClose} className="modal" >
                <video controls className="projectcard__video">
                    <source src={demo} type="video/mp4" />
                </video>
            </Modal>
        </div>
    )
}