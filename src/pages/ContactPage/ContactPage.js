import "./ContactPage.scss"
import github from "../../assets/icons/github.png"
import linkedin from "../../assets/icons/linkedin.png"
import gmail from "../../assets/icons/gmail.png"
import Nav from "../../components/Nav/Nav"

export default function ContactPage() {
    return (
        <div className="home">
            <div className="home__top"></div>
            <div className="home__content">
                <div className="home__container home__container-left">
                    <p className="contact__title">Get In Touch<span className="home__highlight">.</span></p>
                    <div className="contact__container">
                        <img className="contact__icons" src={github} alt="GitHub"></img>
                        <img className="contact__icons contact__icons-size" src={linkedin} alt="LinkedIn"></img>
                        <img className="contact__icons contact__icons-size" src={gmail} alt="Gmail"></img>
                    </div>
                </div>
                <Nav />
            </div>
            <div className="home__bottom"></div>
        </div>
    )
}