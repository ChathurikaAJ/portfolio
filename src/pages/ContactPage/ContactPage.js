import "./ContactPage.scss"
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import gmail from "../../assets/icons/gmail.png"
import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom"

export default function ContactPage() {
    return (
        <div className="page">
            <div className="page__top">
                <div className="page__top-left"></div>
                <Link to="/"><p className="page__logo">C</p></Link>
                <div className="page__top-right"></div>
            </div>
            <div className="page__content">
                <div className="page__container page__container-left">
                    <p className="page__subtitle">Get In Touch<span className="page__highlight">.</span></p>
                    <div className="contact__container">
                        <a href="https://github.com/ChathurikaAJ" target="_blank" rel="noreferrer"><img className="contact__icons" src={github} alt="GitHub"></img></a>
                        <a href="https://www.linkedin.com/in/chathurika-jayakody" target="_blank" rel="noreferrer"><img className="contact__icons contact__icons-size" src={linkedin} alt="LinkedIn"></img></a>
                        <a href="mailto:chathurika.jayakody@gmail.com"><img className="contact__icons contact__icons-size" src={gmail} alt="Gmail"></img></a>
                    </div>
                </div>
                <Nav />
            </div>
            <div className="page__bottom"></div>
        </div>
    )
}