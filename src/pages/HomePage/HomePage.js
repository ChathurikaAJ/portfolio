import "./HomePage.scss"
import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom"


export default function HomePage() {
    return (
        <div className="page">
            <div className="page__top">
                <div className="page__top-left"></div>
                <Link to="/"><p className="page__logo">C</p></Link>
                <div className="page__top-right"></div>
            </div>
            
            <div className="page__content">
                <div className="page__container page__container-left">
                    <h1 className="page__title">Hello<span className="page__highlight">.</span></h1>
                    <p className="page__text">My name is Chathurika Jayakody. I'm a Junior Front-End Developer based in Toronto, Canada.
                        I recently started exploring the field of web development and <span className="page__highlight">love</span> creating simple and beautiful Web Applications.</p>
                </div>
                <Nav />

            </div>
            <div className="page__bottom"></div>
        </div>
    )
}