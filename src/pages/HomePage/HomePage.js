import "./HomePage.scss"
import Nav from "../../components/Nav/Nav"


export default function HomePage() {
    return (
        <div className="page">
            <div className="page__top"></div>
            <div className="page__content">
                <div className="page__container page__container-left">
                    <h1 className="page__title">Hello<span className="page__highlight">.</span></h1>
                    <p className="page__text">My name is Chathurika Jayakody. I'm a Junior Full Stack Developer based in Toronto, Canada.
                        I recently started exploring the field of web development and am completely in <span className="page__highlight">love</span> with it.</p>
                </div>
                <Nav />

            </div>
            <div className="page__bottom"></div>
        </div>
    )
}