import "./HomePage.scss"

export default function HomePage() {
    return (
        <div className="home">
            <div className="home__container home__container-left">
                <h1 className="home__title">Hello<span className="home__highlight">.</span></h1>
                <p className="home__text">My name is Chathurika Jayakody. I'm a Junior Full Stack Developer based in Toronto, Canada. 
                I recently started exploring the field of web development and am completely in <span className="home__highlight">love</span> with it.</p>
            </div>
            <div className="home__container home__container-right">
                <p className="home__subtitles">Projects</p>
                <p className="home__subtitles">About Me</p>
                <p className="home__subtitles">Skills</p>
                <p className="home__subtitles">Contact</p>

            </div>

            
        </div>
    )
}