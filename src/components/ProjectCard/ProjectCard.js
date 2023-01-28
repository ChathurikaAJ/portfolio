import "./ProjectCard.scss"
import pronounce from "../../assets/images/pronounce.PNG"
import next from "../../assets/icons/next.png"
import demo from "../../assets/videos/demo.mp4"
import Modal from 'react-modal'
import { useState } from "react"

export default function ProjectCard() {
    const [modalIsOpen, setIsOpen] = useState(false)


    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    Modal.setAppElement(".App");

    return (
        <div className="projectcard">
            <h2 className="projectcard__title">Pronounce</h2>
            <div className="projectcard__container">
                <img className="projectcard__image" src={pronounce} alt="Pronounce"></img>
                <div className="projectcard__details">
                    <p className="projectcard__info">A pronunciation assessment app to assist users in thier language
                        learning journey. Available in four languages.</p>
                    <div className="projectcard__links">
                        <p className="projectcard__link">Github</p>
                        <p className="projectcard__link" onClick={openModal}>Demo</p>
                    </div>
                </div>
                <div className="projectcard__next">
                    {/* <img className="projectcard__next-image" src={next} alt="next"></img> */}
                </div>

            </div>
           

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
                overlayClassName="modal-overlay"
                shouldCloseOnOverlayClick={true}
                ariaHideApp={false}
            >
                 <video controls className="projectcard__video">
                    <source src={demo} type="video/mp4" />
                </video>
            </Modal>
        </div>
    )
}