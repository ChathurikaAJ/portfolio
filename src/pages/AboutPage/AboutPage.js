import "./AboutPage.scss"
import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom"

export default function AboutPage() {
    return (
        <div className="page">
            <div className="page__top">
                <div className="page__top-left"></div>
                <Link to="/"><p className="page__logo">C</p></Link>
                <div className="page__top-right"></div>
            </div>
            <div className="page__content">
                <div className="page__container page__container-left aboutpage-container">
                    <p className="page__subtitle aboutpage-title">About Me<span className="page__highlight">.</span></p>
                    <p className="page__text aboutpage-text">
                        As a Junior Web Developer, I am <span className="page__highlight">passionate</span> about crafting elegant and intuitive web applications. With a strong foundation 
                        in front-end development, I have honed my skills in HTML, CSS, and JavaScript to create dynamic and responsive user interfaces. 
                        I have experience working with a variety of web development tools and frameworks, including React and Node. Additionally, 
                        I am committed to staying up-to-date with the latest industry trends and best practices, and I am always eager to learn new 
                        skills and technologies. Whether working on a team or independently, I am dedicated to delivering high-quality, user-centric 
                        solutions that meet business goals and exceed user expectations.
                        </p>
                </div>
                <Nav />
            </div>
            <div className="page__bottom"></div>
        </div>
    )
}