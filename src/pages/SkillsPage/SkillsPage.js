import "./SkillsPage.scss"
import Nav from "../../components/Nav/Nav"
import SkillCard from "../../components/SkillCard/SkillCard"

export default function SkillsPage() {

    const skillslist = ["HTML","JavaScript","CSS","Sass","ReactJS","NodeJS","ExpressJS","MySQL"]

    return (
        <div className="home">
            <div className="home__top"></div>
            <div className="home__content">
                <div className="home__container home__container-left">
                    <p className="contact__title">Techincal Skills<span className="home__highlight">.</span></p>
                    <div className="skills__container">
                        {skillslist.map((skill)=>(
                        <SkillCard skill={skill}/>
                    ))}</div>
                </div>
                <Nav/>
            </div>
            <div className="home__bottom"></div>
        </div>
    )
}