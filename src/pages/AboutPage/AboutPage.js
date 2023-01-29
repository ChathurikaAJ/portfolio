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
                <div className="page__container page__container-left">
                    <p className="page__subtitle">About Me<span className="page__highlight">.</span></p>
                    <p className="page__text aboutpage-text">Hi! My name is Chathurika. I'm a Full-Stack Developer based in Toronto, 
                    Canada.
                        <br />
                        <br />
                        I recently embarked on the journey as a web developer. Prior to this, I worked as an accountant for over 5 years.
                        I completed the Web Development bootcamp at <span className="page__highlight">BrainStation</span> - Toronto 
                        in November 2022, through which I was able to learn the skills to build beauitiful and interactive websites and apps. </p>
                </div>
                <Nav />
            </div>
            <div className="page__bottom"></div>
        </div>
    )
}